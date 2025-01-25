import { z } from "zod";

export const TestSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

/*PRODUCT SCHEMA */
export const ProductSchema = z.object({
  organizationName: z.string().min(2).max(200),
  contactPerson: z.string().min(2).max(20),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(10),
  address: z.string().min(2).max(20),
  businessOperations: z.string().min(10).max(200),
  productPurpose: z.string().min(10).max(200),
  productVision: z.string().min(10).max(200),
  productObjectives: z.string().min(10).max(200),
  targetAudience: z.string().min(2).max(100),
  coreFunctions: z.string().min(5).max(100),
  performanceMetrics: z.string().min(5).max(100),
  preferredMaterials: z.string().min(5).max(100),
  complianceStandards: z.string().min(5).max(100),
  environmentalConditions: z.string().min(5).max(100),
  visualStyle: z.string().min(5).max(100),
  ergonomicFeatures: z.string().min(5).max(100),
  brandingRequirements: z.string().min(5).max(100),
  budgetRange: z.string().min(5).max(100),
  preferredTimeline: z.string().min(5).max(100),
  requirePrototypes: z.boolean().default(false),
  numberOfPrototypes: z.number(),
  requiredTests: z.string().min(5).max(100),
  comparableProducts: z.string().min(5).max(100),
  collaborationPreferences: z
    .array(
      z.enum([
        "Regular Meetings",
        "Weekly Updates via Email",
        "On-demand Reporting",
      ]),
    )
    .optional()
    .or(z.literal("")),
  additionalComments: z.string().min(5).max(100),

  // Metadata
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

/*CAD schema */
export const CadSchema = z.object({
  // Client Information
  organizationName: z.string().min(2).max(50),
  contactPerson: z.string().min(3).max(20),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string().min(2).max(200),
  organizationOperations: z.string().min(10).max(200),
  documentationPurpose: z.string().min(2).max(200),

  // Documentation Requirements
  documentationTypes: z
    .array(
      z.enum([
        "2D Engineering Drawings",
        "3D Models",
        "Rendered Images",
        "Technical Illustrations",
        "User Manuals",
      ]),
    )
    .optional()
    .or(z.literal("")),
  otherDocumentationType: z.string().optional(),

  fileFormats: z.array(
    z
      .enum(["CAD files", "Vector images", "PDF documents"])
      .optional()
      .or(z.literal("")),
  ),
  otherFileFormat: z.string().trim().optional(),

  // Technical Details
  technicalSpecifications: z.string(),
  technicalStandards: z.string(),

  // Aesthetic Preferences
  visualStylePreferences: z.string(),
  layoutPreferences: z.string(),
  additionalDesignFeatures: z.string().trim().optional(),

  // Project Specifics
  preferredTimeline: z.string(),
  requirePeriodicDrafts: z.boolean().optional(),
  additionalServices: z.string().trim().optional(),
  additionalComments: z.string().trim().optional(),

  // Metadata (optional as these are typically auto-generated)
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
