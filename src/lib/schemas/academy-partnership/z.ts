import { z } from "zod";

import {
  email,
  nameText,
  optionalPhoneNumber,
  optionalText,
  optionalUrl,
  requiredText,
} from "@/lib/schemas/fields/z";

export const AcademyPartnershipSchema = z.object({
  // SECTION 1 — ORGANIZATION PROFILE
  organizationName: nameText("Organization name", 200),
  organizationWebsite: optionalUrl,
  contactPerson: nameText("Contact person", 100),
  positionRole: nameText("Position/Role", 100),
  email,
  phoneNumber: optionalPhoneNumber,

  // SECTION 2 — PARTNERSHIP INTEREST
  areasOfInterest: z
    .array(
      z.enum([
        "Engineering Training Programs",
        "Workforce Development",
        "Research & Innovation",
        "Sponsorship Opportunities",
        "Community Programs",
        "Technical Challenges / Competitions",
        "Industrial Projects",
        "Internship & Placement Programs",
        "Engineering Design Capability Development",
        "Technical Ecosystem Development",
        "Product Development Collaboration",
      ]),
    )
    .min(1, { error: "Please select at least one area of interest" }),
  collaborationDescription: requiredText(
    10,
    1500,
    "Please share at least 10 characters on what you want to collaborate on",
  ),

  // SECTION 3 — OPTIONAL DETAILS
  expectedOutcomes: optionalText(1500),
  additionalInformation: optionalText(1500),
});

export type AcademyPartnershipFormData = z.infer<
  typeof AcademyPartnershipSchema
>;
