import { z } from 'zod';

export const SupportSchema = z.object({

  //CLIENT INFORMATION
  organizationName: z.string().min(2),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(20),
  physicalPostalAddress: z.string().min(5),
  businessOverview: z.string().min(10),

  //TRAINING REQUIREMENTS
  trainingNeeds: z.string().min(10),
  trainingObjectives: z.string().min(10),
  numberOfParticipants: z.number().min(1).max(1000),
  participantRoles: z.string().min(5),
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
  projectOverview: z.string().min(10),
  projectScopeDeliverables: z.string().min(10),
  collaborationPreferences: z
    .array(z.enum(["Regular meetings", "Weekly updates via email", "On-demand reporting"]))
    .optional(),
  projectDeadline: z.date(),


  //ADDITIONAL CONSIDERTATIONS
  toolsAndResources: z.string().min(5),
  longTermCollaboration: z.boolean().default(false),
  additionalInformation: z.string().optional(),
  fileAttachments: z.array(z.string()).default([]),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type SupportFormData = z.infer<typeof SupportSchema>;