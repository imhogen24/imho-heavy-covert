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

export interface DraftingDigitizationFormEmailProps {
  // 1.0 Client Information
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  siteLocation: string;

  // 2.0 The Source Asset
  inputMaterialType: string;
  assetCondition: string;

  // 3.0 Required Deliverables & End Goal
  draftingServices: string[];
  endGoal: string;

  // 4.0 Technical Specifications & Preferences
  draftingStandard: string;
  outputFormats: string[];

  fileAttachments: string[];
  requestId: string;
}

export const DraftingDigitizationFormEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  siteLocation,
  inputMaterialType,
  assetCondition,
  draftingServices,
  endGoal,
  draftingStandard,
  outputFormats,
  fileAttachments,
  requestId,
}: DraftingDigitizationFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Tier 3 Drafting Intake from {organizationName}</Preview>
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
            Tier 3: Engineering Drafting &amp; Digitization
          </Heading>
          <Text style={styles.subHeading}>
            A new Green Lane request has been submitted. Triage on:{" "}
            {inputMaterialType}.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>INTAKE DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
            </Text>
            <Text style={styles.infoText}>
              <strong>Document ID:</strong> T3.D1.3a | TIER 3 WORKFLOW
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
            <Text style={styles.sectionTitle}>2.0 THE SOURCE ASSET</Text>
            <Text style={styles.infoText}>
              <strong>Input Material Type:</strong> {inputMaterialType}
            </Text>
            <Text style={styles.infoText}>
              <strong>Asset Condition:</strong> {assetCondition}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              3.0 REQUIRED DELIVERABLES &amp; END GOAL
            </Text>
            {draftingServices && draftingServices.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Drafting Services:</strong>{" "}
                {draftingServices.join(", ")}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>End Goal / Use Case:</strong> {endGoal}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              4.0 TECHNICAL SPECIFICATIONS &amp; PREFERENCES
            </Text>
            <Text style={styles.infoText}>
              <strong>Drafting Standard:</strong> {draftingStandard}
            </Text>
            {outputFormats && outputFormats.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Preferred Output Formats:</strong>{" "}
                {outputFormats.join(", ")}
              </Text>
            )}
          </Section>

          {fileAttachments && fileAttachments.length > 0 && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>REFERENCE UPLOADS</Text>
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

export default DraftingDigitizationFormEmail;
