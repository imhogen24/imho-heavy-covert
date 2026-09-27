import { z } from "zod";

export const CohortSponsorshipSchema = z.object({
  // SECTION 1 — ORGANIZATION PROFILE
  organizationName: z
    .string()
    .min(2, { error: "Organization name must be at least 2 characters long" })
    .max(200, { error: "Organization name cannot exceed 200 characters" }),
  contactPerson: z
    .string()
    .min(2, { error: "Contact person must be at least 2 characters long" })
    .max(100, { error: "Contact person cannot exceed 100 characters" }),
  positionRole: z
    .string()
    .min(2, { error: "Position/Role must be at least 2 characters long" })
    .max(100, { error: "Position/Role cannot exceed 100 characters" }),
  website: z
    .url({ error: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  email: z.email({ error: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\+[1-9]\d{1,14}$/.test(value), {
      error:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    })
    .optional(),

  // SECTION 2 — SPONSORSHIP INTEREST
  sponsorshipAreas: z
    .array(
      z.enum([
        "Full Cohort Sponsorship",
        "Partial Cohort Sponsorship",
        "Female Engineering Sponsorship",
        "Student Scholarship Support",
        "Engineering Equipment Sponsorship",
        "Workforce Development Partnership",
        "Community Engineering Programs",
        "Innovation & Technical Challenges",
        "Infrastructure Support",
      ]),
    )
    .min(1, { error: "Please select at least one sponsorship area" }),

  // SECTION 3 — IMPACT & COLLABORATION INTEREST
  whySupport: z
    .string()
    .min(10, {
      error:
        "Please share at least 10 characters on why your organization is interested",
    })
    .max(1500, { error: "Response cannot exceed 1500 characters" }),
  impactAreas: z
    .string()
    .min(10, {
      error:
        "Please share at least 10 characters on the outcomes that matter most",
    })
    .max(1500, { error: "Response cannot exceed 1500 characters" }),

  // OPTIONAL SECTION
  scheduleDiscussion: z.enum(["Yes", "No"]).optional(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CohortSponsorshipFormData = z.infer<typeof CohortSponsorshipSchema>;
