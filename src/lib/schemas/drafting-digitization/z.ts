import { z } from "zod";

import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

/**
 * TIER 3 — Engineering Drafting & Digitization Intake.
 * Initiates the "Green Lane" fast-track workflow for drafting, reverse
 * engineering and CAD services; the input material type dictates immediate
 * project triage. Mirrors IMHOGEN ERM document T3.D1.3a.
 */
export const DraftingDigitizationSchema = z.object({
  // SECTION 1.0 — CLIENT INFORMATION (SSOT GENERATOR)
  organizationName: z
    .string()
    .min(2, { error: "Organization name must be at least 2 characters long" })
    .max(200, { error: "Organization name cannot exceed 200 characters" }),
  contactPerson: z
    .string()
    .min(2, {
      error: "Contact person and title must be at least 2 characters long",
    })
    .max(150, {
      error: "Contact person and title cannot exceed 150 characters",
    }),
  email: z.email({ error: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
      error:
        "Phone number must be in E.164 format with country code (e.g., +12025550123)",
    }),
  siteLocation: z
    .string()
    .min(5, {
      error: "Physical address / project site must be at least 5 characters",
    })
    .max(500, { error: "Address cannot exceed 500 characters" }),

  // SECTION 2.0 — THE SOURCE ASSET
  inputMaterialType: z.enum(
    [
      "Physical Part / Machine",
      "Legacy 2D Drawings/PDFs",
      "Hand Sketches / Concepts",
      "Existing 3D Models",
    ],
    { error: "Please select the primary input type" },
  ),
  assetCondition: z
    .string()
    .min(10, {
      error: "Please describe the asset condition in at least 10 characters",
    })
    .max(2000, { error: "Response cannot exceed 2000 characters" }),

  // SECTION 3.0 — REQUIRED DELIVERABLES & END GOAL
  draftingServices: z
    .array(
      z.enum([
        "3D Solid Modeling (STEP/IGES)",
        "2D Manufacturing Drawings (GD&T)",
        "General Arrangement / Assembly",
        "Exploded Views for Manuals",
        "Automated BOM Extraction",
      ]),
    )
    .min(1, { error: "Please select at least one drafting service" }),
  endGoal: z
    .string()
    .min(3, { error: "Please describe the end goal or primary use case" })
    .max(500, { error: "Response cannot exceed 500 characters" }),

  // SECTION 4.0 — TECHNICAL SPECIFICATIONS & PREFERENCES
  draftingStandard: z.enum(["ISO", "ASME", "No Preference"], {
    error: "Please select a drafting standard",
  }),
  outputFormats: z
    .array(z.enum(["PDF", "DWG", "DXF", "STEP", "Native CAD"]))
    .min(1, { error: "Please select at least one output format" }),

  fileAttachments: UploadedFilesSchema,
  disclaimer: z
    .boolean()
    .refine((value) => value === true, {
      error: "You must agree to the terms of agreement",
    }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type DraftingDigitizationFormData = z.infer<
  typeof DraftingDigitizationSchema
>;

/**
 * Form-input shape: fields with a zod `.default()` are optional before parsing.
 * `useForm` needs this as its input generic, with the parsed type as its output.
 */
export type DraftingDigitizationFormInput = z.input<
  typeof DraftingDigitizationSchema
>;
