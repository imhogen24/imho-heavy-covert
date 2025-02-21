"use client"

import * as React from "react"
import {
  EyeIcon,
  DownloadIcon,
  LoaderCircle,
  User,
  FileText,
  RefreshCcw,
  Package,
  Users,
  ShieldCheck,
  MessageSquare,
  FolderOpen,
  Settings,
  TrendingUp,
  TriangleAlert,
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
import { type ProcessFormData } from "@/lib/z";

import { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ProcessPDF } from "../../pdf/docs";

interface FormPreviewProps {
  formData: ProcessFormData;
}

interface FieldConfig {
  label: string;
  value: string | boolean | string[] | undefined;
  fullWidth?: boolean;
  isMedium?: boolean;
  isBoolean?: boolean;
  isArray?: boolean;
}

interface SectionConfig {
  title: string;
  icon: React.FC<{ className?: string }>;
  fields?: FieldConfig[];
  fileAttachments?: string[];
}

// Helper function to check if a section has any filled fields
const hasSectionContent = (fields: (string | boolean | string[] | undefined)[]) => {
  return fields.some(field => {
    if (Array.isArray(field)) return field.length > 0;
    return field !== undefined && field !== "" && field !== false;
  });
};

// Update this helper function to better handle file attachment parsing
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
        { label: "Address", value: formData.address, fullWidth: true },
        { label: "Business Overview", value: formData.businessOverview, fullWidth: true, isMedium: true },
      ]
    },
    {
      title: "Input Requirements",
      icon: RefreshCcw,
      fields: [
        { label: "Material Inputs", value: formData.materialInputs },
        { label: "Energy Inputs", value: formData.EnergyInputs },
        { label: "Information Inputs", value: formData.informationInputs },
        { label: "Living Inputs", value: formData.livingInputs },
      ]
    },
    {
      title: "Operational Agents",
      icon: Users,
      fields: [
        { label: "Human Systems", value: formData.humanSytems },
        { label: "Management Systems", value: formData.managementSystems },
        { label: "Technical Systems", value: formData.technicalSytems },
        { label: "Information Systems", value: formData.informationSystems },
        { label: "Environmental Systems", value: formData.environment },
      ]
    },
    {
      title: "Process Requirements",
      icon: Settings,
      fields: [
        { label: "Existing Systems", value: formData.existingSytems },
        { label: "New System Requirements", value: formData.newSystemRequiements },
        { label: "Key Metrics", value: formData.KeyMetrics },
      ]
    },
    {
      title: "Output Requirements",
      icon: Package,
      fields: [
        { label: "Material Outputs", value: formData.materialOutputs },
        { label: "Energy Outputs", value: formData.EnergyOutputs },
        { label: "Information Outputs", value: formData.informationOutputs },
        { label: "Living Outputs", value: formData.livingOutputs },
      ]
    },
    {
      title: "Challenges or Inefficiencies",
      icon: TriangleAlert,
      fields: [
        { label: "Pain Points", value: formData.painPoints, isArray: true },
        { label: "Specific Issues", value: formData.specificIssues },
      ]
    },
    {
      title: "Scalability and Future Goals",
      icon: TrendingUp,
      fields: [
        { label: "Future Growth Plans", value: formData.futureGrowth, isBoolean: true },
        { label: "Comparable Systems", value: formData.comparableSystems },
      ]
    },
    {
      title: "Collaboration and Communication",
      icon: MessageSquare,
      fields: [
        { label: "Collaboration Preferences", value: formData.collaborationPreferences, isArray: true },
        { label: "Additional Comments", value: formData.additionalComments },
      ]
    },
    {
      title: "File Attachments",
      icon: FolderOpen,
      fileAttachments: Array.isArray(formData.fileAttachments)
        ? formData.fileAttachments
        : formData.fileAttachments ? [formData.fileAttachments] : []
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
          className="w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]"
          variant="outline">
          Preview Response <EyeIcon className="h-4 w-4 ml-2" />
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
          <DialogClose asChild>
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
              document={<ProcessPDF data={formData} />}
              fileName={`process-request-${new Date().toISOString().split('T')[0]}.pdf`}
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