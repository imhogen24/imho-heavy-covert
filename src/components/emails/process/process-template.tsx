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
import { styles } from "../styles/utils";

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
  environment?: string;

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
  environment,

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
            {environment && (
              <Text style={styles.infoText}>
                <strong>Environment:</strong> {environment}
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

