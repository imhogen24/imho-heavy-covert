"use client";

import {
  type CustomEngineeringFormData,
  type CustomEngineeringFormInput,
} from "@/lib/schemas/custom-engineering/z";
import { BriefcaseBusiness, Settings, Sliders, User } from "lucide-react";
import { type Control, useWatch } from "react-hook-form";

import { CustomEngineeringPDF } from "../../pdf/docs";
import { FormPreviewDialog, type PreviewSection } from "../shared/form-preview";

interface FormPreviewProps {
  control: Control<
    CustomEngineeringFormInput,
    any,
    CustomEngineeringFormData
  >;
}

export const FormPreview = ({ control }: FormPreviewProps) => {
  // useWatch keeps the preview in sync with the live form values.
  const formData = useWatch({ control }) as CustomEngineeringFormData;

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
      title: "2.0 Project Scope & Classification",
      icon: BriefcaseBusiness,
      fields: [
        {
          label: "Scale of Engineering Support",
          value: formData.projectScope,
          isArray: true,
        },
        { label: "Project Title / Name", value: formData.projectTitle },
        {
          label: "Primary Objective / Problem to Solve",
          value: formData.primaryObjective,
          fullWidth: true,
          isMedium: true,
        },
      ],
    },
    {
      title: "3.0 Systems Engineering Core",
      icon: Settings,
      fields: [
        { label: "Inputs — Material", value: formData.materialInputs },
        {
          label: "Inputs — Energy & Information",
          value: formData.energyAndInformationInputs,
        },
        { label: "Transformation", value: formData.transformation },
        {
          label: "Outputs — Final Product & Target Throughput",
          value: formData.outputs,
        },
        {
          label: "By-products / Waste Streams",
          value: formData.byProducts,
        },
      ],
    },
    {
      title: "4.0 Operational Environment & Constraints",
      icon: Sliders,
      fields: [
        { label: "Human System", value: formData.humanSystem },
        { label: "Active Environment", value: formData.activeEnvironment },
        {
          label: "Budget Expectations / Constraints",
          value: formData.budgetExpectations,
        },
        { label: "Target Delivery Timeline", value: formData.targetTimeline },
      ],
    },
  ];

  return (
    <FormPreviewDialog
      sections={sections}
      pdfDocument={<CustomEngineeringPDF data={formData} />}
      fileName="tier-1-custom-engineering-intake"
    />
  );
};
