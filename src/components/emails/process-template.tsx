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

export interface ProcessRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  businessOperations: string;
  processPurpose: string;
  currentProcess: string;
  currentProcessPurpose: string;
  currentPerformanceMetrics: string;
  painPoints: string[];
  specificChallenges: string;
  improvementGoals: string[];
  performanceTargets: string;
  primaryFunctions: string;
  operationalNeeds: string[];
  specialRequirements: string;
  spaceAvailability: string;
  powerSupply: string;
  environmentalFactors: string;
  anticipateFutureGrowth: boolean;
  growthAccommodation: string;
  comparableSystems: string;
  collaborationPreferences: string[];
  additionalComments: string;
  requestNumber: string;
}

export const ProcessRequestEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  businessOperations,
  processPurpose,
  currentProcess,
  currentProcessPurpose,
  currentPerformanceMetrics,
  painPoints,
  specificChallenges,
  improvementGoals,
  performanceTargets,
  primaryFunctions,
  operationalNeeds,
  specialRequirements,
  spaceAvailability,
  powerSupply,
  environmentalFactors,
  anticipateFutureGrowth,
  growthAccommodation,
  comparableSystems,
  collaborationPreferences,
  additionalComments,
  requestNumber,
}: ProcessRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>
      New Process Improvement Request - Immediate Review Required
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
          <Heading style={styles.heading}>Process Improvement Request</Heading>
          <Text style={styles.subHeading}>
            A new process improvement request requires your immediate attention.
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
              <strong>Process Purpose:</strong> {processPurpose}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              CURRENT PROCESS & CHALLENGES
            </Text>
            <Text style={styles.infoText}>
              <strong>Current Process:</strong> {currentProcess}
            </Text>
            <Text style={styles.infoText}>
              <strong>Current Process Purpose:</strong> {currentProcessPurpose}
            </Text>
            <Text style={styles.infoText}>
              <strong>Current Performance Metrics:</strong>{" "}
              {currentPerformanceMetrics}
            </Text>
            <Text style={styles.infoText}>
              <strong>Pain Points:</strong> {painPoints.join(", ") || "None"}
            </Text>
            <Text style={styles.infoText}>
              <strong>Specific Challenges:</strong> {specificChallenges}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>DESIRED IMPROVEMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Improvement Goals:</strong>{" "}
              {improvementGoals.join(", ") || "None"}
            </Text>
            <Text style={styles.infoText}>
              <strong>Performance Targets:</strong> {performanceTargets}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>FUNCTIONAL REQUIREMENTS</Text>
            <Text style={styles.infoText}>
              <strong>Primary Functions:</strong> {primaryFunctions}
            </Text>
            <Text style={styles.infoText}>
              <strong>Operational Needs:</strong>{" "}
              {operationalNeeds.join(", ") || "None"}
            </Text>
            <Text style={styles.infoText}>
              <strong>Special Requirements:</strong> {specialRequirements}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SPACE AND POWER CONSTRAINTS</Text>
            <Text style={styles.infoText}>
              <strong>Space Availability:</strong> {spaceAvailability}
            </Text>
            <Text style={styles.infoText}>
              <strong>Power Supply:</strong> {powerSupply}
            </Text>
            <Text style={styles.infoText}>
              <strong>Environmental Factors:</strong> {environmentalFactors}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SCALABILITY</Text>
            <Text style={styles.infoText}>
              <strong>Anticipate Future Growth:</strong>{" "}
              {anticipateFutureGrowth ? "Yes" : "No"}
            </Text>
            <Text style={styles.infoText}>
              <strong>Growth Accommodation:</strong> {growthAccommodation}
            </Text>
            <Text style={styles.infoText}>
              <strong>Comparable Systems:</strong> {comparableSystems}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
            <Text style={styles.infoText}>
              <strong>Collaboration Preferences:</strong>{" "}
              {collaborationPreferences.join(", ") || "None"}
            </Text>
            {additionalComments && (
              <Text style={styles.infoText}>
                <strong>Additional Comments:</strong> {additionalComments}
              </Text>
            )}
          </Section>
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

export default ProcessRequestEmail;

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
