import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { styles } from "../styles/utils";

export interface CapabilityAssessmentConfirmationProps {
  fullName: string;
}

const SITE_URL = "https://www.imhogen.com";

const NEXT_STEPS: { label: string; href?: string }[] = [
  {
    label: "Apply to IMHO GEN Academy",
    href: `${SITE_URL}/services/imho-gen-academy`,
  },
  {
    label: "Join the Design Forge Community",
    href: `${SITE_URL}/services/design-forge`,
  },
  { label: "Explore Upcoming Cohorts" },
];

export const CapabilityAssessmentConfirmationEmail = ({
  fullName,
}: CapabilityAssessmentConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Assessment Received — IMHO GEN Academy</Preview>
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
          <Heading style={styles.heading}>Assessment Received</Heading>
          <Text style={styles.subHeading}>
            Thank you for completing the Engineering Design Capability
            Assessment, {fullName}. Our team will review your responses and
            recommend the most suitable pathway for your capability development.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>RECOMMENDED NEXT STEPS</Text>
            {NEXT_STEPS.map((step) => (
              <Text key={step.label} style={styles.infoText}>
                {step.href ? (
                  <Link href={step.href} style={styles.fileLink}>
                    {step.label}
                  </Link>
                ) : (
                  step.label
                )}
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

export default CapabilityAssessmentConfirmationEmail;
