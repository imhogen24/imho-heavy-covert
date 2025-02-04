import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  file?: string; // Make file optional
}

export const ContactFormEmail = ({
  name,
  email,
  message,
  file,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Section style={styles.content}>
          <Heading style={styles.heading}>Contact Form Submission</Heading>
          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>CONTACT INFORMATION</Text>
            <Text style={styles.infoText}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={styles.infoText}>
              <strong>Email:</strong> {email}
            </Text>
          </Section>
          <Section style={styles.detailSection}>
            <Text style={styles.sectionTitle}>MESSAGE</Text>
            <Text style={styles.infoText}>{message}</Text>
          </Section>
          {file && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>ATTACHED FILE</Text>
              <Link
                href={file}
                style={styles.infoText}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Attached File
              </Link>
            </Section>
          )}
        </Section>
      </Container>
    </Body>
  </Html>
);

const styles = {
  main: {
    backgroundColor: "#FFFFFF",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #E0E0E0",
  },
  header: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    textAlign: "center" as const,
  },
  content: {
    padding: "30px",
  },
  heading: {
    color: "#000000",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
    textAlign: "center" as const,
  },
  subHeading: {
    color: "#555555",
    fontSize: "16px",
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  detailSection: {
    marginBottom: "20px",
  },
  sectionTitle: {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  infoText: {
    color: "#333333",
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "5px",
  },
  footer: {
    backgroundColor: "#F5F5F5",
    padding: "15px",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#666666",
    fontSize: "12px",
    marginBottom: "5px",
  },
};
