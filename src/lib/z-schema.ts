import { z } from "zod";



/*TEST SCHEMA FOR FILE UPLOADS */
export const FileUploadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  files: z.array(z.string()).default([])
});


/*CAD schema */
export const CadSchema = z.object({
  /*Section A:  Client Information */
  organizationName: z.string().min(2).max(50),
  contactPerson: z.string().min(3).max(20),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string().min(2).max(200),
  organizationOperations: z.string().min(10).max(200),
  documentationPurpose: z.string().min(2).max(200),

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

  fileAttachments: z.array(z.string()).default([])
  ,

  // Metadata (optional as these are typically auto-generated)
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CadFormData = z.infer<typeof CadSchema>;

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
  collaborationPreferences: z
    .array(z.enum(["Regular Meetings", "Weekly Updates via Email", "On-demand Reporting"]))
    .optional(),
  requiredTests: z.string().min(5).max(100),
  comparableProducts: z.string().min(5).max(100),
  additionalComments: z.string().min(5).max(100),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

/*SUPPORT SCHEMA */


export const SupportSchema = z.object({

  //CLIENT INFORMATION
  organizationName: z.string().min(2).max(200),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(20),
  physicalPostalAddress: z.string().min(5).max(200),
  businessOverview: z.string().min(10).max(500),

  //TRAINING REQUIREMENTS
  trainingNeeds: z.string().min(10).max(500),
  trainingObjectives: z.string().min(10).max(500),
  numberOfParticipants: z.number().min(1).max(1000),
  participantRoles: z.string().min(5).max(200),
  participantSkillLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  trainingDeliveryMode: z.enum(["On-site", "Virtual", "Blended"]),
  trainingTimeline: z.object({
    startDate: z.date(),
    endDate: z.date()
  }).refine(data => data.startDate <= data.endDate, {
    message: "End date must be after or equal to start date",
    path: ["endDate"]
  }),
  
  
  //PROJECT SUPPORT REQUIREMENTS
  projectOverview: z.string().min(10).max(500),
  projectScopeDeliverables: z.string().min(10).max(500),
  collaborationPreferences: z
    .array(z.enum(["Regular meetings", "Weekly updates via email", "On-demand reporting"]))
    .optional(),
  projectDeadline: z.date(),


  //ADDITIONAL CONSIDERTATIONS
  toolsAndResources: z.string().min(5).max(500),
  longTermCollaboration: z.boolean().default(false),
  additionalInformation: z.string().min(5).max(500).optional(),
  fileAttachments: z.array(z.string()).default([]),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type SupportFormData = z.infer<typeof SupportSchema>;

/*PROCESS SCHEMA */
export const ProcessSchema = z.object({
  organizationName: z.string().min(2).max(200),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(20),
  address: z.string().min(5).max(200),
  businessOperations: z.string().min(10).max(1000),
  processPurpose: z.string().min(10).max(500),
  currentProcess: z.string().min(10).max(1000),
  currentProcessPurpose: z.string().min(10).max(500),
  currentPerformanceMetrics: z.string().min(10).max(500),
  painPoints: z
    .array(z.enum(["Low efficiency", "High operating costs", "Safety concerns", "Low output", "Quality issues", "Other"]))
    .min(1),
  specificChallenges: z.string().min(10).max(500),
  improvementGoals: z
    .array(z.enum(["Increased efficiency", "Reduced costs", "Improved safety", "Enhanced quality", "Higher output", "Other"]))
    .min(1),
  performanceTargets: z.string().min(10).max(500),
  primaryFunctions: z.string().min(10).max(1000),
  operationalNeeds: z
    .array(z.enum(["Manually", "Conveyor or automated systems", "Other"]))
    .min(1),
  specialRequirements: z.string().min(10).max(500),
  spaceAvailability: z.string().min(10).max(500),
  powerSupply: z.string().min(10).max(500),
  environmentalFactors: z.string().min(10).max(500),
  anticipateFutureGrowth: z.boolean(),
  growthAccommodation: z.string().min(10).max(500),
  comparableSystems: z.string().min(10).max(500),
  collaborationPreferences: z
    .array(z.enum(["Regular Meetings", "Weekly Updates via Email", "On-demand Reporting"]))
    .optional(),
  additionalComments: z.string().min(10).max(1000).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
