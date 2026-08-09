import { z } from "zod";
import { COUNTRIES } from "@/lib/countries";

export const AcademySupportSchema = z.object({
  // SECTION 1 — DONOR INFORMATION
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" })
    .max(100, { message: "Full name cannot exceed 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.enum(COUNTRIES, {
    message: "Please select a country",
  }),
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
      ])
    )
    .min(1, { message: "Please select at least one support type" }),

  // SECTION 2 — SUPPORT INTEREST
  supportContribution: z
    .string()
    .min(10, {
      message:
        "Please share at least 10 characters on what your support should contribute toward",
    })
    .max(1500, { message: "Response cannot exceed 1500 characters" }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type AcademySupportFormData = z.infer<typeof AcademySupportSchema>;
