import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { styles } from "../styles/utils";

export interface CustomEngineeringFormEmailProps {
  // 1.0 Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  siteLocation: string;

  // 2.0 Project Scope & Classification
  projectScope: string[];
  projectTitle: string;
  primaryObjective: string;

  // 3.0 Systems Engineering Core
  materialInputs: string;
  energyAndInformationInputs: string;
  transformation: string;
  outputs: string;
  byProducts?: string;

  // 4.0 Operational Environment & Constraints
  humanSystem?: string;
  activeEnvironment?: string;
  budgetExpectations?: string;
  targetTimeline?: string;

  fileAttachments: string[];
  requestId: string;
}

export const CustomEngineeringFormEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  siteLocation,
  projectScope,
  projectTitle,
  primaryObjective,
  materialInputs,
  energyAndInformationInputs,
  transformation,
  outputs,
  byProducts,
  humanSystem,
  activeEnvironment,
  budgetExpectations,
  targetTimeline,
  fileAttachments,
  requestId,
}: CustomEngineeringFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Tier 1 Custom Engineering Intake from {organizationName}</Preview>
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
          <Heading style={styles.heading}>
            Tier 1: Custom Engineering &amp; Factory Solutions
          </Heading>
          <Text style={styles.subHeading}>
            A new master intake has been submitted. This record is the Single
            Source of Truth for the project lifecycle.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>INTAKE DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
            </Text>
            <Text style={styles.infoText}>
              <strong>Document ID:</strong> D1.1 | TIER 1 WORKFLOW
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>1.0 CLIENT INFORMATION</Text>
            <Text style={styles.infoText}>
              <strong>Organization / Client:</strong> {organizationName}
            </Text>
            <Text style={styles.infoText}>
              <strong>Contact Person &amp; Title:</strong> {contactPerson}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.infoText}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={styles.infoText}>
              <strong>Project Site:</strong> {siteLocation}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              2.0 PROJECT SCOPE &amp; CLASSIFICATION
            </Text>
            {projectScope && projectScope.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Scale of Support:</strong> {projectScope.join(", ")}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Project Title:</strong> {projectTitle}
            </Text>
            <Text style={styles.infoText}>
              <strong>Primary Objective:</strong> {primaryObjective}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              3.0 SYSTEMS ENGINEERING CORE
            </Text>
            <Text style={styles.infoText}>
              <strong>Inputs — Material:</strong> {materialInputs}
            </Text>
            <Text style={styles.infoText}>
              <strong>Inputs — Energy &amp; Information:</strong>{" "}
              {energyAndInformationInputs}
            </Text>
            <Text style={styles.infoText}>
              <strong>Transformation:</strong> {transformation}
            </Text>
            <Text style={styles.infoText}>
              <strong>Outputs &amp; Throughput:</strong> {outputs}
            </Text>
            {byProducts && (
              <Text style={styles.infoText}>
                <strong>By-products:</strong> {byProducts}
              </Text>
            )}
          </Section>

          {(humanSystem ||
            activeEnvironment ||
            budgetExpectations ||
            targetTimeline) && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>
                  4.0 OPERATIONAL ENVIRONMENT &amp; CONSTRAINTS
                </Text>
                {humanSystem && (
                  <Text style={styles.infoText}>
                    <strong>Human System:</strong> {humanSystem}
                  </Text>
                )}
                {activeEnvironment && (
                  <Text style={styles.infoText}>
                    <strong>Active Environment:</strong> {activeEnvironment}
                  </Text>
                )}
                {budgetExpectations && (
                  <Text style={styles.infoText}>
                    <strong>Budget Expectations:</strong> {budgetExpectations}
                  </Text>
                )}
                {targetTimeline && (
                  <Text style={styles.infoText}>
                    <strong>Target Timeline:</strong> {targetTimeline}
                  </Text>
                )}
              </Section>
            </>
          )}

          {fileAttachments && fileAttachments.length > 0 && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>ATTACHMENTS</Text>
                {fileAttachments.map((file, index) => {
                  const [url, name] = file.split(",");

                  return (
                    <Text key={index} style={styles.infoText}>
                      <Link href={url} style={styles.fileLink}>
                        {name || url}
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
            © 2024 Innovate Make &amp; Have Ours. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CustomEngineeringFormEmail;
