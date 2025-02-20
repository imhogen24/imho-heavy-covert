import { Document, Page, Text, View, Font, Link } from '@react-pdf/renderer';
import { Header, Field, SubHeader, Section, styles } from './customized-pdf-components';
import { PDFConfig } from './lib/types';


// Register font
Font.register({ family: 'font', src: "https://res.cloudinary.com/dstrel8mi/raw/upload/v1740021006/GeistVF_s71176.woff" });

interface GenericPDFDocumentProps {
  data: any;
  config: PDFConfig;
}

export const GenericPDFDocument = ({ data, config }: GenericPDFDocumentProps) => {
  const sections = config.getSections(data);
  const footerText = config.getFooterText(data);

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Header requestType={config.requestType} />

        {/* Render all defined sections */}
        {sections.map((section, sectionIndex) => (
          <Section key={sectionIndex}>
            <SubHeader title={section.title} />
            {section.fields.map((field, fieldIndex) => {
              // Skip conditional fields that don't meet their condition
              if (field.hasOwnProperty('condition') && !field.condition) return null;

              // Handle array values
              const displayValue = field.isArray && Array.isArray(field.value)
                ? field.value.join(", ")
                : String(field.value || "");

              return (
                <Field
                  key={fieldIndex}
                  label={field.label}
                  value={displayValue}
                />
              );
            })}
          </Section>
        ))}

        {/* Attachments section - handled specially since it's common across document types */}
        {/* {data.fileAttachments && (
          <Section>
            <SubHeader title="Attachments" />
            {data.fileAttachments && data.fileAttachments.length > 0 ? (
              <View style={styles.fileList}>
                {data.fileAttachments.map((file, index) => {
                  const [url, name] = file.split(",");
                  return (
                    <View key={index} style={styles.textContainer}>
                      <Text style={styles.label}>File {index + 1}: </Text>
                      <Text style={styles.value}>
                        <Link src={url}>{name}</Link>
                      </Text>
                    </View>
                  );
                })}
              </View>
            ) : (
              <Field label="Files" value="No files attached" />
            )}
          </Section>
        )} */}

        <Text style={styles.footer}>{footerText}</Text>
      </Page>
    </Document>
  );
};
