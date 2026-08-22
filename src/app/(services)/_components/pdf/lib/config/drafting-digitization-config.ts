import { DraftingDigitizationFormData } from "@/lib/schemas/drafting-digitization/z";
import { PDFConfig, SectionConfig } from "../types";

export const draftingDigitizationPdfConfig: PDFConfig = {
  requestType: "Tier 3 — Engineering Drafting & Digitization",

  getSections: (data: DraftingDigitizationFormData): SectionConfig[] => [
    {
      title: "1.0 Client Information",
      fields: [
        { label: "Organization / Client Name", value: data.organizationName },
        { label: "Contact Person & Title", value: data.contactPerson },
        { label: "Email Address", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        { label: "Physical Address / Project Site", value: data.siteLocation },
      ],
    },
    {
      title: "2.0 The Source Asset",
      fields: [
        {
          label: "Input Material Type",
          value: data.inputMaterialType,
          condition: !!data.inputMaterialType,
        },
        {
          label: "Asset Condition / Description",
          value: data.assetCondition,
          condition: !!data.assetCondition,
        },
      ],
    },
    {
      title: "3.0 Required Deliverables & End Goal",
      fields: [
        {
          label: "Drafting Services Required",
          value: data.draftingServices,
          isArray: true,
          condition:
            !!data.draftingServices && data.draftingServices.length > 0,
        },
        {
          label: "End Goal / Primary Use Case",
          value: data.endGoal,
          condition: !!data.endGoal,
        },
      ],
    },
    {
      title: "4.0 Technical Specifications & Preferences",
      fields: [
        {
          label: "Drafting Standard",
          value: data.draftingStandard,
          condition: !!data.draftingStandard,
        },
        {
          label: "Preferred Output Formats",
          value: data.outputFormats,
          isArray: true,
          condition: !!data.outputFormats && data.outputFormats.length > 0,
        },
      ],
    },
  ],

  getFooterText: (data: DraftingDigitizationFormData) => {
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();
    return `IMHOGEN ERM SYSTEM | DOCUMENT ID: T3.D1.3a | TIER 3 WORKFLOW • ${date}`;
  },
};
