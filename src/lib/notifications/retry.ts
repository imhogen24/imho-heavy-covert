//this implementation is what the cron relies on. In my src/app/api/cron/retry-notifications/route.ts, I looped
//over all 9 tables to be able to check which ones have not been sent and which one are 5 minutes old and try
//resending them if not sent
//In the whole action of sending them, i realized i need to determine which table we're on then construct the email
//and call the right email actions respectively, that is what this file is about. At the end of the day this is a
//huge function that is called in **route.ts
//You may think this function is not useful but without it,our cronjob would not actually execute sending emails
//So here it shall be

import { AnySubmissionTable, processNotification } from "@/actions/action";
import { Resend } from "resend";

import {
  academySupportSubmissions,
  capabilityAssessmentSubmissions,
  cohortSponsorshipSubmissions,
  contactSubmissions,
  customEngineeringSubmissions,
  designForgeSubmissions,
  draftingDigitizationSubmissions,
  imhogenAcademySubmissions,
  imhogenPartnershipSubmissions,
} from "../db/schema";

import ContactConfirmationEmail from "@/components/emails/contact/confirmation";
import ContactFormEmail from "@/components/emails/contact/contact-template";

import ImhoGenAcademyFormEmail from "@/components/emails/imho-gen-academy/academy-application-template";
import ImhoGenAcademyConfirmationEmail from "@/components/emails/imho-gen-academy/academy-confirmation";

import AcademyPartnershipConfirmationEmail from "@/components/emails/academy-partnership/partnership-confirmation";
import AcademyPartnershipFormEmail from "@/components/emails/academy-partnership/partnership-template";

import AcademySupportConfirmationEmail from "@/components/emails/academy-support/support-confirmation";
import AcademySupportFormEmail from "@/components/emails/academy-support/support-template";

import CapabilityAssessmentConfirmationEmail from "@/components/emails/capability-assessment/assessment-confirmation";
import CapabilityAssessmentFormEmail from "@/components/emails/capability-assessment/assessment-template";

import CohortSponsorshipConfirmationEmail from "@/components/emails/cohort-sponsorship/sponsorship-confirmation";
import CohortSponsorshipFormEmail from "@/components/emails/cohort-sponsorship/sponsorship-template";

import DesignForgeConfirmationEmail from "@/components/emails/design-forge/design-forge-confirmation";
import DesignForgeFormEmail from "@/components/emails/design-forge/design-forge-template";

import CustomEngineeringConfirmationEmail from "@/components/emails/custom-engineering/tier1-confirmation";
import CustomEngineeringFormEmail from "@/components/emails/custom-engineering/tier1-template";

import DraftingDigitizationConfirmationEmail from "@/components/emails/drafting-digitization/tier3-confirmation";
import DraftingDigitizationFormEmail from "@/components/emails/drafting-digitization/tier3-template";

type EmailPayload = Parameters<Resend["emails"]["send"]>[0];

export async function retrySubmission(table: AnySubmissionTable, row: any) {
  let emails: { admin: EmailPayload; confirmation: EmailPayload } | null = null;

  if (table === contactSubmissions) {
    emails = {
      admin: {
        from: `Contact Form <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Contact Form Submission from ${row.name}`,
        react: ContactFormEmail(row),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Thank you for contacting us, ${row.name}`,
        react: ContactConfirmationEmail({ name: row.name }),
      },
    };
  } else if (table === imhogenAcademySubmissions) {
    emails = {
      admin: {
        from: `Academy Application <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New IMHO GEN Academy Application from ${row.fullName}`,
        react: ImhoGenAcademyFormEmail({
          ...row,
          hasPriorProjects: row.hasPriorProjects ? "Yes" : "No",
          willingForIntensiveTraining: row.willingForIntensiveTraining
            ? "Yes"
            : "No",
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Application Received — IMHO GEN Academy`,
        react: ImhoGenAcademyConfirmationEmail({
          fullName: row.fullName,
        }),
      },
    };
  } else if (table === imhogenPartnershipSubmissions) {
    emails = {
      admin: {
        from: `Academy Partnership <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Academy Partnership Inquiry from ${row.organizationName}`,
        react: AcademyPartnershipFormEmail({
          ...row,
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Partnership Inquiry Received — IMHO GEN Academy`,
        react: AcademyPartnershipConfirmationEmail({
          organizationName: row.organizationName,
          contactPerson: row.contactPerson,
        }),
      },
    };
  } else if (table === academySupportSubmissions) {
    emails = {
      admin: {
        from: `Academy Support <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Academy Support Offer from ${row.fullName}`,
        react: AcademySupportFormEmail({ ...row, requestId: row.requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Support Offer Received — IMHO GEN Academy`,
        react: AcademySupportConfirmationEmail({ fullName: row.fullName }),
      },
    };
  } else if (table === capabilityAssessmentSubmissions) {
    emails = {
      admin: {
        from: `Capability Assessment <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Capability Assessment from ${row.fullName}`,
        react: CapabilityAssessmentFormEmail({
          ...row,
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Assessment Received — IMHO GEN Academy`,
        react: CapabilityAssessmentConfirmationEmail({
          fullName: row.fullName,
        }),
      },
    };
  } else if (table === cohortSponsorshipSubmissions) {
    emails = {
      admin: {
        from: `Cohort Sponsorship <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Cohort Sponsorship Inquiry from ${row.organizationName}`,
        react: CohortSponsorshipFormEmail({
          ...row,
          scheduleDiscussion:
            row.scheduleDiscussion === null
              ? undefined
              : row.scheduleDiscussion
                ? "Yes"
                : "No",
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Sponsorship Inquiry Received — IMHO GEN Academy`,
        react: CohortSponsorshipConfirmationEmail({
          organizationName: row.organizationName,
          contactPerson: row.contactPerson,
        }),
      },
    };
  } else if (table === designForgeSubmissions) {
    emails = {
      admin: {
        from: `Design Forge <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Design Forge Community Sign-up from ${row.fullName}`,
        react: DesignForgeFormEmail({
          ...row,
          mentorshipInterest: row.mentorshipInterest ? "Yes" : "No",
          collaborationsInterest: row.mentorshipInterest ? "Yes" : "No",
          challengesWorkshopsInterest: row.challengesWorkshopsInterest
            ? "Yes"
            : "No",
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Welcome to the Design Forge Community`,
        react: DesignForgeConfirmationEmail({ fullName: row.fullName }),
      },
    };
  } else if (table === customEngineeringSubmissions) {
    emails = {
      admin: {
        from: `Tier 1 Intake <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Tier 1 Custom Engineering Intake from ${row.organizationName}`,
        react: CustomEngineeringFormEmail({ ...row, requestId: row.requestId }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Master Intake Received — IMHOGEN Tier 1`,
        react: CustomEngineeringConfirmationEmail({
          organizationName: row.organizationName,
          contactPerson: row.contactPerson,
          projectTitle: row.projectTitle,
        }),
      },
    };
  } else if (table === draftingDigitizationSubmissions) {
    emails = {
      admin: {
        from: `Tier 3 Intake <imhogen@admin.imhogen.com>`,
        to: ["imhogen22@gmail.com"],
        subject: `New Tier 3 Drafting Intake from ${row.organizationName}`,
        react: DraftingDigitizationFormEmail({
          ...row,
          requestId: row.requestId,
        }),
      },
      confirmation: {
        from: `Confirmation <imhogen@admin.imhogen.com>`,
        to: [row.email],
        subject: `Green Lane Request Received — IMHOGEN Tier 3`,
        react: DraftingDigitizationConfirmationEmail({
          organizationName: row.organizationName,
          contactPerson: row.contactPerson,
        }),
      },
    };
  }

  //send email for each submission type
  if (emails) {
    await processNotification(table, row.requestId, emails);
  }
}
