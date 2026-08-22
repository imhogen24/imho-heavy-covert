import { DesignForgeFormData } from "@/lib/schemas/design-forge/z";
import { PDFConfig, SectionConfig } from "../types";

export const designForgePdfConfig: PDFConfig = {
  requestType: "Design Forge Community",

  getSections: (data: DesignForgeFormData): SectionConfig[] => [
    {
      title: "Basic Profile",
      fields: [
        { label: "Full Name", value: data.fullName },
        { label: "Email", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        { label: "Institution / Company", value: data.institutionOrCompany },
        { label: "Current Role / Discipline", value: data.currentRole },
      ],
    },
    {
      title: "Community Interests",
      fields: [
        {
          label: "Areas of Interest",
          value: data.areasOfInterest,
          isArray: true,
          condition: !!data.areasOfInterest && data.areasOfInterest.length > 0,
        },
        {
          label: "Interested in Mentorship",
          value: data.mentorshipInterest,
          condition: !!data.mentorshipInterest,
        },
        {
          label: "Interested in Collaborations/Projects",
          value: data.collaborationsInterest,
          condition: !!data.collaborationsInterest,
        },
        {
          label: "Interested in Challenges/Workshops",
          value: data.challengesWorkshopsInterest,
          condition: !!data.challengesWorkshopsInterest,
        },
      ],
    },
    {
      title: "Optional Links",
      fields: [
        {
          label: "LinkedIn Profile",
          value: data.linkedinProfile,
          condition: !!data.linkedinProfile,
        },
        {
          label: "Portfolio Link",
          value: data.portfolioLink,
          condition: !!data.portfolioLink,
        },
        {
          label: "Social Handle",
          value: data.socialHandle,
          condition: !!data.socialHandle,
        },
      ],
    },
    {
      title: "Why Join",
      fields: [
        {
          label: "Why Join",
          value: data.whyJoin,
          condition: !!data.whyJoin,
        },
      ],
    },
  ],

  getFooterText: (data: DesignForgeFormData) => {
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();
    return `IMHO Design Forge Community Sign-up • ${date}`;
  },
};
