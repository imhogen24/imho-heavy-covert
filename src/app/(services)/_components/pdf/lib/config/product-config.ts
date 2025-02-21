import { ProductFormData } from "@/lib/z";
import { PDFConfig, SectionConfig } from "../types";



export const productPdfConfig: PDFConfig = {
  requestType: "Product",

  getSections: (data: ProductFormData): SectionConfig[] => [
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
          value: data.energyInputs,
          condition: !!data.energyInputs
        },
        {
          label: "Data Inputs",
          value: data.informationInputs,
          condition: !!data.informationInputs
        },
        {
          label: "Living System Inputs",
          value: data.livingSystemInputs,
          condition: !!data.livingSystemInputs
        },
        {
          label: "Biological Component",
          value: data.biologicalComponent ? "Yes" : "No"
        },
        {
          label: "Biological Input Description",
          value: data.biologicalInputDescription,
          condition: !!data.biologicalInputDescription && data.biologicalComponent
        },
      ]
    },
    {
      title: "Transformation Requirements (System Process)",
      fields: [
        {
          label: "Transformation Description",
          value: data.transformationDescription,
          condition: !!data.transformationDescription
        },
        {
          label: "Performance Targets",
          value: data.performanceTargets,
          condition: !!data.performanceTargets
        },
      ]
    },
    {
      title: "Output Requirements",
      fields: [
        {
          label: "System Outputs",
          value: data.systemOutputs,
          condition: !!data.systemOutputs
        },
        {
          label: "Data Outputs",
          value: data.informationOutputs,
          condition: !!data.informationOutputs
        },
        {
          label: "Energy Outputs",
          value: data.energyOutputs,
          condition: !!data.energyOutputs
        },
        {
          label: "Living Things Outputs",
          value: data.livingThingsOutputs,
          condition: !!data.livingThingsOutputs
        },
      ]
    },
    {
      title: "Operational Agents",
      fields: [
        {
          label: "Human Systems",
          value: data.humanSystems,
          condition: !!data.humanSystems
        },
        {
          label: "Technical Systems",
          value: data.technicalSystems,
          condition: !!data.technicalSystems
        },
        {
          label: "Environmental Systems",
          value: data.environment,
          condition: !!data.environment
        },
        {
          label: "Information Systems",
          value: data.informationSystems,
          condition: !!data.informationSystems
        },
        {
          label: "Management Systems",
          value: data.managementSystems,
          condition: !!data.managementSystems
        },
      ]
    },
    {
      title: "Safety, Maintenance and Scalability",
      fields: [
        {
          label: "Safety Requirements",
          value: data.safetyRequirements,
          condition: !!data.safetyRequirements
        },
        {
          label: "Maintenance Needs",
          value: data.maintenanceNeeds,
          isArray: true,
          condition: !!data.maintenanceNeeds && data.maintenanceNeeds.length > 0
        },
        {
          label: "Future Scalability",
          value: data.futureScalability,
          condition: !!data.futureScalability
        },
      ]
    },
    {
      title: "Collaboration and Communication",
      fields: [
        {
          label: "Collaboration Preferences",
          value: data.collaborationPreferences,
          isArray: true,
          condition: !!data.collaborationPreferences && data.collaborationPreferences.length > 0
        },
        {
          label: "Additional Comments",
          value: data.additionalComments,
          condition: !!data.additionalComments
        },
      ]
    },
  ],

  getFooterText: (data: ProductFormData) => {
    const date = data.createdAt ? new Date(data.createdAt).toLocaleDateString() : new Date().toLocaleDateString();
    return `IMHO Product Request • ${date}`;
  }
};