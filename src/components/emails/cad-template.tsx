import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface CadRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  organizationOperations: string;
  documentationPurpose: string;
  documentationTypes: string[];
  otherDocumentationType?: string;
  fileFormats: string[];
  otherFileFormat?: string;
  technicalSpecifications?: string;
  technicalStandards?: string;
  visualStylePreferences?: string;
  layoutPreferences?: string;
  preferredTimeline?: string;
  requirePeriodicDrafts?: boolean;
  additionalServices?: string;
  additionalComments?: string;
  requestNumber: string;
}

export const CadRequestEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  organizationOperations,
  documentationPurpose,
  documentationTypes,
  otherDocumentationType,
  fileFormats,
  otherFileFormat,
  technicalSpecifications,
  technicalStandards,
  visualStylePreferences,
  layoutPreferences,
  preferredTimeline,
  requirePeriodicDrafts,
  additionalServices,
  additionalComments,
  requestNumber,
}: CadRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>New CAD Documentation Request - Immediate Review Required</Preview>
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
          <Heading style={styles.heading}>CAD Request Notification</Heading>
          <Text style={styles.subHeading}>
            A new CAD documentation request requires your immediate attention.
          </Text>

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
              <strong>Address:</strong> {address}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>ORGANIZATIONAL DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Operations:</strong> {organizationOperations}
            </Text>
            <Text style={styles.infoText}>
              <strong>Documentation Purpose:</strong> {documentationPurpose}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>DOCUMENTATION REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Documentation Types:</strong>{" "}
              {documentationTypes.join(", ") || "None"}
              {otherDocumentationType && ` (Other: ${otherDocumentationType})`}
            </Text>
            <Text style={styles.infoText}>
              <strong>Preferred File Formats:</strong>{" "}
              {fileFormats.join(", ") || "None"}
              {otherFileFormat && ` (Other: ${otherFileFormat})`}
            </Text>
          </Section>

          {(technicalSpecifications || technicalStandards) && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>TECHNICAL SPECIFICATIONS</Text>
              {technicalSpecifications && (
                <Text style={styles.infoText}>
                  <strong>Technical Specifications:</strong>{" "}
                  {technicalSpecifications}
                </Text>
              )}
              {technicalStandards && (
                <Text style={styles.infoText}>
                  <strong>Technical Standards:</strong> {technicalStandards}
                </Text>
              )}
            </Section>
          )}

          {(visualStylePreferences || layoutPreferences) && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>DESIGN PREFERENCES</Text>
              {visualStylePreferences && (
                <Text style={styles.infoText}>
                  <strong>Visual Style Preferences:</strong>{" "}
                  {visualStylePreferences}
                </Text>
              )}
              {layoutPreferences && (
                <Text style={styles.infoText}>
                  <strong>Layout Preferences:</strong> {layoutPreferences}
                </Text>
              )}
            </Section>
          )}

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROJECT TIMELINE</Text>
            {preferredTimeline && (
              <Text style={styles.infoText}>
                <strong>Preferred Timeline:</strong> {preferredTimeline}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Periodic Drafts Required:</strong>{" "}
              {requirePeriodicDrafts ? "Yes" : "No"}
            </Text>
          </Section>

          {(additionalServices || additionalComments) && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
              {additionalServices && (
                <Text style={styles.infoText}>
                  <strong>Additional Services:</strong> {additionalServices}
                </Text>
              )}
              {additionalComments && (
                <Text style={styles.infoText}>
                  <strong>Additional Comments:</strong> {additionalComments}
                </Text>
              )}
            </Section>
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

export default CadRequestEmail;

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
  footer: {
    backgroundColor: "#F5F5F5",
    padding: "15px",
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
