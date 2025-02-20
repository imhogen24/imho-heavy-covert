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
import { type ProductFormData } from "@/lib/z";

import { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ProductPDF } from "../../pdf/docs";

interface FormPreviewProps {
  formData: ProductFormData;
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
              Review your Product request details before submitting
            </DialogDescription>
          </div>
          <PDFDownloadLink
            document={<ProductPDF data={formData} />}
            fileName={`product-request-${new Date().toISOString().split('T')[0]}.pdf`}
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
              {formData.materialInputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Material Inputs</h4>
                  <p className="text-gray-600">{formData.materialInputs}</p>
                </div>
              )}
              {formData.energyInputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Energy Inputs</h4>
                  <p className="text-gray-600">{formData.energyInputs}</p>
                </div>
              )}
              {formData.dataInputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Data Inputs</h4>
                  <p className="text-gray-600">{formData.dataInputs}</p>
                </div>
              )}
              {formData.livingSystemInputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Living System Inputs</h4>
                  <p className="text-gray-600">{formData.livingSystemInputs}</p>
                </div>
              )}
              <div>
                <h4 className="font-light leading-none tracking-tight">Biological Component</h4>
                <p className="text-gray-600">{formData.biologicalComponent ? "Yes" : "No"}</p>
              </div>
              {formData.biologicalComponent && formData.biologicalInputDescription && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Biological Input Description</h4>
                  <p className="text-gray-600">{formData.biologicalInputDescription}</p>
                </div>
              )}
            </div>
          </section>

          {/* Transformation Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Transformation Requirements (System Process)</h3>
            <div className="space-y-4">
              {formData.transformationDescription && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Transformation Description</h4>
                  <p className="text-gray-600">{formData.transformationDescription}</p>
                </div>
              )}
              {formData.performanceTargets && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Performance Targets</h4>
                  <p className="text-gray-600">{formData.performanceTargets}</p>
                </div>
              )}
            </div>
          </section>

          {/* Output Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Output Requirements</h3>
            <div className="space-y-4">
              {formData.systemOutputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">System Outputs</h4>
                  <p className="text-gray-600">{formData.systemOutputs}</p>
                </div>
              )}
              {formData.dataOutputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Data Outputs</h4>
                  <p className="text-gray-600">{formData.dataOutputs}</p>
                </div>
              )}
              {formData.energyOutputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Energy Outputs</h4>
                  <p className="text-gray-600">{formData.energyOutputs}</p>
                </div>
              )}
              {formData.livingThingsOutputs && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Living Things Outputs</h4>
                  <p className="text-gray-600">{formData.livingThingsOutputs}</p>
                </div>
              )}
            </div>
          </section>

          {/* Operational Agents */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Operational Agents</h3>
            <div className="space-y-4">
              {formData.humanSystems && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Human Systems</h4>
                  <p className="text-gray-600">{formData.humanSystems}</p>
                </div>
              )}
              {formData.technicalSystems && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Technical Systems</h4>
                  <p className="text-gray-600">{formData.technicalSystems}</p>
                </div>
              )}
              {formData.environmentalSystems && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Environmental Systems</h4>
                  <p className="text-gray-600">{formData.environmentalSystems}</p>
                </div>
              )}
              {formData.informationSystems && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Information Systems</h4>
                  <p className="text-gray-600">{formData.informationSystems}</p>
                </div>
              )}
              {formData.managementSystems && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Management Systems</h4>
                  <p className="text-gray-600">{formData.managementSystems}</p>
                </div>
              )}
            </div>
          </section>

          {/* Safety, Maintenance and Scalability */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Safety, Maintenance and Scalability</h3>
            <div className="space-y-4">
              {formData.safetyRequirements && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Safety Requirements</h4>
                  <p className="text-gray-600">{formData.safetyRequirements}</p>
                </div>
              )}
              {formData.maintenanceNeeds && formData.maintenanceNeeds.length > 0 && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Maintenance Needs</h4>
                  <p className="text-gray-600">
                    {formData.maintenanceNeeds.join(", ")}
                  </p>
                </div>
              )}
              {formData.futureScalability && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Future Scalability</h4>
                  <p className="text-gray-600">{formData.futureScalability}</p>
                </div>
              )}
            </div>
          </section>

          {/* Collaboration and Communication */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Collaboration and Communication</h3>
            <div className="space-y-4">
              {formData.collaborationPreferences && formData.collaborationPreferences.length > 0 && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Collaboration Preferences</h4>
                  <p className="text-gray-600">
                    {formData.collaborationPreferences.join(", ")}
                  </p>
                </div>
              )}
              {formData.additionalComments && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Additional Comments</h4>
                  <p className="text-gray-600">{formData.additionalComments}</p>
                </div>
              )}
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