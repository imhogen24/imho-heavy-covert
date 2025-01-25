import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface CadRequestEmailProps {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  address: string;
  organizationOperations: string;
  documentationPurpose: string;
  documentationTypes: string[];
  otherDocumentationType?: string;
  fileFormats: string[];
  otherFileFormat?: string;
  technicalSpecifications?: string;
  technicalStandards?: string;
  visualStylePreferences?: string;
  layoutPreferences?: string;
  preferredTimeline?: string;
  requirePeriodicDrafts?: boolean;
  additionalServices?: string;
  additionalComments?: string;
  requestNumber: string;
}

export const CadRequestEmail = ({
  organizationName,
  contactPerson,
  email,
  phoneNumber,
  address,
  organizationOperations,
  documentationPurpose,
  documentationTypes,
  otherDocumentationType,
  fileFormats,
  otherFileFormat,
  technicalSpecifications,
  technicalStandards,
  visualStylePreferences,
  layoutPreferences,
  preferredTimeline,
  requirePeriodicDrafts,
  additionalServices,
  additionalComments,
  requestNumber,
}: CadRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>Your CAD Request Confirmation</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={track.container}>
          <Row>
            <Column>
              <Text style={global.paragraphWithBold}>Request Number</Text>
              <Text style={track.number}>{requestNumber}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={global.hr} />

        <Section style={message}>
          <Heading style={global.heading}>CAD Request Received</Heading>
          <Text style={global.text}>
            Thank you for submitting your detailed Computer Aided Design (CAD)
            request.
          </Text>
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Client Information</Text>
          <Text style={global.text}>
            <strong>Organization:</strong> {organizationName}
          </Text>
          <Text style={global.text}>
            <strong>Contact Person:</strong> {contactPerson}
          </Text>
          <Text style={global.text}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={global.text}>
            <strong>Phone:</strong> {phoneNumber}
          </Text>
          <Text style={global.text}>
            <strong>Address:</strong> {address}
          </Text>
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Organizational Details</Text>
          <Text style={global.text}>
            <strong>Operations:</strong> {organizationOperations}
          </Text>
          <Text style={global.text}>
            <strong>Documentation Purpose:</strong> {documentationPurpose}
          </Text>
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Documentation Requirements</Text>
          <Text style={global.text}>
            <strong>Documentation Types:</strong>{" "}
            {documentationTypes.join(", ")}
            {otherDocumentationType && ` (Other: ${otherDocumentationType})`}
          </Text>
          <Text style={global.text}>
            <strong>Preferred File Formats:</strong> {fileFormats.join(", ")}
            {otherFileFormat && ` (Other: ${otherFileFormat})`}
          </Text>
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Technical Specifications</Text>
          {technicalSpecifications && (
            <Text style={global.text}>
              <strong>Technical Specifications:</strong>{" "}
              {technicalSpecifications}
            </Text>
          )}
          {technicalStandards && (
            <Text style={global.text}>
              <strong>Technical Standards:</strong> {technicalStandards}
            </Text>
          )}
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Design Preferences</Text>
          {visualStylePreferences && (
            <Text style={global.text}>
              <strong>Visual Style Preferences:</strong>{" "}
              {visualStylePreferences}
            </Text>
          )}
          {layoutPreferences && (
            <Text style={global.text}>
              <strong>Layout Preferences:</strong> {layoutPreferences}
            </Text>
          )}
        </Section>

        <Hr style={global.hr} />

        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Project Timeline</Text>
          {preferredTimeline && (
            <Text style={global.text}>
              <strong>Preferred Timeline:</strong> {preferredTimeline}
            </Text>
          )}
          <Text style={global.text}>
            <strong>Periodic Drafts Required:</strong>{" "}
            {requirePeriodicDrafts ? "Yes" : "No"}
          </Text>
        </Section>

        {(additionalServices || additionalComments) && (
          <>
            <Hr style={global.hr} />
            <Section style={global.defaultPadding}>
              <Text style={adressTitle}>Additional Information</Text>
              {additionalServices && (
                <Text style={global.text}>
                  <strong>Additional Services:</strong> {additionalServices}
                </Text>
              )}
              {additionalComments && (
                <Text style={global.text}>
                  <strong>Additional Comments:</strong> {additionalComments}
                </Text>
              )}
            </Section>
          </>
        )}

        <Hr style={global.hr} />

        <Section style={menu.container}>
          <Row style={menu.content}>
            <Column style={{ width: "50%" }} colSpan={1}>
              <Link href="#" style={menu.text}>
                Track Request Status
              </Link>
            </Column>
            <Column style={{ width: "50%" }} colSpan={1}>
              <Link href="#" style={menu.text}>
                Contact Support
              </Link>
            </Column>
          </Row>
        </Section>

        <Hr style={global.hr} />

        <Section style={footer.policy}>
          <Row>
            <Text style={footer.text}>
              © 2024 Your CAD Services. All Rights Reserved.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              Please do not reply to this automated email.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CadRequestEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center" as const,
};

const global = {
  paragraphWithBold: { margin: 0, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    margin: 0,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
  defaultPadding: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "22px",
    paddingBottom: "22px",
  },
};

const adressTitle = {
  margin: 0,
  fontSize: "15px",
  fontWeight: "bold",
};

const menu = {
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    backgroundColor: "#F7F7F7",
  },
  content: {
    paddingTop: "22px",
    paddingBottom: "22px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  text: {
    fontSize: "13.5px",
    marginTop: 0,
    fontWeight: 500,
    color: "#000",
    textAlign: "center" as const,
  },
};

const footer = {
  policy: {
    paddingTop: "22px",
    paddingBottom: "22px",
    textAlign: "center" as const,
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center" as const,
  },
};
