import { z } from "zod";

import { COUNTRIES } from "@/lib/countries";
import {
  email,
  nameText,
  optionalUrl,
  phoneNumber,
  requiredText,
} from "@/lib/schemas/fields/z";

export const ImhoGenAcademySchema = z.object({
  // SECTION 1 — BASIC INFORMATION
  fullName: nameText("Full name", 100),
  phoneNumber,
  email,
  country: z.enum(COUNTRIES, { error: "Please select a country" }),
  cityTown: nameText("City/Town", 100),

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
  institutionOrCompany: nameText("Institution/Company", 200),
  programDisciplineRole: nameText("Program/Discipline/Role", 200),
  currentLevelYear: z
    .enum(["Level 100", "Level 200", "Level 300", "Level 400", "Other"])
    .optional(),

  // SECTION 3 — INTEREST & CAPABILITY
  whyJoin: requiredText(
    10,
    1000,
    "Please share at least 10 characters on why you want to join",
  ),
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
  portfolioLink: optionalUrl,

  // SECTION 4 — COMMITMENT
  willingForIntensiveTraining: z.enum(["Yes", "No"], {
    error: "Please select an option",
  }),
  weeklyHoursCommitment: z.enum(
    ["Less than 5 hours", "5–10 hours", "10–20 hours", "20+ hours"],
    { error: "Please select your weekly hours commitment" },
  ),

  // FINAL QUESTION
  whySelectYou: requiredText(
    10,
    1500,
    "Please share at least 10 characters on why we should select you",
  ),
});

export type ImhoGenAcademyFormData = z.infer<typeof ImhoGenAcademySchema>;
