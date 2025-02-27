"use client";

import * as React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { addDays, format } from "date-fns"
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
import { SupportSchema, type SupportFormData } from "@/lib/schemas/support/z";
import { Button } from "@/components/ui/button";
import { EyeIcon, FileIcon, LoaderCircle, Trash2, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { FormSection, SectionChild } from "../../wrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BookOpen, FileText, Lightbulb, User, GraduationCap, Calendar as CalendarIcon2, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import { SupportFormAction } from "@/actions/action";
import { FormPreview } from "./preview";



const collaborationPreferences = [
  "Regular meetings",
  "Weekly updates via email",
  "On-demand reporting"
] as const;

const skillLevels = [
  "Beginner",
  "Intermediate",
  "Advanced"
] as const;

const deliveryModes = [
  "On-site",
  "Virtual",
  "Blended"
] as const;

export const SupportForm = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const form = useForm<SupportFormData>({
    resolver: zodResolver(SupportSchema),
    defaultValues: {
      // Client Information
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      physicalPostalAddress: "",
      businessOverview: "",

      // Training Requirements
      trainingNeeds: "",
      trainingObjectives: "",
      numberOfParticipants: 1,
      participantRoles: "",
      participantSkillLevel: "Beginner",
      trainingDeliveryMode: "On-site",
      trainingTimeline: {
        startDate: new Date(),
        endDate: addDays(new Date(), 20),
      },

      // Project Support Requirements
      projectOverview: "",
      projectScopeDeliverables: "",
      collaborationPreferences: [],
      projectDeadline: new Date(),

      // Additional Considerations
      toolsAndResources: "",
      longTermCollaboration: false,
      additionalInformation: "",
      fileAttachments: [],
    },
  });

  const [pending, setPending] = useState(false);

  async function onSubmit(values: SupportFormData) {
    setPending(true);
    const formData = new FormData();

    // Append all form fields to formData
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
      console.log(values)
      const result = await SupportFormAction(formData);
      console.log(result)
      toast.success("Form submitted successfully!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Support and Training Request Form
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
                      <Input placeholder="TechBuild Solutions Ltd." {...field} />
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
                      <Input placeholder="Kwame Appiah" {...field} />
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
                      <Input type="email" placeholder="kwame.appiah@techbuild.com" {...field} />
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
                      <Input placeholder="0205567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="BUSINESS DETAILS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="physicalPostalAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical/Postal Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Physical/Postal Address: No. 15 Industrial Lane, Accra, Ghana" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessOverview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Overview</FormLabel>
                    <FormControl>
                      <Textarea placeholder="TechBuild Solutions Ltd. specializes in designing and assembling custom machinery for agricultural and industrial purposes." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          <FormSection label="Training Requirements">
            <SectionChild label="TRAINING DETAILS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="trainingNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Needs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Advanced CAD modeling (SolidWorks and AutoCAD),Engineering design process optimization,Prototyping techniques for product developmens" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainingObjectives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Objectives</FormLabel>
                    <FormControl>
                      <Textarea placeholder="To enhance the team's proficiency in CAD software, To implement a structured design process for better project efficiency." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="PARTICIPANT INFORMATION">
              <FormField
                control={form.control}
                name="numberOfParticipants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Participants</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={e => field.onChange(parseInt(e.target.value))}
                        min={1}
                        max={1000}
                        placeholder="10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="participantRoles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Participant Roles</FormLabel>
                    <FormControl>
                      <Input placeholder="Mechanical Engineers, Design Technicians, CAD Specialists..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="TRAINING SCHEDULE">
              <FormField
                control={form.control}
                name="participantSkillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select skill level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {skillLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainingDeliveryMode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Mode</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery mode" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {deliveryModes.map((mode) => (
                          <SelectItem key={mode} value={mode}>
                            {mode}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainingTimeline"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Training Timeline</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-full rounded-[0.5rem] p-3 h-10 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value.startDate ? (
                            <>
                              {format(field.value.startDate, "LLL dd, y")} -{" "}
                              {format(field.value.endDate, "LLL dd, y")}
                            </>
                          ) : (
                            <span>Pick a date range</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field.value.startDate}
                          selected={{
                            from: field.value.startDate,
                            to: field.value.endDate,
                          }}
                          onSelect={(selectedRange) => {
                            if (selectedRange?.from && selectedRange?.to) {
                              field.onChange({
                                startDate: selectedRange.from,
                                endDate: selectedRange.to,
                              });
                            }
                          }}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDeadline"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Project Deadline</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full  h-10 rounded-[0.5rem] p-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">

                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          <FormSection label="Project Support Requirements">
            <SectionChild label="PROJECT INFORMATION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="projectOverview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Overview</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Development of a modular food processing machine for cassava milling and packaging." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectScopeDeliverables"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Scope & Deliverables</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Provide detailed design schematics for the modular machine, Conduct feasibility analysis on proposed design concepts, Collaborate on prototype testing and iteration." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

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
                          </FormItem>
                        )}
                      />
                    ))}
                  </SectionChild>
                </FormItem>
              )}
            />



          </FormSection>

          <FormSection label="Additional Considerations">
            <SectionChild label="RESOURCES AND TOOLS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="toolsAndResources"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tools and Resources</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="SolidWorks, AutoCAD, Microsoft Project"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="longTermCollaboration"
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
                        Interested in Long-term Collaboration
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="ADDITIONAL INFORMATION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="additionalInformation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ensure that training includes hands-on workshops.Include a post-training assessment to measure the effectiveness of the sessions."
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

export default SupportForm;