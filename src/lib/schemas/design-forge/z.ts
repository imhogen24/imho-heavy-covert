import { z } from "zod";

import {
  email,
  nameText,
  optionalText,
  optionalUrl,
  phoneNumber,
  requiredText,
} from "@/lib/schemas/fields/z";

export const DesignForgeSchema = z.object({
  // SECTION 1 — BASIC PROFILE
  fullName: nameText("Full name", 100),
  email,
  phoneNumber,
  institutionOrCompany: nameText("Institution/Company", 200),
  currentRole: z.enum(
    [
      "Engineering Student",
      "Graduate Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "CAD Designer",
      "Product Designer",
      "Fabricator / Technician",
      "Builder / Innovator",
      "Entrepreneur",
      "Researcher",
      "Technical Professional",
      "Other",
    ],
    { error: "Please select your current role or discipline" },
  ),

  // SECTION 2 — COMMUNITY INTERESTS
  areasOfInterest: z
    .array(
      z.enum([
        "Engineering Design",
        "CAD & 3D Modeling",
        "Product Development",
        "Manufacturing & Fabrication",
        "Mechanical Systems",
        "Robotics & Automation",
        "Technical Problem Solving",
        "Design Thinking",
        "Systems Engineering",
        "Innovation & Building",
        "Engineering Research",
        "Technical Entrepreneurship",
      ]),
    )
    .min(1, { error: "Please select at least one area of interest" }),
  mentorshipInterest: z.enum(["Yes", "No"], {
    error: "Please select an option",
  }),
  collaborationsInterest: z.enum(["Yes", "No"], {
    error: "Please select an option",
  }),
  challengesWorkshopsInterest: z.enum(["Yes", "No"], {
    error: "Please select an option",
  }),

  // SECTION 3 — OPTIONAL LINKS
  linkedinProfile: optionalUrl,
  portfolioLink: optionalUrl,
  socialHandle: optionalText(100, "Social handle cannot exceed 100 characters"),

  // FINAL QUESTION
  whyJoin: requiredText(
    10,
    1000,
    "Please share at least 10 characters on why you want to join",
  ),
});

export type DesignForgeFormData = z.infer<typeof DesignForgeSchema>;
