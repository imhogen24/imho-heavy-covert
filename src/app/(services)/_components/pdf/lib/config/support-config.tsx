import { SupportFormData } from '@/lib/schemas/support/z';
import { PDFConfig } from '../types';
import { SectionConfig } from '@/types/form-preview';

export const supportPdfConfig: PDFConfig = {
  requestType: "SUPPORT",

  getSections: (data: SupportFormData): SectionConfig[] => [
    {
      title: "Client Information",
      fields: [
        { label: "Organization Name", value: data.organizationName },
        { label: "Contact Person", value: data.contactPerson },
        { label: "Email", value: data.email },
        { label: "Phone Number", value: data.phoneNumber },
        { label: "Address", value: data.physicalPostalAddress },
        { label: "Business Overview", value: data.businessOverview },
      ]
    },
    {
      title: "Training Requirements",
      fields: [
        { label: "Training Needs", value: data.trainingNeeds },
        { label: "Training Objectives", value: data.trainingObjectives },
        { label: "Number of Participants", value: data.numberOfParticipants.toString() },
        { label: "Participant Roles", value: data.participantRoles },
        { label: "Participant Skill Level", value: data.participantSkillLevel },
        { label: "Training Delivery Mode", value: data.trainingDeliveryMode },
        {
          label: "Training Timeline",
          value: `${data.trainingTimeline.startDate.toLocaleDateString()} to ${data.trainingTimeline.endDate.toLocaleDateString()}`
        },
      ]
    },
    {
      title: "Project Support Requirements",
      fields: [
        { label: "Project Overview", value: data.projectOverview },
        { label: "Project Scope & Deliverables", value: data.projectScopeDeliverables },
        {
          label: "Collaboration Preferences",
          value: data.collaborationPreferences,
          isArray: true,
          condition: !!data.collaborationPreferences?.length
        },
        { label: "Project Deadline", value: data.projectDeadline.toLocaleDateString() },
      ]
    },
    {
      title: "Additional Considerations",
      fields: [
        { label: "Tools and Resources", value: data.toolsAndResources },
        { label: "Long-Term Collaboration", value: data.longTermCollaboration ? "Yes" : "No" },
        {
          label: "Additional Information",
          value: data.additionalInformation,
          condition: !!data.additionalInformation
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

  getFooterText: (data: SupportFormData) => `IMHO Support Request • ${new Date().toLocaleDateString()}`
};