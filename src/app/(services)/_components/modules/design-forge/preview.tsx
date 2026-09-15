"use client";

import { type DesignForgeFormData } from "@/lib/schemas/design-forge/z";
import { FolderOpen, MessageSquare, User, Users } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { DesignForgePDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<DesignForgeFormData>;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // SAFETY: useWatch types values as DeepPartial, but useForm is seeded with
  // defaultValues for this schema and the preview only displays them.
  const formData = useWatch({ control }) as DesignForgeFormData;

  const sections: PreviewSection[] = [
    {
      title: "Basic Profile",
      icon: User,
      fields: [
        { label: "Full Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
        {
          label: "Institution / Company",
          value: formData.institutionOrCompany,
        },
        { label: "Current Role / Discipline", value: formData.currentRole },
      ],
    },
    {
      title: "Community Interests",
      icon: Users,
      fields: [
        {
          label: "Areas of Interest",
          value: formData.areasOfInterest,
          isArray: true,
        },
        {
          label: "Interested in Mentorship",
          value: formData.mentorshipInterest,
        },
        {
          label: "Interested in Collaborations/Projects",
          value: formData.collaborationsInterest,
        },
        {
          label: "Interested in Challenges/Workshops",
          value: formData.challengesWorkshopsInterest,
        },
      ],
    },
    {
      title: "Optional Links",
      icon: FolderOpen,
      fields: [
        { label: "LinkedIn Profile", value: formData.linkedinProfile },
        { label: "Portfolio Link", value: formData.portfolioLink },
        { label: "Social Handle", value: formData.socialHandle },
      ],
    },
    {
      title: "Why Join",
      icon: MessageSquare,
      fields: [
        {
          label: "Why Join",
          value: formData.whyJoin,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<DesignForgePDF data={formData} />}
      fileName="design-forge-signup"
    />
  );
};
