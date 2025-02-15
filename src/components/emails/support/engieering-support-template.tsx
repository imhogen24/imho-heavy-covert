import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export interface SupportFormEmailProps {
  // Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  physicalPostalAddress: string;
  businessOverview: string;

  // Training Requirements
  trainingNeeds: string;
  trainingObjectives: string;
  numberOfParticipants: number;
  participantRoles: string;
  participantSkillLevel: string;
  trainingDeliveryMode: string;
  trainingTimeline: {
    startDate: Date;
    endDate: Date;
  };


  // Project Support
  projectOverview: string;
  projectScopeDeliverables: string;
  collaborationPreferences: string[];
  projectDeadline: Date;

  // Additional Info
  toolsAndResources: string;
  longTermCollaboration: boolean;
  additionalInformation: string;
  fileAttachments: string[];
}

export const SupportFormEmail = ({
  // Client Information
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  physicalPostalAddress,
  businessOverview,

  // Training Requirements
  trainingNeeds,
  trainingObjectives,
  numberOfParticipants,
  participantRoles,
  participantSkillLevel,
  trainingDeliveryMode,
  trainingTimeline,

  // Project Support
  projectOverview,
  projectScopeDeliverables,
  collaborationPreferences,
  projectDeadline,

  // Additional Info
  toolsAndResources,
  longTermCollaboration,
  additionalInformation,
  fileAttachments,
}: SupportFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Support & Training Request from {organizationName}</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Section style={styles.header}>
          <Row>
            <Column style={{ textAlign: "center" }}>
              <Img
                src={`https://res.cloudinary.com/dstrel8mi/image/upload/v1737805863/nav-logo_okx0tv.png`}
                width="200"
                height="45"
                alt="Company Logo"
                style={{ margin: "0 auto" }}
              />
            </Column>
          </Row>
        </Section>

        <Section style={styles.content}>
          <Heading style={styles.heading}>Support & Training Request</Heading>
          <Text style={styles.subHeading}>
            A new support and training request has been submitted.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>CLIENT INFORMATION</Text>
            <Text style={styles.infoText}>
              <strong>Organization:</strong> {organizationName}
            </Text>
            <Text style={styles.infoText}>
              <strong>Contact Person:</strong> {contactPerson}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.infoText}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={styles.infoText}>
              <strong>Address:</strong> {physicalPostalAddress}
            </Text>
            <Text style={styles.infoText}>
              <strong>Business Overview:</strong> {businessOverview}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>TRAINING REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Training Needs:</strong> {trainingNeeds}
            </Text>
            <Text style={styles.infoText}>
              <strong>Objectives:</strong> {trainingObjectives}
            </Text>
            <Text style={styles.infoText}>
              <strong>Number of Participants:</strong> {numberOfParticipants}
            </Text>
            <Text style={styles.infoText}>
              <strong>Participant Roles:</strong> {participantRoles}
            </Text>
            <Text style={styles.infoText}>
              <strong>Skill Level:</strong> {participantSkillLevel}
            </Text>
            <Text style={styles.infoText}>
              <strong>Delivery Mode:</strong> {trainingDeliveryMode}
            </Text>
            <Text style={styles.infoText}>
              <strong>Schedule:</strong>{" "}
              {`${trainingTimeline.startDate.toLocaleDateString()} - ${trainingTimeline.endDate.toLocaleDateString()}`}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROJECT SUPPORT DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Project Overview:</strong> {projectOverview}
            </Text>
            <Text style={styles.infoText}>
              <strong>Scope & Deliverables:</strong> {projectScopeDeliverables}
            </Text>
            <Text style={styles.infoText}>
              <strong>Collaboration Preferences:</strong> {collaborationPreferences.join(", ")}
            </Text>
            <Text style={styles.infoText}>
              <strong>Project Deadline:</strong> {projectDeadline.toLocaleDateString()}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>ADDITIONAL CONSIDERATIONS</Text>
            <Text style={styles.infoText}>
              <strong>Tools & Resources:</strong> {toolsAndResources}
            </Text>
            <Text style={styles.infoText}>
              <strong>Long-term Collaboration:</strong> {longTermCollaboration ? "Yes" : "No"}
            </Text>
            <Text style={styles.infoText}>
              <strong>Additional Information:</strong> {additionalInformation}
            </Text>
          </Section>

          {fileAttachments && fileAttachments.length > 0 && (
            <>
              <Hr style={styles.divider} />
              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>ATTACHMENTS</Text>
                {fileAttachments.map((file, index) => {
                  const [fileUrl, fileName] = file.split(",");
                  return (
                    <Text key={index} style={styles.infoText}>
                      <Link href={fileUrl} style={styles.fileLink}>
                        📎 {fileName || `Attachment ${index + 1}`}
                      </Link>
                    </Text>
                  );
                })}
              </Section>
            </>
          )}
        </Section>

        <Section style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Innovate Make & Have Ours. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SupportFormEmail;

const styles = {
  main: {
    backgroundColor: "#FFFFFF",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
  },
  header: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    textAlign: "center" as const,
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  content: {
    padding: "30px",
  },
  heading: {
    color: "#000000",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
    textAlign: "center" as const,
  },
  subHeading: {
    color: "#555555",
    fontSize: "16px",
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  detailSection: {
    marginBottom: "20px",
  },
  sectionTitle: {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  infoText: {
    color: "#333333",
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "5px",
  },
  divider: {
    borderTop: "1px solid #E0E0E0",
    margin: "20px 0",
  },
  fileLink: {
    color: "#2563eb",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "#F5F5F5",
    padding: "15px",
    textAlign: "center" as const,
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  footerText: {
    color: "#666666",
    fontSize: "12px",
    marginBottom: "5px",
  },
};