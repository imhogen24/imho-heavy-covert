"use client"

import * as React from "react"
import {
  EyeIcon,
  DownloadIcon,
  LoaderCircle,
  User,
  FileText,
  RefreshCcw,
  Calendar,
  Package,
  X
} from "lucide-react"
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

interface FieldConfig {
  label: string;
  value: string | boolean | string[] | Date | number | undefined;
  fullWidth?: boolean;
  isMedium?: boolean;
  isBoolean?: boolean;
  isArray?: boolean;
  isDate?: boolean;
}

interface DateRangeField {
  startDate: Date;
  endDate: Date;
}

interface SectionConfig {
  title: string;
  icon: React.FC<{ className?: string }>;
  fields?: FieldConfig[];
  fileAttachments?: string[];
  dateRange?: {
    label: string;
    value?: DateRangeField;
  };
}

// Helper function to check if a section has any filled fields
const hasSectionContent = (fields: (string | boolean | string[] | Date | number | undefined)[]) => {
  return fields.some(field => {
    if (Array.isArray(field)) return field.length > 0;
    return field !== undefined && field !== "" && field !== false;
  });
};

// Helper function to better handle file attachment parsing
const parseFileAttachment = (fileString: string) => {
  try {
    const parts = fileString.split(",");
    if (parts.length >= 2) {
      // First part is URL, second part is filename
      return { url: parts[0].trim(), name: parts[1].trim() };
    }

    // Fallback if splitting fails
    const url = fileString.trim();
    const name = url.split('/').pop() || "Attachment";
    return { url, name };
  } catch (error) {
    console.error("Error parsing attachment:", fileString);
    return { url: "#", name: "Invalid attachment format" };
  }
};

// Helper function to format dates
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const FormPreview = ({ formData }: FormPreviewProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPdfPrepared, setIsPdfPrepared] = useState(false);

  const sections: SectionConfig[] = [
    {
      title: "Client Information",
      icon: User,
      fields: [
        { label: "Organization Name", value: formData.organizationName },
        { label: "Contact Person", value: formData.contactPerson },
        { label: "Email", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
        { label: "Physical/Postal Address", value: formData.physicalPostalAddress, fullWidth: true },
        { label: "Business Overview", value: formData.businessOverview, fullWidth: true, isMedium: true },
      ]
    },
    {
      title: "Training Requirements",
      icon: RefreshCcw,
      fields: [
        { label: "Training Needs", value: formData.trainingNeeds, fullWidth: true },
        { label: "Training Objectives", value: formData.trainingObjectives, fullWidth: true },
        { label: "Number of Participants", value: formData.numberOfParticipants },
        { label: "Participant Roles", value: formData.participantRoles },
        { label: "Participant Skill Level", value: formData.participantSkillLevel },
        { label: "Training Delivery Mode", value: formData.trainingDeliveryMode },
      ],
      dateRange: {
        label: "Training Timeline",
        value: formData.trainingTimeline
      }
    },
    {
      title: "Project Support Requirements",
      icon: Package,
      fields: [
        { label: "Project Overview", value: formData.projectOverview, fullWidth: true },
        { label: "Project Scope & Deliverables", value: formData.projectScopeDeliverables, fullWidth: true },
        { label: "Collaboration Preferences", value: formData.collaborationPreferences, isArray: true },
        { label: "Project Deadline", value: formData.projectDeadline, isDate: true },
      ]
    },
    {
      title: "Additional Considerations",
      icon: FileText,
      fields: [
        { label: "Tools & Resources", value: formData.toolsAndResources, fullWidth: true },
        { label: "Interest in Long Term Collaboration", value: formData.longTermCollaboration, isBoolean: true },
        { label: "Additional Information", value: formData.additionalInformation, fullWidth: true },
      ]
    },
    {
      title: "File Attachments",
      icon: FileText,
      fileAttachments: Array.isArray(formData.fileAttachments)
        ? formData.fileAttachments
        : formData.fileAttachments ? [formData.fileAttachments] : []
    },
    {
      title: "Submission Info",
      icon: Calendar,
      fields: [
        { label: "Created", value: formData.createdAt, isDate: true },
        { label: "Last Updated", value: formData.updatedAt, isDate: true },
      ]
    }
  ];

  return (
    <Dialog onOpenChange={(open) => {
      if (!open) {
        setIsPdfPrepared(false);
        setIsDownloading(false);
      }
    }}>
      <DialogTrigger asChild>
        <Button
          className="w-full md:w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]"
          variant="outline"
        >
          Preview Response <EyeIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <DialogHeader className="flex flex-row justify-between">
          <div>
            <DialogTitle>Form Preview </DialogTitle>
          </div>
          <DialogClose asChild className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Button variant="close" className="w-fit p-[14px] h-[42px] md:h-[48px]">
              <X />
            </Button>
          </DialogClose>

        </DialogHeader>
        <div className="space-y-6 py-4">
          {sections.map((section, idx) => {
            const Icon = section.icon;

            // Handle file attachments section
            if (section.title === "File Attachments") {
              const attachments = section.fileAttachments || [];

              // Skip if no attachments
              if (attachments.length === 0) {
                return null;
              }

              return (
                <section key={idx} className="border-t muted-border pt-4">
                  <h3 className="inline-flex gap-2 text-lg font-medium leading-none tracking-tight mb-4">
                    <span><Icon className="my-auto size-5" /></span> {section.title}
                  </h3>
                  <div className="grid gap-3">
                    {attachments.map((file, index) => {
                      const { url, name } = parseFileAttachment(file);
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <FileText className="size-4 text-blue-600 dark:text-blue-400" />
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline truncate max-w-full"
                          >
                            {name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }

            // Handle sections with date ranges
            if (section.dateRange && section.dateRange.value) {
              return (
                <section key={idx} className={idx > 0 ? "border-t muted-border pt-4" : ""}>
                  <h3 className="inline-flex gap-2 text-xl font-medium leading-none tracking-tight mb-4">
                    <span><Icon className="my-auto size-5" /></span> {section.title}
                  </h3>
                  <div className="space-y-5">
                    {section.fields?.map((field, fieldIdx) => {
                      // Skip empty fields
                      if (field.value === undefined || field.value === "" ||
                        (Array.isArray(field.value) && field.value.length === 0)) {
                        return null;
                      }

                      // Format the value based on its type
                      let displayValue: React.ReactNode;
                      if (field.isBoolean) {
                        displayValue = field.value ? "Yes" : "No";
                      } else if (field.isArray && Array.isArray(field.value)) {
                        displayValue = field.value.join(", ");
                      } else if (field.isDate && field.value instanceof Date) {
                        displayValue = formatDate(field.value);
                      } else {
                        displayValue = String(field.value);
                      }

                      return (
                        <div key={fieldIdx} className={`${field.fullWidth ? "md:col-span-2" : ""} `}>
                          <h4 className={`${field.isMedium ? "font-medium" : "font-semibold"} text-sm mb-1`}>
                            {field.label}
                          </h4>
                          <p className="text-muted-foreground font-light text-sm whitespace-pre-wrap">
                            {displayValue}
                          </p>
                        </div>
                      );
                    })}

                    {/* Render the date range */}
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{section.dateRange.label}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-light text-sm">Start Date</h5>
                          <p className="text-muted-foreground font-light text-sm">
                            {formatDate(section.dateRange.value.startDate)}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-light text-sm">End Date</h5>
                          <p className="text-muted-foreground font-light text-sm">
                            {formatDate(section.dateRange.value.endDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // Skip rendering other sections if all fields are empty
            if (!section.fields || !hasSectionContent(section.fields.map(f => f.value))) {
              return null;
            }

            return (
              <section key={idx} className={idx > 0 ? "border-t muted-border pt-4" : ""}>
                <h3 className="inline-flex gap-2 text-xl font-medium leading-none tracking-tight mb-4">
                  <span><Icon className="my-auto size-5" /></span> {section.title}
                </h3>
                <div className="space-y-5">
                  {section.fields.map((field, fieldIdx) => {
                    // Skip empty fields
                    if (field.value === undefined || field.value === "" ||
                      (Array.isArray(field.value) && field.value.length === 0)) {
                      return null;
                    }

                    // Format the value based on its type
                    let displayValue: React.ReactNode;
                    if (field.isBoolean) {
                      displayValue = field.value ? "Yes" : "No";
                    } else if (field.isArray && Array.isArray(field.value)) {
                      displayValue = field.value.join(", ");
                    } else if (field.isDate && field.value instanceof Date) {
                      displayValue = formatDate(field.value);
                    } else {
                      displayValue = String(field.value);
                    }

                    return (
                      <div key={fieldIdx} className={`${field.fullWidth ? "md:col-span-2" : ""} `}>
                        <h4 className={`${field.isMedium ? "font-medium" : "font-semibold"} text-sm mb-1`}>
                          {field.label}
                        </h4>
                        <p className="text-muted-foreground font-light text-sm whitespace-pre-wrap">
                          {displayValue}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <DialogFooter className="items-end mt-4 pt-2 ">
          {!isPdfPrepared ? (
            <Button
              variant="download"
              className="min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 h-[42px] md:h-[48px] dark:hover:bg-white/85"
              onClick={() => setIsPdfPrepared(true)}
            >
              Get PDF
              <FileText className="h-4 w-4 md:ml-2" />
            </Button>
          ) : (
            <PDFDownloadLink
              document={<SupportPDF data={formData} />}
              fileName={`support-request-${new Date().toISOString().split('T')[0]}.pdf`}
            >
              {({ loading, url }) => (
                <Button
                  disabled={loading}
                  variant="download"
                  className="min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 h-[42px] md:h-[48px] dark:hover:bg-white/85"
                >
                  {loading || isDownloading ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <span>Download PDF</span>
                      <DownloadIcon className="h-4 w-4 md:ml-2" />
                    </>
                  )}
                </Button>
              )}
            </PDFDownloadLink>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};