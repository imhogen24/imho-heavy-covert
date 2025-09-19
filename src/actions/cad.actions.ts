"use server";

/**
 * @fileoverview CAD (Computer-Aided Design) service form action for IMHO Engineering
 *
 * This module handles the submission of CAD service requests, including:
 * - Processing comprehensive CAD form data
 * - Handling technical specifications and documentation requirements
 * - Managing file attachments and visual preferences
 * - Sending notification emails to admin with request details
 * - Sending confirmation emails to clients
 * - Generating unique request IDs for tracking
 *
 * The CAD service encompasses technical drawing, drafting, and design documentation
 * services offered by IMHO Engineering.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import { CadRequestEmail } from "@/components/emails/cad/cad-template";
import RequestConfirmationEmail from "@/components/emails/confirmation";
import { type ActionResponse } from "@/types/api";
import {
  EMAIL_CONFIG,
  generateRequestId,
  sendNotificationWithConfirmation,
} from "./email.actions";

/**
 * CAD form data structure representing a complete CAD service request
 */
interface CadFormData {
  // Organization Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  organizationOperations: string;

  // Documentation Requirements
  documentationPurpose: string;
  documentationTypes: string[];
  otherDocumentationTypes: string;
  fileFormats: string[];
  otherFileFormats: string;

  // Technical Specifications
  technicalSpecifications: string;
  technicalStandards: string;

  // Design Preferences
  visualStylePreferences: string;
  layoutPreferences: string;
  additionalDesignFeatures: string;

  // Project Timeline & Services
  preferredTimeline: string;
  requirePeriodicDrafts: boolean;
  additionalServices: string[];

  // Additional Information
  additionalComments: string;
  fileAttachments: string[];
  requestId: string;
}

/**
 * Processes CAD service form submission and manages email notifications
 *
 * @param formData - FormData object containing all CAD form fields and attachments
 * @returns Promise resolving to ActionResponse with success/error status
 *
 * @example
 * ```tsx
 * <form action={cadFormAction}>
 *   <input name="organizationName" />
 *   <input name="email" />
 *   <select name="documentationTypes" multiple />
 *   <textarea name="technicalSpecifications" />
 *   <input name="fileAttachments" type="hidden" />
 *   <button type="submit">Submit CAD Request</button>
 * </form>
 * ```
 */
export async function cadFormAction(
  formData: FormData
): Promise<ActionResponse> {
  try {
    // Extract organization information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const organizationOperations = formData.get(
      "organizationOperations"
    ) as string;

    // Extract documentation requirements
    const documentationPurpose = formData.get("documentationPurpose") as string;
    const documentationTypes = JSON.parse(
      (formData.get("documentationTypes") as string) || "[]"
    );
    const otherDocumentationTypes = formData.get(
      "otherDocumentationTypes"
    ) as string;
    const fileFormats = JSON.parse(
      (formData.get("fileFormats") as string) || "[]"
    );
    const otherFileFormats = formData.get("otherFileFormats") as string;

    // Extract technical specifications
    const technicalSpecifications = formData.get(
      "technicalSpecifications"
    ) as string;
    const technicalStandards = formData.get("technicalStandards") as string;

    // Extract design preferences
    const visualStylePreferences = formData.get(
      "visualStylePreferences"
    ) as string;
    const layoutPreferences = formData.get("layoutPreferences") as string;
    const additionalDesignFeatures = formData.get(
      "additionalDesignFeatures"
    ) as string;

    // Extract project timeline and services
    const preferredTimeline = formData.get("preferredTimeline") as string;
    const requirePeriodicDrafts =
      formData.get("requirePeriodicDrafts") === "true";
    const additionalServices = JSON.parse(
      (formData.get("additionalServices") as string) || "[]"
    );

    // Extract additional information
    const additionalComments = formData.get("additionalComments") as string;
    const fileAttachments = JSON.parse(
      (formData.get("fileAttachments") as string) || "[]"
    );

    // Generate unique request ID for tracking
    const requestId = generateRequestId("CAD");

    const cadData: CadFormData = {
      organizationName,
      contactPerson,
      email,
      phoneNumber,
      address,
      organizationOperations,
      documentationPurpose,
      documentationTypes,
      otherDocumentationTypes,
      fileFormats,
      otherFileFormats,
      technicalSpecifications,
      technicalStandards,
      visualStylePreferences,
      layoutPreferences,
      additionalDesignFeatures,
      preferredTimeline,
      requirePeriodicDrafts,
      additionalServices,
      additionalComments,
      fileAttachments,
      requestId,
    };

    // Configure admin notification email
    const adminEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.CAD,
      to: [EMAIL_CONFIG.ADMIN_EMAIL],
      subject: `New CAD Request from ${organizationName}`,
      react: CadRequestEmail(cadData) as React.ReactElement,
    };

    // Configure user confirmation email
    const userEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.CONFIRMATION,
      to: [email],
      subject: "Request received",
      react: RequestConfirmationEmail({
        organizationName,
      }) as React.ReactElement,
    };

    // Send both emails
    const result = await sendNotificationWithConfirmation(
      adminEmailConfig,
      userEmailConfig
    );

    if (!result.success) {
      return result;
    }

    return {
      success: true,
      data: { requestId },
      message: "CAD request submitted successfully",
    };
  } catch (error: any) {
    console.error("CAD Form Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to process CAD request",
    };
  }
}
