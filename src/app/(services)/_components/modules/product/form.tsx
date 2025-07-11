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
import { ProductSchema, type ProductFormData } from "@/lib/schemas/product/z";
import { UploadDropzone } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, FileIcon, LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ProductFormAction } from "@/actions/action";
import Link from "next/link";
import { FormSection, SectionChild } from "../../wrapper";
import { Agreement } from "../shared/agreement";
import { FormPreview } from "./preview";

const collaborationPreferences = [
  "Regular Meetings",
  "Weekly Updates via Email",
  "On-demand Reporting",
] as const;

const maintenanceNeeds = [
  "In-house Maintenance",
  "Ongoing maintenance service form IMHO",
] as const;

export const ProductForm = () => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
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
      energyInputs: "",
      informationInputs: "",
      // biologicalComponent: false,
      // biologicalInputDescription: "",

      // Transformation Requirements
      transformationDescription: "",
      performanceTargets: "",

      // Output Requirements
      systemOutputs: "",
      informationOutputs: "",
      energyOutputs: "",
      livingThingsOutputs: "",

      // Operational Agents
      humanSystems: "",
      technicalSystems: "",
      environment: "",
      informationSystems: "",
      managementSystems: "",

      // Safety, Maintenance and Scalability
      safetyRequirements: "",
      maintenanceNeeds: [],
      futureScalability: "",

      // Collaboration and Communication
      collaborationPreferences: [],
      additionalComments: "",
      fileAttachments: [],
      disclaimer: false,
    },
  });

  const [pending, setPending] = useState(false);

  async function onSubmit(values: ProductFormData) {
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
      const result = await ProductFormAction(formData);
      toast.success("Product request submitted successfully!");
      form.reset();
      console.log(result);
      console.log(values);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Product Development Request Form
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
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
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Don Chris" {...field} />
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
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+233241234567" {...field} />
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
                    <Textarea
                      placeholder="No.15 Industrial Lane, Accra, Ghana"
                      {...field}
                    />
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
                      <Textarea
                        placeholder="AgroTech Processing Solutions specializes in the..."
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Cassava roots..., Properties: High moisture content..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="energyInputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Energy Inputs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Electrical power supply: 3-phase ..., Average consumption: 7kW,..."
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Required: System...,  Prefered: Sensor-based..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="livingSystemInputs"
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
                        Are there any biological components or living agents
                        involved in the operation?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              {form.watch("livingSystemInputs") && (
                <FormField
                  control={form.control}
                  name="livingSystemInputDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Living System Input Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Specify living system inputs"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </SectionChild>
          </FormSection>

          {/* Transformation Requirements Section */}
          <FormSection label="Transformation Requirements">
            <SectionChild label="SYSTEM PROCESS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="transformationDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transformation Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="peeling of cassava roots without excessive wastage, etc"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="performanceTargets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Performance Targets</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Processing speed: Min 500kg/hr, Peeling efficiancy: >90%...etc"
                        {...field}
                      />
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
                name="systemOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>System Outputs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pelled and uniformly sliced cassava, separated cassava peels, etc"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Processing time per batch, Maintenance alerts for blade..., etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="energyOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Energy Outputs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="No excess energy output expected..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="livingThingsOutputs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Things Outputs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe living things outputs if applicable"
                        {...field}
                      />
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
                name="humanSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Human Systems</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Machine operators(2 persons per shift)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technicalSystems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Systems</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Automated peeling and slicing machine..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="environment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Environment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Indoor processing plant(temperature: 20-35 degrees)"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Requires integration with existing inventory tracking system"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Workflow management for batch processing..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Safety, Maintenance and Scalability Section */}
          <FormSection label="Safety, Maintenance and Scalability">
            <SectionChild
              label="SAFETY REQUIREMENTS"
              className="md:grid-cols-1"
            >
              <FormField
                control={form.control}
                name="safetyRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Safety Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Emergency stop buttons, safety guards for moving parts, etc"
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
              name="maintenanceNeeds"
              render={() => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-base">
                    Maintenance Requirements
                  </FormLabel>
                  <SectionChild
                    label="MAINTENANCE NEEDS"
                    className="md:grid-cols-2"
                  >
                    {maintenanceNeeds.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="maintenanceNeeds"
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
                          );
                        }}
                      />
                    ))}
                  </SectionChild>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SectionChild label="FUTURE SCALABILITY" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="futureScalability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Future Scalability Considerations</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ability to scale capacity to 1000kg/hr, etc"
                        {...field}
                      />
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
                  <FormLabel className="text-base">
                    Collaboration Preferences
                  </FormLabel>
                  <SectionChild
                    label="COLLABORATION PREFERENCES"
                    className="md:grid-cols-3"
                  >
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
                                    ? field.onChange([
                                        ...(field.value || []),
                                        pref,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== pref
                                        )
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

            <SectionChild
              label="ADDITIONAL COMMENTS"
              className="md:grid-cols-1"
            >
              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="We are open to recommendation for optimizing energy efficiency and ... "
                        {...field}
                      />
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
                            toast.error(
                              "Something went wrong, check your internet connection or consider reducing the file size"
                            );
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
                                    const newFiles = field.value.filter(
                                      (_, i) => i !== index
                                    );
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
                          ))}
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
                  </div>
                </FormItem>
              )}
            />
          </FormSection>

          <div className="w-full md:w-fit flex flex-col md:flex-row gap-4 justify-start items-start">
            <Button
              className="w-full min-w-[150px]  text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto md:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
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
            <FormPreview formData={form.getValues()} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
