"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  DraftingDigitizationSchema,
  type DraftingDigitizationFormData,
  type DraftingDigitizationFormInput,
} from "@/lib/schemas/drafting-digitization/z";
import { UploadDropzone } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, FileIcon, LoaderCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { DraftingDigitizationFormAction } from "@/actions/action";
import { FormSection, SectionChild } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";
import { Agreement } from "../shared/agreement";
import { FormPreview } from "./preview";

const inputMaterialTypeOptions = [
  {
    value: "Physical Part / Machine" as const,
    description: "Requires physical metrology/scanning",
  },
  {
    value: "Legacy 2D Drawings/PDFs" as const,
    description: "Conversion to 3D CAD",
  },
  {
    value: "Hand Sketches / Concepts" as const,
    description: "Requires engineering detailing",
  },
  {
    value: "Existing 3D Models" as const,
    description: "Needs 2D drawings / BOM extraction",
  },
];

const draftingServiceOptions = [
  "3D Solid Modeling (STEP/IGES)",
  "2D Manufacturing Drawings (GD&T)",
  "General Arrangement / Assembly",
  "Exploded Views for Manuals",
  "Automated BOM Extraction",
] as const;

const draftingStandardOptions = ["ISO", "ASME", "No Preference"] as const;

const outputFormatOptions = [
  "PDF",
  "DWG",
  "DXF",
  "STEP",
  "Native CAD",
] as const;

const nextSteps = [
  "Immediate project triage of your source asset",
  "Metrology dispatch or direct modeling, depending on input type",
  "Deliverable and output format confirmation",
  "Quotation and turnaround schedule",
];

export const DraftingDigitizationForm = () => {
  const form = useForm<
    DraftingDigitizationFormInput,
    any,
    DraftingDigitizationFormData
  >({
    resolver: zodResolver(DraftingDigitizationSchema),
    defaultValues: {
      // 1.0 Client Information
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      siteLocation: "",

      // 2.0 The Source Asset
      assetCondition: "",

      // 3.0 Required Deliverables & End Goal
      draftingServices: [],
      endGoal: "",

      // 4.0 Technical Specifications & Preferences
      outputFormats: [],

      fileAttachments: [],
      disclaimer: false,
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: DraftingDigitizationFormData) {
    setPending(true);
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else if (value !== undefined) {
        formData.append(key, String(value));
      }
    });

    try {
      const result = await DraftingDigitizationFormAction(formData);

      if (result?.error) {
        toast.error("Something went wrong! Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-10 text-center py-10">
          <div className="flex flex-col items-center gap-5">
            <SuccessBadge />
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Green Lane Request Received
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Your drafting request has entered the fast-track workflow.
                Our team will triage your source asset and respond with the
                technical approach and turnaround.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              What Happens Next
            </h3>
            <StepGrid items={nextSteps} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
          {/* 1.0 Client Information */}
          <FormSection label="Client Information">
            <SectionChild label="ORGANIZATION">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Organization / Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="MiningPro Ltd" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Contact Person &amp; Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ama Serwaa, Maintenance Lead"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="CONTACT DETAILS">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ama.serwaa@miningpro.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+233241234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="PROJECT SITE" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="siteLocation"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Physical Address / Project Site Location
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="No.15 Industrial Lane, Accra, Ghana"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* 2.0 The Source Asset */}
          <FormSection label="The Source Asset">
            <p className="text-sm text-muted-foreground">
              Select the primary input type. This determines our technical
              approach and pricing.
            </p>

            <SectionChild label="INPUT MATERIAL" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="inputMaterialType"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Input Material Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the primary input type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {inputMaterialTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <span className="font-medium">{option.value}</span>
                            <span className="text-muted-foreground">
                              {" "}
                              — {option.description}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="ASSET DETAIL" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="assetCondition"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Asset Condition / Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='e.g., "Broken cast-iron pump housing" or "15 scanned PDFs"'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* 3.0 Required Deliverables & End Goal */}
          <FormSection label="Required Deliverables & End Goal">
            <FormField
              control={form.control}
              name="draftingServices"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>
                    Drafting Services Required (Select all that apply)
                  </FormLabel>
                  <SectionChild
                    label="DRAFTING SERVICES"
                    className="md:grid-cols-2"
                  >
                    {draftingServiceOptions.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="draftingServices"
                        render={({ field }) => (
                          <FormItem
                            key={option}
                            className="flex flex-row items-start my-auto space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="my-auto"
                                checked={field.value?.includes(option)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        option,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== option
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                {option}
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="END GOAL" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="endGoal"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>End Goal / Primary Use Case</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="CNC Machining, Patent Filing, Technical Manual, Digital Archiving..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* 4.0 Technical Specifications & Preferences */}
          <FormSection label="Technical Specifications & Preferences">
            <SectionChild label="DRAFTING STANDARD">
              <FormField
                control={form.control}
                name="draftingStandard"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Drafting Standard</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="ISO / ASME / No Preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {draftingStandardOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <FormField
              control={form.control}
              name="outputFormats"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>Preferred Output Formats</FormLabel>
                  <SectionChild
                    label="OUTPUT FORMATS"
                    className="md:grid-cols-3"
                  >
                    {outputFormatOptions.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="outputFormats"
                        render={({ field }) => (
                          <FormItem
                            key={option}
                            className="flex flex-row items-start my-auto space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="my-auto"
                                checked={field.value?.includes(option)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        option,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== option
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                {option}
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection label="File Attachments">
            <FormField
              control={form.control}
              name="fileAttachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Reference Uploads — photos, sketches, PDFs, CAD files
                    (Optional)
                  </FormLabel>
                  <FormControl>
                    <div>
                      <div className="relative border border-dashed muted-border rounded-[0.5rem]">
                        <UploadDropzone
                          className="ut-button:bg-accent ut-button:text-accent-foreground border-none"
                          config={{ mode: "auto" }}
                          endpoint="fileAttachment"
                          onClientUploadComplete={(res: any) => {
                            const newFiles = res.map(
                              (file: any) =>
                                `${file.serverData.fileUrl},${file.name}`
                            );
                            field.onChange([
                              ...(field.value ?? []),
                              ...newFiles,
                            ]);
                            toast.success(
                              `${res.length} file${res.length > 1 ? "s" : ""} uploaded`
                            );
                          }}
                          onUploadError={() => {
                            toast.error(
                              "Something went wrong, check your internet connection or consider reducing the file size"
                            );
                          }}
                        />
                      </div>

                      {(field.value ?? []).length > 0 && (
                        <div className="flex flex-col mt-4 gap-2">
                          {(field.value ?? []).map(
                            (file: string, index: number) => (
                              <div
                                key={index}
                                className="w-full p-2 bg-accent flex flex-wrap justify-between rounded-[0.5em] gap-2 items-center"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <FileIcon className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] overflow-hidden whitespace-nowrap">
                                    {file.split(",")[1]}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <Link
                                    href={file.split(",")[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <EyeIcon className="w-4 h-4 hover:stroke-muted-foreground transition duration-200 ease-in-out" />
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const newFiles = (
                                        field.value ?? []
                                      ).filter((_, i) => i !== index);
                                      field.onChange(newFiles);
                                    }}
                                  >
                                    <span className="sr-only">
                                      remove item {index}
                                    </span>
                                    <Trash2 className="w-4 h-4 hover:stroke-destructive transition duration-200 ease-in-out" />
                                  </button>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection label="Notice, Disclaimer, and Terms of Agreement">
            <Agreement />
            <FormField
              control={form.control}
              name="disclaimer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="my-auto"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions of this agreement
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </FormSection>

          <div className="w-full md:w-fit flex flex-col md:flex-row gap-4 justify-start items-start">
            <Button
              className="w-full min-w-[150px] mx-auto md:mx-0"
              variant="primary"
              size="standard"
              disabled={pending}
              type="submit"
            >
              {pending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <>Submit Request</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DraftingDigitizationForm;
