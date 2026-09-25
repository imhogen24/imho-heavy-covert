import { z } from "zod";

import {
  email,
  nameText,
  optionalPhoneNumber,
  optionalUrl,
  requiredText,
} from "@/lib/schemas/fields/z";

export const CohortSponsorshipSchema = z.object({
  // SECTION 1 — ORGANIZATION PROFILE
  organizationName: nameText("Organization name", 200),
  contactPerson: nameText("Contact person", 100),
  positionRole: nameText("Position/Role", 100),
  website: optionalUrl,
  email,
  phoneNumber: optionalPhoneNumber,

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
  whySupport: requiredText(
    10,
    1500,
    "Please share at least 10 characters on why your organization is interested",
  ),
  impactAreas: requiredText(
    10,
    1500,
    "Please share at least 10 characters on the outcomes that matter most",
  ),

  // OPTIONAL SECTION
  scheduleDiscussion: z.enum(["Yes", "No"]).optional(),
});

export type CohortSponsorshipFormData = z.infer<typeof CohortSponsorshipSchema>;
