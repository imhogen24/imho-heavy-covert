"use client";

import { type AcademySupportFormData } from "@/lib/schemas/academy-support/z";
import { LifeBuoy, User } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { AcademySupportPDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<AcademySupportFormData>;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // SAFETY: useWatch types values as DeepPartial, but useForm is seeded with
  // defaultValues for this schema and the preview only displays them.
  const formData = useWatch({ control }) as AcademySupportFormData;

  const sections: PreviewSection[] = [
    {
      title: "Donor Information",
      icon: User,
      fields: [
        { label: "Full Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Country", value: formData.country },
        {
          label: "Support Types",
          value: formData.supportTypes,
          isArray: true,
        },
      ],
    },
    {
      title: "Support Interest",
      icon: LifeBuoy,
      fields: [
        {
          label: "Support Should Contribute Toward",
          value: formData.supportContribution,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<AcademySupportPDF data={formData} />}
      fileName="academy-support-offer"
    />
  );
};
