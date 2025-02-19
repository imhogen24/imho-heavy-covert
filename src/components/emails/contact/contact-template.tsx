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
  files?: string[];
}

export const ContactFormEmail = ({
  name,
  email,
  message,
  files,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
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
          <Heading style={styles.heading}>New Message Received</Heading>
          <Text style={styles.subHeading}>
            A new contact form submission requires your attention.
          </Text>

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

          {files && files.length > 0 && (
            <Section style={styles.detailSection}>
              <Text style={styles.sectionTitle}>ATTACHMENTS</Text>
              {files.map((file: string, index: number) => {
                const [fileUrl, fileName] = file.split(",");
                return (
                  <Text key={index} style={styles.infoText}>
                    <Link href={fileUrl} style={styles.fileLink}>
                      📎 {fileName || `Attachment ${index + 1}`}
                    </Link>
                  </Text>
                );
              })}
            </Section>
          )}
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

export default ContactFormEmail;

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
    borderRadius: "12px", // Added rounded edges
  },
  header: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    textAlign: "center" as const,
    borderTopLeftRadius: "12px", // Rounded top corners
    borderTopRightRadius: "12px",
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
  fileLink: {
    color: "#2563eb",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "#F5F5F5",
    padding: "15px",
    textAlign: "center" as const,
    borderBottomLeftRadius: "12px", // Rounded bottom corners
    borderBottomRightRadius: "12px",
  },
  footerText: {
    color: "#666666",
    fontSize: "12px",
    marginBottom: "5px",
  },
};