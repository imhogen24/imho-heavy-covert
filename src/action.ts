"use server";

import { parseWithZod } from "@conform-to/zod";
import {
  CadSchema,
  ProcessSchema,
  ProductSchema,
  SupportSchema,
  ContactFormSchema,
  FileUploadSchema,
} from "./lib/z-schema";
import { redirect } from "next/navigation";
import { CadRequestEmail } from "../src/components/emails/cad-template";
import { Resend } from "resend";
import ProductRequestEmail from "./components/emails/product-template";
import SupportRequestEmail from "./components/emails/engieering-support-template";
import ProcessRequestEmail from "./components/emails/process-template";
import { ContactFormEmail } from "./components/emails/contact-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactFormAction = async (formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: FileUploadSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const fileUrl = (formData.get("file") as string) || null;

    const { data, error } = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        message,
        file: fileUrl || undefined,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Contact Form Action Error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
};

export const cadFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  // get form data and compare with zodschema to validate
  const submission = parseWithZod(formData, {
    schema: CadSchema,
  });

  if (submission.status !== "success") {
    console.log("there was an error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "CAD Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New CAD Request from ${formData.get("organizationName")}`,
      react: CadRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        address: formData.get("address") as string,
        organizationOperations: formData.get(
          "organizationOperations",
        ) as string,
        documentationPurpose: formData.get("documentationPurpose") as string,
        documentationTypes: formData.getAll("documentationTypes") as string[],
        otherDocumentationType: formData.get(
          "otherDocumentationType",
        ) as string,
        fileFormats: formData.getAll("fileFormats") as string[],
        otherFileFormat: formData.get("otherFileFormat") as string,
        technicalSpecifications: formData.get(
          "technicalSpecifications",
        ) as string,
        technicalStandards: formData.get("technicalStandards") as string,
        visualStylePreferences: formData.get(
          "visualStylePreferences",
        ) as string,
        layoutPreferences: formData.get("layoutPreferences") as string,
        preferredTimeline: formData.get("preferredTimeline") as string,
        requirePeriodicDrafts: formData.get("requirePeriodicDrafts") === "on",
        additionalServices: formData.get("additionalServices") as string,
        additionalComments: formData.get("additionalComments") as string,
        requestNumber: `CAD-${Date.now()}`,
      }) as React.ReactElement,
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};

export const ProductFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  // get form data and compare with zodschema to validate
  const submission = parseWithZod(formData, {
    schema: ProductSchema,
  });

  if (submission.status !== "success") {
    console.log("there was an error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Product Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New Product Request from ${formData.get("organizationName")}`,
      react: ProductRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        address: formData.get("address") as string,
        businessOperations: formData.get("businessOperations") as string,
        productPurpose: formData.get("productPurpose") as string,
        productVision: formData.get("productVision") as string,
        productObjectives: formData.get("productObjectives") as string,
        targetAudience: formData.get("targetAudience") as string,
        coreFunctions: formData.get("coreFunctions") as string,
        performanceMetrics: formData.get("performanceMetrics") as string,
        preferredMaterials: formData.get("preferredMaterials") as string,
        complianceStandards: formData.get("complianceStandards") as string,
        environmentalConditions: formData.get(
          "environmentalConditions",
        ) as string,
        visualStyle: formData.get("visualStyle") as string,
        ergonomicFeatures: formData.get("ergonomicFeatures") as string,
        brandingRequirements: formData.get("brandingRequirements") as string,
        budgetRange: formData.get("budgetRange") as string,
        preferredTimeline: formData.get("preferredTimeline") as string,
        requirePrototypes: formData.get("requirePrototypes") === "on",
        numberOfPrototypes: Number(formData.get("numberOfPrototypes")),
        requiredTests: formData.get("requiredTests") as string,
        comparableProducts: formData.get("comparableProducts") as string,
        collaborationPreferences: formData.getAll(
          "collaborationPreferences",
        ) as string[],
        additionalComments: formData.get("additionalComments") as string,
        requestNumber: `PRODUCT-${Date.now()}`,
      }) as React.ReactElement,
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};

export const SupportFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, {
    schema: SupportSchema,
  });

  if (submission.status !== "success") {
    console.log("Validation error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Support Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New Support Request from ${formData.get("organizationName")}`,
      react: SupportRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        physicalPostalAddress: formData.get("physicalPostalAddress") as string,
        trainingNeeds: formData.get("trainingNeeds") as string,
        trainingObjectives: formData.get("trainingObjectives") as string,
        numberOfParticipants: Number(formData.get("numberOfParticipants")),
        participantRoles: formData.get("participantRoles") as string,
        participantSkillLevel: formData.get("participantSkillLevel") as string,
        trainingDeliveryMode: formData.get("trainingDeliveryMode") as string,
        trainingTimeline: formData.get("trainingTimeline") as string,
        projectOverview: formData.get("projectOverview") as string,
        projectScopeDeliverables: formData.get(
          "projectScopeDeliverables",
        ) as string,
        collaborationPreferences: formData.getAll(
          "collaborationPreferences",
        ) as string[],
        projectDeadline: new Date(formData.get("projectDeadline") as string),
        toolsAndResources: formData.get("toolsAndResources") as string,
        longTermCollaboration: formData.get("longTermCollaboration") === "on",
        additionalInformation: formData.get("additionalInformation") as string,
        requestNumber: `SUP-${Date.now()}`,
      }),
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};

export const ProcessFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, {
    schema: ProcessSchema,
  });

  if (submission.status !== "success") {
    console.log("Validation error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Process Improvement Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New Process Improvement Request from ${formData.get("organizationName")}`,
      react: ProcessRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        address: formData.get("address") as string,
        businessOperations: formData.get("businessOperations") as string,
        processPurpose: formData.get("processPurpose") as string,
        currentProcess: formData.get("currentProcess") as string,
        currentProcessPurpose: formData.get("currentProcessPurpose") as string,
        currentPerformanceMetrics: formData.get(
          "currentPerformanceMetrics",
        ) as string,
        painPoints: formData.getAll("painPoints") as string[],
        specificChallenges: formData.get("specificChallenges") as string,
        improvementGoals: formData.getAll("improvementGoals") as string[],
        performanceTargets: formData.get("performanceTargets") as string,
        primaryFunctions: formData.get("primaryFunctions") as string,
        operationalNeeds: formData.getAll("operationalNeeds") as string[],
        specialRequirements: formData.get("specialRequirements") as string,
        spaceAvailability: formData.get("spaceAvailability") as string,
        powerSupply: formData.get("powerSupply") as string,
        environmentalFactors: formData.get("environmentalFactors") as string,
        anticipateFutureGrowth: formData.get("anticipateFutureGrowth") === "on",
        growthAccommodation: formData.get("growthAccommodation") as string,
        comparableSystems: formData.get("comparableSystems") as string,
        collaborationPreferences: formData.getAll(
          "collaborationPreferences",
        ) as string[],
        additionalComments: formData.get("additionalComments") as string,
        requestNumber: `PROC-${Date.now()}`,
      }),
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};
