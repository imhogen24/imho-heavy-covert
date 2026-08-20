"use client";

import { type AcademyPartnershipFormData } from "@/lib/schemas/academy-partnership/z";
import { BriefcaseBusiness, Handshake, Info } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { AcademyPartnershipPDF } from "../../pdf/docs";
import {
  FormPreviewDialog,
  type PreviewSection,
} from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<AcademyPartnershipFormData>;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // useWatch keeps the preview in sync with the live form values.
  const formData = useWatch({ control }) as AcademyPartnershipFormData;

  const sections: PreviewSection[] = [
    {
      title: "Organization Profile",
      icon: BriefcaseBusiness,
      fields: [
        { label: "Organization Name", value: formData.organizationName },
        { label: "Organization Website", value: formData.organizationWebsite },
        { label: "Contact Person", value: formData.contactPerson },
        { label: "Position / Role", value: formData.positionRole },
        { label: "Email", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
      ],
    },
    {
      title: "Partnership Interest",
      icon: Handshake,
      fields: [
        {
          label: "Areas of Interest",
          value: formData.areasOfInterest,
          isArray: true,
        },
        {
          label: "Collaboration Description",
          value: formData.collaborationDescription,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
    {
      title: "Optional Details",
      icon: Info,
      fields: [
        {
          label: "Expected Outcomes",
          value: formData.expectedOutcomes,
          fullWidth: true,
          isMedium: true,
        },
        {
          label: "Additional Information",
          value: formData.additionalInformation,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<AcademyPartnershipPDF data={formData} />}
      fileName="academy-partnership-inquiry"
    />
  );
};
