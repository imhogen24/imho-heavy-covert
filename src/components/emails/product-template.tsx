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

export interface ProductRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  businessOperations: string;
  productPurpose: string;
  productVision: string;
  productObjectives: string;
  targetAudience: string;
  coreFunctions: string;
  performanceMetrics: string;
  preferredMaterials: string;
  complianceStandards: string;
  environmentalConditions: string;
  visualStyle: string;
  ergonomicFeatures: string;
  brandingRequirements: string;
  budgetRange: string;
  preferredTimeline: string;
  requirePrototypes: boolean;
  numberOfPrototypes: number;
  requiredTests: string;
  comparableProducts: string;
  collaborationPreferences?: string[];
  additionalComments: string;
  requestNumber: string;
}

export const ProductRequestEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  businessOperations,
  productPurpose,
  productVision,
  productObjectives,
  targetAudience,
  coreFunctions,
  performanceMetrics,
  preferredMaterials,
  complianceStandards,
  environmentalConditions,
  visualStyle,
  ergonomicFeatures,
  brandingRequirements,
  budgetRange,
  preferredTimeline,
  requirePrototypes,
  numberOfPrototypes,
  requiredTests,
  comparableProducts,
  collaborationPreferences,
  additionalComments,
  requestNumber,
}: ProductRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>
      New Product Development Request - Immediate Review Required
    </Preview>
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
          <Heading style={styles.heading}>Product Development Request</Heading>
          <Text style={styles.subHeading}>
            A new product development request requires your immediate attention.
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
            <Text style={styles.sectionTitle}>BUSINESS OVERVIEW</Text>
            <Text style={styles.infoText}>
              <strong>Business Operations:</strong> {businessOperations}
            </Text>
            <Text style={styles.infoText}>
              <strong>Product Purpose:</strong> {productPurpose}
            </Text>
            <Text style={styles.infoText}>
              <strong>Product Vision:</strong> {productVision}
            </Text>
            <Text style={styles.infoText}>
              <strong>Product Objectives:</strong> {productObjectives}
            </Text>
            <Text style={styles.infoText}>
              <strong>Target Audience:</strong> {targetAudience}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>TECHNICAL SPECIFICATIONS</Text>
            <Text style={styles.infoText}>
              <strong>Core Functions:</strong> {coreFunctions}
            </Text>
            <Text style={styles.infoText}>
              <strong>Performance Metrics:</strong> {performanceMetrics}
            </Text>
            <Text style={styles.infoText}>
              <strong>Preferred Materials:</strong> {preferredMaterials}
            </Text>
            <Text style={styles.infoText}>
              <strong>Compliance Standards:</strong> {complianceStandards}
            </Text>
            <Text style={styles.infoText}>
              <strong>Environmental Conditions:</strong>{" "}
              {environmentalConditions}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>DESIGN REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Visual Style:</strong> {visualStyle}
            </Text>
            <Text style={styles.infoText}>
              <strong>Ergonomic Features:</strong> {ergonomicFeatures}
            </Text>
            <Text style={styles.infoText}>
              <strong>Branding Requirements:</strong> {brandingRequirements}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROJECT SPECIFICATIONS</Text>
            <Text style={styles.infoText}>
              <strong>Budget Range:</strong> {budgetRange}
            </Text>
            <Text style={styles.infoText}>
              <strong>Preferred Timeline:</strong> {preferredTimeline}
            </Text>
            <Text style={styles.infoText}>
              <strong>Prototypes Required:</strong>{" "}
              {requirePrototypes ? "Yes" : "No"}
            </Text>
            {requirePrototypes && (
              <Text style={styles.infoText}>
                <strong>Number of Prototypes:</strong> {numberOfPrototypes}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Required Tests:</strong> {requiredTests}
            </Text>
            <Text style={styles.infoText}>
              <strong>Comparable Products:</strong> {comparableProducts}
            </Text>
            {collaborationPreferences &&
              collaborationPreferences.length > 0 && (
                <Text style={styles.infoText}>
                  <strong>Collaboration Preferences:</strong>{" "}
                  {collaborationPreferences.join(", ")}
                </Text>
              )}
          </Section>

          {additionalComments && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
              <Text style={styles.infoText}>
                <strong>Additional Comments:</strong> {additionalComments}
              </Text>
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

export default ProductRequestEmail;

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
