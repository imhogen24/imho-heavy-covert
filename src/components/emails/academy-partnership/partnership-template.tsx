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

export interface AcademyPartnershipFormEmailProps {
  // Organization Profile
  organizationName: string;
  organizationWebsite?: string;
  contactPerson: string;
  positionRole: string;
  email: string;
  phoneNumber?: string;

  // Partnership Interest
  areasOfInterest: string[];
  collaborationDescription: string;

  // Optional Details
  expectedOutcomes?: string;
  additionalInformation?: string;

  requestId: string;
}

export const AcademyPartnershipFormEmail = ({
  organizationName,
  organizationWebsite,
  contactPerson,
  positionRole,
  email,
  phoneNumber,
  areasOfInterest,
  collaborationDescription,
  expectedOutcomes,
  additionalInformation,
  requestId,
}: AcademyPartnershipFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Academy Partnership Inquiry from {organizationName}</Preview>
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
          <Heading style={styles.heading}>Academy Partnership Inquiry</Heading>
          <Text style={styles.subHeading}>
            A new partnership inquiry has been submitted.
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
            {organizationWebsite && (
              <Text style={styles.infoText}>
                <strong>Website:</strong> {organizationWebsite}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Contact Person:</strong> {contactPerson}
            </Text>
            <Text style={styles.infoText}>
              <strong>Position/Role:</strong> {positionRole}
            </Text>
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
            <Text style={styles.sectionTitle}>PARTNERSHIP INTEREST</Text>
            {areasOfInterest && areasOfInterest.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Areas of Interest:</strong> {areasOfInterest.join(", ")}
              </Text>
            )}
            <Text style={styles.infoText}>
              <strong>Collaboration Description:</strong>{" "}
              {collaborationDescription}
            </Text>
          </Section>

          {(expectedOutcomes || additionalInformation) && (
            <>
              <Hr style={styles.divider} />

              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>OPTIONAL DETAILS</Text>
                {expectedOutcomes && (
                  <Text style={styles.infoText}>
                    <strong>Expected Outcomes:</strong> {expectedOutcomes}
                  </Text>
                )}
                {additionalInformation && (
                  <Text style={styles.infoText}>
                    <strong>Additional Information:</strong>{" "}
                    {additionalInformation}
                  </Text>
                )}
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

export default AcademyPartnershipFormEmail;
