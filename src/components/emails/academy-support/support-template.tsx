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

export interface AcademySupportFormEmailProps {
  // Donor Information
  fullName: string;
  email: string;
  country: string;
  supportTypes: string[];

  // Support Interest
  supportContribution: string;

  requestId: string;
}

export const AcademySupportFormEmail = ({
  fullName,
  email,
  country,
  supportTypes,
  supportContribution,
  requestId,
}: AcademySupportFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Academy Support Offer from {fullName}</Preview>
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
          <Heading style={styles.heading}>Academy Support Offer</Heading>
          <Text style={styles.subHeading}>
            A new support offer has been submitted.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SUBMISSION DETAILS</Text>
            <Text style={styles.infoText}>
              <strong>Request ID:</strong> {requestId}
            </Text>
          </Section>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>DONOR INFORMATION</Text>
            <Text style={styles.infoText}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.infoText}>
              <strong>Country:</strong> {country}
            </Text>
            {supportTypes && supportTypes.length > 0 && (
              <Text style={styles.infoText}>
                <strong>Support Types:</strong> {supportTypes.join(", ")}
              </Text>
            )}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>SUPPORT INTEREST</Text>
            <Text style={styles.infoText}>
              <strong>Support Should Contribute Toward:</strong>{" "}
              {supportContribution}
            </Text>
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

export default AcademySupportFormEmail;
