import { ProcessFormData } from '@/lib/z';
import { PDFConfig, SectionConfig } from '../types';

export const processPdfConfig: PDFConfig = {
  requestType: "PROCESS",

  getSections: (data: ProcessFormData): SectionConfig[] => [
    {
      title: "Client Information",
      fields: [
        { label: "Organization Name", value: data.organizationName },
        { label: "Contact Person", value: data.contactPerson },
        { label: "Email", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        { label: "Address", value: data.address },
        { label: "Business Overview", value: data.businessOverview },
      ]
    },
    {
      title: "Input Requirements",
      fields: [
        {
          label: "Material Inputs",
          value: data.materialInputs,
          condition: !!data.materialInputs
        },
        {
          label: "Energy Inputs",
          value: data.EnergyInputs,
          condition: !!data.EnergyInputs
        },
        { label: "Information Inputs", value: data.informationInputs },
        {
          label: "Living Inputs",
          value: data.livingInputs,
          condition: !!data.livingInputs
        },
      ]
    },
    {
      title: "Operational Agents",
      fields: [
        { label: "Human Systems", value: data.humanSytems },
        { label: "Management Systems", value: data.managementSystems },
        { label: "Technical Systems", value: data.technicalSytems },
        { label: "Information Systems", value: data.informationSystems },
        { label: "Environmental Systems", value: data.environment },
      ]
    },
    {
      title: "Process Requirements",
      fields: [
        {
          label: "Existing Systems",
          value: data.existingSytems,
          condition: !!data.existingSytems
        },
        {
          label: "New System Requirements",
          value: data.newSystemRequiements,
          condition: !!data.newSystemRequiements
        },
        {
          label: "Key Metrics",
          value: data.KeyMetrics,
          condition: !!data.KeyMetrics
        },
      ]
    },
    {
      title: "Output Requirements",
      fields: [
        {
          label: "Material Outputs",
          value: data.materialOutputs,
          condition: !!data.materialOutputs
        },
        {
          label: "Energy Outputs",
          value: data.EnergyOutputs,
          condition: !!data.EnergyOutputs
        },
        { label: "Information Outputs", value: data.informationOutputs },
        {
          label: "Living Outputs",
          value: data.livingOutputs,
          condition: !!data.livingOutputs
        },
      ]
    },
    {
      title: "Challenges or Inefficiencies",
      fields: [
        {
          label: "Pain Points",
          value: data.painPoints,
          isArray: true,
          condition: !!data.painPoints?.length
        },
        { label: "Specific Issues", value: data.specificIssues },
      ]
    },
    {
      title: "Scalability and Future Goals",
      fields: [
        { label: "Future Growth Plans", value: data.futureGrowth ? "Yes" : "No" },
        { label: "Comparable Systems", value: data.comparableSystems },
      ]
    },
    {
      title: "Collaboration and Communication",
      fields: [
        {
          label: "Collaboration Preferences",
          value: data.collaborationPreferences,
          isArray: true,
          condition: !!data.collaborationPreferences?.length
        },
        {
          label: "Additional Comments",
          value: data.additionalComments,
          condition: !!data.additionalComments
        },
        {
          label: "File Attachments",
          value: data.fileAttachments,
          isArray: true,
          condition: !!data.fileAttachments.length
        },
      ]
    },
  ],

  getFooterText: (data: ProcessFormData) => `IMHO Process Request • ${new Date().toLocaleDateString()}`
};