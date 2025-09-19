"use client"

import * as React from "react"
import { memo } from "react";
import { type FieldConfig, type SectionConfig, type FormPreviewProps } from "@/types/form-preview";
import { parseFileAttachment, hasSectionContent } from "@/lib/utils/file-parsing";
import {
  EyeIcon,
  DownloadIcon,
  LoaderCircle,
  User,
  FileText,
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
import { type CadFormData } from "@/lib/schemas/cad/z";

import { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CadPDF } from "../../pdf/docs";



export const FormPreview = memo(function FormPreview({ formData }: FormPreviewProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPdfPrepared, setIsPdfPrepared] = useState(false);

  const sections: SectionConfig[] = [
    {
      title: "Organization Details",
      icon: User,
      fields: [
        { label: "Organization Name", value: formData.organizationName },
        { label: "Contact Person", value: formData.contactPerson },
        { label: "Email", value: formData.email },
        { label: "Phone Number", value: formData.phoneNumber },
        { label: "Address", value: formData.address, fullWidth: true },
        { label: "Organization Operations", value: formData.organizationOperations, fullWidth: true, isMedium: true },
      ]
    },
    {
      title: "Documentation Details",
      icon: FileText,
      fields: [
        { label: "Documentation Purpose", value: formData.documentationPurpose, fullWidth: true },
        { label: "Documentation Types", value: formData.documentationTypes, isArray: true },
        { label: "Other Documentation Types", value: formData.otherDocumentationTypes },
        { label: "File Formats", value: formData.fileFormats, isArray: true, isMedium: true },
        { label: "Other File Formats", value: formData.otherFileFormats },
      ]
    },
    {
      title: "Technical Details",
      icon: FileText,
      fields: [
        { label: "Technical Specifications", value: formData.technicalSpecifications, fullWidth: true },
        { label: "Technical Standards", value: formData.technicalStandards, fullWidth: true },
      ]
    },
    {
      title: "Preferences",
      icon: FileText,
      fields: [
        { label: "Visual Style Preferences", value: formData.visualStylePreferences, fullWidth: true },
        { label: "Layout Preferences", value: formData.layoutPreferences, fullWidth: true, isMedium: true },
      ]
    },
    {
      title: "Timeline and Additional Services",
      icon: FileText,
      fields: [
        { label: "Preferred Timeline", value: formData.preferredTimeline },
        { label: "Require Periodic Drafts", value: formData.requirePeriodicDrafts, isBoolean: true },
        { label: "Additional Services", value: formData.additionalServices, isArray: true },
      ]
    },
    {
      title: "Additional Comments",
      icon: FileText,
      fields: [
        { label: "Additional Comments", value: formData.additionalComments, fullWidth: true },
      ]
    },
    {
      title: "File Attachments",
      icon: FileText,
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
          className="w-full md:w-fit mx-auto lg:mx-0"
          variant="primary-outline"
          size="standard"
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
            <Button variant="close" size="standard" className="w-fit">
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
                    {Icon && <span><Icon className="my-auto size-5" /></span>} {section.title}
                  </h3>
                  <div className="grid gap-3">
                    {attachments.map((file, index) => {
                      const { url, name } = parseFileAttachment(file);
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <FileText className="size-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download attachment: ${name} (opens in new tab)`}
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
                  {Icon && <span><Icon className="my-auto size-5" /></span>} {section.title}
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
              variant="primary"
              size="standard"
              className="min-w-[150px] mx-auto lg:mx-0"
              onClick={() => setIsPdfPrepared(true)}
            >
              Get PDF
              <FileText className="h-4 w-4 md:ml-2" />
            </Button>
          ) : (
            <PDFDownloadLink
              document={<CadPDF data={formData} />}
              fileName={`cad-request-${new Date().toISOString().split('T')[0]}.pdf`}
            >
              {({ loading, url }) => (
                <Button
                  disabled={loading}
                  variant="primary"
                  size="standard"
                  className="min-w-[150px] mx-auto lg:mx-0"
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
});