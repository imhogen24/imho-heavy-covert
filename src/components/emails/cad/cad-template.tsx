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

export interface CadRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  organizationOperations: string;
  documentationPurpose: string;
  documentationTypes: string[];
  otherDocumentationTypes: string;
  fileFormats: string[];
  otherFileFormats: string;
  technicalSpecifications: string;
  technicalStandards: string;
  visualStylePreferences: string;
  layoutPreferences: string;
  additionalDesignFeatures: string;
  preferredTimeline: string;
  requirePeriodicDrafts: boolean;
  additionalServices: string[];
  additionalComments: string;
  fileAttachments: string[];
  requestId: string;
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
  otherDocumentationTypes,
  fileFormats,
  otherFileFormats,
  technicalSpecifications,
  technicalStandards,
  visualStylePreferences,
  layoutPreferences,
  additionalDesignFeatures,
  preferredTimeline,
  requirePeriodicDrafts,
  additionalServices,
  additionalComments,
  fileAttachments,
  requestId,
}: CadRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>New CAD Request from {organizationName}</Preview>
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
          <Heading style={styles.heading}>CAD Request Submission</Heading>
          <Text style={styles.subHeading}>
            A new CAD request requires your attention.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>REQUEST DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
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
            <Text style={styles.sectionTitle}>PROJECT OVERVIEW</Text>
            <Text style={styles.infoText}>
              <strong>Organization Operations:</strong> {organizationOperations}
            </Text>
            <Text style={styles.infoText}>
              <strong>Documentation Purpose:</strong> {documentationPurpose}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>DOCUMENTATION REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Documentation Types:</strong> {documentationTypes.join(", ")}
            </Text>
            {otherDocumentationTypes && (
              <Text style={styles.infoText}>
                <strong>Other Documentation Types:</strong> {otherDocumentationTypes}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>File Formats:</strong> {fileFormats.join(", ")}
            </Text>
            {otherFileFormats && (
              <Text style={styles.infoText}>
                <strong>Other File Formats:</strong> {otherFileFormats}
              </Text>
            )}
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>TECHNICAL DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Technical Specifications:</strong> {technicalSpecifications}
            </Text>
            <Text style={styles.infoText}>
              <strong>Technical Standards:</strong> {technicalStandards}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>AESTHETIC PREFERENCES</Text>
            <Text style={styles.infoText}>
              <strong>Visual Style:</strong> {visualStylePreferences}
            </Text>
            <Text style={styles.infoText}>
              <strong>Layout Preferences:</strong> {layoutPreferences}
            </Text>
            {additionalDesignFeatures && (
              <Text style={styles.infoText}>
                <strong>Additional Design Features:</strong> {additionalDesignFeatures}
              </Text>
            )}
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROJECT SPECIFICS</Text>
            <Text style={styles.infoText}>
              <strong>Preferred Timeline:</strong> {preferredTimeline}
            </Text>
            <Text style={styles.infoText}>
              <strong>Periodic Drafts Required:</strong> {requirePeriodicDrafts ? "Yes" : "No"}
            </Text>
            {additionalServices.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Additional Services:</strong> {additionalServices.join(", ")}
              </Text>
            )}
          </Section>

          {additionalComments && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>ADDITIONAL COMMENTS</Text>
              <Text style={styles.infoText}>{additionalComments}</Text>
            </Section>
          )}

          {fileAttachments && fileAttachments.length > 0 && (
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