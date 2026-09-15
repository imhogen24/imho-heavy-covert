"use client";

import {
  formatRating,
  type CapabilityAssessmentFormData,
} from "@/lib/schemas/capability-assessment/z";
import { FolderOpen, Lightbulb, Sliders, User } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { CapabilityAssessmentPDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<CapabilityAssessmentFormData>;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // SAFETY: useWatch types values as DeepPartial, but useForm is seeded with
  // defaultValues for this schema and the preview only displays them.
  const formData = useWatch({ control }) as CapabilityAssessmentFormData;

  const sections: PreviewSection[] = [
    {
      title: "Basic Information",
      icon: User,
      fields: [
        { label: "Full Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Background", value: formData.background },
        { label: "Experience Level", value: formData.experienceLevel },
      ],
    },
    {
      title: "Self-Assessment (1–5)",
      icon: Sliders,
      fields: [
        {
          label: "Problem Definition",
          value: formatRating(formData.problemDefinition),
        },
        {
          label: "Concept Generation",
          value: formatRating(formData.conceptGeneration),
        },
        { label: "CAD Modeling", value: formatRating(formData.cadModeling) },
        {
          label: "Engineering Analysis",
          value: formatRating(formData.engineeringAnalysis),
        },
        {
          label: "Technical Documentation",
          value: formatRating(formData.technicalDocumentation),
        },
        {
          label: "Manufacturing Understanding",
          value: formatRating(formData.manufacturingUnderstanding),
        },
        {
          label: "Systems Thinking",
          value: formatRating(formData.systemsThinking),
        },
      ],
    },
    {
      title: "Practical Thinking",
      icon: Lightbulb,
      fields: [
        {
          label: "Project Description",
          value: formData.projectDescription,
          fullWidth: true,
          isMedium: true,
        },
        {
          label: "Area to Improve",
          value: formData.improvementArea,
          fullWidth: true,
          isMedium: true,
        },
        {
          label: "Biggest Weakness",
          value: formData.biggestWeakness,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
    {
      title: "Portfolio / Project Link",
      icon: FolderOpen,
      fields: [{ label: "Portfolio Link", value: formData.portfolioLink }],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<CapabilityAssessmentPDF data={formData} />}
      fileName="capability-assessment"
    />
  );
};
