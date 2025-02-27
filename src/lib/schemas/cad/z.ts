import { z } from 'zod';

export const CadSchema = z.object({
  /*Section A:  Client Information */
  organizationName: z.string().min(2).max(50),
  contactPerson: z.string().min(3).max(20),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string().min(2),
  organizationOperations: z.string().min(10),
  documentationPurpose: z.string().min(2),

  /*Section B: Documentation Requirements */
  documentationTypes: z.array(
    z.enum([
      "2D Engineering Drawings",
      "3D Models",
      "Rendered Images",
      "Technical Illustrations",
      "User Manuals",
    ]),
  ).optional(),

  otherDocumentationTypes: z.string().optional(),

  fileFormats: z.array(z.enum(
    ["CAD files(eg. AutoCAD, SolidWorks)",
      "Vector images(eg. SVG, AI, EPS)",
      "PDF documents"])).optional(),

  otherFileFormats: z.string().trim().optional(),

  // Technical Details
  technicalSpecifications: z.string(),
  technicalStandards: z.string(),

  //Section C:  Aesthetic Preferences
  visualStylePreferences: z.string(),
  layoutPreferences: z.string(),
  additionalDesignFeatures: z.string().trim().optional(),

  //Section D:  Project Specifics
  preferredTimeline: z.string(),
  requirePeriodicDrafts: z.boolean().optional(),
  additionalServices: z
    .array(z.enum(["Prototyping", "Testing", "Further Design Works"]))
    .optional(),
  additionalComments: z.string().trim().optional(),

  fileAttachments: z.array(z.string()).default([]),

  // Metadata (optional as these are typically auto-generated)
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CadFormData = z.infer<typeof CadSchema>;
