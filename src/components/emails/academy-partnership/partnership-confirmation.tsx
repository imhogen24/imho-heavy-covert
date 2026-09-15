import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { styles } from "../styles/utils";

export interface AcademyPartnershipConfirmationProps {
  organizationName: string;
  contactPerson: string;
}

const POSSIBLE_NEXT_STEPS = [
  "Partnership discovery meeting",
  "Capability discussion session",
  "Sponsorship/Collaboration proposal",
  "Technical ecosystem conversation",
];

export const AcademyPartnershipConfirmationEmail = ({
  organizationName,
  contactPerson,
}: AcademyPartnershipConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Partnership Inquiry Received — IMHO GEN Academy</Preview>
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
          <Heading style={styles.heading}>Partnership Inquiry Received</Heading>
          <Text style={styles.subHeading}>
            Thank you for your interest in collaborating with IMHO GEN Academy,{" "}
            {contactPerson}. Our team will review {organizationName}&apos;s
            inquiry and contact you to explore possible partnership
            opportunities.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>POSSIBLE NEXT STEPS</Text>
            {POSSIBLE_NEXT_STEPS.map((step, index) => (
              <Text key={step} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {step}
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

export default AcademyPartnershipConfirmationEmail;
