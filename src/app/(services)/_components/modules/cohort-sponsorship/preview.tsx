"use client";

import { type CohortSponsorshipFormData } from "@/lib/schemas/cohort-sponsorship/z";
import { BriefcaseBusiness, Handshake, Info, TrendingUp } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { CohortSponsorshipPDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<CohortSponsorshipFormData>;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // useWatch keeps the preview in sync with the live form values.
  const formData = useWatch({ control }) as CohortSponsorshipFormData;

  const sections: PreviewSection[] = [
    {
      title: "Organization Profile",
      icon: BriefcaseBusiness,
      fields: [
        { label: "Organization Name", value: formData.organizationName },
        { label: "Contact Person", value: formData.contactPerson },
        { label: "Position / Role", value: formData.positionRole },
        { label: "Website", value: formData.website },
        { label: "Email", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
      ],
    },
    {
      title: "Sponsorship Interest",
      icon: Handshake,
      fields: [
        {
          label: "Sponsorship Areas",
          value: formData.sponsorshipAreas,
          isArray: true,
        },
      ],
    },
    {
      title: "Impact & Collaboration Interest",
      icon: TrendingUp,
      fields: [
        {
          label: "Why Support",
          value: formData.whySupport,
          fullWidth: true,
          isMedium: true,
        },
        {
          label: "Impact Areas",
          value: formData.impactAreas,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
    {
      title: "Optional Section",
      icon: Info,
      fields: [
        {
          label: "Wants to Schedule a Discussion",
          value: formData.scheduleDiscussion,
        },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<CohortSponsorshipPDF data={formData} />}
      fileName="cohort-sponsorship-inquiry"
    />
  );
};
