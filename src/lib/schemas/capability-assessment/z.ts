import { z } from "zod";

const ratingField = z
  .number({ message: "Please select a rating from 1 to 5" })
  .int()
  .min(1, { message: "Please select a rating from 1 to 5" })
  .max(5, { message: "Please select a rating from 1 to 5" });

export const CapabilityAssessmentSchema = z.object({
  // SECTION 1 — BASIC INFORMATION
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" })
    .max(100, { message: "Full name cannot exceed 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  background: z.enum(
    [
      "SHS Student",
      "Engineering Student",
      "Graduate",
      "National Service Personnel",
      "Engineer",
      "CAD Designer",
      "Technical Professional",
      "Builder / Innovator",
      "Other",
    ],
    { message: "Please select your current background" }
  ),
  experienceLevel: z.enum(
    ["Basic", "Intermediate", "Advanced", "Professional"],
    { message: "Please select your experience level" }
  ),

  // SECTION 2 — SELF-ASSESSMENT (1–5)
  problemDefinition: ratingField,
  conceptGeneration: ratingField,
  cadModeling: ratingField,
  engineeringAnalysis: ratingField,
  technicalDocumentation: ratingField,
  manufacturingUnderstanding: ratingField,
  systemsThinking: ratingField,

  // SECTION 3 — PRACTICAL THINKING
  projectDescription: z
    .string()
    .min(10, {
      message: "Please share at least 10 characters about your project",
    })
    .max(1500, { message: "Response cannot exceed 1500 characters" }),
  improvementArea: z
    .string()
    .min(10, {
      message: "Please share at least 10 characters on what you want to improve",
    })
    .max(1000, { message: "Response cannot exceed 1000 characters" }),
  biggestWeakness: z
    .string()
    .min(10, {
      message: "Please share at least 10 characters on your biggest weakness",
    })
    .max(1000, { message: "Response cannot exceed 1000 characters" }),

  // OPTIONAL SECTION — PORTFOLIO / PROJECT LINK
  portfolioLink: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CapabilityAssessmentFormData = z.infer<
  typeof CapabilityAssessmentSchema
>;
