import ContactConfirmationEmail from "@/components/emails/contact/confirmation";
import { after } from "next/server";
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

import { db } from "@/lib/db";

import {
  contactSubmissions,
  imhogenAcademySubmissions,
  imhogenPartnershipSubmissions,
  academySupportSubmissions,
  capabilityAssessmentSubmissions,
  cohortSponsorshipSubmissions,
  designForgeSubmissions,
  customEngineeringSubmissions,
  draftingDigitizationSubmissions,
} from "@/lib/db/schema";

import { eq, sql } from "drizzle-orm";

import type { ContactFormData } from "@/lib/schemas/z";
import type { ImhoGenAcademyFormData } from "@/lib/schemas/imho-gen-academy/z";
import type { AcademyPartnershipFormData } from "@/lib/schemas/academy-partnership/z";
import type { AcademySupportFormData } from "@/lib/schemas/academy-support/z";
import type { CapabilityAssessmentFormData } from "@/lib/schemas/capability-assessment/z";
import type { CohortSponsorshipFormData } from "@/lib/schemas/cohort-sponsorship/z";
import type { DesignForgeFormData } from "@/lib/schemas/design-forge/z";
import type { CustomEngineeringFormData } from "@/lib/schemas/custom-engineering/z";
import type { DraftingDigitizationFormData } from "@/lib/schemas/drafting-digitization/z";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_TIMEOUT_MS = 20000;

type EmailPayload = Parameters<typeof resend.emails.send>[0];

const sendEmail = async (
  payload: EmailPayload,
  idempotencyKey: string,
): Promise<Awaited<ReturnType<typeof resend.emails.send>>> => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      resend.emails.send(payload, {
        idempotencyKey,
      }),
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

/** A submission that passed its form schema, with its public reference. */
export type Submission<T> = { data: T; requestId: string };

/** Optional answers are stored as NULL, never as "". */
const orNull = (value?: string) => value || null;

const yes = (value?: "Yes" | "No") => value === "Yes";

/**
 * Sends the admin notification and the submitter's confirmation after the
 * response is sent. The submission is already saved, so a failed email is
 * logged with its request id rather than reported to the user as a failure.
 */

export type AnySubmissionTable =
  | typeof contactSubmissions
  | typeof imhogenAcademySubmissions
  | typeof cohortSponsorshipSubmissions
  | typeof draftingDigitizationSubmissions
  | typeof academySupportSubmissions
  | typeof designForgeSubmissions
  | typeof customEngineeringSubmissions
  | typeof capabilityAssessmentSubmissions
  | typeof imhogenPartnershipSubmissions;

export const processNotification = (
  table: AnySubmissionTable,
  requestId: string,
  emails: { admin: EmailPayload; confirmation: EmailPayload },
) => {
  after(async () => {
    //increase the notification attempts in db
    const [updatedRow] = await db
      .update(table)
      .set({
        notifyAttempts: sql`${table.notifyAttempts} + 1`,
      })
      .where(eq(table.requestId, requestId))
      .returning();

    if (!updatedRow) return;

    //using adminNotifiedAt as target, check if email has been sent or not; if not send it
    if (!updatedRow.adminNotifiedAt) {
      const admin = await sendEmail(emails.admin, `${requestId}:admin`);

      //if there's an error log it
      if (admin.error) {
        console.log(`Admin email failed for ${requestId}:`, admin.error);

        //if email has been sent, check and save the adminNotified time
      } else {
        await db
          .update(table)
          .set({ adminNotifiedAt: new Date() })
          .where(eq(table.requestId, requestId));
      }
    }

    //same process for use email
    if (!updatedRow.confirmationSentAt) {
      const confirmation = await sendEmail(
        emails.confirmation,
        `${requestId}:confirmation`,
      );

      if (confirmation.error) {
        console.log(
          `Confirmation email to user failed for ${requestId}:`,
          confirmation.error,
        );
      } else {
        await db
          .update(table)
          .set({ confirmationSentAt: new Date() })
          .where(eq(table.requestId, requestId));
      }
    }

    //cut attempting after 5
    if (updatedRow.notifyAttempts >= 5) {
      console.error(
        `[NOTIFY_GIVE_UP] Reached maximum attempts(5) for submission ${requestId}`,
      );
    }
  });
};

const notify = (
  table: AnySubmissionTable,
  requestId: string,
  emails: { admin: EmailPayload; confirmation: EmailPayload },
) => {
  after(async () => {
    await processNotification(table, requestId, emails);
  });
};

// CONTACT FORM
export const contactFormAction = async ({
  data,
  requestId,
}: Submission<ContactFormData>): Promise<void> => {
  const inserted = await db
    .insert(contactSubmissions)
    .values({
      name: data.name,
      email: data.email,
      message: data.message,
      files: data.files,
      requestId,
    })
    .onConflictDoNothing({ target: contactSubmissions.requestId })
    .returning({ requestId: contactSubmissions.requestId });

  if (inserted.length > 0) {
    notify(contactSubmissions, requestId, {
      admin: {
        from: `Contact Form <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Contact Form Submission from ${data.name}`,
        react: ContactFormEmail(data),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Thank you for contacting us, ${data.name}`,
        react: ContactConfirmationEmail({ name: data.name }),
      },
    });
  }
};

// IMHO GEN ACADEMY APPLICATION FORM
export const ImhoGenAcademyFormAction = async ({
  data,
  requestId,
}: Submission<ImhoGenAcademyFormData>): Promise<void> => {
  const inserted = await db
    .insert(imhogenAcademySubmissions)
    .values({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      country: data.country,
      cityTown: data.cityTown,
      currentStatus: data.currentStatus,
      institutionOrCompany: data.institutionOrCompany,
      programDisciplineRole: data.programDisciplineRole,
      currentLevelYear: orNull(data.currentLevelYear),
      whyJoin: data.whyJoin,
      areasOfInterest: data.areasOfInterest,
      hasPriorProjects: yes(data.hasPriorProjects),
      portfolioLink: orNull(data.portfolioLink),
      willingForIntensiveTraining: yes(data.willingForIntensiveTraining),
      weeklyHoursCommitment: data.weeklyHoursCommitment,
      whySelectYou: data.whySelectYou,
      requestId,
    })
    .onConflictDoNothing({ target: imhogenAcademySubmissions.requestId })
    .returning({ requestId: imhogenAcademySubmissions.requestId });

  if (inserted.length > 0) {
    notify(imhogenAcademySubmissions, requestId, {
      admin: {
        from: `Academy Application <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New IMHO GEN Academy Application from ${data.fullName}`,
        react: ImhoGenAcademyFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Application Received — IMHO GEN Academy`,
        react: ImhoGenAcademyConfirmationEmail({ fullName: data.fullName }),
      },
    });
  }
};

// ACADEMY PARTNERSHIP FORM
export const AcademyPartnershipFormAction = async ({
  data,
  requestId,
}: Submission<AcademyPartnershipFormData>): Promise<void> => {
  const inserted = await db
    .insert(imhogenPartnershipSubmissions)
    .values({
      organizationName: data.organizationName,
      organizationWebsite: orNull(data.organizationWebsite),
      contactPerson: data.contactPerson,
      positionRole: data.positionRole,
      email: data.email,
      phoneNumber: orNull(data.phoneNumber),
      areasOfInterest: data.areasOfInterest,
      collaborationDescription: data.collaborationDescription,
      expectedOutcomes: orNull(data.expectedOutcomes),
      additionalInformation: orNull(data.additionalInformation),
      requestId,
    })
    .onConflictDoNothing({ target: imhogenPartnershipSubmissions.requestId })
    .returning({ requestId: imhogenPartnershipSubmissions.requestId });

  if (inserted.length > 0) {
    notify(imhogenPartnershipSubmissions, requestId, {
      admin: {
        from: `Academy Partnership <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Academy Partnership Inquiry from ${data.organizationName}`,
        react: AcademyPartnershipFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Partnership Inquiry Received — IMHO GEN Academy`,
        react: AcademyPartnershipConfirmationEmail({
          organizationName: data.organizationName,
          contactPerson: data.contactPerson,
        }),
      },
    });
  }
};

// ACADEMY SUPPORT FORM
export const AcademySupportFormAction = async ({
  data,
  requestId,
}: Submission<AcademySupportFormData>): Promise<void> => {
  const inserted = await db
    .insert(academySupportSubmissions)
    .values({
      fullName: data.fullName,
      email: data.email,
      country: data.country,
      supportTypes: data.supportTypes,
      supportContribution: data.supportContribution,
      requestId,
    })
    .onConflictDoNothing({ target: academySupportSubmissions.requestId })
    .returning({ requestId: academySupportSubmissions.requestId });

  if (inserted.length > 0) {
    notify(academySupportSubmissions, requestId, {
      admin: {
        from: `Academy Support <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Academy Support Offer from ${data.fullName}`,
        react: AcademySupportFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Support Offer Received — IMHO GEN Academy`,
        react: AcademySupportConfirmationEmail({ fullName: data.fullName }),
      },
    });
  }
};

// CAPABILITY ASSESSMENT FORM
export const CapabilityAssessmentFormAction = async ({
  data,
  requestId,
}: Submission<CapabilityAssessmentFormData>): Promise<void> => {
  const inserted = await db
    .insert(capabilityAssessmentSubmissions)
    .values({
      fullName: data.fullName,
      email: data.email,
      background: data.background,
      experienceLevel: data.experienceLevel,
      problemDefinition: data.problemDefinition,
      conceptGeneration: data.conceptGeneration,
      cadModeling: data.cadModeling,
      engineeringAnalysis: data.engineeringAnalysis,
      technicalDocumentation: data.technicalDocumentation,
      manufacturingUnderstanding: data.manufacturingUnderstanding,
      systemsThinking: data.systemsThinking,
      projectDescription: data.projectDescription,
      improvementArea: data.improvementArea,
      biggestWeakness: data.biggestWeakness,
      portfolioLink: orNull(data.portfolioLink),
      requestId,
    })
    .onConflictDoNothing({ target: capabilityAssessmentSubmissions.requestId })
    .returning({ requestId: capabilityAssessmentSubmissions.requestId });

  if (inserted.length > 0) {
    notify(capabilityAssessmentSubmissions, requestId, {
      admin: {
        from: `Capability Assessment <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Capability Assessment from ${data.fullName}`,
        react: CapabilityAssessmentFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Assessment Received — IMHO GEN Academy`,
        react: CapabilityAssessmentConfirmationEmail({
          fullName: data.fullName,
        }),
      },
    });
  }
};

// COHORT SPONSORSHIP FORM
export const CohortSponsorshipFormAction = async ({
  data,
  requestId,
}: Submission<CohortSponsorshipFormData>): Promise<void> => {
  const inserted = await db
    .insert(cohortSponsorshipSubmissions)
    .values({
      organizationName: data.organizationName,
      contactPerson: data.contactPerson,
      positionRole: data.positionRole,
      website: orNull(data.website),
      email: data.email,
      phoneNumber: orNull(data.phoneNumber),
      sponsorshipAreas: data.sponsorshipAreas,
      whySupport: data.whySupport,
      impactAreas: data.impactAreas,
      scheduleDiscussion: data.scheduleDiscussion
        ? yes(data.scheduleDiscussion)
        : null,
      requestId,
    })
    .onConflictDoNothing({ target: cohortSponsorshipSubmissions.requestId })
    .returning({ requestId: cohortSponsorshipSubmissions.requestId });

  if (inserted.length > 0) {
    notify(cohortSponsorshipSubmissions, requestId, {
      admin: {
        from: `Cohort Sponsorship <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Cohort Sponsorship Inquiry from ${data.organizationName}`,
        react: CohortSponsorshipFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Sponsorship Inquiry Received — IMHO GEN Academy`,
        react: CohortSponsorshipConfirmationEmail({
          organizationName: data.organizationName,
          contactPerson: data.contactPerson,
        }),
      },
    });
  }
};

// DESIGN FORGE COMMUNITY FORM
export const DesignForgeFormAction = async ({
  data,
  requestId,
}: Submission<DesignForgeFormData>): Promise<void> => {
  const inserted = await db
    .insert(designForgeSubmissions)
    .values({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      institutionOrCompany: data.institutionOrCompany,
      currentRole: data.currentRole,
      areasOfInterest: data.areasOfInterest,
      mentorshipInterest: yes(data.mentorshipInterest),
      collaborationsInterest: yes(data.collaborationsInterest),
      challengesWorkshopsInterest: yes(data.challengesWorkshopsInterest),
      linkedinProfile: orNull(data.linkedinProfile),
      portfolioLink: orNull(data.portfolioLink),
      socialHandle: orNull(data.socialHandle),
      whyJoin: data.whyJoin,
      requestId,
    })
    .onConflictDoNothing({ target: designForgeSubmissions.requestId })
    .returning({ requestId: designForgeSubmissions.requestId });

  if (inserted.length > 0) {
    notify(designForgeSubmissions, requestId, {
      admin: {
        from: `Design Forge <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Design Forge Community Sign-up from ${data.fullName}`,
        react: DesignForgeFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Welcome to the Design Forge Community`,
        react: DesignForgeConfirmationEmail({ fullName: data.fullName }),
      },
    });
  }
};

// TIER 1 — CUSTOM ENGINEERING & FACTORY SOLUTIONS FORM
export const CustomEngineeringFormAction = async ({
  data,
  requestId,
}: Submission<CustomEngineeringFormData>): Promise<void> => {
  const inserted = await db
    .insert(customEngineeringSubmissions)
    .values({
      organizationName: data.organizationName,
      contactPerson: data.contactPerson,
      email: data.email,
      phoneNumber: data.phoneNumber,
      siteLocation: data.siteLocation,
      projectScope: data.projectScope,
      projectTitle: data.projectTitle,
      primaryObjective: data.primaryObjective,
      materialInputs: data.materialInputs,
      energyAndInformationInputs: data.energyAndInformationInputs,
      transformation: data.transformation,
      outputs: data.outputs,
      byProducts: orNull(data.byProducts),
      humanSystem: orNull(data.humanSystem),
      activeEnvironment: orNull(data.activeEnvironment),
      budgetExpectations: orNull(data.budgetExpectations),
      targetTimeline: orNull(data.targetTimeline),
      fileAttachments: data.fileAttachments,
      // The schema only accepts a submission whose disclaimer is ticked.
      termsAcceptedAt: new Date(),
      requestId,
    })
    .onConflictDoNothing({ target: customEngineeringSubmissions.requestId })
    .returning({ requestId: customEngineeringSubmissions.requestId });

  if (inserted.length > 0) {
    notify(customEngineeringSubmissions, requestId, {
      admin: {
        from: `Tier 1 Intake <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Tier 1 Custom Engineering Intake from ${data.organizationName}`,
        react: CustomEngineeringFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Master Intake Received — IMHOGEN Tier 1`,
        react: CustomEngineeringConfirmationEmail({
          organizationName: data.organizationName,
          contactPerson: data.contactPerson,
          projectTitle: data.projectTitle,
        }),
      },
    });
  }
};

// TIER 3 — ENGINEERING DRAFTING & DIGITIZATION FORM
export const DraftingDigitizationFormAction = async ({
  data,
  requestId,
}: Submission<DraftingDigitizationFormData>): Promise<void> => {
  const inserted = await db
    .insert(draftingDigitizationSubmissions)
    .values({
      organizationName: data.organizationName,
      contactPerson: data.contactPerson,
      email: data.email,
      phoneNumber: data.phoneNumber,
      siteLocation: data.siteLocation,
      inputMaterialType: data.inputMaterialType,
      assetCondition: data.assetCondition,
      draftingServices: data.draftingServices,
      endGoal: data.endGoal,
      draftingStandard: data.draftingStandard,
      outputFormats: data.outputFormats,
      fileAttachments: data.fileAttachments,
      // The schema only accepts a submission whose disclaimer is ticked.
      termsAcceptedAt: new Date(),
      requestId,
    })
    .onConflictDoNothing({ target: draftingDigitizationSubmissions.requestId })
    .returning({ requestId: draftingDigitizationSubmissions.requestId });

  if (inserted.length > 0) {
    notify(draftingDigitizationSubmissions, requestId, {
      admin: {
        from: `Tier 3 Intake <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Tier 3 Drafting Intake from ${data.organizationName}`,
        react: DraftingDigitizationFormEmail({ ...data, requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [data.email],
        subject: `Green Lane Request Received — IMHOGEN Tier 3`,
        react: DraftingDigitizationConfirmationEmail({
          organizationName: data.organizationName,
          contactPerson: data.contactPerson,
        }),
      },
    });
  }
};
