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

export interface DesignForgeFormEmailProps {
  // Basic Profile
  fullName: string;
  email: string;
  phoneNumber: string;
  institutionOrCompany: string;
  currentRole: string;

  // Community Interests
  areasOfInterest: string[];
  mentorshipInterest: string;
  collaborationsInterest: string;
  challengesWorkshopsInterest: string;

  // Optional Links
  linkedinProfile?: string;
  portfolioLink?: string;
  socialHandle?: string;

  // Final Question
  whyJoin: string;

  requestId: string;
}

export const DesignForgeFormEmail = ({
  fullName,
  email,
  phoneNumber,
  institutionOrCompany,
  currentRole,
  areasOfInterest,
  mentorshipInterest,
  collaborationsInterest,
  challengesWorkshopsInterest,
  linkedinProfile,
  portfolioLink,
  socialHandle,
  whyJoin,
  requestId,
}: DesignForgeFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Design Forge Community Sign-up from {fullName}</Preview>
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
          <Heading style={styles.heading}>Design Forge Community</Heading>
          <Text style={styles.subHeading}>
            A new community sign-up has been submitted.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SUBMISSION DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>BASIC PROFILE</Text>
            <Text style={styles.infoText}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.infoText}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={styles.infoText}>
              <strong>Institution/Company:</strong> {institutionOrCompany}
            </Text>
            <Text style={styles.infoText}>
              <strong>Current Role/Discipline:</strong> {currentRole}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>COMMUNITY INTERESTS</Text>
            {areasOfInterest && areasOfInterest.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Areas of Interest:</strong> {areasOfInterest.join(", ")}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Interested in Mentorship:</strong> {mentorshipInterest}
            </Text>
            <Text style={styles.infoText}>
              <strong>Interested in Collaborations/Projects:</strong>{" "}
              {collaborationsInterest}
            </Text>
            <Text style={styles.infoText}>
              <strong>Interested in Challenges/Workshops:</strong>{" "}
              {challengesWorkshopsInterest}
            </Text>
          </Section>

          {(linkedinProfile || portfolioLink || socialHandle) && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>OPTIONAL LINKS</Text>
                {linkedinProfile && (
                  <Text style={styles.infoText}>
                    <strong>LinkedIn:</strong> {linkedinProfile}
                  </Text>
                )}
                {portfolioLink && (
                  <Text style={styles.infoText}>
                    <strong>Portfolio:</strong> {portfolioLink}
                  </Text>
                )}
                {socialHandle && (
                  <Text style={styles.infoText}>
                    <strong>Social Handle:</strong> {socialHandle}
                  </Text>
                )}
              </Section>
            </>
          )}

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>WHY JOIN</Text>
            <Text style={styles.infoText}>{whyJoin}</Text>
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

export default DesignForgeFormEmail;
