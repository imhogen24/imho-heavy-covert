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

export interface DraftingDigitizationConfirmationProps {
  organizationName: string;
  contactPerson: string;
}

const NEXT_STEPS = [
  "Immediate project triage of your source asset",
  "Metrology dispatch or direct modeling, depending on input type",
  "Deliverable and output format confirmation",
  "Quotation and turnaround schedule",
];

export const DraftingDigitizationConfirmationEmail = ({
  organizationName,
  contactPerson,
}: DraftingDigitizationConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Green Lane Request Received — IMHOGEN Tier 3</Preview>
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
          <Heading style={styles.heading}>Green Lane Request Received</Heading>
          <Text style={styles.subHeading}>
            Thank you, {contactPerson}. {organizationName}&apos;s drafting
            request has entered our fast-track workflow.
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

export default DraftingDigitizationConfirmationEmail;
