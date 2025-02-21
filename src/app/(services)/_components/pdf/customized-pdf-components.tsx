import * as React from "react"
import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';

interface HeaderProps {
  requestType: string;
}

interface FieldProps {
  label: string;
  value: string;
}

interface SubHeaderProps {
  title: string;
}

interface SectionProps {
  children: React.ReactNode;
}

interface MultiFieldProps {
  label: string;
  values: string[];
}


const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <View style={styles.section}>
      {children}
    </View>
  );
}

const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {

  return (
    <Text style={styles.heading}>{title}</Text>
  );
};
const Field: React.FC<FieldProps> = ({ label, value }) => {

  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>{`${label}: `}</Text>
      <Text style={styles.value}>{`${value}` || "Not provided"}</Text>
    </View>
  );
};

const Header: React.FC<HeaderProps> = ({ requestType }) => {
  const formattedDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          src="https://res.cloudinary.com/dstrel8mi/image/upload/v1737805863/nav-logo_okx0tv.png"
        />
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>{requestType} Request Details</Text>
          <Text style={styles.subHeaderText}>Generated on {formattedDate}</Text>
        </View>
      </View>
    </View>
  );
};



export {
  Header,
  Field,
  SubHeader,
  Section
}



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
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2
  },
  value: {
    fontSize: 10,
    color: '#000000',
    flexWrap: 'wrap',
    width: '100%',
    opacity: 10,
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