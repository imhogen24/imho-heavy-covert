import { AcademySupportFormData } from "@/lib/schemas/academy-support/z";
import { PDFConfig, SectionConfig } from "../types";

export const academySupportPdfConfig: PDFConfig = {
  requestType: "Academy Support",

  getSections: (data: AcademySupportFormData): SectionConfig[] => [
    {
      title: "Donor Information",
      fields: [
        { label: "Full Name", value: data.fullName },
        { label: "Email", value: data.email },
        { label: "Country", value: data.country },
        {
          label: "Support Types",
          value: data.supportTypes,
          isArray: true,
          condition: !!data.supportTypes && data.supportTypes.length > 0,
        },
      ],
    },
    {
      title: "Support Interest",
      fields: [
        {
          label: "Support Should Contribute Toward",
          value: data.supportContribution,
          condition: !!data.supportContribution,
        },
      ],
    },
  ],

  getFooterText: () => {
    // Rendered from live form values, so the date is always today.
    const date = new Date().toLocaleDateString();

    return `IMHO Academy Support Offer • ${date}`;
  },
};
