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

export interface AcademySupportConfirmationProps {
  fullName: string;
}

const TEAM_WILL_CONTACT_WITH = [
  "Support options",
  "Donation/sponsorship pathways",
  "Partnership opportunities",
  "Impact information",
];

const YOUR_SUPPORT_HELPS = [
  "Expand engineering capability access",
  "Develop future engineering talent",
  "Bridge academia and industry",
  "Strengthen engineering innovation ecosystems",
];

export const AcademySupportConfirmationEmail = ({
  fullName,
}: AcademySupportConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Support Offer Received — IMHO GEN Academy</Preview>
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
          <Heading style={styles.heading}>Thank You for Your Support</Heading>
          <Text style={styles.subHeading}>
            Thank you for your interest in supporting IMHO GEN Academy,{" "}
            {fullName}. Your support offer has been received.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              OUR TEAM WILL CONTACT YOU WITH
            </Text>
            {TEAM_WILL_CONTACT_WITH.map((item, index) => (
              <Text key={item} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {item}
              </Text>
            ))}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>YOUR SUPPORT HELPS</Text>
            {YOUR_SUPPORT_HELPS.map((item, index) => (
              <Text key={item} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {item}
              </Text>
            ))}
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

export default AcademySupportConfirmationEmail;
