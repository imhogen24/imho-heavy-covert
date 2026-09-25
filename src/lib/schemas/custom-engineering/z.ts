import { z } from "zod";

import {
  email,
  nameText,
  optionalText,
  phoneNumber,
  requiredText,
} from "@/lib/schemas/fields/z";
import { UploadedFilesSchema } from "@/lib/schemas/uploads/z";

/**
 * TIER 1 — Custom Engineering & Factory Solutions Intake.
 * Master intake for all Product and Process Engineering requests; the values
 * captured here act as the Single Source of Truth (SSOT) for the project
 * lifecycle. Mirrors IMHOGEN ERM document D1.1.
 */
export const CustomEngineeringSchema = z.object({
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

  // SECTION 2.0 — PROJECT SCOPE & CLASSIFICATION
  projectScope: z
    .array(z.enum(["Product Design", "Process / Factory Design"]))
    .min(1, { error: "Please select at least one scale of support" }),
  projectTitle: nameText("Project title", 200),
  primaryObjective: requiredText(
    10,
    2000,
    "Please share at least 10 characters on the objective or problem to solve",
  ),

  // SECTION 3.0 — SYSTEMS ENGINEERING CORE
  materialInputs: requiredText(5, 2000, "Please describe the material inputs"),
  energyAndInformationInputs: requiredText(
    5,
    2000,
    "Please describe the energy and information inputs",
  ),
  transformation: requiredText(
    10,
    2000,
    "Please describe what must happen to the raw material",
  ),
  outputs: requiredText(
    5,
    2000,
    "Please describe the final product and target throughput",
  ),
  byProducts: optionalText(2000),

  // SECTION 4.0 — OPERATIONAL ENVIRONMENT & CONSTRAINTS
  humanSystem: optionalText(1000),
  activeEnvironment: optionalText(1000),
  budgetExpectations: optionalText(500),
  targetTimeline: optionalText(500),

  fileAttachments: UploadedFilesSchema,
  // Not `z.literal(true)`: the checkbox defaults to false, so the form input
  // type has to stay `boolean`.
  disclaimer: z.boolean().refine((value) => value === true, {
    error: "You must agree to the terms of agreement",
  }),
});

export type CustomEngineeringFormData = z.infer<typeof CustomEngineeringSchema>;

/**
 * Form-input shape: fields with a zod `.default()` are optional before parsing.
 * `useForm` needs this as its input generic, with the parsed type as its output.
 */
export type CustomEngineeringFormInput = z.input<
  typeof CustomEngineeringSchema
>;
