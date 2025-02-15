"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { CadSchema, type CadFormData } from "@/lib/z-schema";
import { cadFormAction } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { EyeIcon, FileIcon, LoaderCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { FormSection, SectionChild } from "../../wrapper";
import { FormPreview } from "./preview";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const documentationTypes = [
  "2D Engineering Drawings",
  "3D Models",
  "Rendered Images",
  "Technical Illustrations",
  "User Manuals",
] as const;

const fileFormats = [
  "CAD files(eg. AutoCAD, SolidWorks)",
  "Vector images(eg. SVG, AI, EPS)",
  "PDF documents"
] as const;

const additionalServices = [
  "Prototyping",
  "Testing",
  "Further Design Works"
] as const;

export const CadForm = () => {
  const form = useForm<CadFormData>({
    resolver: zodResolver(CadSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      address: "",
      organizationOperations: "",
      documentationPurpose: "",
      documentationTypes: [],
      otherDocumentationTypes: "",
      fileFormats: [],
      otherFileFormats: "",
      technicalSpecifications: "",
      technicalStandards: "",
      visualStylePreferences: "",
      layoutPreferences: "",
      additionalDesignFeatures: "",
      preferredTimeline: "",
      requirePeriodicDrafts: false,
      additionalServices: [],
      additionalComments: "",
      fileAttachments: [],
    },
  });

  const [pending, setPending] = useState(false);
  async function onSubmit(values: CadFormData) {
    setPending(true);
    const formData = new FormData();

    formData.append("organizationName", values.organizationName);
    formData.append("contactPerson", values.contactPerson);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("address", values.address);
    formData.append("organizationOperations", values.organizationOperations);
    formData.append("documentationPurpose", values.documentationPurpose);

    if (values.documentationTypes) {
      formData.append("documentationTypes", JSON.stringify(values.documentationTypes));
    }
    if (values.fileFormats) {
      formData.append("fileFormats", JSON.stringify(values.fileFormats));
    }

    if (values.otherDocumentationTypes) {
      formData.append("otherDocumentationTypes", values.otherDocumentationTypes);
    }
    if (values.otherFileFormats) {
      formData.append("otherFileFormats", values.otherFileFormats);
    }

    formData.append("technicalSpecifications", values.technicalSpecifications);
    formData.append("technicalStandards", values.technicalStandards);
    formData.append("visualStylePreferences", values.visualStylePreferences);
    formData.append("layoutPreferences", values.layoutPreferences);

    if (values.additionalDesignFeatures) {
      formData.append("additionalDesignFeatures", values.additionalDesignFeatures);
    }

    formData.append("preferredTimeline", values.preferredTimeline);
    formData.append("requirePeriodicDrafts", (values.requirePeriodicDrafts ?? false).toString());

    if (values.additionalServices && values.additionalServices.length > 0) {
      formData.append("additionalServices", JSON.stringify(values.additionalServices));
    }

    if (values.additionalComments) {
      formData.append("additionalComments", values.additionalComments);
    }

    if (values.fileAttachments && values.fileAttachments.length > 0) {
      formData.append("fileAttachments", JSON.stringify(values.fileAttachments));
    }

    try {
      // console.log(values)
      const result = await cadFormAction(formData);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Form submitted successfully!");
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Engineering Drawing and Draftwork Request Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-20">

          <FormSection label="Client Information">
            <SectionChild label="ORGANIZATION DETAILS">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="GreenTech Machinery Ltd." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Daniel Osei" {...field} />
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
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="daniel.osei@greentechmachinery.com"
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
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0244123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="ORGANIZATION ADDRESS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your organization's address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
            <SectionChild label="PROJECT OVERVIEW" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="organizationOperations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Operations</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe your organization's operations"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documentationPurpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documentation Purpose</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What is the purpose of this documentation?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          <FormSection label="Documentation Requirements">

            <FormField
              control={form.control}
              name="documentationTypes"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">Documentation Types</FormLabel>
                  <SectionChild label="Documentation Types" className="md:grid-cols-3">
                    {documentationTypes.map((type) => (
                      <FormField
                        key={type}
                        control={form.control}
                        name="documentationTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type}
                              className="flex flex-row items-start my-auto space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="my-auto"
                                  checked={field.value?.includes(type)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), type])
                                      : field.onChange(
                                        field.value?.filter((value) => value !== type)
                                      );
                                  }}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  {type}
                                </FormLabel>
                              </div>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="OTHER DOCUMENTATION TYPES" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="otherDocumentationTypes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify other documentation types if applicable</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="eg. rendered videos, scanned documents, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <FormField
              control={form.control}
              name="fileFormats"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">File Formats</FormLabel>
                  <SectionChild label="File Formats" className="md:grid-cols-2">
                    {fileFormats.map((format) => (
                      <FormField
                        key={format}
                        control={form.control}
                        name="fileFormats"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={format}
                              className="flex flex-row items-start my-auto space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="my-auto"
                                  checked={field.value?.includes(format)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), format])
                                      : field.onChange(
                                        field.value?.filter((value) => value !== format)
                                      );
                                  }}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  {format}
                                </FormLabel>
                              </div>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="OTHER FILE FORMATS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="otherFileFormats"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify other file formats if applicable</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="eg. DXF, STEP, IGES, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="TECHNICAL DETAILS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="technicalSpecifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Specifications</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter technical specifications"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technicalStandards"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Standards</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter applicable technical standards"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

          </FormSection>

          <FormSection label="Aesthetic Preferences">
            <SectionChild label="AESTHETIC PREFEENCES" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="visualStylePreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visual Style Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your visual style preferences"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="layoutPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Layout Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your layout preferences"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalDesignFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Design Features</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional design features or requirements"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          <FormSection label="Project Specifics">
            <SectionChild label="PROJECT SPECIFICS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="preferredTimeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Timeline</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 6 weeks from approval"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requirePeriodicDrafts"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start my-auto space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="my-auto"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        Require periodic drafts
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalServices"
                render={() => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-base">Additional Services</FormLabel>
                    <SectionChild label="additionalServices" className="md:grid-cols-3">
                      {additionalServices.map((type) => (
                        <FormField
                          key={type}
                          control={form.control}
                          name="additionalServices"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={type}
                                className="flex flex-row items-start my-auto space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    className="my-auto"
                                    checked={field.value?.includes(type)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), type])
                                        : field.onChange(
                                          field.value?.filter((value) => value !== type)
                                        );
                                    }}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    {type}
                                  </FormLabel>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </SectionChild>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </SectionChild>

          </FormSection>

          <FormSection label="">
            <SectionChild className="md:grid-cols-1" label="">
              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your additional comments"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>




          {/* File Upload Section */}

          <FormSection label="File Attachments">
            <FormField
              control={form.control}
              name="fileAttachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload supporting files here</FormLabel>
                  <FormControl>
                    <div>
                      <div className="relative border border-dashed muted-border rounded-[0.5rem]">
                        <UploadDropzone
                          className="ut-button:bg-accent ut-button:text-accent-foreground border-none"
                          endpoint="fileAttachment"
                          onClientUploadComplete={(res: any) => {
                            const newFile = `${res[0].serverData.fileUrl},${res[0].name}`;
                            field.onChange([...field.value, newFile]); // Update form value
                            toast.success("Upload Completed");
                          }}
                          onUploadError={(error: any) => {
                            toast.error("Something went wrong, check your internet connection or consider reducing the file size");
                          }}
                        />
                      </div>

                      {field.value.length > 0 && (
                        <div className="flex flex-col mt-4 gap-2">
                          {field.value.map((file: string, index: number) => (
                            <div
                              key={index}
                              className="w-full p-2 bg-accent flex flex-wrap justify-between rounded-[0.5em] gap-2 items-center"
                            >
                              {/* Left: File Icon & Name */}
                              <div className="flex items-center gap-2 min-w-0">
                                <FileIcon className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] overflow-hidden whitespace-nowrap">
                                  {file.split(",")[1]}
                                </span>
                              </div>

                              {/* Right: Action Buttons */}
                              <div className="flex gap-2 items-center">
                                <Link href={file.split(",")[0]} target="_blank" rel="noopener noreferrer">
                                  <EyeIcon className="w-4 h-4 hover:stroke-muted-foreground transition duration-200 ease-in-out" />
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const newFiles = field.value.filter((_, i) => i !== index);
                                    field.onChange(newFiles);
                                  }}
                                >
                                  <span className="sr-only">remove item {index}</span>
                                  <Trash2 className="w-4 h-4 hover:stroke-destructive transition duration-200 ease-in-out" />
                                </button>
                              </div>
                            </div>

                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </FormSection>

          <div className="mt-8 inline-flex gap-4">
            <Button
              className="min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
              disabled={pending}
              type="submit"
            >
              {pending ? (
                <>
                  <LoaderCircle className="animate-spin" />
                </>
              ) : (
                <>Submit Response</>
              )}
            </Button>
            <FormPreview formData={form.getValues()} />
          </div>
        </form>
      </Form>
    </div>
  );
};
