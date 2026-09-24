import { z } from "zod";

const ratingField = z
  .number({ error: "Please select a rating from 1 to 5" })
  .int()
  .min(1, { error: "Please select a rating from 1 to 5" })
  .max(5, { error: "Please select a rating from 1 to 5" });

export const CapabilityAssessmentSchema = z.object({
  // SECTION 1 — BASIC INFORMATION
  fullName: z
    .string()
    .min(2, { error: "Full name must be at least 2 characters long" })
    .max(100, { error: "Full name cannot exceed 100 characters" }),
  email: z.email({ error: "Please enter a valid email address" }),
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
    { error: "Please select your current background" },
  ),
  experienceLevel: z.enum(
    ["Basic", "Intermediate", "Advanced", "Professional"],
    { error: "Please select your experience level" },
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
      error: "Please share at least 10 characters about your project",
    })
    .max(1500, { error: "Response cannot exceed 1500 characters" }),
  improvementArea: z
    .string()
    .min(10, {
      error: "Please share at least 10 characters on what you want to improve",
    })
    .max(1000, { error: "Response cannot exceed 1000 characters" }),
  biggestWeakness: z
    .string()
    .min(10, {
      error: "Please share at least 10 characters on your biggest weakness",
    })
    .max(1000, { error: "Response cannot exceed 1000 characters" }),

  // OPTIONAL SECTION — PORTFOLIO / PROJECT LINK
  portfolioLink: z
    .url({ error: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CapabilityAssessmentFormData = z.infer<
  typeof CapabilityAssessmentSchema
>;

/**
 * Shared 1–5 self-assessment scale. Used by the form's rating guide and by the
 * preview, PDF and email renderers so the wording never drifts apart.
 */
export const RATING_SCALE = [
  { score: 1, meaning: "Very Weak" },
  { score: 2, meaning: "Basic" },
  { score: 3, meaning: "Moderate" },
  { score: 4, meaning: "Strong" },
  { score: 5, meaning: "Very Strong" },
] as const;

export const formatRating = (value?: number) => {
  if (!value) return "";
  const meaning = RATING_SCALE.find((item) => item.score === value)?.meaning;

  return meaning ? `${value}/5 — ${meaning}` : `${value}/5`;
};
