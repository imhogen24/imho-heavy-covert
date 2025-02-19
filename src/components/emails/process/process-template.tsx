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

export interface ProcessFormEmailProps {
  // Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  businessOverview: string;

  // Input Requirements
  materialInputs?: string;
  EnergyInputs?: string;
  informationInputs?: string;
  livingInputs?: string;

  // Operational Agents
  humanSytems?: string;
  managementSystems?: string;
  technicalSytems?: string;
  informationSystems?: string;
  environmentalSytems?: string;

  // Process Requirements
  existingSytems?: string;
  newSystemRequiements?: string;
  KeyMetrics?: string;

  // Output Requirements
  materialOutputs?: string;
  EnergyOutputs?: string;
  informationOutputs?: string;
  livingOutputs?: string;

  // Challenges Or Inefficiencies
  painPoints?: string[];
  specificIssues?: string;

  // Scalability And Future Goals
  futureGrowth: boolean;
  comparableSystems?: string;

  // Collaboration and Communication
  collaborationPreferences?: string[];
  additionalComments?: string;
  fileAttachments?: string[];
  requestId: string;
}

export const ProcessFormEmail = ({
  // Client Information
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  businessOverview,

  // Input Requirements
  materialInputs,
  EnergyInputs,
  informationInputs,
  livingInputs,

  // Operational Agents
  humanSytems,
  managementSystems,
  technicalSytems,
  informationSystems,
  environmentalSytems,

  // Process Requirements
  existingSytems,
  newSystemRequiements,
  KeyMetrics,

  // Output Requirements
  materialOutputs,
  EnergyOutputs,
  informationOutputs,
  livingOutputs,

  // Challenges Or Inefficiencies
  painPoints,
  specificIssues,

  // Scalability And Future Goals
  futureGrowth,
  comparableSystems,

  // Collaboration and Communication
  collaborationPreferences,
  additionalComments,
  fileAttachments,
  requestId,
}: ProcessFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Process Request from {organizationName}</Preview>
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
          <Heading style={styles.heading}>Process Request Form</Heading>
          <Text style={styles.subHeading}>
            A new process request has been submitted.
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
            <Text style={styles.infoText}>
              <strong>Business Overview:</strong> {businessOverview}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>INPUT REQUIREMENTS</Text>
            {materialInputs && (
              <Text style={styles.infoText}>
                <strong>Material Inputs:</strong> {materialInputs}
              </Text>
            )}
            {EnergyInputs && (
              <Text style={styles.infoText}>
                <strong>Energy Inputs:</strong> {EnergyInputs}
              </Text>
            )}
            {informationInputs && (
              <Text style={styles.infoText}>
                <strong>Information Inputs:</strong> {informationInputs}
              </Text>
            )}
            {livingInputs && (
              <Text style={styles.infoText}>
                <strong>Living Inputs:</strong> {livingInputs}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>OPERATIONAL AGENTS</Text>
            {humanSytems && (
              <Text style={styles.infoText}>
                <strong>Human Systems:</strong> {humanSytems}
              </Text>
            )}
            {managementSystems && (
              <Text style={styles.infoText}>
                <strong>Management Systems:</strong> {managementSystems}
              </Text>
            )}
            {technicalSytems && (
              <Text style={styles.infoText}>
                <strong>Technical Systems:</strong> {technicalSytems}
              </Text>
            )}
            {informationSystems && (
              <Text style={styles.infoText}>
                <strong>Information Systems:</strong> {informationSystems}
              </Text>
            )}
            {environmentalSytems && (
              <Text style={styles.infoText}>
                <strong>Environmental Systems:</strong> {environmentalSytems}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>PROCESS REQUIREMENTS</Text>
            {existingSytems && (
              <Text style={styles.infoText}>
                <strong>Existing Systems:</strong> {existingSytems}
              </Text>
            )}
            {newSystemRequiements && (
              <Text style={styles.infoText}>
                <strong>New System Requirements:</strong> {newSystemRequiements}
              </Text>
            )}
            {KeyMetrics && (
              <Text style={styles.infoText}>
                <strong>Key Metrics:</strong> {KeyMetrics}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>OUTPUT REQUIREMENTS</Text>
            {materialOutputs && (
              <Text style={styles.infoText}>
                <strong>Material Outputs:</strong> {materialOutputs}
              </Text>
            )}
            {EnergyOutputs && (
              <Text style={styles.infoText}>
                <strong>Energy Outputs:</strong> {EnergyOutputs}
              </Text>
            )}
            {informationOutputs && (
              <Text style={styles.infoText}>
                <strong>Information Outputs:</strong> {informationOutputs}
              </Text>
            )}
            {livingOutputs && (
              <Text style={styles.infoText}>
                <strong>Living Outputs:</strong> {livingOutputs}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>CHALLENGES OR INEFFICIENCIES</Text>
            {painPoints && painPoints.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Pain Points:</strong> {painPoints.join(", ")}
              </Text>
            )}
            {specificIssues && (
              <Text style={styles.infoText}>
                <strong>Specific Issues:</strong> {specificIssues}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SCALABILITY AND FUTURE GOALS</Text>
            <Text style={styles.infoText}>
              <strong>Biological Components:</strong> {futureGrowth ? "Yes" : "No"}
            </Text>
            {comparableSystems && (
              <Text style={styles.infoText}>
                <strong>Comparable Systems:</strong> {comparableSystems}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>COLLABORATION AND COMMUNICATION</Text>
            {collaborationPreferences && collaborationPreferences.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Collaboration Preferences:</strong> {collaborationPreferences.join(", ")}
              </Text>
            )}
            {additionalComments && (
              <Text style={styles.infoText}>
                <strong>Additional Comments:</strong> {additionalComments}
              </Text>
            )}
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

export default ProcessFormEmail;

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
    textDecoration: "underline",
    fontWeight: "500",
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