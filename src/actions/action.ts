"use server";

import { CadRequestEmail } from "../components/emails/cad/cad-template";
import { Resend } from "resend";
import ProductRequestEmail, { ProductFormEmail } from "../components/emails/product/product-template";
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
    const requestId = `CAD-${Date.now()}`;

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
        requestId,
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
export const processFormAction = async (formData: FormData) => {
  try {
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Input Requirements
    const materialInputs = formData.get("materialInputs") as string;
    const EnergyInputs = formData.get("EnergyInputs") as string;
    const informationInputs = formData.get("informationInputs") as string;
    const livingInputs = formData.get("livingInputs") as string;

    // Operational Agents
    const humanSytems = formData.get("humanSytems") as string;
    const managementSystems = formData.get("managementSystems") as string;
    const technicalSytems = formData.get("technicalSytems") as string;
    const informationSystems = formData.get("informationSystems") as string;
    const environmentalSytems = formData.get("environmentalSytems") as string;

    // Process Requirements
    const existingSytems = formData.get("existingSytems") as string;
    const newSystemRequiements = formData.get("newSystemRequiements") as string;
    const KeyMetrics = formData.get("KeyMetrics") as string;

    // Output Requirements
    const materialOutputs = formData.get("materialOutputs") as string;
    const EnergyOutputs = formData.get("EnergyOutputs") as string;
    const informationOutputs = formData.get("informationOutputs") as string;
    const livingOutputs = formData.get("livingOutputs") as string;

    // Challenges or Inefficiencies
    const painPoints = formData.getAll("painPoints") as string[];
    const specificIssues = formData.get("specificIssues") as string;

    // Scalability and Future Goals
    const futureGrowth = formData.get("futureGrowth") === "on";
    const comparableSystems = formData.get("comparableSystems") as string;

    // Collaboration and Communication
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
        businessOverview,
        materialInputs,
        EnergyInputs,
        informationInputs,
        livingInputs,
        humanSytems,
        managementSystems,
        technicalSytems,
        informationSystems,
        environmentalSytems,
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
// export const processFormAction = async (formData: FormData) => {
//   try {
//     const organizationName = formData.get("organizationName") as string;
//     const contactPerson = formData.get("contactPerson") as string;
//     const email = formData.get("email") as string;
//     const phoneNumber = formData.get("phoneNumber") as string;
//     const address = formData.get("address") as string;
//     const businessOverview = formData.get("businessOverview") as string;

//     // Input Requirements
//     const materialInputs = formData.get("materialInputs") as string;
//     const EnergyInputs = formData.get("EnergyInputs") as string;
//     const informationInputs = formData.get("informationInputs") as string;
//     const livingInputs = formData.get("livingInputs") as string;

//     // Operational Agents
//     const humanSytems = formData.get("humanSytems") as string;
//     const managementSystems = formData.get("managementSystems") as string;
//     const technicalSytems = formData.get("technicalSytems") as string;
//     const informationSystems = formData.get("informationSystems") as string;
//     const environmentalSytems = formData.get("environmentalSytems") as string;

//     // Process Requirements
//     const existingSytems = formData.get("existingSytems") as string;
//     const newSystemRequiements = formData.get("newSystemRequiements") as string;
//     const KeyMetrics = formData.get("KeyMetrics") as string;

//     // Output Requirements
//     const materialOutputs = formData.get("materialOutputs") as string;
//     const EnergyOutputs = formData.get("EnergyOutputs") as string;
//     const informationOutputs = formData.get("informationOutputs") as string;
//     const livingOutputs = formData.get("livingOutputs") as string;

//     // Challenges or Inefficiencies
//     const painPoints = formData.getAll("painPoints") as string[];
//     const specificIssues = formData.get("specificIssues") as string;

//     // Scalability and Future Goals
//     const futureGrowth = formData.get("futureGrowth") === "on";
//     const comparableSystems = formData.get("comparableSystems") as string;

//     // Collaboration and Communication
//     const collaborationPreferences = formData.getAll("collaborationPreferences") as string[];
//     const additionalComments = formData.get("additionalComments") as string;
//     const requestNumber = `PROC-${Date.now()}`;

//     const { data, error } = await resend.emails.send({
//       from: "Process Improvement Request <onboarding@resend.dev>",
//       to: ["imhogen22@gmail.com"],
//       subject: `New Process Improvement Request from ${organizationName}`,
//       react: ProcessRequestEmail({
//         organizationName,
//         contactPerson,
//         email,
//         phoneNumber,
//         address,
//         businessOverview,
//         materialInputs,
//         EnergyInputs,
//         informationInputs,
//         livingInputs,
//         humanSytems,
//         managementSystems,
//         technicalSytems,
//         informationSystems,
//         environmentalSytems,
//         existingSytems,
//         newSystemRequiements,
//         KeyMetrics,
//         materialOutputs,
//         EnergyOutputs,
//         informationOutputs,
//         livingOutputs,
//         painPoints,
//         specificIssues,
//         futureGrowth,
//         comparableSystems,
//         collaborationPreferences,
//         additionalComments,
//         requestNumber,
//       }),
//     });

//     if (error) {
//       console.error("Resend Email Error:", error);
//       return { error: "Failed to send email" };
//     }

//     return { success: true };
//   } catch (error: any) {
//     console.error("Process Form Action Error:", error);
//     return { error: error.message || "An unexpected error occurred" };
//   }
// };


export const ProductFormAction = async (formData: FormData) => {
  try {
    // Client Information
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const businessOverview = formData.get("businessOverview") as string;

    // Input Requirements
    const materialInputs = formData.get("materialInputs") as string;
    const energyInputs = formData.get("energyInputs") as string;
    const dataInputs = formData.get("dataInputs") as string;
    const livingSystemInputs = formData.get("livingSystemInputs") as string;
    const biologicalComponent = formData.get("biologicalComponent") === "true";
    const biologicalInputDescription = formData.get("biologicalInputDescription") as string;

    // Transformation Requirements
    const transformationDescription = formData.get("transformationDescription") as string;
    const performanceTargets = formData.get("performanceTargets") as string;

    // Output Requirements
    const systemOutputs = formData.get("systemOutputs") as string;
    const dataOutputs = formData.get("dataOutputs") as string;
    const energyOutputs = formData.get("energyOutputs") as string;
    const livingThingsOutputs = formData.get("livingThingsOutputs") as string;

    // Operational Agents
    const humanSystems = formData.get("humanSystems") as string;
    const technicalSystems = formData.get("technicalSystems") as string;
    const environmentalSystems = formData.get("environmentalSystems") as string;
    const informationSystems = formData.get("informationSystems") as string;
    const managementSystems = formData.get("managementSystems") as string;

    // Safety, Maintenance and Scalability
    const safetyRequirements = formData.get("safetyRequirements") as string;
    const maintenanceNeeds = JSON.parse(formData.get("maintenanceNeeds") as string || "[]");
    const futureScalability = formData.get("futureScalability") as string;

    // Collaboration and Communication
    const collaborationPreferences = JSON.parse(formData.get("collaborationPreferences") as string || "[]");
    const additionalComments = formData.get("additionalComments") as string;
    const fileAttachments = JSON.parse(formData.get("fileAttachments") as string || "[]");
    const createdAt = new Date();
    const updatedAt = new Date();

    const { data, error } = await resend.emails.send({
      from: `Product Request <onboarding@resend.dev>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Product Request from ${organizationName}`,
      react: ProductFormEmail({
        organizationName,
        contactPerson,
        email,
        phoneNumber,
        address,
        businessOverview,
        materialInputs,
        energyInputs,
        dataInputs,
        livingSystemInputs,
        biologicalComponent,
        biologicalInputDescription,
        transformationDescription,
        performanceTargets,
        systemOutputs,
        dataOutputs,
        energyOutputs,
        livingThingsOutputs,
        humanSystems,
        technicalSystems,
        environmentalSystems,
        informationSystems,
        managementSystems,
        safetyRequirements,
        maintenanceNeeds,
        futureScalability,
        collaborationPreferences,
        additionalComments,
        fileAttachments,
        createdAt,
        updatedAt,
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
};
