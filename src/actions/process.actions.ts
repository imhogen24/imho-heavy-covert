"use server";

/**
 * @fileoverview Process Improvement service action for IMHO Engineering
 *
 * This module handles the submission of process improvement requests, including:
 * - Processing comprehensive system analysis and improvement requirements
 * - Managing input/output requirements across multiple system dimensions
 * - Handling operational agents and system integration needs
 * - Analyzing pain points and inefficiencies in existing processes
 * - Managing scalability and future growth considerations
 * - Sending detailed notification emails to admin
 * - Sending confirmation emails to clients
 * - Generating unique request IDs for tracking process improvement projects
 *
 * The process improvement service encompasses systems analysis, optimization,
 * and transformation services offered by IMHO Engineering.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import RequestConfirmationEmail from "@/components/emails/confirmation";
import ProcessRequestEmail from "@/components/emails/process/process-template";
import { type ActionResponse } from "@/types/api";
import { sendNotificationWithConfirmation, EMAIL_CONFIG, generateRequestId } from "./email.actions";

/**
 * Process improvement form data structure representing a complete process analysis request
 */
interface ProcessFormData {
  // Organization Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  businessOverview: string;

  // Input Requirements
  materialInputs: string;
  energyInputs: string;
  informationInputs: string;
  livingInputs: string;

  // Operational Agents
  humanSytems: string;
  managementSystems: string;
  technicalSytems: string;
  informationSystems: string;
  environment: string;

  // Process Requirements
  existingSytems: string;
  newSystemRequiements: string;
  KeyMetrics: string;

  // Output Requirements
  materialOutputs: string;
  EnergyOutputs: string;
  informationOutputs: string;
  livingOutputs: string;

  // Challenges and Improvements
  painPoints: string[];
  specificIssues: string;

  // Scalability and Future Goals
  futureGrowth: boolean;
  comparableSystems: string;

  // Collaboration
  collaborationPreferences: string[];
  additionalComments: string;
  requestId: string;
}

/**
 * Processes process improvement form submission and manages email notifications
 *
 * @param formData - FormData object containing all process improvement form fields
 * @returns Promise resolving to ActionResponse with success/error status
 *
 * @example
 * ```tsx
 * // In a process improvement form component
 * <form action={processFormAction}>
 *   <input name="organizationName" />
 *   <input name="email" />
 *   <textarea name="materialInputs" />
 *   <textarea name="existingSytems" />
 *   <select name="painPoints" multiple />
 *   <input name="futureGrowth" type="checkbox" />
 *   <button type="submit">Submit Process Request</button>
 * </form>
 * ```
 */
export async function processFormAction(formData: FormData): Promise<ActionResponse> {
  try {
    // Extract organization information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Extract input requirements
    const materialInputs = formData.get("materialInputs") as string;
    const energyInputs = formData.get("energyInputs") as string;
    const informationInputs = formData.get("informationInputs") as string;
    const livingInputs = formData.get("livingInputs") as string;

    // Extract operational agents
    const humanSytems = formData.get("humanSytems") as string;
    const managementSystems = formData.get("managementSystems") as string;
    const technicalSytems = formData.get("technicalSytems") as string;
    const informationSystems = formData.get("informationSystems") as string;
    const environment = formData.get("environmentalSytems") as string;

    // Extract process requirements
    const existingSytems = formData.get("existingSytems") as string;
    const newSystemRequiements = formData.get("newSystemRequiements") as string;
    const KeyMetrics = formData.get("KeyMetrics") as string;

    // Extract output requirements
    const materialOutputs = formData.get("materialOutputs") as string;
    const EnergyOutputs = formData.get("EnergyOutputs") as string;
    const informationOutputs = formData.get("informationOutputs") as string;
    const livingOutputs = formData.get("livingOutputs") as string;

    // Extract challenges and inefficiencies
    const painPoints = formData.getAll("painPoints") as string[];
    const specificIssues = formData.get("specificIssues") as string;

    // Extract scalability and future goals
    const futureGrowth = formData.get("futureGrowth") === "on";
    const comparableSystems = formData.get("comparableSystems") as string;

    // Extract collaboration preferences
    const collaborationPreferences = formData.getAll("collaborationPreferences") as string[];
    const additionalComments = formData.get("additionalComments") as string;

    // Generate unique request ID for tracking
    const requestId = generateRequestId("P");

    const processData: ProcessFormData = {
      organizationName,
      contactPerson,
      email,
      phoneNumber,
      address,
      businessOverview,
      materialInputs,
      energyInputs,
      informationInputs,
      livingInputs,
      humanSytems,
      managementSystems,
      technicalSytems,
      informationSystems,
      environment,
      existingSytems,
      newSystemRequiements,
      KeyMetrics,
      materialOutputs,
      EnergyOutputs,
      informationOutputs,
      livingOutputs,
      painPoints,
      specificIssues,
      futureGrowth,
      comparableSystems,
      collaborationPreferences,
      additionalComments,
      requestId
    };

    // Configure admin notification email
    const adminEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.PROCESS,
      to: [EMAIL_CONFIG.ADMIN_EMAIL],
      subject: `New Process Improvement Request from ${organizationName}`,
      react: ProcessRequestEmail(processData)
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
      message: "Process improvement request submitted successfully"
    };

  } catch (error: any) {
    console.error("Process Form Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to process improvement request"
    };
  }
}