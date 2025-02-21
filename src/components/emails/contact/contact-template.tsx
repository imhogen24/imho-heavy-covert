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
import { styles } from "../styles/utils";

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
