import { z } from "zod";
import { COUNTRIES } from "@/lib/countries";

export const AcademySupportSchema = z.object({
  // SECTION 1 — DONOR INFORMATION
  fullName: z
    .string()
    .min(2, { error: "Full name must be at least 2 characters long" })
    .max(100, { error: "Full name cannot exceed 100 characters" }),
  email: z.email({ error: "Please enter a valid email address" }),
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
  supportContribution: z
    .string()
    .min(10, {
      error:
        "Please share at least 10 characters on what your support should contribute toward",
    })
    .max(1500, { error: "Response cannot exceed 1500 characters" }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type AcademySupportFormData = z.infer<typeof AcademySupportSchema>;
