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
  AcademySupportSchema,
  type AcademySupportFormData,
} from "@/lib/schemas/academy-support/z";
import { useSubmission } from "@/hooks/use-submission";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormSection, SectionChild, SpecList } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";
import { FormPreview } from "./preview";

const supportTypeOptions = [
  "One-Time Donation",
  "Monthly Support",
  "Student Scholarship Support",
  "Equipment Donation",
  "Infrastructure Support",
  "Community Program Support",
  "Corporate Support",
  "Other",
] as const;

const supportContributesTo = [
  "Student sponsorships",
  "Engineering training access",
  "Equipment and infrastructure",
  "Community programs",
  "Engineering innovation initiatives",
];

const teamWillContactWith = [
  "Support options",
  "Donation/sponsorship pathways",
  "Partnership opportunities",
  "Impact information",
];

const yourSupportHelps = [
  "Expand engineering capability access",
  "Develop future engineering talent",
  "Bridge academia and industry",
  "Strengthen engineering innovation ecosystems",
];

export const AcademySupportForm = () => {
  const form = useForm<AcademySupportFormData>({
    resolver: zodResolver(AcademySupportSchema),
    defaultValues: {
      fullName: "",
      email: "",
      supportTypes: [],
      supportContribution: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = useSubmission("support");

  async function onSubmit(values: AcademySupportFormData) {
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
                Thank You for Your Interest in Supporting IMHO GEN Academy
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Your support offer has been received.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Our Team Will Contact You With
            </h3>
            <StepGrid items={teamWillContactWith} />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Your Support Helps
            </h3>
            <StepGrid items={yourSupportHelps} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto">
      <div className="mb-8 md:mb-20 flex flex-col gap-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Your Support Contributes To
        </h3>
        <SpecList items={supportContributesTo} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
          {/* Section 1 — Donor Information */}
          <FormSection label="Donor Information">
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
            </SectionChild>

            <SectionChild label="LOCATION">
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

            <FormField
              control={form.control}
              name="supportTypes"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>Donation / Support Type</FormLabel>
                  <SectionChild label="SUPPORT TYPE" className="md:grid-cols-3">
                    {supportTypeOptions.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="supportTypes"
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
          </FormSection>

          {/* Section 2 — Support Interest */}
          <FormSection label="Support Interest">
            <SectionChild label="SUPPORT INTEREST" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="supportContribution"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      What would you like your support to contribute toward?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I would like my support to contribute toward..."
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
                <>Submit Support Offer</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AcademySupportForm;
