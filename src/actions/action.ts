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
  payload: Parameters<typeof resend.emails.send>[0]
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
          EMAIL_TIMEOUT_MS
        );
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
};

//CONTACT FORM ACTION
export const contactFormAction = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const filesString = formData.get("files") as string;

    // Parse the JSON string back to an array
    const files = filesString ? JSON.parse(filesString) : [];

    // Send notification to admin
    const { data, error } = await sendEmail({
      from: `Contact Form <imhogen@admin.imhogen.com>`,
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

    // Send confirmation to submitter
    const { error: confirmationError } = await sendEmail({
      from: `Confirmation <imhogen@admin.imhogen.com>`,
      to: [`${email}`],
      subject: `Thank you for contacting us, ${name}`,
      react: ContactConfirmationEmail({ name }) as React.ReactElement,
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
    const fullName = formData.get("fullName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const cityTown = formData.get("cityTown") as string;

    // Education / Background
    const currentStatus = formData.get("currentStatus") as string;
    const institutionOrCompany = formData.get("institutionOrCompany") as string;
    const programDisciplineRole = formData.get(
      "programDisciplineRole"
    ) as string;
    const currentLevelYear = formData.get("currentLevelYear") as string;

    // Interest & Capability
    const whyJoin = formData.get("whyJoin") as string;
    const areasOfInterest = JSON.parse(
      (formData.get("areasOfInterest") as string) || "[]"
    );
    const hasPriorProjects = formData.get("hasPriorProjects") as string;
    const portfolioLink = formData.get("portfolioLink") as string;

    // Commitment
    const willingForIntensiveTraining = formData.get(
      "willingForIntensiveTraining"
    ) as string;
    const weeklyHoursCommitment = formData.get(
      "weeklyHoursCommitment"
    ) as string;

    // Final Question
    const whySelectYou = formData.get("whySelectYou") as string;

    const requestId = `AA-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const organizationName = formData.get("organizationName") as string;
    const organizationWebsite = formData.get("organizationWebsite") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const positionRole = formData.get("positionRole") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;

    // Partnership Interest
    const areasOfInterest = JSON.parse(
      (formData.get("areasOfInterest") as string) || "[]"
    );
    const collaborationDescription = formData.get(
      "collaborationDescription"
    ) as string;

    // Optional Details
    const expectedOutcomes = formData.get("expectedOutcomes") as string;
    const additionalInformation = formData.get(
      "additionalInformation"
    ) as string;

    const requestId = `AP-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const supportTypes = JSON.parse(
      (formData.get("supportTypes") as string) || "[]"
    );

    // Support Interest
    const supportContribution = formData.get("supportContribution") as string;

    const requestId = `AS-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const background = formData.get("background") as string;
    const experienceLevel = formData.get("experienceLevel") as string;

    // Self-Assessment (1–5) — submitted as strings, stored as numbers
    const problemDefinition = Number(formData.get("problemDefinition"));
    const conceptGeneration = Number(formData.get("conceptGeneration"));
    const cadModeling = Number(formData.get("cadModeling"));
    const engineeringAnalysis = Number(formData.get("engineeringAnalysis"));
    const technicalDocumentation = Number(
      formData.get("technicalDocumentation")
    );
    const manufacturingUnderstanding = Number(
      formData.get("manufacturingUnderstanding")
    );
    const systemsThinking = Number(formData.get("systemsThinking"));

    // Practical Thinking
    const projectDescription = formData.get("projectDescription") as string;
    const improvementArea = formData.get("improvementArea") as string;
    const biggestWeakness = formData.get("biggestWeakness") as string;

    // Optional
    const portfolioLink = formData.get("portfolioLink") as string;

    const requestId = `CA-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const positionRole = formData.get("positionRole") as string;
    const website = formData.get("website") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;

    // Sponsorship Interest
    const sponsorshipAreas = JSON.parse(
      (formData.get("sponsorshipAreas") as string) || "[]"
    );

    // Impact & Collaboration Interest
    const whySupport = formData.get("whySupport") as string;
    const impactAreas = formData.get("impactAreas") as string;

    // Optional
    const scheduleDiscussion = formData.get("scheduleDiscussion") as string;

    const requestId = `CS-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const institutionOrCompany = formData.get("institutionOrCompany") as string;
    const currentRole = formData.get("currentRole") as string;

    // Community Interests
    const areasOfInterest = JSON.parse(
      (formData.get("areasOfInterest") as string) || "[]"
    );
    const mentorshipInterest = formData.get("mentorshipInterest") as string;
    const collaborationsInterest = formData.get(
      "collaborationsInterest"
    ) as string;
    const challengesWorkshopsInterest = formData.get(
      "challengesWorkshopsInterest"
    ) as string;

    // Optional Links
    const linkedinProfile = formData.get("linkedinProfile") as string;
    const portfolioLink = formData.get("portfolioLink") as string;
    const socialHandle = formData.get("socialHandle") as string;

    // Final Question
    const whyJoin = formData.get("whyJoin") as string;

    const requestId = `DF-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const siteLocation = formData.get("siteLocation") as string;

    // 2.0 Project Scope & Classification
    const projectScope = JSON.parse(
      (formData.get("projectScope") as string) || "[]"
    );
    const projectTitle = formData.get("projectTitle") as string;
    const primaryObjective = formData.get("primaryObjective") as string;

    // 3.0 Systems Engineering Core
    const materialInputs = formData.get("materialInputs") as string;
    const energyAndInformationInputs = formData.get(
      "energyAndInformationInputs"
    ) as string;
    const transformation = formData.get("transformation") as string;
    const outputs = formData.get("outputs") as string;
    const byProducts = formData.get("byProducts") as string;

    // 4.0 Operational Environment & Constraints
    const humanSystem = formData.get("humanSystem") as string;
    const activeEnvironment = formData.get("activeEnvironment") as string;
    const budgetExpectations = formData.get("budgetExpectations") as string;
    const targetTimeline = formData.get("targetTimeline") as string;

    const fileAttachments = JSON.parse(
      (formData.get("fileAttachments") as string) || "[]"
    );
    const requestId = `T1-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
    const organizationName = formData.get("organizationName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const siteLocation = formData.get("siteLocation") as string;

    // 2.0 The Source Asset
    const inputMaterialType = formData.get("inputMaterialType") as string;
    const assetCondition = formData.get("assetCondition") as string;

    // 3.0 Required Deliverables & End Goal
    const draftingServices = JSON.parse(
      (formData.get("draftingServices") as string) || "[]"
    );
    const endGoal = formData.get("endGoal") as string;

    // 4.0 Technical Specifications & Preferences
    const draftingStandard = formData.get("draftingStandard") as string;
    const outputFormats = JSON.parse(
      (formData.get("outputFormats") as string) || "[]"
    );

    const fileAttachments = JSON.parse(
      (formData.get("fileAttachments") as string) || "[]"
    );
    const requestId = `T3-${Date.now()}`;

    const { data, error } = await sendEmail({
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
      }) as React.ReactElement,
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
      }) as React.ReactElement,
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
