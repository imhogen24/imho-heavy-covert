import { z } from "zod";

import {
  email,
  nameText,
  phoneNumber,
  requiredText,
} from "@/lib/schemas/fields/z";
import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

/**
 * TIER 3 — Engineering Drafting & Digitization Intake.
 * Initiates the "Green Lane" fast-track workflow for drafting, reverse
 * engineering and CAD services; the input material type dictates immediate
 * project triage. Mirrors IMHOGEN ERM document T3.D1.3a.
 */
export const DraftingDigitizationSchema = z.object({
  // SECTION 1.0 — CLIENT INFORMATION (SSOT GENERATOR)
  organizationName: nameText("Organization name", 200),
  contactPerson: nameText("Contact person and title", 150),
  email,
  phoneNumber,
  siteLocation: requiredText(
    5,
    500,
    "Physical address / project site must be at least 5 characters",
    "Address cannot exceed 500 characters",
  ),

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
  assetCondition: requiredText(
    10,
    2000,
    "Please describe the asset condition in at least 10 characters",
  ),

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
  endGoal: requiredText(
    3,
    500,
    "Please describe the end goal or primary use case",
  ),

  // SECTION 4.0 — TECHNICAL SPECIFICATIONS & PREFERENCES
  draftingStandard: z.enum(["ISO", "ASME", "No Preference"], {
    error: "Please select a drafting standard",
  }),
  outputFormats: z
    .array(z.enum(["PDF", "DWG", "DXF", "STEP", "Native CAD"]))
    .min(1, { error: "Please select at least one output format" }),

  fileAttachments: UploadedFilesSchema,
  // Not `z.literal(true)`: the checkbox defaults to false, so the form input
  // type has to stay `boolean`.
  disclaimer: z.boolean().refine((value) => value === true, {
    error: "You must agree to the terms of agreement",
  }),
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
