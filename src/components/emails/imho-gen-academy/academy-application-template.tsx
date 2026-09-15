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
import { styles } from "../styles/utils";

export interface ImhoGenAcademyFormEmailProps {
  // Basic Information
  fullName: string;
  phoneNumber: string;
  email: string;
  country: string;
  cityTown: string;

  // Education / Background
  currentStatus: string;
  institutionOrCompany: string;
  programDisciplineRole: string;
  currentLevelYear?: string;

  // Interest & Capability
  whyJoin: string;
  areasOfInterest: string[];
  hasPriorProjects: string;
  portfolioLink?: string;

  // Commitment
  willingForIntensiveTraining: string;
  weeklyHoursCommitment: string;

  // Final Question
  whySelectYou: string;

  requestId: string;
}

export const ImhoGenAcademyFormEmail = ({
  fullName,
  phoneNumber,
  email,
  country,
  cityTown,
  currentStatus,
  institutionOrCompany,
  programDisciplineRole,
  currentLevelYear,
  whyJoin,
  areasOfInterest,
  hasPriorProjects,
  portfolioLink,
  willingForIntensiveTraining,
  weeklyHoursCommitment,
  whySelectYou,
  requestId,
}: ImhoGenAcademyFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New IMHO GEN Academy Application from {fullName}</Preview>
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
          <Heading style={styles.heading}>IMHO GEN Academy Application</Heading>
          <Text style={styles.subHeading}>
            A new academy application has been submitted.
          </Text>
          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>APPLICATION DETAILS</Text>
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
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.infoText}>
              <strong>Country:</strong> {country}
            </Text>
            <Text style={styles.infoText}>
              <strong>City/Town:</strong> {cityTown}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>EDUCATION / BACKGROUND</Text>
            <Text style={styles.infoText}>
              <strong>Current Status:</strong> {currentStatus}
            </Text>
            <Text style={styles.infoText}>
              <strong>Institution/Company:</strong> {institutionOrCompany}
            </Text>
            <Text style={styles.infoText}>
              <strong>Program/Discipline/Role:</strong> {programDisciplineRole}
            </Text>
            {currentLevelYear && (
              <Text style={styles.infoText}>
                <strong>Current Level/Year:</strong> {currentLevelYear}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>INTEREST & CAPABILITY</Text>
            <Text style={styles.infoText}>
              <strong>Why Join:</strong> {whyJoin}
            </Text>
            {areasOfInterest && areasOfInterest.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Areas of Interest:</strong> {areasOfInterest.join(", ")}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Has Prior Projects:</strong> {hasPriorProjects}
            </Text>
            {portfolioLink && (
              <Text style={styles.infoText}>
                <strong>Portfolio Link:</strong> {portfolioLink}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>COMMITMENT</Text>
            <Text style={styles.infoText}>
              <strong>Willing for Intensive Training:</strong>{" "}
              {willingForIntensiveTraining}
            </Text>
            <Text style={styles.infoText}>
              <strong>Weekly Hours Commitment:</strong> {weeklyHoursCommitment}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>WHY SELECT YOU</Text>
            <Text style={styles.infoText}>{whySelectYou}</Text>
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

export default ImhoGenAcademyFormEmail;
