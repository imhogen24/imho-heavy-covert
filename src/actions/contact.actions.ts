"use server";

/**
 * @fileoverview Contact form action for IMHO Engineering
 *
 * This module handles the submission of contact form data, including:
 * - Processing form data from the contact form
 * - Sending notification emails to admin
 * - Sending confirmation emails to users
 * - File attachment handling
 * - Error handling and logging
 *
 * The action follows the server action pattern for Next.js 13+ and uses
 * the Resend email service for reliable email delivery.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import ContactConfirmationEmail from "@/components/emails/contact/confirmation";
import { ContactFormEmail } from "@/components/emails/contact/contact-template";
import { type ActionResponse } from "@/types/api";
import { sendNotificationWithConfirmation, EMAIL_CONFIG } from "./email.actions";

/**
 * Contact form data structure
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  files: string[];
}

/**
 * Processes contact form submission and sends notification and confirmation emails
 *
 * @param formData - FormData object containing form fields and files
 * @returns Promise resolving to ActionResponse with success/error status
 *
 * @example
 * ```tsx
 * // In a form component
 * <form action={contactFormAction}>
 *   <input name="name" />
 *   <input name="email" />
 *   <textarea name="message" />
 *   <input name="files" type="hidden" />
 *   <button type="submit">Send</button>
 * </form>
 * ```
 */
export async function contactFormAction(formData: FormData): Promise<ActionResponse> {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const filesString = formData.get("files") as string;

    // Parse file attachments from JSON string
    const files = filesString ? JSON.parse(filesString) : [];

    const contactData: ContactFormData = {
      name,
      email,
      message,
      files
    };

    // Configure admin notification email
    const adminEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.CONTACT,
      to: [EMAIL_CONFIG.ADMIN_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail(contactData) as React.ReactElement
    };

    // Configure user confirmation email
    const userEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.CONFIRMATION,
      to: [email],
      subject: `Thank you for contacting us, ${name}`,
      react: ContactConfirmationEmail({ name }) as React.ReactElement
    };

    // Send both emails
    const result = await sendNotificationWithConfirmation(adminEmailConfig, userEmailConfig);

    if (!result.success) {
      return result;
    }

    return {
      success: true,
      message: "Contact form submitted successfully"
    };

  } catch (error: any) {
    console.error("Contact Form Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to process contact form submission"
    };
  }
}