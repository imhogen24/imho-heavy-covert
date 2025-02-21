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
import { SupportFormData } from "@/lib/z";

import { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { SupportPDF } from "../../pdf/docs";

interface FormPreviewProps {
  formData: SupportFormData;
}

export const FormPreview = ({ formData }: FormPreviewProps) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadClick = () => {
    setIsDownloading(true)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Review your support request details before submitting
            </DialogDescription>
          </div>
          <PDFDownloadLink
            document={<SupportPDF data={formData} />}
            fileName={`support-request-${new Date().toISOString().split('T')[0]}.pdf`}
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
              <h4 className="font-light leading-none tracking-tight">Physical/Postal Address</h4>
              <p className="text-gray-600">{formData.physicalPostalAddress || "Not provided"}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Business Overview</h4>
              <p className="text-gray-600">
                {formData.businessOverview || "Not provided"}
              </p>
            </div>
          </section>

          {/* Training Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Training Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Training Needs</h4>
                <p className="text-gray-600">
                  {formData.trainingNeeds || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Training Objectives</h4>
                <p className="text-gray-600">
                  {formData.trainingObjectives || "Not provided"}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-light leading-none tracking-tight">Number of Participants</h4>
                  <p className="text-gray-600">
                    {formData.numberOfParticipants || "Not provided"}
                  </p>
                </div>
                <div>
                  <h4 className="font-light leading-none tracking-tight">Participant Roles</h4>
                  <p className="text-gray-600">
                    {formData.participantRoles || "Not provided"}
                  </p>
                </div>
                <div>
                  <h4 className="font-light leading-none tracking-tight">Participant Skill Level</h4>
                  <p className="text-gray-600">
                    {formData.participantSkillLevel || "Not provided"}
                  </p>
                </div>
                <div>
                  <h4 className="font-light leading-none tracking-tight">Training Delivery Mode</h4>
                  <p className="text-gray-600">
                    {formData.trainingDeliveryMode || "Not provided"}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Training Timeline</h4>
                {formData.trainingTimeline ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-light text-sm">Start Date</h5>
                      <p className="text-gray-600">
                        {formatDate(formData.trainingTimeline.startDate)}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-light text-sm">End Date</h5>
                      <p className="text-gray-600">
                        {formatDate(formData.trainingTimeline.endDate)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">Not provided</p>
                )}
              </div>
            </div>
          </section>

          {/* Project Support Requirements */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Project Support Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Project Overview</h4>
                <p className="text-gray-600">
                  {formData.projectOverview || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Project Scope & Deliverables</h4>
                <p className="text-gray-600">
                  {formData.projectScopeDeliverables || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-medium">Collaboration Preferences</h4>
                <p className="text-gray-600">
                  {formData.collaborationPreferences && formData.collaborationPreferences.length > 0
                    ? formData.collaborationPreferences.join(", ")
                    : "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Project Deadline</h4>
                <p className="text-gray-600">
                  {formData.projectDeadline ? formatDate(formData.projectDeadline) : "Not provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Additional Considerations */}
          <section>
            <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Additional Considerations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-light leading-none tracking-tight">Tools & Resources</h4>
                <p className="text-gray-600">
                  {formData.toolsAndResources || "Not provided"}
                </p>
              </div>
              <div>
                <h4 className="font-light leading-none tracking-tight">Interest in Long Term Collaboration</h4>
                <p className="text-gray-600">
                  {formData.longTermCollaboration ? "Yes" : "No"}
                </p>
              </div>
              {formData.additionalInformation && (
                <div>
                  <h4 className="font-light leading-none tracking-tight">Additional Information</h4>
                  <p className="text-gray-600">{formData.additionalInformation}</p>
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

          {/* Submission Metadata */}
          {(formData.createdAt || formData.updatedAt) && (
            <section>
              <h3 className="text-lg font-light leading-none tracking-tight mb-4">Submission Info</h3>
              <div className="grid grid-cols-2 gap-4">
                {formData.createdAt && (
                  <div>
                    <h4 className="font-light text-sm leading-none tracking-tight">Created</h4>
                    <p className="text-gray-600">{formatDate(formData.createdAt)}</p>
                  </div>
                )}
                {formData.updatedAt && (
                  <div>
                    <h4 className="font-light text-sm leading-none tracking-tight">Last Updated</h4>
                    <p className="text-gray-600">{formatDate(formData.updatedAt)}</p>
                  </div>
                )}
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