import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Img,
} from "@react-email/components";
import * as React from "react";

export interface SupportRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  physicalPostalAddress: string;
  trainingNeeds: string;
  trainingObjectives: string;
  numberOfParticipants: number;
  participantRoles: string;
  participantSkillLevel: string;
  trainingDeliveryMode: string;
  trainingTimeline: string;
  projectOverview: string;
  projectScopeDeliverables: string;
  collaborationPreferences?: string[];
  projectDeadline: Date;
  toolsAndResources: string;
  longTermCollaboration: boolean;
  additionalInformation?: string;
  requestNumber: string;
}

export const SupportRequestEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  physicalPostalAddress,
  trainingNeeds,
  trainingObjectives,
  numberOfParticipants,
  participantRoles,
  participantSkillLevel,
  trainingDeliveryMode,
  trainingTimeline,
  projectOverview,
  projectScopeDeliverables,
  collaborationPreferences,
  projectDeadline,
  toolsAndResources,
  longTermCollaboration,
  additionalInformation,
  requestNumber,
}: SupportRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>New Support and Training Request - Review Required</Preview>
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
          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>REQUEST DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request Number:</strong> {requestNumber}
            </Text>
          </Section>

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
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>TRAINING REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Training Needs:</strong> {trainingNeeds}
            </Text>
            <Text style={styles.infoText}>
              <strong>Training Objectives:</strong> {trainingObjectives}
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
              <strong>Timeline:</strong> {trainingTimeline}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROJECT DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Project Overview:</strong> {projectOverview}
            </Text>
            <Text style={styles.infoText}>
              <strong>Scope & Deliverables:</strong> {projectScopeDeliverables}
            </Text>
            {collaborationPreferences &&
              collaborationPreferences.length > 0 && (
                <Text style={styles.infoText}>
                  <strong>Collaboration Preferences:</strong>{" "}
                  {collaborationPreferences.join(", ")}
                </Text>
              )}
            <Text style={styles.infoText}>
              <strong>Project Deadline:</strong>{" "}
              {projectDeadline.toLocaleDateString()}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>ADDITIONAL CONSIDERATIONS</Text>
            <Text style={styles.infoText}>
              <strong>Tools & Resources:</strong> {toolsAndResources}
            </Text>
            <Text style={styles.infoText}>
              <strong>Long-term Collaboration:</strong>{" "}
              {longTermCollaboration ? "Yes" : "No"}
            </Text>
            {additionalInformation && (
              <Text style={styles.infoText}>
                <strong>Additional Information:</strong> {additionalInformation}
              </Text>
            )}
          </Section>
        </Section>

        <Section style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Support and Training Services. Confidential Communication.
          </Text>
          <Text style={styles.footerDisclaimer}>
            This is an automated notification. Please do not reply directly.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SupportRequestEmail;

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
  },
  header: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    textAlign: "center" as const,
  },
  content: {
    padding: "30px",
  },
  heading: {
    color: "#000000",
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "0",
  },
  detailSection: {
    marginBottom: "25px",
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
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "5px",
  },
  footer: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#666666",
    fontSize: "12px",
    marginBottom: "5px",
  },
  footerDisclaimer: {
    color: "#999999",
    fontSize: "11px",
  },
};
