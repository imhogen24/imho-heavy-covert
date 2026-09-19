import { z } from "zod";

export const AcademyPartnershipSchema = z.object({
  // SECTION 1 — ORGANIZATION PROFILE
  organizationName: z
    .string()
    .min(2, { message: "Organization name must be at least 2 characters long" })
    .max(200, { message: "Organization name cannot exceed 200 characters" }),
  organizationWebsite: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  contactPerson: z
    .string()
    .min(2, { message: "Contact person must be at least 2 characters long" })
    .max(100, { message: "Contact person cannot exceed 100 characters" }),
  positionRole: z
    .string()
    .min(2, { message: "Position/Role must be at least 2 characters long" })
    .max(100, { message: "Position/Role cannot exceed 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\+[1-9]\d{1,14}$/.test(value), {
      message:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    })
    .optional(),

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
    .min(1, { message: "Please select at least one area of interest" }),
  collaborationDescription: z
    .string()
    .min(10, {
      message:
        "Please share at least 10 characters on what you want to collaborate on",
    })
    .max(1500, { message: "Response cannot exceed 1500 characters" }),

  // SECTION 3 — OPTIONAL DETAILS
  expectedOutcomes: z
    .string()
    .max(1500, { message: "Response cannot exceed 1500 characters" })
    .optional()
    .or(z.literal("")),
  additionalInformation: z
    .string()
    .max(1500, { message: "Response cannot exceed 1500 characters" })
    .optional()
    .or(z.literal("")),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type AcademyPartnershipFormData = z.infer<
  typeof AcademyPartnershipSchema
>;
