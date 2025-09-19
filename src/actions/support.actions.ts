"use server";

/**
 * @fileoverview Engineering Support and Training service action for IMHO Engineering
 *
 * This module handles the submission of engineering support and training requests, including:
 * - Processing comprehensive training requirements and project support needs
 * - Managing participant information and skill level assessments
 * - Handling project timelines and collaboration preferences
 * - Sending detailed notification emails to admin
 * - Sending confirmation emails to clients
 * - Generating unique request IDs for tracking support requests
 *
 * The support service encompasses training, consulting, and ongoing engineering
 * support services offered by IMHO Engineering.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import RequestConfirmationEmail from "@/components/emails/confirmation";
import { SupportFormEmail } from "@/components/emails/support/engieering-support-template";
import { type ActionResponse } from "@/types/api";
import { sendNotificationWithConfirmation, EMAIL_CONFIG, generateRequestId } from "./email.actions";

/**
 * Support form data structure representing a complete support and training request
 */
interface SupportFormData {
  // Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  physicalPostalAddress: string;
  businessOverview: string;

  // Training Requirements
  trainingNeeds: string;
  trainingObjectives: string;
  numberOfParticipants: number;
  participantRoles: string;
  participantSkillLevel: string;
  trainingDeliveryMode: string;
  trainingTimeline: {
    startDate: Date;
    endDate: Date;
  };

  // Project Support
  projectOverview: string;
  projectScopeDeliverables: string;
  collaborationPreferences: string[];
  projectDeadline: Date;

  // Additional Information
  toolsAndResources: string;
  longTermCollaboration: boolean;
  additionalInformation: string;
  fileAttachments: string[];
  requestId: string;
}

/**
 * Processes engineering support and training form submission
 *
 * @param formData - FormData object containing all support form fields and attachments
 * @returns Promise resolving to ActionResponse with success/error status
 *
 * @example
 * ```tsx
 * // In a support service form component
 * <form action={supportFormAction}>
 *   <input name="organizationName" />
 *   <input name="email" />
 *   <textarea name="trainingNeeds" />
 *   <input name="numberOfParticipants" type="number" />
 *   <input name="trainingTimeline.startDate" type="date" />
 *   <input name="fileAttachments" type="hidden" />
 *   <button type="submit">Submit Support Request</button>
 * </form>
 * ```
 */
export async function supportFormAction(formData: FormData): Promise<ActionResponse> {
  try {
    // Extract client information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const physicalPostalAddress = formData.get("physicalPostalAddress") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Extract training requirements
    const trainingNeeds = formData.get("trainingNeeds") as string;
    const trainingObjectives = formData.get("trainingObjectives") as string;
    const numberOfParticipants = parseInt(
      formData.get("numberOfParticipants") as string
    );
    const participantRoles = formData.get("participantRoles") as string;
    const participantSkillLevel = formData.get("participantSkillLevel") as string;
    const trainingDeliveryMode = formData.get("trainingDeliveryMode") as string;
    const trainingTimeline = {
      startDate: new Date(formData.get("trainingTimeline.startDate") as string),
      endDate: new Date(formData.get("trainingTimeline.endDate") as string),
    };

    // Extract project support information
    const projectOverview = formData.get("projectOverview") as string;
    const projectScopeDeliverables = formData.get("projectScopeDeliverables") as string;
    const collaborationPreferences = JSON.parse(
      (formData.get("collaborationPreferences") as string) || "[]"
    );
    const projectDeadline = new Date(formData.get("projectDeadline") as string);

    // Extract additional information
    const toolsAndResources = formData.get("toolsAndResources") as string;
    const longTermCollaboration = formData.get("longTermCollaboration") === "true";
    const additionalInformation = formData.get("additionalInformation") as string;
    const fileAttachments = JSON.parse(
      (formData.get("fileAttachments") as string) || "[]"
    );

    // Generate unique request ID for tracking
    const requestId = generateRequestId("ES");

    const supportData: SupportFormData = {
      organizationName,
      contactPerson,
      email,
      phoneNumber,
      physicalPostalAddress,
      businessOverview,
      trainingNeeds,
      trainingObjectives,
      numberOfParticipants,
      participantRoles,
      participantSkillLevel,
      trainingDeliveryMode,
      trainingTimeline,
      projectOverview,
      projectScopeDeliverables,
      collaborationPreferences,
      projectDeadline,
      toolsAndResources,
      longTermCollaboration,
      additionalInformation,
      fileAttachments,
      requestId
    };

    // Configure admin notification email
    const adminEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.SUPPORT,
      to: [EMAIL_CONFIG.ADMIN_EMAIL],
      subject: `New Support & Training Request from ${organizationName}`,
      react: SupportFormEmail(supportData) as React.ReactElement
    };

    // Configure user confirmation email
    const userEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.CONFIRMATION,
      to: [email],
      subject: "Request received",
      react: RequestConfirmationEmail({ organizationName }) as React.ReactElement
    };

    // Send both emails
    const result = await sendNotificationWithConfirmation(adminEmailConfig, userEmailConfig);

    if (!result.success) {
      return result;
    }

    return {
      success: true,
      data: { requestId },
      message: "Support and training request submitted successfully"
    };

  } catch (error: any) {
    console.error("Support Form Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to process support request"
    };
  }
}