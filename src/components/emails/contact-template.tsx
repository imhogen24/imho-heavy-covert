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
        {/* Header with IMHO Letters */}
        <Row style={styles.headerRow}>
          <Column style={styles.letterColumn}>
            <Img
              src="https://res.cloudinary.com/dstrel8mi/image/upload/v1739358526/i-dashed_bfetsc_lokziu.png"
              alt="Letter I"
              width="40"
              height="80"
              style={styles.letterImage}
            />
          </Column>
          <Column style={styles.letterColumn}>
            <Img
              src="https://res.cloudinary.com/dstrel8mi/image/upload/v1739358543/m-dashed_sdmj7t_b5qsxq.png"
              alt="Letter M"
              width="80"
              height="80"
              style={styles.letterImage}
            />
          </Column>
          <Column style={styles.letterColumn}>
            <Img
              src="https://res.cloudinary.com/dstrel8mi/image/upload/v1739358556/h-dashed_smsmfr_wfwlik.png"
              alt="Letter H"
              width="80"
              height="80"
              style={styles.letterImage}
            />
          </Column>
          <Column style={styles.letterColumn}>
            <Img
              src="https://res.cloudinary.com/dstrel8mi/image/upload/v1739358491/o-dashed_wu7tgu_kwfngs.png"
              alt="Letter O"
              width="80"
              height="80"
              style={styles.letterImage}
            />
          </Column>
        </Row>

        {/* Content Section */}
        <Row>
          <Column style={styles.contentColumn}>
            <Section style={styles.content}>
              <Heading style={styles.heading}>New Message Received</Heading>
              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>FROM</Text>
                <Text style={styles.infoText}>
                  {name} ({email})
                </Text>
              </Section>
              <Hr style={styles.divider} />
              <Section style={styles.detailSection}>
                <Text style={styles.sectionTitle}>MESSAGE</Text>
                <Text style={styles.messageText}>{message}</Text>
              </Section>
              {files && files.length > 0 && (
                <>
                  <Hr style={styles.divider} />
                  <Section style={styles.detailSection}>
                    <Text style={styles.sectionTitle}>ATTACHMENTS</Text>
                    {files.map((file: string, index: number) => {
                      const [fileUrl, fileName] = file.split(",");
                      return (
                        <Text key={index} style={styles.attachmentText}>
                          <Link
                            href={fileUrl}
                            style={styles.fileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            📎 {fileName || `Attachment ${index + 1}`}
                          </Link>
                        </Text>
                      );
                    })}
                  </Section>
                </>
              )}
            </Section>
          </Column>
        </Row>
      </Container>
    </Body>
  </Html>
);

const styles = {
  main: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "10px 0 20px",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
  },
  headerRow: {
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  letterColumn: {
    textAlign: "center" as const,
    padding: "5px",
  },
  letterImage: {
    display: "block",
    margin: "auto",
  },
  contentColumn: {
    width: "100%",
  },
  content: {
    padding: "20px",
    borderRadius: "8px",
  },
  heading: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    textAlign: "left" as const,
  },
  detailSection: {
    marginBottom: "16px",
  },
  sectionTitle: {
    color: "#6b7280",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "6px",
  },
  infoText: {
    color: "#374151",
    fontSize: "14px",
  },
  messageText: {
    color: "#374151",
    fontSize: "14px",
    whiteSpace: "pre-wrap" as const,
  },
  attachmentText: {
    margin: "4px 0",
  },
  fileLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },
  divider: {
    borderTop: "1px solid #e5e7eb",
    margin: "16px 0",
  },
};
