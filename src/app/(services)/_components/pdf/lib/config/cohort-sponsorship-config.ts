import { CohortSponsorshipFormData } from "@/lib/schemas/cohort-sponsorship/z";
import { PDFConfig, SectionConfig } from "../types";

export const cohortSponsorshipPdfConfig: PDFConfig = {
  requestType: "Cohort Sponsorship",

  getSections: (data: CohortSponsorshipFormData): SectionConfig[] => [
    {
      title: "Organization Profile",
      fields: [
        { label: "Organization Name", value: data.organizationName },
        { label: "Contact Person", value: data.contactPerson },
        { label: "Position / Role", value: data.positionRole },
        {
          label: "Website",
          value: data.website,
          condition: !!data.website,
        },
        { label: "Email", value: data.email },
        {
          label: "Phone Number",
          value: data.phoneNumber,
          condition: !!data.phoneNumber,
        },
      ],
    },
    {
      title: "Sponsorship Interest",
      fields: [
        {
          label: "Sponsorship Areas",
          value: data.sponsorshipAreas,
          isArray: true,
          condition:
            !!data.sponsorshipAreas && data.sponsorshipAreas.length > 0,
        },
      ],
    },
    {
      title: "Impact & Collaboration Interest",
      fields: [
        {
          label: "Why Support",
          value: data.whySupport,
          condition: !!data.whySupport,
        },
        {
          label: "Impact Areas",
          value: data.impactAreas,
          condition: !!data.impactAreas,
        },
      ],
    },
    {
      title: "Optional Section",
      fields: [
        {
          label: "Wants to Schedule a Discussion",
          value: data.scheduleDiscussion,
          condition: !!data.scheduleDiscussion,
        },
      ],
    },
  ],

  getFooterText: () => {
    // Rendered from live form values, so the date is always today.
    const date = new Date().toLocaleDateString();

    return `IMHO Cohort Sponsorship Inquiry • ${date}`;
  },
};
