import { z } from "zod";

import { COUNTRIES } from "@/lib/countries";
import { email, nameText, requiredText } from "@/lib/schemas/fields/z";

export const AcademySupportSchema = z.object({
  // SECTION 1 — DONOR INFORMATION
  fullName: nameText("Full name", 100),
  email,
  country: z.enum(COUNTRIES, { error: "Please select a country" }),
  supportTypes: z
    .array(
      z.enum([
        "One-Time Donation",
        "Monthly Support",
        "Student Scholarship Support",
        "Equipment Donation",
        "Infrastructure Support",
        "Community Program Support",
        "Corporate Support",
        "Other",
      ]),
    )
    .min(1, { error: "Please select at least one support type" }),

  // SECTION 2 — SUPPORT INTEREST
  supportContribution: requiredText(
    10,
    1500,
    "Please share at least 10 characters on what your support should contribute toward",
  ),
});

export type AcademySupportFormData = z.infer<typeof AcademySupportSchema>;
