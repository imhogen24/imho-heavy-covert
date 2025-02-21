/* EMAIL TEMPLATE STYLES */


export const styles = {
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
  divider: {
    borderTop: "1px solid #E0E0E0",
    margin: "20px 0",
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