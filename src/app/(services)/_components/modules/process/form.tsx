"use client";

import * as React from "react"
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
import { ProcessSchema, type ProcessFormData } from "@/lib/z-schema";
import { Button } from "@/components/ui/button";
import { EyeIcon, FileIcon, LoaderCircle, Trash2 } from "lucide-react";

import { processFormAction } from "@/actions/action";
import { FormSection, SectionChild } from "../../wrapper";
import Link from "next/link";

const collaborationPreferences = [
  "Regular Meetings",
  "Weekly Updates via Email",
  "On-demand Reporting"
] as const;

const painPoints = [
  "Low efficiency",
  "High operating costs",
  "Safety concerns",
  "Low output",
  "Quality issues",
  "Other"
] as const;



export const ProcessForm = () => {
  const form = useForm<ProcessFormData>({
    resolver: zodResolver(ProcessSchema),
    defaultValues: {
      // Client Information
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      address: "",
      businessOverview: "",

      // Input Requirements
      materialInputs: "",
      EnergyInputs: "",
      informationInputs: "",
      livingInputs: "",

      // Operational Agents
      humanSytems: "",
      managementSystems: "",
      technicalSytems: "",
      informationSystems: "",
      environmentalSytems: "",

      // Process Requirements
      existingSytems: "",
      newSystemRequiements: "",
      KeyMetrics: "",

      // Output Requirements
      materialOutputs: "",
      EnergyOutputs: "",
      informationOutputs: "",
      livingOutputs: "",

      // Challenges Or Inefficiencies
      painPoints: [],
      specificIssues: "",

      // Scalability And Future Goals
      futureGrowth: false,
      comparableSystems: "",

      // Collaboration and Communication
      collaborationPreferences: [],
      additionalComments: "",
      fileAttachments: [],
    },
  });

  const [pending, setPending] = useState(false);
  const [showOtherIssues, setShowOtherIssues] = useState(false);

  // Check for "Other" option in painPoints and show additional field if needed
  React.useEffect(() => {
    const selectedPainPoints = form.watch("painPoints");
    setShowOtherIssues(selectedPainPoints?.includes("Other") || false);
  }, [form.watch("painPoints")]);

  async function onSubmit(values: ProcessFormData) {
    setPending(true);
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else {
        formData.append(key, String(value));
      }
    });

    try {
      const result = await processFormAction(formData);

      toast.success("Process request submitted successfully!");
      form.reset();
      console.log(result)
      console.log(values)
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Process Development Request Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-20">

          {/* Client Information Section */}
          <FormSection label="Client Information">
            <SectionChild label="ORGANIZATION DETAILS">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter organization name" {...field} />
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
                      <Input placeholder="Enter contact person name" {...field} />
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
                      <Input type="email" placeholder="Enter email address" {...field} />
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
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="BUSINESS OVERVIEW" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="businessOverview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Overview</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your business" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Input Requirements Section */}
          <FormSection label="Input Requirements">
            <SectionChild label="SYSTEM INPUTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="materialInputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material Inputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe material inputs required" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="EnergyInputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Energy Inputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe energy inputs required" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="informationInputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Information Inputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe information inputs required" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="livingInputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Inputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe living inputs if applicable" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Operational Agents Section */}
          <FormSection label="Operational Agents">
            <SectionChild label="SYSTEM AGENTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="humanSytems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Human Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe human systems involved" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="managementSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Management Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe management systems involved" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technicalSytems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe technical systems involved" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="informationSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Information Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe information systems involved" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="environmentalSytems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Environmental Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe environmental systems involved" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Process Requirements Section */}
          <FormSection label="Process Requirements">
            <SectionChild label="SYSTEM PROCESS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="existingSytems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Existing Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe existing systems" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newSystemRequiements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New System Requirements</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe new system requirements" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="KeyMetrics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Metrics</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe key performance metrics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Output Requirements Section */}
          <FormSection label="Output Requirements">
            <SectionChild label="SYSTEM OUTPUTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="materialOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material Outputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe material outputs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="EnergyOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Energy Outputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe energy outputs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="informationOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Information Outputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe information outputs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="livingOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Outputs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe living outputs if applicable" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Challenges Or Inefficiencies Section */}
          <FormSection label="Challenges Or Inefficiencies">
            <FormField
              control={form.control}
              name="painPoints"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">Pain Points</FormLabel>
                  <SectionChild label="CURRENT CHALLENGES" className="md:grid-cols-3">
                    {painPoints.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="painPoints"
                        render={({ field }) => {
                          return (
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
                                      ? field.onChange([...(field.value || []), option])
                                      : field.onChange(
                                        field.value?.filter((value) => value !== option)
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
                          );
                        }}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="SPECIFIC ISSUES" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="specificIssues"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Issues Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe specific issues or challenges in detail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Scalability And Future Goals Section */}
          <FormSection label="Scalability & Future Goals">
            <FormField
              control={form.control}
              name="futureGrowth"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">Future Growth</FormLabel>
                  <SectionChild label="FUTURE GROWTH PLANS" className="md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="futureGrowth"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Contains Biological Components
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="COMPARABLE SYSTEMS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="comparableSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comparable Systems</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe comparable systems you're familiar with or would like to emulate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Collaboration and Communication Section */}
          <FormSection label="Collaboration and Communication">
            <FormField
              control={form.control}
              name="collaborationPreferences"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">Collaboration Preferences</FormLabel>
                  <SectionChild label="COLLABORATION PREFERENCES" className="md:grid-cols-3">
                    {collaborationPreferences.map((pref) => (
                      <FormField
                        key={pref}
                        control={form.control}
                        name="collaborationPreferences"
                        render={({ field }) => (
                          <FormItem
                            key={pref}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(pref)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), pref])
                                    : field.onChange(
                                      field.value?.filter((value) => value !== pref)
                                    );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {pref}
                            </FormLabel>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </SectionChild>
                </FormItem>
              )}
            />

            <SectionChild label="ADDITIONAL COMMENTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional comments or requirements"
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
                <>Submit Request</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProcessForm;