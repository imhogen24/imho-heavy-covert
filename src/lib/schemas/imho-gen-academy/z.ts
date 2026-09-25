import { z } from "zod";
import { COUNTRIES } from "@/lib/countries";

export const ImhoGenAcademySchema = z.object({
  // SECTION 1 — BASIC INFORMATION
  fullName: z
    .string()
    .min(2, { error: "Full name must be at least 2 characters long" })
    .max(100, { error: "Full name cannot exceed 100 characters" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
      error:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    }),
  email: z.email({ error: "Please enter a valid email address" }),
  country: z.enum(COUNTRIES, { error: "Please select a country" }),
  cityTown: z
    .string()
    .min(2, { error: "City/Town must be at least 2 characters long" })
    .max(100, { error: "City/Town cannot exceed 100 characters" }),

  // SECTION 2 — EDUCATION / BACKGROUND
  currentStatus: z.enum(
    [
      "SHS Student",
      "Engineering Student",
      "Graduate",
      "Post Graduate",
      "National Service Personnel",
      "Engineer",
      "Technical Professional",
      "Builder / Innovator",
      "Other",
    ],
    { error: "Please select your current status" },
  ),
  institutionOrCompany: z
    .string()
    .min(2, { error: "Institution/Company must be at least 2 characters long" })
    .max(200, { error: "Institution/Company cannot exceed 200 characters" }),
  programDisciplineRole: z
    .string()
    .min(2, {
      error: "Program/Discipline/Role must be at least 2 characters long",
    })
    .max(200, {
      error: "Program/Discipline/Role cannot exceed 200 characters",
    }),
  currentLevelYear: z
    .enum(["Level 100", "Level 200", "Level 300", "Level 400", "Other"])
    .optional(),

  // SECTION 3 — INTEREST & CAPABILITY
  whyJoin: z
    .string()
    .min(10, {
      error: "Please share at least 10 characters on why you want to join",
    })
    .max(1000, { error: "Response cannot exceed 1000 characters" }),
  areasOfInterest: z
    .array(
      z.enum([
        "Engineering Design",
        "CAD Modeling",
        "Product Development",
        "Manufacturing",
        "Mechanical Systems",
        "Technical Problem Solving",
        "Innovation & Building",
        "Systems Engineering",
        "Design Thinking",
      ]),
    )
    .min(1, { error: "Please select at least one area of interest" }),
  hasPriorProjects: z.enum(["Yes", "No"], { error: "Please select an option" }),
  portfolioLink: z
    .url({ error: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),

  // SECTION 4 — COMMITMENT
  willingForIntensiveTraining: z.enum(["Yes", "No"], {
    error: "Please select an option",
  }),
  weeklyHoursCommitment: z.enum(
    ["Less than 5 hours", "5–10 hours", "10–20 hours", "20+ hours"],
    { error: "Please select your weekly hours commitment" },
  ),

  // FINAL QUESTION
  whySelectYou: z
    .string()
    .min(10, {
      error: "Please share at least 10 characters on why we should select you",
    })
    .max(1500, { error: "Response cannot exceed 1500 characters" }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ImhoGenAcademyFormData = z.infer<typeof ImhoGenAcademySchema>;
