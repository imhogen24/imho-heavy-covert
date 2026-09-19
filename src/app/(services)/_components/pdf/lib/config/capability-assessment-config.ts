import {
  CapabilityAssessmentFormData,
  formatRating,
} from "@/lib/schemas/capability-assessment/z";
import { PDFConfig, SectionConfig } from "../types";

export const capabilityAssessmentPdfConfig: PDFConfig = {
  requestType: "Capability Assessment",

  getSections: (data: CapabilityAssessmentFormData): SectionConfig[] => [
    {
      title: "Basic Information",
      fields: [
        { label: "Full Name", value: data.fullName },
        { label: "Email", value: data.email },
        { label: "Background", value: data.background },
        { label: "Experience Level", value: data.experienceLevel },
      ],
    },
    {
      title: "Self-Assessment (1–5)",
      fields: [
        {
          label: "Problem Definition",
          value: formatRating(data.problemDefinition),
          condition: !!data.problemDefinition,
        },
        {
          label: "Concept Generation",
          value: formatRating(data.conceptGeneration),
          condition: !!data.conceptGeneration,
        },
        {
          label: "CAD Modeling",
          value: formatRating(data.cadModeling),
          condition: !!data.cadModeling,
        },
        {
          label: "Engineering Analysis",
          value: formatRating(data.engineeringAnalysis),
          condition: !!data.engineeringAnalysis,
        },
        {
          label: "Technical Documentation",
          value: formatRating(data.technicalDocumentation),
          condition: !!data.technicalDocumentation,
        },
        {
          label: "Manufacturing Understanding",
          value: formatRating(data.manufacturingUnderstanding),
          condition: !!data.manufacturingUnderstanding,
        },
        {
          label: "Systems Thinking",
          value: formatRating(data.systemsThinking),
          condition: !!data.systemsThinking,
        },
      ],
    },
    {
      title: "Practical Thinking",
      fields: [
        {
          label: "Project Description",
          value: data.projectDescription,
          condition: !!data.projectDescription,
        },
        {
          label: "Area to Improve",
          value: data.improvementArea,
          condition: !!data.improvementArea,
        },
        {
          label: "Biggest Weakness",
          value: data.biggestWeakness,
          condition: !!data.biggestWeakness,
        },
      ],
    },
    {
      title: "Portfolio / Project Link",
      fields: [
        {
          label: "Portfolio Link",
          value: data.portfolioLink,
          condition: !!data.portfolioLink,
        },
      ],
    },
  ],

  getFooterText: (data: CapabilityAssessmentFormData) => {
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();

    return `IMHO Capability Assessment • ${date}`;
  },
};
