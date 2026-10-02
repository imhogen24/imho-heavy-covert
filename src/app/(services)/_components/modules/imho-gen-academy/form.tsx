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
import { COUNTRIES } from "@/lib/countries";
import {
  ImhoGenAcademySchema,
  type ImhoGenAcademyFormData,
} from "@/lib/schemas/imho-gen-academy/z";
import { useSubmission } from "@/hooks/use-submission";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormSection, SectionChild } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";

const currentStatusOptions = [
  "SHS Student",
  "Engineering Student",
  "Graduate",
  "Post Graduate",
  "National Service Personnel",
  "Engineer",
  "Technical Professional",
  "Builder / Innovator",
  "Other",
] as const;

const currentLevelYearOptions = [
  "Level 100",
  "Level 200",
  "Level 300",
  "Level 400",
  "Other",
] as const;

const areasOfInterestOptions = [
  "Engineering Design",
  "CAD Modeling",
  "Product Development",
  "Manufacturing",
  "Mechanical Systems",
  "Technical Problem Solving",
  "Innovation & Building",
  "Systems Engineering",
  "Design Thinking",
] as const;

const weeklyHoursOptions = [
  "Less than 5 hours",
  "5–10 hours",
  "10–20 hours",
  "20+ hours",
] as const;

const nextSteps = [
  "Application review by the IMHO GEN Academy team",
  "Shortlisting based on capability, interest, and commitment",
  "A short conversation to confirm fit and availability",
  "Cohort placement and onboarding details by email",
];

const recommendedActions = [
  {
    label: "Take the Capability Assessment",
    href: "/services/capability-assessment",
    variant: "primary" as const,
  },
  {
    label: "Join the Design Forge Community",
    href: "/services/design-forge",
    variant: "primary-outline" as const,
  },
];

export const ImhoGenAcademyForm = () => {
  const form = useForm<ImhoGenAcademyFormData>({
    resolver: zodResolver(ImhoGenAcademySchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      cityTown: "",
      institutionOrCompany: "",
      programDisciplineRole: "",
      whyJoin: "",
      areasOfInterest: [],
      portfolioLink: "",
      whySelectYou: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = useSubmission("academy");

  async function onSubmit(values: ImhoGenAcademyFormData) {
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
                Application Received
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Thank you for applying to IMHO GEN Academy. Our team will review
                your application and contact you about your application status.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              What Happens Next
            </h3>
            <StepGrid items={nextSteps} />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              While You Wait
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              {recommendedActions.map((action) => (
                <Button
                  asChild
                  key={action.label}
                  variant={action.variant}
                  size="standard"
                  className="w-full sm:w-fit"
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
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
          {/* Basic Information Section */}
          <FormSection label="Basic Information">
            <SectionChild label="PERSONAL DETAILS">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ama Serwaa" {...field} />
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
                    <FormLabel>Phone Number (WhatsApp Preferred)</FormLabel>
                    <FormControl>
                      <Input placeholder="+233241234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="CONTACT & LOCATION">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ama.serwaa@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {COUNTRIES.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="LOCATION DETAILS">
              <FormField
                control={form.control}
                name="cityTown"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>City/Town</FormLabel>
                    <FormControl>
                      <Input placeholder="Kumasi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Education / Background Section */}
          <FormSection label="Education / Background">
            <SectionChild label="CURRENT STATUS">
              <FormField
                control={form.control}
                name="currentStatus"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Current Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select current status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentStatusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
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
                name="currentLevelYear"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Current Level / Year (Optional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level/year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentLevelYearOptions.map((level) => (
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
            </SectionChild>

            <SectionChild label="INSTITUTION / PROGRAM">
              <FormField
                control={form.control}
                name="institutionOrCompany"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Institution / Company</FormLabel>
                    <FormControl>
                      <Input placeholder="KNUST" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="programDisciplineRole"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Program / Discipline / Role</FormLabel>
                    <FormControl>
                      <Input placeholder="Mechanical Engineering" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Interest & Capability Section */}
          <FormSection label="Interest & Capability">
            <SectionChild label="MOTIVATION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="whyJoin"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Why do you want to join IMHO GEN Academy?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I want to build real engineering design capability because..."
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
              name="areasOfInterest"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>Which areas interest you most?</FormLabel>
                  <SectionChild
                    label="AREAS OF INTEREST"
                    className="md:grid-cols-3"
                  >
                    {areasOfInterestOptions.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="areasOfInterest"
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
                                            (value) => value !== option,
                                          ),
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

            <SectionChild label="PRIOR EXPERIENCE">
              <FormField
                control={form.control}
                name="hasPriorProjects"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Have you worked on engineering/CAD/design projects before?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolioLink"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Portfolio/Project/Sample Work Link (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-portfolio-link.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Commitment Section */}
          <FormSection label="Commitment">
            <SectionChild label="AVAILABILITY">
              <FormField
                control={form.control}
                name="willingForIntensiveTraining"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Are you willing to go through intensive practical training
                      and iterative reviews?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weeklyHoursCommitment"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>How many hours can you commit weekly?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select weekly hours" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {weeklyHoursOptions.map((option) => (
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
          </FormSection>

          {/* Final Question Section */}
          <FormSection label="Final Question">
            <SectionChild label="WHY SELECT YOU" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="whySelectYou"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Why should we select you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share what makes you a strong fit for the Academy..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
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
                <>Submit Application</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ImhoGenAcademyForm;
