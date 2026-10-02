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
import { Textarea } from "@/components/ui/textarea";
import {
  CustomEngineeringSchema,
  type CustomEngineeringFormData,
  type CustomEngineeringFormInput,
} from "@/lib/schemas/custom-engineering/z";
import { UploadDropzone } from "@/lib/uploadthing";
import { useSubmission } from "@/hooks/use-submission";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, FileIcon, LoaderCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormSection, SectionChild } from "../../wrapper";
import { Agreement } from "../shared/agreement";
import { StepGrid, SuccessBadge } from "../shared/success";
import { FormPreview } from "./preview";

const projectScopeOptions = [
  {
    value: "Product Design" as const,
    description: "I need a specific custom machine or product designed.",
  },
  {
    value: "Process / Factory Design" as const,
    description: "I need a complete processing line or factory infrastructure.",
  },
];

const nextSteps = [
  "Technical review of your systems engineering brief",
  "Scoping call to confirm inputs, outputs, and constraints",
  "Feasibility assessment and budget alignment",
  "Engineering proposal and project kickoff",
];

export const CustomEngineeringForm = () => {
  const form = useForm<
    CustomEngineeringFormInput,
    any,
    CustomEngineeringFormData
  >({
    resolver: zodResolver(CustomEngineeringSchema),
    defaultValues: {
      // 1.0 Client Information
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      siteLocation: "",

      // 2.0 Project Scope & Classification
      projectScope: [],
      projectTitle: "",
      primaryObjective: "",

      // 3.0 Systems Engineering Core
      materialInputs: "",
      energyAndInformationInputs: "",
      transformation: "",
      outputs: "",
      byProducts: "",

      // 4.0 Operational Environment & Constraints
      humanSystem: "",
      activeEnvironment: "",
      budgetExpectations: "",
      targetTimeline: "",

      fileAttachments: [],
      disclaimer: false,
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = useSubmission("custom-engineering");

  async function onSubmit(values: CustomEngineeringFormData) {
    setPending(true);

    try {
      const result = await submit(values);

      if (!result.ok) {
        toast.error(result.error || "Something went wrong! Please try again.");

        return;
      }

      setSubmitted(true);
    } catch {
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
                Master Intake Received
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Your brief has been recorded as the Single Source of Truth for
                this project. Our engineering team will review the operands you
                defined and come back to you with the next step.
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
                      <Input
                        placeholder="AgroTech Processing Solutions"
                        {...field}
                      />
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
                        placeholder="Don Chris, Operations Director"
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
                        placeholder="don.chris@agrotechsolutions.com"
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

          {/* 2.0 Project Scope & Classification */}
          <FormSection label="Project Scope & Classification">
            <FormField
              control={form.control}
              name="projectScope"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>
                    What scale of engineering support are you looking for?
                  </FormLabel>
                  <SectionChild
                    label="SCALE OF SUPPORT"
                    className="md:grid-cols-1"
                  >
                    {projectScopeOptions.map((option) => (
                      <FormField
                        key={option.value}
                        control={form.control}
                        name="projectScope"
                        render={({ field }) => (
                          <FormItem
                            key={option.value}
                            className="flex flex-row items-start my-auto space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="my-auto"
                                checked={field.value?.includes(option.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        option.value,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== option.value,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal">
                                <span className="font-semibold">
                                  {option.value}:
                                </span>{" "}
                                {option.description}
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

            <SectionChild label="PROJECT DEFINITION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Project Title / Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Cassava Processing Line Upgrade"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryObjective"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Primary Objective / Problem to Solve</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="We need to eliminate the manual peeling bottleneck that caps throughput at..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* 3.0 Systems Engineering Core */}
          <FormSection label="Systems Engineering Core">
            <p className="text-sm text-muted-foreground">
              Define the fundamental engineering operands of the system.
            </p>

            <SectionChild label="INPUTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="materialInputs"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Material (Raw material type, density, condition, moisture,
                      etc.)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cassava roots, freshly harvested, high moisture content of approximately..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="energyAndInformationInputs"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Energy &amp; Information (Available power supply, required
                      data/sensors)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="3-phase 415V grid supply with diesel generator backup, moisture sensors required at..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="TRANSFORMATION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="transformation"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      What exactly must happen to the raw material?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Wash, peel, grate, dewater, and dry the roots to a final moisture content of..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="OUTPUTS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="outputs"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Final Product &amp; Target Throughput (e.g., 500kg/hr)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Food-grade cassava flour at 500kg/hr sustained output"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="byProducts"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      By-products: waste streams that must be managed (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Peel waste and process water requiring on-site treatment before discharge"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* 4.0 Operational Environment & Constraints */}
          <FormSection label="Operational Environment & Constraints">
            <SectionChild label="OPERATING CONTEXT">
              <FormField
                control={form.control}
                name="humanSystem"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Human System (Expected operator skill level?) (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Semi-skilled operators with basic machine handling training"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="activeEnvironment"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Active Environment (Space limits, indoor/outdoor?)
                      (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Indoor shed, 20m x 12m footprint, 4m clear height"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="CONSTRAINTS">
              <FormField
                control={form.control}
                name="budgetExpectations"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Budget Expectations / Constraints (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="GHS 250,000 - 400,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetTimeline"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Target Delivery Timeline (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Q2 2027" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          <FormSection label="File Attachments">
            <FormField
              control={form.control}
              name="fileAttachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload supporting files here (Optional)</FormLabel>
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
                                `${file.serverData.fileUrl},${file.name}`,
                            );

                            field.onChange([
                              ...(field.value ?? []),
                              ...newFiles,
                            ]);
                            toast.success(
                              `${res.length} file${res.length > 1 ? "s" : ""} uploaded`,
                            );
                          }}
                          onUploadError={() => {
                            toast.error(
                              "Something went wrong, check your internet connection or consider reducing the file size",
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
                            ),
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
                <>Submit Intake</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CustomEngineeringForm;
