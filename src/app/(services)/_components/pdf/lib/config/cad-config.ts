import { CadFormData } from '@/lib/schemas/cad/z';
import { PDFConfig } from '../types';
import { SectionConfig } from '@/types/form-preview';



export const cadPdfConfig: PDFConfig = {
  requestType: "CAD",

  getSections: (data: CadFormData): SectionConfig[] => [
    {
      title: "Organization Details",
      fields: [
        { label: "Organization Name", value: data.organizationName },
        { label: "Contact Person", value: data.contactPerson },
        { label: "Email", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        { label: "Address", value: data.address },
        { label: "Operations", value: data.organizationOperations },
      ]
    },
    {
      title: "Documentation Details",
      fields: [
        { label: "Purpose", value: data.documentationPurpose },
        { label: "Types", value: data.documentationTypes, isArray: true },
        {
          label: "Other Types",
          value: data.otherDocumentationTypes,
          condition: !!data.otherDocumentationTypes
        },
        { label: "File Formats", value: data.fileFormats, isArray: true },
      ]
    },
    {
      title: "Technical Details",
      fields: [
        { label: "Specifications", value: data.technicalSpecifications },
        { label: "Standards", value: data.technicalStandards },
      ]
    },
    {
      title: "Design Preferences",
      fields: [
        { label: "Visual Style", value: data.visualStylePreferences },
        { label: "Layout", value: data.layoutPreferences },
        {
          label: "Additional Features",
          value: data.additionalDesignFeatures,
          condition: !!data.additionalDesignFeatures
        },
      ]
    },
    {
      title: "Additional Comments",
      fields: [
        { label: "Comments", value: data.additionalComments },
      ]
    },
  ],

  getFooterText: (data: CadFormData) => `IMHO CAD Request • ${new Date().toLocaleDateString()}`
};


