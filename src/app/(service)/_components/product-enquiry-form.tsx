"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

// Form Schema
const formSchema = z.object({
  // Section A: Client Information
  organizationName: z.string().min(2, "Organization name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),

  // Section A: Project Overview
  businessOperations: z.string().min(10, "Please provide business operations details"),
  productPurpose: z.string().min(10, "Please describe the product purpose"),

  // Section B: Product Vision and Objectives
  productVision: z.string().min(10, "Product vision is required"),
  productObjectives: z.array(z.string()).min(1, "At least one objective is required"),
  targetAudience: z.string().min(10, "Target audience description is required"),

  // Section C: Functional Requirements
  coreFunctions: z.string().min(10, "Core functions are required"),
  performanceMetrics: z.string(),
  preferredMaterials: z.string(),
  complianceStandards: z.array(z.string()),
  environmentalConditions: z.string(),

  // Section D: Aesthetic and Design
  visualStyle: z.string(),
  ergonomicFeatures: z.string(),
  brandingRequirements: z.string(),

  // Section E: Budget and Timeline
  budgetRange: z.string(),
  preferredTimeline: z.string(),

  // Section F: Prototyping
  requirePrototypes: z.boolean(),
  numberOfPrototypes: z.number().optional(),
  requiredTests: z.array(z.string()),

  // Section G: Additional Info
  comparableProducts: z.string(),
  collaborationPreferences: z.array(z.string()),
  additionalComments: z.string(),
});

export function ProductRequirementsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requirePrototypes: false,
      productObjectives: [],
      complianceStandards: [],
      requiredTests: [],
      collaborationPreferences: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Form submitted with values:", values);

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Error sending email:', data.error);
        alert('Error sending email. Please try again.');
      } else {
        console.log('Email sent successfully:', data);
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  }

  const collaborationOptions = [
    { value: "Regular Meetings", label: "Regular Meetings" },
    { value: "Weekly Updates via Email", label: "Weekly Updates via Email" },
    { value: "On-demand Reporting", label: "On-demand Reporting" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={(e) => {
         console.log("Form submit event triggered");
         form.handleSubmit(
             (values) => {
             console.log("Validation passed", values);
             onSubmit(values);
             },
            (errors) => {
               console.log("Validation failed", errors);
                 }
             )(e);
        }} className="space-y-8">
        {/* Section A: Client Information */}
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
            <CardDescription>
              Please provide your organization and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 rounded">
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
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
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section B: Project Overview */}
        <Card className="bg-neutral-100 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              Tell us about your business and product goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="businessOperations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Operations</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business operations"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productPurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Purpose</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What is the main purpose of this product?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Add other sections similarly... */}

        {/* Prototype Section with Conditional Fields */}
        <Card>
          <CardHeader>
            <CardTitle>Prototyping Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="requirePrototypes"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Require Prototypes</FormLabel>
                    <FormDescription>
                      Do you need prototypes for this product?
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            {form.watch("requirePrototypes") && (
              <FormField
                control={form.control}
                name="numberOfPrototypes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Prototypes</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={e => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
             <Button type="submit" className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85" variant={"secondary"}>Submit Requirements</Button>
          </CardContent>
        </Card>


      </form>
    </Form>
  );
}

export default ProductRequirementsForm;
