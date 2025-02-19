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
import { type CadFormData } from "@/lib/z";

import { useState, useMemo } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFDocument } from "../../pdf/doc";


interface FormPreviewProps {
  formData: CadFormData;
}



export const FormPreview = ({ formData }: FormPreviewProps) => {

  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadClick = () => {
    setIsDownloading(true)
  }

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





