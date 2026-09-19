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

export interface CohortSponsorshipFormEmailProps {
  // Organization Profile
  organizationName: string;
  contactPerson: string;
  positionRole: string;
  website?: string;
  email: string;
  phoneNumber?: string;

  // Sponsorship Interest
  sponsorshipAreas: string[];

  // Impact & Collaboration Interest
  whySupport: string;
  impactAreas: string;

  // Optional
  scheduleDiscussion?: string;

  requestId: string;
}

export const CohortSponsorshipFormEmail = ({
  organizationName,
  contactPerson,
  positionRole,
  website,
  email,
  phoneNumber,
  sponsorshipAreas,
  whySupport,
  impactAreas,
  scheduleDiscussion,
  requestId,
}: CohortSponsorshipFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Cohort Sponsorship Inquiry from {organizationName}</Preview>
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
          <Heading style={styles.heading}>Cohort Sponsorship Inquiry</Heading>
          <Text style={styles.subHeading}>
            A new sponsorship inquiry has been submitted.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>INQUIRY DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>ORGANIZATION PROFILE</Text>
            <Text style={styles.infoText}>
              <strong>Organization Name:</strong> {organizationName}
            </Text>
            <Text style={styles.infoText}>
              <strong>Contact Person:</strong> {contactPerson}
            </Text>
            <Text style={styles.infoText}>
              <strong>Position/Role:</strong> {positionRole}
            </Text>
            {website && (
              <Text style={styles.infoText}>
                <strong>Website:</strong> {website}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            {phoneNumber && (
              <Text style={styles.infoText}>
                <strong>Phone:</strong> {phoneNumber}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SPONSORSHIP INTEREST</Text>
            {sponsorshipAreas && sponsorshipAreas.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Sponsorship Areas:</strong>{" "}
                {sponsorshipAreas.join(", ")}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              IMPACT &amp; COLLABORATION INTEREST
            </Text>
            <Text style={styles.infoText}>
              <strong>Why Support:</strong> {whySupport}
            </Text>
            <Text style={styles.infoText}>
              <strong>Impact Areas:</strong> {impactAreas}
            </Text>
          </Section>

          {scheduleDiscussion && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>OPTIONAL</Text>
                <Text style={styles.infoText}>
                  <strong>Wants to Schedule a Discussion:</strong>{" "}
                  {scheduleDiscussion}
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

export default CohortSponsorshipFormEmail;
