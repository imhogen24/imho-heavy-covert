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
  DesignForgeSchema,
  type DesignForgeFormData,
} from "@/lib/schemas/design-forge/z";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { DesignForgeFormAction } from "@/actions/action";
import { FormSection, SectionChild } from "../../wrapper";
import { StepGrid, SuccessBadge } from "../shared/success";
import { FormPreview } from "./preview";

const currentRoleOptions = [
  "Engineering Student",
  "Graduate Engineer",
  "Mechanical Engineer",
  "Electrical Engineer",
  "CAD Designer",
  "Product Designer",
  "Fabricator / Technician",
  "Builder / Innovator",
  "Entrepreneur",
  "Researcher",
  "Technical Professional",
  "Other",
] as const;

const areasOfInterestOptions = [
  "Engineering Design",
  "CAD & 3D Modeling",
  "Product Development",
  "Manufacturing & Fabrication",
  "Mechanical Systems",
  "Robotics & Automation",
  "Technical Problem Solving",
  "Design Thinking",
  "Systems Engineering",
  "Innovation & Building",
  "Engineering Research",
  "Technical Entrepreneurship",
] as const;

const yesNoQuestions: {
  name: keyof Pick<
    DesignForgeFormData,
    | "mentorshipInterest"
    | "collaborationsInterest"
    | "challengesWorkshopsInterest"
  >;
  label: string;
}[] = [
  {
    name: "mentorshipInterest",
    label: "Interested in mentorship opportunities?",
  },
  {
    name: "collaborationsInterest",
    label: "Interested in collaborations/projects?",
  },
  {
    name: "challengesWorkshopsInterest",
    label: "Interested in engineering challenges/workshops?",
  },
];

const communityUpdates = [
  "Engineering discussions",
  "Design challenges",
  "Workshops & events",
  "Mentorship opportunities",
  "Projects & collaborations",
  "IMHO GEN Academy programs",
];

const nextSteps = [
  {
    label: "Join the Community Group",
    href: "#",
    variant: "primary" as const,
  },
  {
    label: "Take the Capability Assessment",
    href: "/services/capability-assessment",
    variant: "primary-outline" as const,
  },
  {
    label: "Explore IMHO GEN Academy Programs",
    href: "/services/imho-gen-academy",
    variant: "primary-outline" as const,
  },
];

export const DesignForgeForm = () => {
  const form = useForm<DesignForgeFormData>({
    resolver: zodResolver(DesignForgeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      institutionOrCompany: "",
      areasOfInterest: [],
      linkedinProfile: "",
      portfolioLink: "",
      socialHandle: "",
      whyJoin: "",
    },
  });

  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: DesignForgeFormData) {
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
      const result = await DesignForgeFormAction(formData);

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
                Welcome to the Design Forge Community
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Your registration has been received. You will receive updates
                about:
              </p>
            </div>
          </div>

          <StepGrid items={communityUpdates} />

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
    <div className="p-5 md:p-10 max-w-4xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-20"
        >
          {/* Section 1 — Basic Profile */}
          <FormSection label="Basic Profile">
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

            <SectionChild label="CONTACT & AFFILIATION">
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
            </SectionChild>

            <SectionChild label="ROLE / DISCIPLINE">
              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Current Role / Discipline</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role/discipline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentRoleOptions.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
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

          {/* Section 2 — Community Interests */}
          <FormSection label="Community Interests">
            <FormField
              control={form.control}
              name="areasOfInterest"
              render={() => (
                <FormItem className="flex flex-col gap-1 justify-end">
                  <FormLabel>What are you interested in?</FormLabel>
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

            <SectionChild label="PARTICIPATION">
              {yesNoQuestions.map((question) => (
                <FormField
                  key={question.name}
                  control={form.control}
                  name={question.name}
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1 justify-end">
                      <FormLabel>{question.label}</FormLabel>
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
              ))}
            </SectionChild>
          </FormSection>

          {/* Section 3 — Optional Links */}
          <FormSection label="Optional Links">
            <SectionChild label="LINKS">
              <FormField
                control={form.control}
                name="linkedinProfile"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/in/your-profile"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolioLink"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>Portfolio / Project Link (Optional)</FormLabel>
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

              <FormField
                control={form.control}
                name="socialHandle"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Instagram / X / Social Handle (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="@yourhandle" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionChild>
          </FormSection>

          {/* Final Question */}
          <FormSection label="Final Question">
            <SectionChild label="WHY JOIN" className="md:grid-cols-1">
              <FormField
                control={form.control}
                name="whyJoin"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1 justify-end">
                    <FormLabel>
                      Why do you want to join the Design Forge community?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I want to join the Design Forge community because..."
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
                <>Join the Community</>
              )}
            </Button>
            <FormPreview control={form.control} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DesignForgeForm;
