"use client";

import {
  type DraftingDigitizationFormData,
  type DraftingDigitizationFormInput,
} from "@/lib/schemas/drafting-digitization/z";
import { FileText, Package, Settings, User } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { DraftingDigitizationPDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<
    DraftingDigitizationFormInput,
    any,
    DraftingDigitizationFormData
  >;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // SAFETY: useWatch types values as DeepPartial, but useForm is seeded with
  // defaultValues for this schema and the preview only displays them.
  const formData = useWatch({ control }) as DraftingDigitizationFormData;

  const sections: PreviewSection[] = [
    {
      title: "1.0 Client Information",
      icon: User,
      fields: [
        {
          label: "Organization / Client Name",
          value: formData.organizationName,
        },
        { label: "Contact Person & Title", value: formData.contactPerson },
        { label: "Email Address", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
        {
          label: "Physical Address / Project Site",
          value: formData.siteLocation,
          fullWidth: true,
        },
      ],
    },
    {
      title: "2.0 The Source Asset",
      icon: Package,
      fields: [
        { label: "Input Material Type", value: formData.inputMaterialType },
        {
          label: "Asset Condition / Description",
          value: formData.assetCondition,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
    {
      title: "3.0 Required Deliverables & End Goal",
      icon: FileText,
      fields: [
        {
          label: "Drafting Services Required",
          value: formData.draftingServices,
          isArray: true,
        },
        { label: "End Goal / Primary Use Case", value: formData.endGoal },
      ],
    },
    {
      title: "4.0 Technical Specifications & Preferences",
      icon: Settings,
      fields: [
        { label: "Drafting Standard", value: formData.draftingStandard },
        {
          label: "Preferred Output Formats",
          value: formData.outputFormats,
          isArray: true,
        },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<DraftingDigitizationPDF data={formData} />}
      fileName="tier-3-drafting-digitization-intake"
    />
  );
};
