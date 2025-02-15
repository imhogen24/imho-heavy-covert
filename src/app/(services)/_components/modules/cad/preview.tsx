"use client"

import * as React from "react"
import { EyeIcon, DownloadIcon, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { type CadFormData } from "@/lib/z-schema";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

interface FormPreviewProps {
  formData: CadFormData;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerLeft: {
    flexDirection: 'column',
  },
  logo: {
    width: 70,
    height: 70,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '',
    marginBottom: 10,
  },
  headerText: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 5,
  },
  section: {

    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
    fontWeight: 'bold',
    borderBottom: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
    color: '#4a4a4a',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#666666',
    fontSize: 10,
    borderTop: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  fileList: {
    marginTop: 10,
    paddingLeft: 15,
  },
  fileItem: {
    fontSize: 11,
    marginBottom: 4,
    color: '#4a4a4a',
  }
});

const PDFDocument = ({ data }: { data: CadFormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerText}>CAD Request Details</Text>
            <Text style={styles.subHeaderText}>Generated on {new Date().toLocaleDateString()}</Text>
          </View>
          <Image
            style={styles.logo}
            src="https://res.cloudinary.com/dstrel8mi/image/upload/v1739506879/footer-logo_knb6kh.png"
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Organization Details</Text>
        <Text style={styles.text}>Organization Name: {data.organizationName || "Not provided"}</Text>
        <Text style={styles.text}>Contact Person: {data.contactPerson || "Not provided"}</Text>
        <Text style={styles.text}>Email: {data.email || "Not provided"}</Text>
        <Text style={styles.text}>Phone Number: {data.phoneNumber || "Not provided"}</Text>
        <Text style={styles.text}>Address: {data.address || "Not provided"}</Text>
        <Text style={styles.text}>Operations: {data.organizationOperations || "Not provided"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Documentation Details</Text>
        <Text style={styles.text}>Purpose: {data.documentationPurpose || "Not provided"}</Text>
        <Text style={styles.text}>Types: {data.documentationTypes?.join(", ") || "Not provided"}</Text>
        {data.otherDocumentationTypes && (
          <Text style={styles.text}>Other Types: {data.otherDocumentationTypes}</Text>
        )}
        <Text style={styles.text}>File Formats: {data.fileFormats?.join(", ") || "Not provided"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Details</Text>
        <Text style={styles.text}>Specifications: {data.technicalSpecifications || "Not provided"}</Text>
        <Text style={styles.text}>Standards: {data.technicalStandards || "Not provided"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Design Preferences</Text>
        <Text style={styles.text}>Visual Style: {data.visualStylePreferences || "Not provided"}</Text>
        <Text style={styles.text}>Layout: {data.layoutPreferences || "Not provided"}</Text>
        {data.additionalDesignFeatures && (
          <Text style={styles.text}>Additional Features: {data.additionalDesignFeatures}</Text>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Additional Comments</Text>
        <Text style={styles.text}>{data.additionalComments || "Not provided"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Attachments</Text>
        {data.fileAttachments && data.fileAttachments.length > 0 ? (
          <View style={styles.fileList}>
            {data.fileAttachments.map((file, index) => (
              <Text key={index} style={styles.fileItem}>
                • {file.split(',')[1]}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.text}>No files attached</Text>
        )}
      </View>

      <Text style={styles.footer}>
        IMHO CAD Request • {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);      

export const FormPreview = ({ formData }: FormPreviewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]"
          variant="outline">
          Preview Response <EyeIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <DialogHeader className="flex flex-row justify-between">
          <div>
            <DialogTitle>Preview Your Submission</DialogTitle>
            <DialogDescription>
              Review your CAD request details before submitting
            </DialogDescription>
          </div>
          <PDFDownloadLink
            document={<PDFDocument data={formData} />}
            fileName={`cad-request-${new Date().toISOString().split('T')[0]}.pdf`}
          >
            {({ loading }) => (
              <Button
                disabled={loading}
                variant="download"
                className="md:min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0  h-[42px] md:h-[48px] dark:hover:bg-white/85"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />

                  </>
                ) : (
                  <>

                    <span className="hidden md:block">Download PDF</span>
                    <DownloadIcon className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </PDFDownloadLink>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Organization Details */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Organization Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Organization Name</h4>
                <p className="text-gray-600">
                  {formData.organizationName || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Contact Person</h4>
                <p className="text-gray-600">
                  {formData.contactPerson || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Email</h4>
                <p className="text-gray-600">{formData.email || "Not provided"}</p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Phone Number</h4>
                <p className="text-gray-600">
                  {formData.phoneNumber || "Not provided"}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-light leading-none tracking-tight">Address</h4>
              <p className="text-gray-600">{formData.address || "Not provided"}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Organization Operations</h4>
              <p className="text-gray-600">
                {formData.organizationOperations || "Not provided"}
              </p>
            </div>
          </section>

          {/* Documentation Details */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Documentation Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Documentation Purpose</h4>
                <p className="text-gray-600">
                  {formData.documentationPurpose || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Documentation Types</h4>
                <p className="text-gray-600">
                  {formData.documentationTypes && formData.documentationTypes.length > 0
                    ? formData.documentationTypes.map(type => String(type)).join(", ")
                    : "Not provided"}
                </p>
                {formData.otherDocumentationTypes && (
                  <p className="text-gray-600 mt-1">
                    Other: {formData.otherDocumentationTypes}
                  </p>
                )}
              </div>
              <div>
                <h4 className="font-medium">File Formats</h4>
                <p className="text-gray-600">
                  {formData.fileFormats && formData.fileFormats.length > 0
                    ? formData.fileFormats.map(format => String(format)).join(", ")
                    : "Not provided"}
                </p>
                {formData.otherFileFormats && (
                  <p className="text-gray-600 mt-1">
                    Other: {formData.otherFileFormats}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Technical Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Technical Specifications</h4>
                <p className="text-gray-600">
                  {formData.technicalSpecifications || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Technical Standards</h4>
                <p className="text-gray-600">
                  {formData.technicalStandards || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Visual Style Preferences</h4>
                <p className="text-gray-600">
                  {formData.visualStylePreferences || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Layout Preferences</h4>
                <p className="text-gray-600">
                  {formData.layoutPreferences || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Timeline and Additional Services */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">
              Timeline and Additional Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Preferred Timeline</h4>
                <p className="text-gray-600">
                  {formData.preferredTimeline || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Require Periodic Drafts</h4>
                <p className="text-gray-600">
                  {formData.requirePeriodicDrafts ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Additional Services</h4>
                <p className="text-gray-600">
                  {formData.additionalServices && formData.additionalServices.length > 0
                    ? formData.additionalServices.map(service => String(service)).join(", ")
                    : "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* File Attachments */}
          {formData.fileAttachments && formData.fileAttachments.length > 0 && (
            <section>
              <h3 className="text-lg font-medium leading-none tracking-tight mb-4">File Attachments</h3>
              <div className="space-y-2">
                {formData.fileAttachments.map((file, index) => {
                  const [url, name] = file.split(",");
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <EyeIcon className="h-4 w-4" />
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Additional Comments */}
          {formData.additionalComments && (
            <section>
              <h3 className="text-lg font-light leading-none tracking-tight mb-4">Additional Comments</h3>
              <p className="text-gray-600">{formData.additionalComments}</p>
            </section>
          )}
        </div>
        <DialogFooter className="items-end">


          <DialogClose asChild>
            <Button variant="close" className=" w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]">Close Preview</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
