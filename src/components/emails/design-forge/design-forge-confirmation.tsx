import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { styles } from "../styles/utils";

export interface DesignForgeConfirmationProps {
  fullName: string;
}

const SITE_URL = "https://www.imhogen.com";

const COMMUNITY_UPDATES = [
  "Engineering discussions",
  "Design challenges",
  "Workshops & events",
  "Mentorship opportunities",
  "Projects & collaborations",
  "IMHO GEN Academy programs",
];

const NEXT_STEPS: { label: string; href?: string }[] = [
  { label: "Join the Community Group" },
  {
    label: "Take the Capability Assessment",
    href: `${SITE_URL}/services/capability-assessment`,
  },
  {
    label: "Explore IMHO GEN Academy Programs",
    href: `${SITE_URL}/services/imho-gen-academy`,
  },
];

export const DesignForgeConfirmationEmail = ({
  fullName,
}: DesignForgeConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the Design Forge Community</Preview>
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
            Welcome to the Design Forge Community
          </Heading>
          <Text style={styles.subHeading}>
            Your registration has been received, {fullName}.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>
              YOU WILL RECEIVE UPDATES ABOUT
            </Text>
            {COMMUNITY_UPDATES.map((item, index) => (
              <Text key={item} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {item}
              </Text>
            ))}
          </Section>

          <Hr style={styles.divider} />

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

export default DesignForgeConfirmationEmail;
