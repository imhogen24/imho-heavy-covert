import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { formatRating } from "@/lib/schemas/capability-assessment/z";
import { styles } from "../styles/utils";

export interface CapabilityAssessmentFormEmailProps {
  // Basic Information
  fullName: string;
  email: string;
  background: string;
  experienceLevel: string;

  // Self-Assessment (1–5)
  problemDefinition: number;
  conceptGeneration: number;
  cadModeling: number;
  engineeringAnalysis: number;
  technicalDocumentation: number;
  manufacturingUnderstanding: number;
  systemsThinking: number;

  // Practical Thinking
  projectDescription: string;
  improvementArea: string;
  biggestWeakness: string;

  // Optional
  portfolioLink?: string;

  requestId: string;
}

export const CapabilityAssessmentFormEmail = ({
  fullName,
  email,
  background,
  experienceLevel,
  problemDefinition,
  conceptGeneration,
  cadModeling,
  engineeringAnalysis,
  technicalDocumentation,
  manufacturingUnderstanding,
  systemsThinking,
  projectDescription,
  improvementArea,
  biggestWeakness,
  portfolioLink,
  requestId,
}: CapabilityAssessmentFormEmailProps) => {
  const ratings = [
    { label: "Problem Definition", value: problemDefinition },
    { label: "Concept Generation", value: conceptGeneration },
    { label: "CAD Modeling", value: cadModeling },
    { label: "Engineering Analysis", value: engineeringAnalysis },
    { label: "Technical Documentation", value: technicalDocumentation },
    { label: "Manufacturing Understanding", value: manufacturingUnderstanding },
    { label: "Systems Thinking", value: systemsThinking },
  ];

  return (
    <Html>
      <Head />
      <Preview>New Capability Assessment from {fullName}</Preview>
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
              Engineering Design Capability Assessment
            </Heading>
            <Text style={styles.subHeading}>
              A new capability assessment has been submitted.
            </Text>

            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>SUBMISSION DETAILS</Text>
              <Text style={styles.infoText}>
                <strong>Request ID:</strong> {requestId}
              </Text>
            </Section>

            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>BASIC INFORMATION</Text>
              <Text style={styles.infoText}>
                <strong>Full Name:</strong> {fullName}
              </Text>
              <Text style={styles.infoText}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={styles.infoText}>
                <strong>Background:</strong> {background}
              </Text>
              <Text style={styles.infoText}>
                <strong>Experience Level:</strong> {experienceLevel}
              </Text>
            </Section>

            <Hr style={styles.divider} />

            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>SELF-ASSESSMENT (1–5)</Text>
              {ratings.map((rating) => (
                <Text key={rating.label} style={styles.infoText}>
                  <strong>{rating.label}:</strong> {formatRating(rating.value)}
                </Text>
              ))}
            </Section>

            <Hr style={styles.divider} />

            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>PRACTICAL THINKING</Text>
              <Text style={styles.infoText}>
                <strong>Project Description:</strong> {projectDescription}
              </Text>
              <Text style={styles.infoText}>
                <strong>Area to Improve:</strong> {improvementArea}
              </Text>
              <Text style={styles.infoText}>
                <strong>Biggest Weakness:</strong> {biggestWeakness}
              </Text>
            </Section>

            {portfolioLink && (
              <>
                <Hr style={styles.divider} />

                <Section style={styles.detailSection}>
                  <Text style={styles.sectionTitle}>PORTFOLIO / PROJECT</Text>
                  <Text style={styles.infoText}>
                    <strong>Link:</strong> {portfolioLink}
                  </Text>
                </Section>
              </>
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
};

export default CapabilityAssessmentFormEmail;
