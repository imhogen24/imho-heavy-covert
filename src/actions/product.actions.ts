"use server";

/**
 * @fileoverview Product Development service action for IMHO Engineering
 *
 * This module handles the submission of product development requests, including:
 * - Processing comprehensive product development requirements
 * - Managing input/output specifications and transformation requirements
 * - Handling operational agents and system integration
 * - Managing safety, maintenance, and scalability requirements
 * - Processing collaboration preferences and file attachments
 * - Sending detailed notification emails to admin
 * - Sending confirmation emails to clients
 * - Generating unique request IDs for tracking product development projects
 *
 * The product development service encompasses end-to-end product design,
 * development, and optimization services offered by IMHO Engineering.
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

import RequestConfirmationEmail from "@/components/emails/confirmation";
import { ProductFormEmail } from "@/components/emails/product/product-template";
import { type ActionResponse } from "@/types/api";
import { sendNotificationWithConfirmation, EMAIL_CONFIG, generateRequestId } from "./email.actions";

/**
 * Product development form data structure representing a complete product development request
 */
interface ProductFormData {
  // Client Information
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
  livingSystemInputs: boolean;
  livingSystemInputDescription: string;

  // Transformation Requirements
  transformationDescription: string;
  performanceTargets: string;

  // Output Requirements
  systemOutputs: string;
  informationOutputs: string;
  energyOutputs: string;
  livingThingsOutputs: string;

  // Operational Agents
  humanSystems: string;
  technicalSystems: string;
  environment: string;
  informationSystems: string;
  managementSystems: string;

  // Safety, Maintenance and Scalability
  safetyRequirements: string;
  maintenanceNeeds: string[];
  futureScalability: string;

  // Collaboration and Communication
  collaborationPreferences: string[];
  additionalComments: string;
  fileAttachments: string[];
  requestId: string;
}

/**
 * Processes product development form submission and manages email notifications
 *
 * @param formData - FormData object containing all product development form fields and attachments
 * @returns Promise resolving to ActionResponse with success/error status
 *
 * @example
 * ```tsx
 * // In a product development form component
 * <form action={productFormAction}>
 *   <input name="organizationName" />
 *   <input name="email" />
 *   <textarea name="transformationDescription" />
 *   <textarea name="performanceTargets" />
 *   <input name="livingSystemInputs" type="checkbox" />
 *   <select name="maintenanceNeeds" multiple />
 *   <input name="fileAttachments" type="hidden" />
 *   <button type="submit">Submit Product Request</button>
 * </form>
 * ```
 */
export async function productFormAction(formData: FormData): Promise<ActionResponse> {
  try {
    // Extract client information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Extract input requirements
    const materialInputs = formData.get("materialInputs") as string;
    const energyInputs = formData.get("energyInputs") as string;
    const informationInputs = formData.get("dataInputs") as string;
    const livingSystemInputs = formData.get("livingSystemInputs") === "true";
    const livingSystemInputDescription = formData.get("livingSystemInputDescription") as string;

    // Extract transformation requirements
    const transformationDescription = formData.get("transformationDescription") as string;
    const performanceTargets = formData.get("performanceTargets") as string;

    // Extract output requirements
    const systemOutputs = formData.get("systemOutputs") as string;
    const informationOutputs = formData.get("dataOutputs") as string;
    const energyOutputs = formData.get("energyOutputs") as string;
    const livingThingsOutputs = formData.get("livingThingsOutputs") as string;

    // Extract operational agents
    const humanSystems = formData.get("humanSystems") as string;
    const technicalSystems = formData.get("technicalSystems") as string;
    const environment = formData.get("environmentalSystems") as string;
    const informationSystems = formData.get("informationSystems") as string;
    const managementSystems = formData.get("managementSystems") as string;

    // Extract safety, maintenance and scalability
    const safetyRequirements = formData.get("safetyRequirements") as string;
    const maintenanceNeeds = JSON.parse(
      (formData.get("maintenanceNeeds") as string) || "[]"
    );
    const futureScalability = formData.get("futureScalability") as string;

    // Extract collaboration and communication
    const collaborationPreferences = JSON.parse(
      (formData.get("collaborationPreferences") as string) || "[]"
    );
    const additionalComments = formData.get("additionalComments") as string;
    const fileAttachments = JSON.parse(
      (formData.get("fileAttachments") as string) || "[]"
    );

    // Generate unique request ID for tracking
    const requestId = generateRequestId("PD");

    const productData: ProductFormData = {
      organizationName,
      contactPerson,
      email,
      phoneNumber,
      address,
      businessOverview,
      materialInputs,
      energyInputs,
      informationInputs,
      livingSystemInputs,
      livingSystemInputDescription,
      transformationDescription,
      performanceTargets,
      systemOutputs,
      informationOutputs,
      energyOutputs,
      livingThingsOutputs,
      humanSystems,
      technicalSystems,
      environment,
      informationSystems,
      managementSystems,
      safetyRequirements,
      maintenanceNeeds,
      futureScalability,
      collaborationPreferences,
      additionalComments,
      fileAttachments,
      requestId
    };

    // Configure admin notification email
    const adminEmailConfig = {
      from: EMAIL_CONFIG.SENDERS.PRODUCT,
      to: [EMAIL_CONFIG.ADMIN_EMAIL],
      subject: `New Product Request from ${organizationName}`,
      react: ProductFormEmail(productData) as React.ReactElement
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
      message: "Product development request submitted successfully"
    };

  } catch (error: any) {
    console.error("Product Form Action Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      message: "Failed to process product development request"
    };
  }
}