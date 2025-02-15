"use server";

import { redirect } from "next/navigation";
import { CadRequestEmail } from "../components/emails/cad/cad-template";
import { Resend } from "resend";
import ProductRequestEmail from "../components/emails/product/product-template";
import SupportRequestEmail, { SupportFormEmail } from "../components/emails/support/engieering-support-template";
import ProcessRequestEmail from "../components/emails/process/process-template";
import { ContactFormEmail } from "../components/emails/contact/contact-template";

const resend = new Resend(process.env.RESEND_API_KEY);


//CONTACT FORM ACTION
export const contactFormAction = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const filesString = formData.get("files") as string;

    // Parse the JSON string back to an array
    const files = filesString ? JSON.parse(filesString) : [];

    const { data, error } = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        message,
        files,
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


//CAD FORM ACTION
export const cadFormAction = async (formData: FormData) => {
  try {
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const organizationOperations = formData.get("organizationOperations") as string;
    const documentationPurpose = formData.get("documentationPurpose") as string;
    const documentationTypes = JSON.parse(formData.get("documentationTypes") as string || "[]");
    const otherDocumentationTypes = formData.get("otherDocumentationTypes") as string;
    const fileFormats = JSON.parse(formData.get("fileFormats") as string || "[]");
    const otherFileFormats = formData.get("otherFileFormats") as string;
    const technicalSpecifications = formData.get("technicalSpecifications") as string;
    const technicalStandards = formData.get("technicalStandards") as string;
    const visualStylePreferences = formData.get("visualStylePreferences") as string;
    const layoutPreferences = formData.get("layoutPreferences") as string;
    const additionalDesignFeatures = formData.get("additionalDesignFeatures") as string;
    const preferredTimeline = formData.get("preferredTimeline") as string;
    const requirePeriodicDrafts = formData.get("requirePeriodicDrafts") === "true";
    const additionalServices = JSON.parse(formData.get("additionalServices") as string || "[]");
    const additionalComments = formData.get("additionalComments") as string;
    const fileAttachments = JSON.parse(formData.get("fileAttachments") as string || "[]");

    const { data, error } = await resend.emails.send({
      from: `CAD Request <onboarding@resend.dev>`,
      to: ["imhogen22@gmail.com"],
      subject: `New CAD Request from ${organizationName}`,
      react: CadRequestEmail({
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
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true };
  } catch (error: any) {
    console.error("CAD Form Action Error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
};



export const SupportFormAction = async (formData: FormData) => {
  try {
    // Client Information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const physicalPostalAddress = formData.get("physicalPostalAddress") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Training Requirements
    const trainingNeeds = formData.get("trainingNeeds") as string;
    const trainingObjectives = formData.get("trainingObjectives") as string;
    const numberOfParticipants = parseInt(formData.get("numberOfParticipants") as string);
    const participantRoles = formData.get("participantRoles") as string;
    const participantSkillLevel = formData.get("participantSkillLevel") as string;
    const trainingDeliveryMode = formData.get("trainingDeliveryMode") as string;
   const trainingTimeline = {
      startDate: new Date(formData.get("trainingTimeline.startDate") as string),
      endDate: new Date(formData.get("trainingTimeline.endDate") as string)
    };


    // Project Support
    const projectOverview = formData.get("projectOverview") as string;
    const projectScopeDeliverables = formData.get("projectScopeDeliverables") as string;
    const collaborationPreferences = JSON.parse(formData.get("collaborationPreferences") as string || "[]");
    const projectDeadline = new Date(formData.get("projectDeadline") as string);

    // Additional Info
    const toolsAndResources = formData.get("toolsAndResources") as string;
    const longTermCollaboration = formData.get("longTermCollaboration") === "true";
    const additionalInformation = formData.get("additionalInformation") as string;
    const fileAttachments = JSON.parse(formData.get("fileAttachments") as string || "[]");

    const { data, error } = await resend.emails.send({
      from: `Support Request <onboarding@resend.dev>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Support & Training Request from ${organizationName}`,
      react: SupportFormEmail({
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
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Support Form Action Error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
};

//PROCESS FORM ACTION
export const ProcessFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  try {
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOperations = formData.get("businessOperations") as string;
    const processPurpose = formData.get("processPurpose") as string;
    const currentProcess = formData.get("currentProcess") as string;
    const currentProcessPurpose = formData.get("currentProcessPurpose") as string;
    const currentPerformanceMetrics = formData.get("currentPerformanceMetrics") as string;
    const painPoints = formData.getAll("painPoints") as string[];
    const specificChallenges = formData.get("specificChallenges") as string;
    const improvementGoals = formData.getAll("improvementGoals") as string[];
    const performanceTargets = formData.get("performanceTargets") as string;
    const primaryFunctions = formData.get("primaryFunctions") as string;
    const operationalNeeds = formData.getAll("operationalNeeds") as string[];
    const specialRequirements = formData.get("specialRequirements") as string;
    const spaceAvailability = formData.get("spaceAvailability") as string;
    const powerSupply = formData.get("powerSupply") as string;
    const environmentalFactors = formData.get("environmentalFactors") as string;
    const anticipateFutureGrowth = formData.get("anticipateFutureGrowth") === "on";
    const growthAccommodation = formData.get("growthAccommodation") as string;
    const comparableSystems = formData.get("comparableSystems") as string;
    const collaborationPreferences = formData.getAll("collaborationPreferences") as string[];
    const additionalComments = formData.get("additionalComments") as string;
    const requestNumber = `PROC-${Date.now()}`;

    const { data, error } = await resend.emails.send({
      from: "Process Improvement Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New Process Improvement Request from ${organizationName}`,
      react: ProcessRequestEmail({
        organizationName,
        contactPerson,
        email,
        phoneNumber,
        address,
        businessOperations,
        processPurpose,
        currentProcess,
        currentProcessPurpose,
        currentPerformanceMetrics,
        painPoints,
        specificChallenges,
        improvementGoals,
        performanceTargets,
        primaryFunctions,
        operationalNeeds,
        specialRequirements,
        spaceAvailability,
        powerSupply,
        environmentalFactors,
        anticipateFutureGrowth,
        growthAccommodation,
        comparableSystems,
        collaborationPreferences,
        additionalComments,
        requestNumber,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Process Form Action Error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }

 
};

export const ProductFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  try {
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOperations = formData.get("businessOperations") as string;
    const productPurpose = formData.get("productPurpose") as string;
    const productVision = formData.get("productVision") as string;
    const productObjectives = formData.get("productObjectives") as string;
    const targetAudience = formData.get("targetAudience") as string;
    const coreFunctions = formData.get("coreFunctions") as string;
    const performanceMetrics = formData.get("performanceMetrics") as string;
    const preferredMaterials = formData.get("preferredMaterials") as string;
    const complianceStandards = formData.get("complianceStandards") as string;
    const environmentalConditions = formData.get("environmentalConditions") as string;
    const visualStyle = formData.get("visualStyle") as string;
    const ergonomicFeatures = formData.get("ergonomicFeatures") as string;
    const brandingRequirements = formData.get("brandingRequirements") as string;
    const budgetRange = formData.get("budgetRange") as string;
    const preferredTimeline = formData.get("preferredTimeline") as string;
    const requirePrototypes = formData.get("requirePrototypes") === "on";
    const numberOfPrototypes = Number(formData.get("numberOfPrototypes"));
    const requiredTests = formData.get("requiredTests") as string;
    const comparableProducts = formData.get("comparableProducts") as string;
    const collaborationPreferences = formData.getAll("collaborationPreferences") as string[];
    const additionalComments = formData.get("additionalComments") as string;
    const requestNumber = `PRODUCT-${Date.now()}`;

    const { data, error } = await resend.emails.send({
      from: "Product Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New Product Request from ${organizationName}`,
      react: ProductRequestEmail({
        organizationName,
        contactPerson,
        email,
        phoneNumber,
        address,
        businessOperations,
        productPurpose,
        productVision,
        productObjectives,
        targetAudience,
        coreFunctions,
        performanceMetrics,
        preferredMaterials,
        complianceStandards,
        environmentalConditions,
        visualStyle,
        ergonomicFeatures,
        brandingRequirements,
        budgetRange,
        preferredTimeline,
        requirePrototypes,
        numberOfPrototypes,
        requiredTests,
        comparableProducts,
        collaborationPreferences,
        additionalComments,
        requestNumber,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Product Form Action Error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }

  redirect("/success");
};
