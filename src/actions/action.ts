"use server";

import ContactConfirmationEmail from "@/components/emails/contact/confirmation";
import { Resend } from "resend";
import { ContactFormEmail } from "../components/emails/contact/contact-template";
import { ImhoGenAcademyFormEmail } from "../components/emails/imho-gen-academy/academy-application-template";
import { ImhoGenAcademyConfirmationEmail } from "../components/emails/imho-gen-academy/academy-confirmation";
import { AcademyPartnershipFormEmail } from "../components/emails/academy-partnership/partnership-template";
import { AcademyPartnershipConfirmationEmail } from "../components/emails/academy-partnership/partnership-confirmation";
import { AcademySupportFormEmail } from "../components/emails/academy-support/support-template";
import { AcademySupportConfirmationEmail } from "../components/emails/academy-support/support-confirmation";
import { CapabilityAssessmentFormEmail } from "../components/emails/capability-assessment/assessment-template";
import { CapabilityAssessmentConfirmationEmail } from "../components/emails/capability-assessment/assessment-confirmation";
import { CohortSponsorshipFormEmail } from "../components/emails/cohort-sponsorship/sponsorship-template";
import { CohortSponsorshipConfirmationEmail } from "../components/emails/cohort-sponsorship/sponsorship-confirmation";
import { DesignForgeFormEmail } from "../components/emails/design-forge/design-forge-template";
import { DesignForgeConfirmationEmail } from "../components/emails/design-forge/design-forge-confirmation";
import { CustomEngineeringFormEmail } from "../components/emails/custom-engineering/tier1-template";
import { CustomEngineeringConfirmationEmail } from "../components/emails/custom-engineering/tier1-confirmation";
import { DraftingDigitizationFormEmail } from "../components/emails/drafting-digitization/tier3-template";
import { DraftingDigitizationConfirmationEmail } from "../components/emails/drafting-digitization/tier3-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_TIMEOUT_MS = 20000;

/**
 * The Resend SDK accepts no abort signal, so a stalled request sits on undici's
 * 300s header timeout and leaves the submit button spinning for five minutes.
 * Bound it, resolving with the SDK's own error shape so every `if (error)`
 * branch below keeps working unchanged.
 */
const sendEmail = async (
  payload: Parameters<typeof resend.emails.send>[0],
): Promise<Awaited<ReturnType<typeof resend.emails.send>>> => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      resend.emails.send(payload),
      new Promise<Awaited<ReturnType<typeof resend.emails.send>>>((resolve) => {
        timer = setTimeout(
          () =>
            resolve({
              data: null,
              error: {
                name: "application_error",
                message: `Email request timed out after ${EMAIL_TIMEOUT_MS}ms`,
              },
            }),
          EMAIL_TIMEOUT_MS,
        );
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
};

/** Text field value; a missing field reads as "". */
const text = (formData: FormData, key: string): string =>
  formData.get(key)?.toString() ?? "";

//CONTACT FORM ACTION
export const contactFormAction = async (formData: FormData) => {
  try {
    const name = text(formData, "name");
    const email = text(formData, "email");
    const message = text(formData, "message");
    const filesString = text(formData, "files");

    // Parse the JSON string back to an array
    const files = filesString ? JSON.parse(filesString) : [];

    // Send notification to admin
    const { error } = await sendEmail({
      from: `Contact Form <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        message,
        files,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    // Send confirmation to submitter
    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Thank you for contacting us, ${name}`,
      react: ContactConfirmationEmail({ name }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Contact Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//IMHO GEN ACADEMY APPLICATION FORM ACTION
export const ImhoGenAcademyFormAction = async (formData: FormData) => {
  try {
    // Basic Information
    const fullName = text(formData, "fullName");
    const phoneNumber = text(formData, "phoneNumber");
    const email = text(formData, "email");
    const country = text(formData, "country");
    const cityTown = text(formData, "cityTown");

    // Education / Background
    const currentStatus = text(formData, "currentStatus");
    const institutionOrCompany = text(formData, "institutionOrCompany");

    const programDisciplineRole = text(formData, "programDisciplineRole");

    const currentLevelYear = text(formData, "currentLevelYear");

    // Interest & Capability
    const whyJoin = text(formData, "whyJoin");

    const areasOfInterest = JSON.parse(
      text(formData, "areasOfInterest") || "[]",
    );

    const hasPriorProjects = text(formData, "hasPriorProjects");
    const portfolioLink = text(formData, "portfolioLink");

    // Commitment
    const willingForIntensiveTraining = text(
      formData,
      "willingForIntensiveTraining",
    );

    const weeklyHoursCommitment = text(formData, "weeklyHoursCommitment");

    // Final Question
    const whySelectYou = text(formData, "whySelectYou");

    const requestId = `AA-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Academy Application <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New IMHO GEN Academy Application from ${fullName}`,
      react: ImhoGenAcademyFormEmail({
        fullName,
        phoneNumber,
        email,
        country,
        cityTown,
        currentStatus,
        institutionOrCompany,
        programDisciplineRole,
        currentLevelYear,
        whyJoin,
        areasOfInterest,
        hasPriorProjects,
        portfolioLink,
        willingForIntensiveTraining,
        weeklyHoursCommitment,
        whySelectYou,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Application Received — IMHO GEN Academy`,
      react: ImhoGenAcademyConfirmationEmail({
        fullName,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Academy Application Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//ACADEMY PARTNERSHIP FORM ACTION
export const AcademyPartnershipFormAction = async (formData: FormData) => {
  try {
    // Organization Profile
    const organizationName = text(formData, "organizationName");
    const organizationWebsite = text(formData, "organizationWebsite");
    const contactPerson = text(formData, "contactPerson");
    const positionRole = text(formData, "positionRole");
    const email = text(formData, "email");
    const phoneNumber = text(formData, "phoneNumber");

    // Partnership Interest
    const areasOfInterest = JSON.parse(
      text(formData, "areasOfInterest") || "[]",
    );

    const collaborationDescription = text(formData, "collaborationDescription");

    // Optional Details
    const expectedOutcomes = text(formData, "expectedOutcomes");

    const additionalInformation = text(formData, "additionalInformation");

    const requestId = `AP-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Academy Partnership <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Academy Partnership Inquiry from ${organizationName}`,
      react: AcademyPartnershipFormEmail({
        organizationName,
        organizationWebsite,
        contactPerson,
        positionRole,
        email,
        phoneNumber,
        areasOfInterest,
        collaborationDescription,
        expectedOutcomes,
        additionalInformation,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Partnership Inquiry Received — IMHO GEN Academy`,
      react: AcademyPartnershipConfirmationEmail({
        organizationName,
        contactPerson,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Academy Partnership Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//ACADEMY SUPPORT FORM ACTION
export const AcademySupportFormAction = async (formData: FormData) => {
  try {
    // Donor Information
    const fullName = text(formData, "fullName");
    const email = text(formData, "email");
    const country = text(formData, "country");

    const supportTypes = JSON.parse(text(formData, "supportTypes") || "[]");

    // Support Interest
    const supportContribution = text(formData, "supportContribution");

    const requestId = `AS-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Academy Support <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Academy Support Offer from ${fullName}`,
      react: AcademySupportFormEmail({
        fullName,
        email,
        country,
        supportTypes,
        supportContribution,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Support Offer Received — IMHO GEN Academy`,
      react: AcademySupportConfirmationEmail({
        fullName,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Academy Support Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//CAPABILITY ASSESSMENT FORM ACTION
export const CapabilityAssessmentFormAction = async (formData: FormData) => {
  try {
    // Basic Information
    const fullName = text(formData, "fullName");
    const email = text(formData, "email");
    const background = text(formData, "background");
    const experienceLevel = text(formData, "experienceLevel");

    // Self-Assessment (1–5) — submitted as strings, stored as numbers
    const problemDefinition = Number(formData.get("problemDefinition"));
    const conceptGeneration = Number(formData.get("conceptGeneration"));
    const cadModeling = Number(formData.get("cadModeling"));
    const engineeringAnalysis = Number(formData.get("engineeringAnalysis"));

    const technicalDocumentation = Number(
      formData.get("technicalDocumentation"),
    );

    const manufacturingUnderstanding = Number(
      formData.get("manufacturingUnderstanding"),
    );

    const systemsThinking = Number(formData.get("systemsThinking"));

    // Practical Thinking
    const projectDescription = text(formData, "projectDescription");
    const improvementArea = text(formData, "improvementArea");
    const biggestWeakness = text(formData, "biggestWeakness");

    // Optional
    const portfolioLink = text(formData, "portfolioLink");

    const requestId = `CA-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Capability Assessment <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Capability Assessment from ${fullName}`,
      react: CapabilityAssessmentFormEmail({
        fullName,
        email,
        background,
        experienceLevel,
        problemDefinition,
        conceptGeneration,
        cadModeling,
        engineeringAnalysis,
        technicalDocumentation,
        manufacturingUnderstanding,
        systemsThinking,
        projectDescription,
        improvementArea,
        biggestWeakness,
        portfolioLink,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Assessment Received — IMHO GEN Academy`,
      react: CapabilityAssessmentConfirmationEmail({
        fullName,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Capability Assessment Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//COHORT SPONSORSHIP FORM ACTION
export const CohortSponsorshipFormAction = async (formData: FormData) => {
  try {
    // Organization Profile
    const organizationName = text(formData, "organizationName");
    const contactPerson = text(formData, "contactPerson");
    const positionRole = text(formData, "positionRole");
    const website = text(formData, "website");
    const email = text(formData, "email");
    const phoneNumber = text(formData, "phoneNumber");

    // Sponsorship Interest
    const sponsorshipAreas = JSON.parse(
      text(formData, "sponsorshipAreas") || "[]",
    );

    // Impact & Collaboration Interest
    const whySupport = text(formData, "whySupport");
    const impactAreas = text(formData, "impactAreas");

    // Optional
    const scheduleDiscussion = text(formData, "scheduleDiscussion");

    const requestId = `CS-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Cohort Sponsorship <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Cohort Sponsorship Inquiry from ${organizationName}`,
      react: CohortSponsorshipFormEmail({
        organizationName,
        contactPerson,
        positionRole,
        website,
        email,
        phoneNumber,
        sponsorshipAreas,
        whySupport,
        impactAreas,
        scheduleDiscussion,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Sponsorship Inquiry Received — IMHO GEN Academy`,
      react: CohortSponsorshipConfirmationEmail({
        organizationName,
        contactPerson,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Cohort Sponsorship Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//DESIGN FORGE COMMUNITY FORM ACTION
export const DesignForgeFormAction = async (formData: FormData) => {
  try {
    // Basic Profile
    const fullName = text(formData, "fullName");
    const email = text(formData, "email");
    const phoneNumber = text(formData, "phoneNumber");
    const institutionOrCompany = text(formData, "institutionOrCompany");
    const currentRole = text(formData, "currentRole");

    // Community Interests
    const areasOfInterest = JSON.parse(
      text(formData, "areasOfInterest") || "[]",
    );

    const mentorshipInterest = text(formData, "mentorshipInterest");

    const collaborationsInterest = text(formData, "collaborationsInterest");

    const challengesWorkshopsInterest = text(
      formData,
      "challengesWorkshopsInterest",
    );

    // Optional Links
    const linkedinProfile = text(formData, "linkedinProfile");
    const portfolioLink = text(formData, "portfolioLink");
    const socialHandle = text(formData, "socialHandle");

    // Final Question
    const whyJoin = text(formData, "whyJoin");

    const requestId = `DF-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Design Forge <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Design Forge Community Sign-up from ${fullName}`,
      react: DesignForgeFormEmail({
        fullName,
        email,
        phoneNumber,
        institutionOrCompany,
        currentRole,
        areasOfInterest,
        mentorshipInterest,
        collaborationsInterest,
        challengesWorkshopsInterest,
        linkedinProfile,
        portfolioLink,
        socialHandle,
        whyJoin,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Welcome to the Design Forge Community`,
      react: DesignForgeConfirmationEmail({
        fullName,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Design Forge Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//TIER 1 — CUSTOM ENGINEERING & FACTORY SOLUTIONS FORM ACTION
export const CustomEngineeringFormAction = async (formData: FormData) => {
  try {
    // 1.0 Client Information
    const organizationName = text(formData, "organizationName");
    const contactPerson = text(formData, "contactPerson");
    const email = text(formData, "email");
    const phoneNumber = text(formData, "phoneNumber");
    const siteLocation = text(formData, "siteLocation");

    // 2.0 Project Scope & Classification
    const projectScope = JSON.parse(text(formData, "projectScope") || "[]");

    const projectTitle = text(formData, "projectTitle");
    const primaryObjective = text(formData, "primaryObjective");

    // 3.0 Systems Engineering Core
    const materialInputs = text(formData, "materialInputs");

    const energyAndInformationInputs = text(
      formData,
      "energyAndInformationInputs",
    );

    const transformation = text(formData, "transformation");
    const outputs = text(formData, "outputs");
    const byProducts = text(formData, "byProducts");

    // 4.0 Operational Environment & Constraints
    const humanSystem = text(formData, "humanSystem");
    const activeEnvironment = text(formData, "activeEnvironment");
    const budgetExpectations = text(formData, "budgetExpectations");
    const targetTimeline = text(formData, "targetTimeline");

    const fileAttachments = JSON.parse(
      text(formData, "fileAttachments") || "[]",
    );

    const requestId = `T1-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Tier 1 Intake <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Tier 1 Custom Engineering Intake from ${organizationName}`,
      react: CustomEngineeringFormEmail({
        organizationName,
        contactPerson,
        email,
        phoneNumber,
        siteLocation,
        projectScope,
        projectTitle,
        primaryObjective,
        materialInputs,
        energyAndInformationInputs,
        transformation,
        outputs,
        byProducts,
        humanSystem,
        activeEnvironment,
        budgetExpectations,
        targetTimeline,
        fileAttachments,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Master Intake Received — IMHOGEN Tier 1`,
      react: CustomEngineeringConfirmationEmail({
        organizationName,
        contactPerson,
        projectTitle,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Custom Engineering Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};

//TIER 3 — ENGINEERING DRAFTING & DIGITIZATION FORM ACTION
export const DraftingDigitizationFormAction = async (formData: FormData) => {
  try {
    // 1.0 Client Information
    const organizationName = text(formData, "organizationName");
    const contactPerson = text(formData, "contactPerson");
    const email = text(formData, "email");
    const phoneNumber = text(formData, "phoneNumber");
    const siteLocation = text(formData, "siteLocation");

    // 2.0 The Source Asset
    const inputMaterialType = text(formData, "inputMaterialType");
    const assetCondition = text(formData, "assetCondition");

    // 3.0 Required Deliverables & End Goal
    const draftingServices = JSON.parse(
      text(formData, "draftingServices") || "[]",
    );

    const endGoal = text(formData, "endGoal");

    // 4.0 Technical Specifications & Preferences
    const draftingStandard = text(formData, "draftingStandard");

    const outputFormats = JSON.parse(text(formData, "outputFormats") || "[]");

    const fileAttachments = JSON.parse(
      text(formData, "fileAttachments") || "[]",
    );

    const requestId = `T3-${Date.now()}`;

    const { error } = await sendEmail({
      from: `Tier 3 Intake <imhogen@admin.imhogen.com>`,
      to: ["imhogen22@gmail.com"],
      subject: `New Tier 3 Drafting Intake from ${organizationName}`,
      react: DraftingDigitizationFormEmail({
        organizationName,
        contactPerson,
        email,
        phoneNumber,
        siteLocation,
        inputMaterialType,
        assetCondition,
        draftingServices,
        endGoal,
        draftingStandard,
        outputFormats,
        fileAttachments,
        requestId,
      }),
    });

    if (error) {
      console.error("Resend Email Error:", error);

      return { error: "Failed to send email" };
    }

    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Green Lane Request Received — IMHOGEN Tier 3`,
      react: DraftingDigitizationConfirmationEmail({
        organizationName,
        contactPerson,
      }),
    });

    if (confirmationError) {
      console.error("Confirmation Email Error:", confirmationError);
      // We don't fail the entire operation if just the confirmation fails
    }

    return { success: true };
  } catch (error: any) {
    console.error("Drafting Digitization Form Action Error:", error);

    return { error: error.message || "An unexpected error occurred" };
  }
};
