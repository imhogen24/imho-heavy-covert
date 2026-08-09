"use client";

import { Button } from "@/components/ui/button";
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
  CapabilityAssessmentSchema,
  type CapabilityAssessmentFormData,
} from "@/lib/schemas/capability-assessment/z";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormSection, SectionChild } from "../../wrapper";

const backgroundOptions = [
  "SHS Student",
  "Engineering Student",
  "Graduate",
  "National Service Personnel",
  "Engineer",
  "CAD Designer",
  "Technical Professional",
  "Builder / Innovator",
  "Other",
] as const;

const experienceLevelOptions = [
  "Basic",
  "Intermediate",
  "Advanced",
  "Professional",
] as const;

const ratingGuide = [
  { score: 1, meaning: "Very Weak" },
  { score: 2, meaning: "Basic" },
  { score: 3, meaning: "Moderate" },
  { score: 4, meaning: "Strong" },
  { score: 5, meaning: "Very Strong" },
];

const ratingQuestions: {
  name: keyof Pick<
    CapabilityAssessmentFormData,
    | "problemDefinition"
    | "conceptGeneration"
    | "cadModeling"
    | "engineeringAnalysis"
    | "technicalDocumentation"
    | "manufacturingUnderstanding"
    | "systemsThinking"
  >;
  label: string;
}[] = [
  { name: "problemDefinition", label: "Ability to define engineering problems" },
  { name: "conceptGeneration", label: "Ability to generate engineering concepts" },
  { name: "cadModeling", label: "CAD modeling capability" },
  {
    name: "engineeringAnalysis",
    label: "Engineering analysis/calculation capability",
  },
  { name: "technicalDocumentation", label: "Technical documentation ability" },
  { name: "manufacturingUnderstanding", label: "Manufacturing understanding" },
  { name: "systemsThinking", label: "Systems thinking ability" },
];

const nextSteps = [
  {
    label: "Apply to IMHO GEN Academy",
    href: "/services/imho-gen-academy",
    variant: "primary" as const,
  },
  {
    label: "Join the Design Forge Community",
    href: "/services/design-forge",
    variant: "primary-outline" as const,
  },
  {
    label: "Explore Upcoming Cohorts",
    href: "#",
    variant: "primary-outline" as const,
  },
];

export const CapabilityAssessmentForm = () => {
  const form = useForm<CapabilityAssessmentFormData>({
    resolver: zodResolver(CapabilityAssessmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectDescription: "",
      improvementArea: "",
      biggestWeakness: "",
      portfolioLink: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: CapabilityAssessmentFormData) {
    setPending(true);
    try {
      // Server action to be wired later; values are validated by the schema.
      void values;
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
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Assessment Received
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Thank you for completing the Engineering Design Capability
              Assessment. Our team will review your responses and recommend the
              most suitable pathway for your capability development.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Recommended Next Steps
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              {nextSteps.map((step) => (
                <Button
                  asChild
                  key={step.label}
                  variant={step.variant}
                  size="standard"
                  className="w-full sm:w-fit"
                >
                  <Link href={step.href}>{step.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
          {/* Section 1 — Basic Information */}
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

            <SectionChild label="BACKGROUND & EXPERIENCE">
              <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Current Background</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select background" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {backgroundOptions.map((option) => (
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

              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Experience Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {experienceLevelOptions.map((option) => (
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

          {/* Section 2 — Self-Assessment */}
          <FormSection label="Self-Assessment">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Rate yourself from 1–5
              </p>
              <div className="grid grid-cols-5 border muted-border rounded-md overflow-hidden">
                {ratingGuide.map((item, i) => (
                  <div
                    key={item.score}
                    className={cn(
                      "flex flex-col items-center gap-1 px-2 py-3 text-center",
                      i < ratingGuide.length - 1 && "border-r muted-border"
                    )}
                  >
                    <span className="text-sm font-semibold tabular-nums">
                      {item.score}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {item.meaning}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <SectionChild label="RATE YOURSELF">
              {ratingQuestions.map((question) => (
                <FormField
                  key={question.name}
                  control={form.control}
                  name={question.name}
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1 justify-end">
                      <FormLabel>{question.label}</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((score) => (
                            <button
                              key={score}
                              type="button"
                              aria-pressed={field.value === score}
                              onClick={() => field.onChange(score)}
                              className={cn(
                                "size-10 rounded-md border muted-border text-sm font-medium transition-colors",
                                field.value === score
                                  ? "bg-black text-white dark:bg-white dark:text-black"
                                  : "text-muted-foreground hover:bg-accent"
                              )}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </SectionChild>
          </FormSection>

          {/* Section 3 — Practical Thinking */}
          <FormSection label="Practical Thinking">
            <SectionChild label="PRACTICAL THINKING" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Briefly describe an engineering/design project or problem
                      you have worked on
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the problem, what you built, and the outcome..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="improvementArea"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      What area of engineering/design do you want to improve
                      most?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="The area I most want to improve is..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="biggestWeakness"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      What do you think is your biggest engineering weakness
                      currently?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="My biggest weakness currently is..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Optional Section — Portfolio / Project Link */}
          <FormSection label="Portfolio / Project Link (Optional)">
            <SectionChild label="PORTFOLIO" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="portfolioLink"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Portfolio / CAD / GitHub / Project Link</FormLabel>
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
                <>Submit Assessment</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CapabilityAssessmentForm;
