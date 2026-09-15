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

export interface CohortSponsorshipConfirmationProps {
  organizationName: string;
  contactPerson: string;
}

const TEAM_WILL_DISCUSS = [
  "Sponsorship opportunities",
  "Workforce development initiatives",
  "Partnership structures",
  "Expected impact and collaboration pathways",
];

const SUPPORT_CONTRIBUTES_TO = [
  "Developing future engineering talent",
  "Expanding access to practical engineering capability development",
  "Strengthening technical workforce ecosystems",
  "Bridging academia and industry",
];

export const CohortSponsorshipConfirmationEmail = ({
  organizationName,
  contactPerson,
}: CohortSponsorshipConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Sponsorship Inquiry Received — IMHO GEN Academy</Preview>
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
          <Heading style={styles.heading}>Sponsorship Inquiry Received</Heading>
          <Text style={styles.subHeading}>
            Thank you, {contactPerson}, for {organizationName}&apos;s interest
            in supporting engineering capability development through IMHO GEN
            Academy.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              OUR TEAM WILL CONTACT YOU TO DISCUSS
            </Text>
            {TEAM_WILL_DISCUSS.map((item, index) => (
              <Text key={item} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {item}
              </Text>
            ))}
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>YOUR SUPPORT CONTRIBUTES TO</Text>
            {SUPPORT_CONTRIBUTES_TO.map((item, index) => (
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

export default CohortSponsorshipConfirmationEmail;
