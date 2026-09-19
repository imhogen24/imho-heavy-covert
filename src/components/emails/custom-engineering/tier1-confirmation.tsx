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

export interface CustomEngineeringConfirmationProps {
  organizationName: string;
  contactPerson: string;
  projectTitle: string;
}

const NEXT_STEPS = [
  "Technical review of your systems engineering brief",
  "Scoping call to confirm inputs, outputs, and constraints",
  "Feasibility assessment and budget alignment",
  "Engineering proposal and project kickoff",
];

export const CustomEngineeringConfirmationEmail = ({
  organizationName,
  contactPerson,
  projectTitle,
}: CustomEngineeringConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Master Intake Received — IMHOGEN Tier 1</Preview>
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
          <Heading style={styles.heading}>Master Intake Received</Heading>
          <Text style={styles.subHeading}>
            Thank you, {contactPerson}. We have recorded {organizationName}
            &apos;s brief for &ldquo;{projectTitle}&rdquo; as the Single Source
            of Truth for this project lifecycle.
          </Text>

          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>WHAT HAPPENS NEXT</Text>
            {NEXT_STEPS.map((step, index) => (
              <Text key={step} style={styles.infoText}>
                <strong>{String(index + 1).padStart(2, "0")}</strong> {step}
              </Text>
            ))}
          </Section>
        </Section>

        <Section style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Innovate Make &amp; Have Ours. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CustomEngineeringConfirmationEmail;
