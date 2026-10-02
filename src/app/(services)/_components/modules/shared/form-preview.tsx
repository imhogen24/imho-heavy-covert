"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PDFDownloadLink, type DocumentProps } from "@react-pdf/renderer";
import {
  DownloadIcon,
  EyeIcon,
  FileText,
  LoaderCircle,
  LucideIcon,
  X,
} from "lucide-react";
import * as React from "react";
import { useState } from "react";

export interface PreviewField {
  label: string;
  value: string | number | boolean | string[] | undefined;
  fullWidth?: boolean;
  isMedium?: boolean;
  isBoolean?: boolean;
  isArray?: boolean;
  condition?: boolean;
}

export interface PreviewSection {
  title: string;
  icon: LucideIcon;
  fields: PreviewField[];
}

interface FormPreviewDialogProps {
  sections: PreviewSection[];
  /** The @react-pdf document rendered when the user requests a PDF. */
  pdfDocument: React.ReactElement<DocumentProps>;
  /** File name used for the downloaded PDF, without the extension. */
  fileName: string;
}

const isEmpty = (value: PreviewField["value"]) => {
  if (Array.isArray(value)) return value.length === 0;

  return value === undefined || value === "" || value === null;
};

// A section is only rendered when at least one of its fields carries a value.
const hasSectionContent = (fields: PreviewField[]) =>
  fields.some((field) => field.condition !== false && !isEmpty(field.value));

export const FormPreviewDialog = ({
  sections,
  pdfDocument,
  fileName,
}: FormPreviewDialogProps) => {
  const [isPdfPrepared, setIsPdfPrepared] = useState(false);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setIsPdfPrepared(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          className="w-full md:w-fit mx-auto lg:mx-0"
          variant="primary-outline"
          size="standard"
          type="button"
        >
          Preview Response <EyeIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <DialogHeader className="flex flex-row justify-between">
          <div>
            <DialogTitle>Form Preview</DialogTitle>
            <DialogDescription>
              Review your responses before submitting.
            </DialogDescription>
          </div>
          <DialogClose
            asChild
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <Button variant="close" size="standard" className="w-fit">
              <X />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {sections.map((section, idx) => {
            const Icon = section.icon;

            if (!hasSectionContent(section.fields)) {
              return null;
            }

            return (
              <section
                key={section.title}
                className={idx > 0 ? "border-t muted-border pt-4" : ""}
              >
                <h3 className="inline-flex gap-2 text-xl font-medium leading-none tracking-tight mb-4">
                  <span>
                    <Icon className="my-auto size-5" />
                  </span>{" "}
                  {section.title}
                </h3>
                <div className="space-y-5">
                  {section.fields.map((field) => {
                    if (field.condition === false || isEmpty(field.value)) {
                      return null;
                    }

                    let displayValue: React.ReactNode;

                    if (field.isBoolean) {
                      displayValue = field.value ? "Yes" : "No";
                    } else if (field.isArray && Array.isArray(field.value)) {
                      displayValue = field.value.join(", ");
                    } else {
                      displayValue = String(field.value);
                    }

                    return (
                      <div
                        key={field.label}
                        className={field.fullWidth ? "md:col-span-2" : ""}
                      >
                        <h4
                          className={`${field.isMedium ? "font-medium" : "font-semibold"} text-sm mb-1`}
                        >
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
        <DialogFooter className="items-end mt-4 pt-2">
          {!isPdfPrepared ? (
            <Button
              variant="primary"
              size="standard"
              className="min-w-[150px] mx-0"
              type="button"
              onClick={() => setIsPdfPrepared(true)}
            >
              Get PDF
              <FileText className="h-4 w-4 md:ml-2" />
            </Button>
          ) : (
            <PDFDownloadLink
              document={pdfDocument}
              fileName={`${fileName}-${new Date().toISOString().split("T")[0]}.pdf`}
            >
              {({ loading }) => (
                <Button
                  disabled={loading}
                  variant="primary"
                  size="standard"
                  className="min-w-[150px] mx-0"
                  type="button"
                >
                  {loading ? (
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
