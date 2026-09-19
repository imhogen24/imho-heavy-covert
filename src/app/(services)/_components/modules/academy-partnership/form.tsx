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
  AcademyPartnershipSchema,
  type AcademyPartnershipFormData,
} from "@/lib/schemas/academy-partnership/z";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AcademyPartnershipFormAction } from "@/actions/action";
import { FormSection, SectionChild } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";
import { FormPreview } from "./preview";

const areasOfInterestOptions = [
  "Engineering Training Programs",
  "Workforce Development",
  "Research & Innovation",
  "Sponsorship Opportunities",
  "Community Programs",
  "Technical Challenges / Competitions",
  "Industrial Projects",
  "Internship & Placement Programs",
  "Engineering Design Capability Development",
  "Technical Ecosystem Development",
  "Product Development Collaboration",
] as const;

const possibleNextSteps = [
  "Partnership discovery meeting",
  "Capability discussion session",
  "Sponsorship/Collaboration proposal",
  "Technical ecosystem conversation",
];

export const AcademyPartnershipForm = () => {
  const form = useForm<AcademyPartnershipFormData>({
    resolver: zodResolver(AcademyPartnershipSchema),
    defaultValues: {
      organizationName: "",
      organizationWebsite: "",
      contactPerson: "",
      positionRole: "",
      email: "",
      phoneNumber: "",
      areasOfInterest: [],
      collaborationDescription: "",
      expectedOutcomes: "",
      additionalInformation: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: AcademyPartnershipFormData) {
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
      const result = await AcademyPartnershipFormAction(formData);

      if (result?.error) {
        toast.error("Something went wrong! Please try again.");

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
                Partnership Inquiry Received
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Thank you for your interest in collaborating with IMHO GEN
                Academy. Our team will review your inquiry and contact you to
                explore possible partnership opportunities.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Possible Next Steps
            </h3>
            <StepGrid items={possibleNextSteps} />
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
                name="organizationWebsite"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Organization Website (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-organization.com"
                        {...field}
                      />
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
                      <Input placeholder="Head of Engineering" {...field} />
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

          {/* Section 2 — Partnership Interest */}
          <FormSection label="Partnership Interest">
            <FormField
              control={form.control}
              name="areasOfInterest"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>Areas of partnership interest</FormLabel>
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

            <SectionChild label="COLLABORATION" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="collaborationDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Briefly describe what you are interested in collaborating
                      on
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="We are interested in collaborating on..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Section 3 — Optional Details */}
          <FormSection label="Optional Details">
            <SectionChild label="OPTIONAL DETAILS" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="expectedOutcomes"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Expected outcomes or goals (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="The outcomes we hope to achieve are..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInformation"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Additional information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Anything else we should know..."
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
                <>Submit Partnership Inquiry</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AcademyPartnershipForm;
