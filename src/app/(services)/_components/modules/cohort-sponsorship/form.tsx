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
  CohortSponsorshipSchema,
  type CohortSponsorshipFormData,
} from "@/lib/schemas/cohort-sponsorship/z";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { CohortSponsorshipFormAction } from "@/actions/action";
import { FormSection, SectionChild, SpecList } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";
import { FormPreview } from "./preview";

const sponsorshipAreaOptions = [
  "Full Cohort Sponsorship",
  "Partial Cohort Sponsorship",
  "Female Engineering Sponsorship",
  "Student Scholarship Support",
  "Engineering Equipment Sponsorship",
  "Workforce Development Partnership",
  "Community Engineering Programs",
  "Innovation & Technical Challenges",
  "Infrastructure Support",
] as const;

const sponsorshipCanHelp = [
  "Train future engineering talent",
  "Support underserved students",
  "Strengthen workforce capability",
  "Bridge academia and industry",
  "Build engineering innovation ecosystems",
];

const teamWillDiscuss = [
  "Sponsorship opportunities",
  "Workforce development initiatives",
  "Partnership structures",
  "Expected impact and collaboration pathways",
];

const supportContributesTo = [
  "Developing future engineering talent",
  "Expanding access to practical engineering capability development",
  "Strengthening technical workforce ecosystems",
  "Bridging academia and industry",
];

export const CohortSponsorshipForm = () => {
  const form = useForm<CohortSponsorshipFormData>({
    resolver: zodResolver(CohortSponsorshipSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      positionRole: "",
      website: "",
      email: "",
      phoneNumber: "",
      sponsorshipAreas: [],
      whySupport: "",
      impactAreas: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: CohortSponsorshipFormData) {
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
      const result = await CohortSponsorshipFormAction(formData);

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
                Sponsorship Inquiry Received
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Thank you for your interest in supporting engineering capability
                development through IMHO GEN Academy.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Our Team Will Contact You to Discuss
            </h3>
            <StepGrid items={teamWillDiscuss} />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Your Support Contributes To
            </h3>
            <StepGrid items={supportContributesTo} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto">
      <div className="mb-8 md:mb-20 flex flex-col gap-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Your Sponsorship Can Help
        </h3>
        <SpecList items={sponsorshipCanHelp} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
          {/* Section 1 — Organization Profile */}
          <FormSection label="Organization Profile">
            <SectionChild label="ORGANIZATION">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Manufacturing Ltd" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://your-organization.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>

            <SectionChild label="CONTACT PERSON">
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Ama Serwaa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="positionRole"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Position / Role</FormLabel>
                    <FormControl>
                      <Input placeholder="Head of CSR" {...field} />
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+233241234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Section 2 — Sponsorship Interest */}
          <FormSection label="Sponsorship Interest">
            <FormField
              control={form.control}
              name="sponsorshipAreas"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>
                    What type of sponsorship/support are you interested in?
                  </FormLabel>
                  <SectionChild label="SPONSORSHIP AREAS" className="md:grid-cols-3">
                    {sponsorshipAreaOptions.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="sponsorshipAreas"
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
          </FormSection>

          {/* Section 3 — Impact & Collaboration Interest */}
          <FormSection label="Impact & Collaboration Interest">
            <SectionChild label="IMPACT" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="whySupport"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Why is your organization interested in supporting
                      engineering capability development?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Our organization is interested because..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="impactAreas"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      What outcomes or impact areas matter most to your
                      organization?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="The outcomes that matter most to us are..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Optional Section */}
          <FormSection label="Optional Section">
            <SectionChild label="SCHEDULING">
              <FormField
                control={form.control}
                name="scheduleDiscussion"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Would you like to schedule a sponsorship discussion?
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
                <>Submit Sponsorship Offer</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CohortSponsorshipForm;
