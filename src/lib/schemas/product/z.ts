import { z } from "zod";

export const ProductSchema = z
  .object({
    //CLIENT INFORMATION
    organizationName: z
      .string()
      .min(2, {
        message: "Organization name must be at least 2 characters long",
      })
      .max(500, { message: "Organization name cannot exceed 500 characters" }),
    contactPerson: z
      .string()
      .min(2, {
        message: "Contact person name must be at least 2 characters long",
      })
      .max(100, {
        message: "Contact person name cannot exceed 100 characters",
      }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phoneNumber: z
      .string()
      .trim()
      .refine(
        (value) => {
          return /^\+[1-9]\d{1,14}$/.test(value);
        },
        {
          message:
            "Phone number must be in E.164 format with country code (e.g., +12025550123)",
        }
      ),
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters long" })
      .max(500, { message: "Address cannot exceed 500 characters" }),
    businessOverview: z
      .string()
      .min(10, {
        message: "Business overview must be at least 10 characters long",
      })
      .max(500, { message: "Business overview cannot exceed 500 characters" }),

    //INPUT REQUIREMENTS
    materialInputs: z
      .string()
      .min(5, {
        message:
          "Material inputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    energyInputs: z
      .string()
      .min(5, {
        message: "Energy inputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    informationInputs: z
      .string()
      .min(5, {
        message:
          "Information inputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    livingSystemInputs: z.boolean().default(false),
    livingSystemInputDescription: z
      .string()
      .min(5, {
        message:
          "Living system input description must be at least 5 characters long",
      })
      .optional()
      .or(z.literal("")),

    //TRANSFORMATION REQUIREMENTS(SYSTEM PROCESS)
    transformationDescription: z
      .string()
      .min(5, {
        message:
          "Transformation description must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    performanceTargets: z
      .string()
      .min(5, {
        message:
          "Performance targets must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),

    //OUTPUT REQUIREMENTS
    systemOutputs: z
      .string()
      .min(5, {
        message:
          "System outputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    informationOutputs: z
      .string()
      .min(5, {
        message:
          "Information outputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    energyOutputs: z
      .string()
      .min(5, {
        message:
          "Energy outputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    livingThingsOutputs: z
      .string()
      .min(5, {
        message:
          "Living things outputs must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),

    // OPERATIONAL AGENTS
    humanSystems: z
      .string()
      .min(5, {
        message: "Human systems must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    technicalSystems: z
      .string()
      .min(5, {
        message:
          "Technical systems must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    environment: z
      .string()
      .min(5, {
        message:
          "Environment description must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    informationSystems: z
      .string()
      .min(5, {
        message:
          "Information systems must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    managementSystems: z
      .string()
      .min(5, {
        message:
          "Management systems must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),

    //  SAFETY, MAINTENANCE AND SCALABILITY
    safetyRequirements: z
      .string()
      .min(5, {
        message:
          "Safety requirements must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    maintenanceNeeds: z
      .array(
        z.enum(
          ["In-house Maintenance", "Ongoing maintenance service form IMHO"],
          {
            message:
              "Maintenance needs must be either 'In-house Maintenance' or 'Ongoing maintenance service form IMHO'",
          }
        )
      )
      .optional(),
    futureScalability: z
      .string()
      .min(5, {
        message:
          "Future scalability must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),

    //COLLABORATION AND COMMUNICATION
    collaborationPreferences: z.array(
      z.enum(
        ["Regular Meetings", "Weekly Updates via Email", "On-demand Reporting"],
        {
          message:
            "Collaboration preferences must be one or more of: 'Regular Meetings', 'Weekly Updates via Email', or 'On-demand Reporting'",
        }
      )
    ),
    additionalComments: z
      .string()
      .min(5, {
        message:
          "Additional comments must be at least 5 characters long if provided",
      })
      .optional()
      .or(z.literal("")),
    fileAttachments: z.array(z.string()).default([]),
    disclaimer: z
      .boolean()
      .default(false)
      .refine((val) => val === true, {
        message: "You must accept the disclaimer to continue",
      }),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .refine(
    (data) => {
      if (data.livingSystemInputs === true) {
        return (
          data.livingSystemInputDescription &&
          data.livingSystemInputDescription.length >= 5
        );
      }
      return true;
    },
    {
      message:
        "Living system input description is required when living system inputs is checked",
      path: ["livingSystemInputDescription"],
    }
  );

export type ProductFormData = z.infer<typeof ProductSchema>;
