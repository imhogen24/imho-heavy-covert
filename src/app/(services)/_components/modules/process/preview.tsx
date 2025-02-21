"use client"

import * as React from "react"
import { EyeIcon, DownloadIcon, LoaderCircle, User } from "lucide-react"
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
import { type ProcessFormData } from "@/lib/z";

import { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ProcessPDF } from "../../pdf/docs";

interface FormPreviewProps {
  formData: ProcessFormData;
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
              Review your Process request details before submitting
            </DialogDescription>
          </div>
          <PDFDownloadLink
            document={<ProcessPDF data={formData} />}
            fileName={`process-request-${new Date().toISOString().split('T')[0]}.pdf`}
          >
            {({ loading }) => (
              <Button
                disabled={loading}
                variant="download"
                className="md:min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 h-[42px] md:h-[48px] dark:hover:bg-white/85"
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
          {/* Client Information */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Client Information</h3>
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
              <h4 className="font-medium">Business Overview</h4>
              <p className="text-gray-600">
                {formData.businessOverview || "Not provided"}
              </p>
            </div>
          </section>

          {/* Input Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Input Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Material Inputs</h4>
                <p className="text-gray-600">
                  {formData.materialInputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Energy Inputs</h4>
                <p className="text-gray-600">
                  {formData.EnergyInputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Information Inputs</h4>
                <p className="text-gray-600">
                  {formData.informationInputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Living Inputs</h4>
                <p className="text-gray-600">
                  {formData.livingInputs || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Operational Agents */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Operational Agents</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Human Systems</h4>
                <p className="text-gray-600">
                  {formData.humanSytems || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Management Systems</h4>
                <p className="text-gray-600">
                  {formData.managementSystems || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Technical Systems</h4>
                <p className="text-gray-600">
                  {formData.technicalSytems || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Information Systems</h4>
                <p className="text-gray-600">
                  {formData.informationSystems || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Environmental Systems</h4>
                <p className="text-gray-600">
                  {formData.environment || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Process Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Process Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Existing Systems</h4>
                <p className="text-gray-600">
                  {formData.existingSytems || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">New System Requirements</h4>
                <p className="text-gray-600">
                  {formData.newSystemRequiements || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Key Metrics</h4>
                <p className="text-gray-600">
                  {formData.KeyMetrics || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Output Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">
              Output Requirements
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Material Outputs</h4>
                <p className="text-gray-600">
                  {formData.materialOutputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Energy Outputs</h4>
                <p className="text-gray-600">
                  {formData.EnergyOutputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Information Outputs</h4>
                <p className="text-gray-600">
                  {formData.informationOutputs || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Living Outputs</h4>
                <p className="text-gray-600">
                  {formData.livingOutputs || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Challenges or Inefficiencies */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Challenges or Inefficiencies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Pain Points</h4>
                <p className="text-gray-600">
                  {formData.painPoints && formData.painPoints.length > 0
                    ? formData.painPoints.join(", ")
                    : "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Specific Issues</h4>
                <p className="text-gray-600">
                  {formData.specificIssues || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Scalability and Future Goals */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Scalability and Future Goals</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Future Growth Plans</h4>
                <p className="text-gray-600">
                  {formData.futureGrowth ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Comparable Systems</h4>
                <p className="text-gray-600">
                  {formData.comparableSystems || "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Collaboration and Communication */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Collaboration and Communication</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Collaboration Preferences</h4>
                <p className="text-gray-600">
                  {formData.collaborationPreferences && formData.collaborationPreferences.length > 0
                    ? formData.collaborationPreferences.join(", ")
                    : "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Additional Comments</h4>
                <p className="text-gray-600">
                  {formData.additionalComments || "Not provided"}
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
        </div>
        <DialogFooter className="items-end">
          <DialogClose asChild>
            <Button variant="close" className="w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]">Close Preview</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};