import { z } from "zod";

export const ProcessSchema = z.object({

  // CLIENT INFORMATION
  organizationName: z.string()
    .min(2, { message: "Organization name must be at least 2 characters long" }),
  contactPerson: z.string()
    .min(2, { message: "Contact person must be at least 2 characters long" })
    .max(100, { message: "Contact person must not exceed 100 characters" }),
  email: z.string()
    .email({ message: "Please provide a valid email address" }),
  phoneNumber: z.string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(20, { message: "Phone number must not exceed 20 characters" }),
  address: z.string()
    .min(5, { message: "Address must be at least 5 characters long" }),
  businessOverview: z.string()
    .min(10, { message: "Business overview must be at least 10 characters long" })
    .max(1000, { message: "Business overview must not exceed 1000 characters" }),

  //INPUT REQUIREMENTS
  materialInputs: z.string()
    .min(10, { message: "Material inputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  EnergyInputs: z.string()
    .min(10, { message: "Energy inputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  informationInputs: z.string()
    .min(10, { message: "Information inputs must be at least 10 characters long" }),
  livingInputs: z.string()
    .min(10, { message: "Living inputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),

  //OPERATIONAL AGENTS
  humanSytems: z.string()
    .min(10, { message: "Human systems must be at least 10 characters long" }),
  managementSystems: z.string()
    .min(10, { message: "Management systems must be at least 10 characters long" }),
  technicalSytems: z.string()
    .min(10, { message: "Technical systems must be at least 10 characters long" }),
  informationSystems: z.string()
    .min(10, { message: "Information systems must be at least 10 characters long" }),
  environment: z.string()
    .min(10, { message: "Environment must be at least 10 characters long" }),

  //PROCESS REQUIREMENTS
  existingSytems: z.string()
    .min(10, { message: "Existing systems must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  newSystemRequiements: z.string()
    .min(10, { message: "New system requirements must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  KeyMetrics: z.string()
    .min(10, { message: "Key metrics must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),

  //OUTPUT REQUIREMENTS
  materialOutputs: z.string()
    .min(10, { message: "Material outputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  EnergyOutputs: z.string()
    .min(10, { message: "Energy outputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),
  informationOutputs: z.string()
    .min(10, { message: "Information outputs must be at least 10 characters long" }),
  livingOutputs: z.string()
    .min(10, { message: "Living outputs must be at least 10 characters long if provided" })
    .optional()
    .or(z.literal('')),

  //CHALLENGES OR INEFFICIENCIES
  painPoints: z
    .array(z.enum(["Low efficiency", "High operating costs", "Safety concerns", "Low output", "Quality issues", "Other"],
      { message: "Pain points must be one or more of: 'Low efficiency', 'High operating costs', 'Safety concerns', 'Low output', 'Quality issues', or 'Other'" }))
    .min(1, { message: "At least one pain point must be selected if provided" })
    .optional(),
  specificIssues: z.string()
    .min(10, { message: "Specific issues must be at least 10 characters long" }),

  //SCALABIITY AND FUTURE GOALS
  futureGrowth: z.boolean()
    .default(false),
  comparableSystems: z.string()
    .min(10, { message: "Comparable systems must be at least 10 characters long" }),

  //COLLABORATION AND COMMUNICATION
  collaborationPreferences: z
    .array(z.enum(["Regular Meetings", "Weekly Updates via Email", "On-demand Reporting"],
      { message: "Collaboration preferences must be one or more of: 'Regular Meetings', 'Weekly Updates via Email', or 'On-demand Reporting'" }))
    .optional(),
  additionalComments: z.string()
    .min(10, { message: "Additional comments must be at least 10 characters long if provided" })
    .max(1000, { message: "Additional comments must not exceed 1000 characters" })
    .optional(),
  fileAttachments: z.array(z.string()).default([]),

  //METADATA
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ProcessFormData = z.infer<typeof ProcessSchema>;