import { CustomEngineeringFormData } from "@/lib/schemas/custom-engineering/z";
import { PDFConfig, SectionConfig } from "../types";

export const customEngineeringPdfConfig: PDFConfig = {
  requestType: "Tier 1 — Custom Engineering & Factory Solutions",

  getSections: (data: CustomEngineeringFormData): SectionConfig[] => [
    {
      title: "1.0 Client Information",
      fields: [
        { label: "Organization / Client Name", value: data.organizationName },
        { label: "Contact Person & Title", value: data.contactPerson },
        { label: "Email Address", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        {
          label: "Physical Address / Project Site",
          value: data.siteLocation,
        },
      ],
    },
    {
      title: "2.0 Project Scope & Classification",
      fields: [
        {
          label: "Scale of Engineering Support",
          value: data.projectScope,
          isArray: true,
          condition: !!data.projectScope && data.projectScope.length > 0,
        },
        {
          label: "Project Title / Name",
          value: data.projectTitle,
          condition: !!data.projectTitle,
        },
        {
          label: "Primary Objective / Problem to Solve",
          value: data.primaryObjective,
          condition: !!data.primaryObjective,
        },
      ],
    },
    {
      title: "3.0 Systems Engineering Core",
      fields: [
        {
          label: "Inputs — Material",
          value: data.materialInputs,
          condition: !!data.materialInputs,
        },
        {
          label: "Inputs — Energy & Information",
          value: data.energyAndInformationInputs,
          condition: !!data.energyAndInformationInputs,
        },
        {
          label: "Transformation",
          value: data.transformation,
          condition: !!data.transformation,
        },
        {
          label: "Outputs — Final Product & Target Throughput",
          value: data.outputs,
          condition: !!data.outputs,
        },
        {
          label: "By-products / Waste Streams",
          value: data.byProducts,
          condition: !!data.byProducts,
        },
      ],
    },
    {
      title: "4.0 Operational Environment & Constraints",
      fields: [
        {
          label: "Human System",
          value: data.humanSystem,
          condition: !!data.humanSystem,
        },
        {
          label: "Active Environment",
          value: data.activeEnvironment,
          condition: !!data.activeEnvironment,
        },
        {
          label: "Budget Expectations / Constraints",
          value: data.budgetExpectations,
          condition: !!data.budgetExpectations,
        },
        {
          label: "Target Delivery Timeline",
          value: data.targetTimeline,
          condition: !!data.targetTimeline,
        },
      ],
    },
  ],

  getFooterText: (data: CustomEngineeringFormData) => {
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();

    return `IMHOGEN ERM SYSTEM | DOCUMENT ID: D1.1 | TIER 1 WORKFLOW • ${date}`;
  },
};
