import { CadFormData } from '@/lib/z';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';


export const PDFDocument = ({ data }: { data: CadFormData }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            src="https://res.cloudinary.com/dstrel8mi/image/upload/v1737805863/nav-logo_okx0tv.png"
          />
          <View style={styles.headerLeft}>
            <Text style={styles.headerText}>CAD Request Details</Text>
            <Text style={styles.subHeaderText}>Generated on {new Date().toLocaleDateString()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Organization Details</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Organization Name: </Text>
          <Text style={styles.value}>{data.organizationName || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Contact Person: </Text>
          <Text style={styles.value}>{data.contactPerson || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{data.email || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Phone Number: </Text>
          <Text style={styles.value}>{data.phoneNumber || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>{data.address || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Operations: </Text>
          <Text style={styles.value}>{data.organizationOperations || "Not provided"}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Documentation Details</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Purpose: </Text>
          <Text style={styles.value}>{data.documentationPurpose || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Types: </Text>
          <Text style={styles.value}>{data.documentationTypes?.join(", ") || "Not provided"}</Text>
        </View>
        {data.otherDocumentationTypes && (
          <View style={styles.textContainer}>
            <Text style={styles.label}>Other Types: </Text>
            <Text style={styles.value}>{data.otherDocumentationTypes}</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.label}>File Formats: </Text>
          <Text style={styles.value}>{data.fileFormats?.join(", ") || "Not provided"}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Details</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Specifications: </Text>
          <Text style={styles.value}>{data.technicalSpecifications || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Standards: </Text>
          <Text style={styles.value}>{data.technicalStandards || "Not provided"}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Design Preferences</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Visual Style: </Text>
          <Text style={styles.value}>{data.visualStylePreferences || "Not provided"}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Layout: </Text>
          <Text style={styles.value}>{data.layoutPreferences || "Not provided"}</Text>
        </View>
        {data.additionalDesignFeatures && (
          <View style={styles.textContainer}>
            <Text style={styles.label}>Additional Features: </Text>
            <Text style={styles.value}>{data.additionalDesignFeatures}</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Additional Comments</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Comments: </Text>
          <Text style={styles.value}>{data.additionalComments || "Not provided"}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Attachments</Text>
        {data.fileAttachments && data.fileAttachments.length > 0 ? (
          <View style={styles.fileList}>
            {data.fileAttachments.map((file, index) => (
              <View key={index} style={styles.textContainer}>
                <Text style={styles.label}>File {index + 1}: </Text>
                <Text style={styles.value}>{file.split(',')[1]}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.label}>Files: </Text>
            <Text style={styles.value}>No files attached</Text>
          </View>
        )}
      </View>

      <Text style={styles.footer}>
        IMHO CAD Request • {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);


// Register font
Font.register({ family: 'font', src: "https://res.cloudinary.com/dstrel8mi/raw/upload/v1739968093/Barlow-Regular_znepzd.ttf" });


export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'font'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  headerLeft: {
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 20
  },
  logo: {
    width: 100,
    height: 25,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#000000',
    fontSize: 10,
    textAlign: 'left',
    marginTop: 3,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5
  },
  heading: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000000',
    fontWeight: 'bold',
    borderBottom: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 4,
  },
  textContainer: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2
  },
  value: {
    fontSize: 10,
    color: '#4a4a4a',
    flexWrap: 'wrap',
    width: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#666666',
    fontSize: 8,
    borderTop: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 8,
    paddingHorizontal: 30
  },
  fileList: {
    marginTop: 8,
  }
});