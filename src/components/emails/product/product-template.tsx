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

export interface ProductFormEmailProps {
  // Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  businessOverview: string;

  // Input Requirements
  materialInputs?: string;
  energyInputs?: string;
  informationInputs?: string;
  livingSystemInputs?: string;
  biologicalComponent: boolean;
  biologicalInputDescription?: string;

  // Transformation Requirements
  transformationDescription?: string;
  performanceTargets?: string;

  // Output Requirements
  systemOutputs?: string;
  informationOutputs?: string;
  energyOutputs?: string;
  livingThingsOutputs?: string;

  // Operational Agents
  humanSystems?: string;
  technicalSystems?: string;
  environment?: string;
  informationSystems?: string;
  managementSystems?: string;

  // Safety, Maintenance and Scalability
  safetyRequirements?: string;
  maintenanceNeeds?: string[];
  futureScalability?: string;

  // Collaboration and Communication
  collaborationPreferences?: string[];
  additionalComments: string;
  fileAttachments: string[];

  requestId: string;
}

export const ProductFormEmail = ({
  // Client Information
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  businessOverview,

  // Input Requirements
  materialInputs,
  energyInputs,
  informationInputs,
  livingSystemInputs,
  biologicalComponent,
  biologicalInputDescription,

  // Transformation Requirements
  transformationDescription,
  performanceTargets,

  // Output Requirements
  systemOutputs,
  informationOutputs,
  energyOutputs,
  livingThingsOutputs,

  // Operational Agents
  humanSystems,
  technicalSystems,
  environment,
  informationSystems,
  managementSystems,

  // Safety, Maintenance and Scalability
  safetyRequirements,
  maintenanceNeeds,
  futureScalability,

  // Collaboration and Communication
  collaborationPreferences,
  additionalComments,
  fileAttachments,
  requestId,
}: ProductFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Product Request from {organizationName}</Preview>
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
          <Heading style={styles.heading}>Product Request Form</Heading>
          <Text style={styles.subHeading}>
            A new product request has been submitted.
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
            {energyInputs && (
              <Text style={styles.infoText}>
                <strong>Energy Inputs:</strong> {energyInputs}
              </Text>
            )}
            {informationInputs && (
              <Text style={styles.infoText}>
                <strong>Information Inputs:</strong> {informationInputs}
              </Text>
            )}
            {livingSystemInputs && (
              <Text style={styles.infoText}>
                <strong>Living System Inputs:</strong> {livingSystemInputs}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Biological Component:</strong> {biologicalComponent ? "Yes" : "No"}
            </Text>
            {biologicalInputDescription && (
              <Text style={styles.infoText}>
                <strong>Biological Input Description:</strong> {biologicalInputDescription}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>TRANSFORMATION REQUIREMENTS</Text>
            {transformationDescription && (
              <Text style={styles.infoText}>
                <strong>Transformation Description:</strong> {transformationDescription}
              </Text>
            )}
            {performanceTargets && (
              <Text style={styles.infoText}>
                <strong>Performance Targets:</strong> {performanceTargets}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>OUTPUT REQUIREMENTS</Text>
            {systemOutputs && (
              <Text style={styles.infoText}>
                <strong>System Outputs:</strong> {systemOutputs}
              </Text>
            )}
            {informationOutputs && (
              <Text style={styles.infoText}>
                <strong>Information Outputs:</strong> {informationOutputs}
              </Text>
            )}
            {energyOutputs && (
              <Text style={styles.infoText}>
                <strong>Energy Outputs:</strong> {energyOutputs}
              </Text>
            )}
            {livingThingsOutputs && (
              <Text style={styles.infoText}>
                <strong>Living Things Outputs:</strong> {livingThingsOutputs}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>OPERATIONAL AGENTS</Text>
            {humanSystems && (
              <Text style={styles.infoText}>
                <strong>Human Systems:</strong> {humanSystems}
              </Text>
            )}
            {technicalSystems && (
              <Text style={styles.infoText}>
                <strong>Technical Systems:</strong> {technicalSystems}
              </Text>
            )}
            {environment && (
              <Text style={styles.infoText}>
                <strong>Environment:</strong> {environment}
              </Text>
            )}
            {informationSystems && (
              <Text style={styles.infoText}>
                <strong>Information Systems:</strong> {informationSystems}
              </Text>
            )}
            {managementSystems && (
              <Text style={styles.infoText}>
                <strong>Management Systems:</strong> {managementSystems}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SAFETY, MAINTENANCE AND SCALABILITY</Text>
            {safetyRequirements && (
              <Text style={styles.infoText}>
                <strong>Safety Requirements:</strong> {safetyRequirements}
              </Text>
            )}
            {maintenanceNeeds && maintenanceNeeds.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Maintenance Needs:</strong> {maintenanceNeeds.join(", ")}
              </Text>
            )}
            {futureScalability && (
              <Text style={styles.infoText}>
                <strong>Future Scalability:</strong> {futureScalability}
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
            <Text style={styles.infoText}>
              <strong>Additional Comments:</strong> {additionalComments}
            </Text>
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

export default ProductFormEmail;

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
  fileLink: {  // Added missing fileLink style
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