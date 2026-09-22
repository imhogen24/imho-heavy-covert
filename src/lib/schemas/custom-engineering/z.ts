import { z } from "zod";

import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

/**
 * TIER 1 — Custom Engineering & Factory Solutions Intake.
 * Master intake for all Product and Process Engineering requests; the values
 * captured here act as the Single Source of Truth (SSOT) for the project
 * lifecycle. Mirrors IMHOGEN ERM document D1.1.
 */
export const CustomEngineeringSchema = z.object({
  // SECTION 1.0 — CLIENT INFORMATION (SSOT GENERATOR)
  organizationName: z
    .string()
    .min(2, { message: "Organization name must be at least 2 characters long" })
    .max(200, { message: "Organization name cannot exceed 200 characters" }),
  contactPerson: z
    .string()
    .min(2, {
      message: "Contact person and title must be at least 2 characters long",
    })
    .max(150, {
      message: "Contact person and title cannot exceed 150 characters",
    }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
      message:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    }),
  siteLocation: z
    .string()
    .min(5, {
      message: "Physical address / project site must be at least 5 characters",
    })
    .max(500, { message: "Address cannot exceed 500 characters" }),

  // SECTION 2.0 — PROJECT SCOPE & CLASSIFICATION
  projectScope: z
    .array(z.enum(["Product Design", "Process / Factory Design"]))
    .min(1, { message: "Please select at least one scale of support" }),
  projectTitle: z
    .string()
    .min(2, { message: "Project title must be at least 2 characters long" })
    .max(200, { message: "Project title cannot exceed 200 characters" }),
  primaryObjective: z
    .string()
    .min(10, {
      message:
        "Please share at least 10 characters on the objective or problem to solve",
    })
    .max(2000, { message: "Response cannot exceed 2000 characters" }),

  // SECTION 3.0 — SYSTEMS ENGINEERING CORE
  materialInputs: z
    .string()
    .min(5, { message: "Please describe the material inputs" })
    .max(2000, { message: "Response cannot exceed 2000 characters" }),
  energyAndInformationInputs: z
    .string()
    .min(5, { message: "Please describe the energy and information inputs" })
    .max(2000, { message: "Response cannot exceed 2000 characters" }),
  transformation: z
    .string()
    .min(10, {
      message: "Please describe what must happen to the raw material",
    })
    .max(2000, { message: "Response cannot exceed 2000 characters" }),
  outputs: z
    .string()
    .min(5, {
      message: "Please describe the final product and target throughput",
    })
    .max(2000, { message: "Response cannot exceed 2000 characters" }),
  byProducts: z
    .string()
    .max(2000, { message: "Response cannot exceed 2000 characters" })
    .optional()
    .or(z.literal("")),

  // SECTION 4.0 — OPERATIONAL ENVIRONMENT & CONSTRAINTS
  humanSystem: z
    .string()
    .max(1000, { message: "Response cannot exceed 1000 characters" })
    .optional()
    .or(z.literal("")),
  activeEnvironment: z
    .string()
    .max(1000, { message: "Response cannot exceed 1000 characters" })
    .optional()
    .or(z.literal("")),
  budgetExpectations: z
    .string()
    .max(500, { message: "Response cannot exceed 500 characters" })
    .optional()
    .or(z.literal("")),
  targetTimeline: z
    .string()
    .max(500, { message: "Response cannot exceed 500 characters" })
    .optional()
    .or(z.literal("")),

  fileAttachments: UploadedFilesSchema,
  disclaimer: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms of agreement",
  }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CustomEngineeringFormData = z.infer<typeof CustomEngineeringSchema>;

/**
 * Form-input shape: fields with a zod `.default()` are optional before parsing.
 * `useForm` needs this as its input generic, with the parsed type as its output.
 */
export type CustomEngineeringFormInput = z.input<
  typeof CustomEngineeringSchema
>;
