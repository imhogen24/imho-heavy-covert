import { z } from "zod";

export const DesignForgeSchema = z.object({
  // SECTION 1 — BASIC PROFILE
  fullName: z
    .string()
    .min(2, { error: "Full name must be at least 2 characters long" })
    .max(100, { error: "Full name cannot exceed 100 characters" }),
  email: z.email({ error: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
      error:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    }),
  institutionOrCompany: z
    .string()
    .min(2, { error: "Institution/Company must be at least 2 characters long" })
    .max(200, { error: "Institution/Company cannot exceed 200 characters" }),
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
  linkedinProfile: z
    .url({ error: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  portfolioLink: z
    .url({ error: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  socialHandle: z
    .string()
    .max(100, { error: "Social handle cannot exceed 100 characters" })
    .optional()
    .or(z.literal("")),

  // FINAL QUESTION
  whyJoin: z
    .string()
    .min(10, {
      error: "Please share at least 10 characters on why you want to join",
    })
    .max(1000, { error: "Response cannot exceed 1000 characters" }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type DesignForgeFormData = z.infer<typeof DesignForgeSchema>;
