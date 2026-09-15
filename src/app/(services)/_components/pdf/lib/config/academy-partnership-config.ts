import { AcademyPartnershipFormData } from "@/lib/schemas/academy-partnership/z";
import { PDFConfig, SectionConfig } from "../types";

export const academyPartnershipPdfConfig: PDFConfig = {
  requestType: "Academy Partnership",

  getSections: (data: AcademyPartnershipFormData): SectionConfig[] => [
    {
      title: "Organization Profile",
      fields: [
        { label: "Organization Name", value: data.organizationName },
        {
          label: "Organization Website",
          value: data.organizationWebsite,
          condition: !!data.organizationWebsite,
        },
        { label: "Contact Person", value: data.contactPerson },
        { label: "Position / Role", value: data.positionRole },
        { label: "Email", value: data.email },
        {
          label: "Phone Number",
          value: data.phoneNumber,
          condition: !!data.phoneNumber,
        },
      ],
    },
    {
      title: "Partnership Interest",
      fields: [
        {
          label: "Areas of Interest",
          value: data.areasOfInterest,
          isArray: true,
          condition: !!data.areasOfInterest && data.areasOfInterest.length > 0,
        },
        {
          label: "Collaboration Description",
          value: data.collaborationDescription,
          condition: !!data.collaborationDescription,
        },
      ],
    },
    {
      title: "Optional Details",
      fields: [
        {
          label: "Expected Outcomes",
          value: data.expectedOutcomes,
          condition: !!data.expectedOutcomes,
        },
        {
          label: "Additional Information",
          value: data.additionalInformation,
          condition: !!data.additionalInformation,
        },
      ],
    },
  ],

  getFooterText: (data: AcademyPartnershipFormData) => {
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();

    return `IMHO Academy Partnership Inquiry • ${date}`;
  },
};
