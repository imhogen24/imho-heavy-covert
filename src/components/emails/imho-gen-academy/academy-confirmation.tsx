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

export interface ImhoGenAcademyConfirmationProps {
  fullName: string;
}

const NEXT_STEPS = [
  { label: "Take the Capability Assessment", href: "#" },
  { label: "Join the Design Forge Community", href: "#" },
  { label: "Follow IMHO GEN Academy updates", href: "#" },
];

export const ImhoGenAcademyConfirmationEmail = ({
  fullName,
}: ImhoGenAcademyConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Application Received — IMHO GEN Academy</Preview>
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
          <Heading style={styles.heading}>Application Received</Heading>
          <Text style={styles.subHeading}>
            Thank you for applying to IMHO GEN Academy, {fullName}. Our team
            will review your application and contact you on your application
            status soon.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>NEXT RECOMMENDED STEPS</Text>
            {NEXT_STEPS.map((step) => (
              <Text key={step.label} style={styles.infoText}>
                <Link href={step.href} style={styles.fileLink}>
                  {step.label}
                </Link>
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

export default ImhoGenAcademyConfirmationEmail;
