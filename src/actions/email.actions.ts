/**
 * @fileoverview Shared email utilities for IMHO Engineering actions
 *
 * This module provides reusable email functionality for sending notifications
 * and confirmations across all service forms. It encapsulates the Resend
 * configuration and common email patterns to ensure consistency and maintainability.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import { Resend } from "resend";
import { type ActionResponse } from "@/types/api";

// Initialize Resend client with environment configuration
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Configuration for sending emails
 */
interface EmailConfig {
  from: string;
  to: string[];
  subject: string;
  react: React.ReactElement;
}

/**
 * Sends an email using the configured Resend client
 *
 * @param config - Email configuration object
 * @returns Promise resolving to action response with success/error status
 */
export async function sendEmail(config: EmailConfig): Promise<ActionResponse> {
  try {
    const { data, error } = await resend.emails.send(config);

    if (error) {
      console.error("Resend Email Error:", error);
      return {
        success: false,
        error: "Failed to send email",
        message: "Email delivery failed"
      };
    }

    return {
      success: true,
      data,
      message: "Email sent successfully"
    };
  } catch (error: any) {
    console.error("Email Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Email service error"
    };
  }
}

/**
 * Sends a notification email to admin and a confirmation email to the user
 *
 * @param adminConfig - Configuration for admin notification email
 * @param userConfig - Configuration for user confirmation email
 * @returns Promise resolving to action response with success/error status
 */
export async function sendNotificationWithConfirmation(
  adminConfig: EmailConfig,
  userConfig: EmailConfig
): Promise<ActionResponse> {
  try {
    // Send notification to admin
    const adminResult = await sendEmail(adminConfig);

    if (!adminResult.success) {
      return adminResult;
    }

    // Send confirmation to user (don't fail if this fails)
    const userResult = await sendEmail(userConfig);

    if (!userResult.success) {
      console.error("Confirmation Email Error:", userResult.error);
      // Continue - we don't fail the entire operation if just confirmation fails
    }

    return {
      success: true,
      message: "Notification sent successfully"
    };
  } catch (error: any) {
    console.error("Notification Email Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to send notification emails"
    };
  }
}

/**
 * Common email addresses and sender configurations
 */
export const EMAIL_CONFIG = {
  ADMIN_EMAIL: "imhogen22@gmail.com",
  DOMAIN: "imhogen@admin.imhogen.com",
  SENDERS: {
    CONTACT: "Contact Form <imhogen@admin.imhogen.com>",
    CAD: "CAD Request <imhogen@admin.imhogen.com>",
    SUPPORT: "Support Request <imhogen@admin.imhogen.com>",
    PROCESS: "Process Improvement Request <imhogen@admin.imhogen.com>",
    PRODUCT: "Product Request <imhogen@admin.imhogen.com>",
    CONFIRMATION: "Confirmation <imhogen@admin.imhogen.com>"
  }
} as const;

/**
 * Generates a unique request ID with the specified prefix
 *
 * @param prefix - Prefix for the request ID (e.g., "CAD", "P", "ES")
 * @returns Unique request ID string
 */
export function generateRequestId(prefix: string): string {
  return `${prefix}-${Date.now()}`;
}