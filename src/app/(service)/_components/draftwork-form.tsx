"use client";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  // Section A: Client Information
  organizationName: z.string().min(2, "Organization name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  physicalPostalAddress: z.string().optional(),

  // Section B: Training Requirements
  trainingNeeds: z.string().min(10, "Please describe your training needs"),
  trainingObjectives: z.string().min(10, "Please outline your training objectives"),
  numberOfParticipants: z.number().min(1, "Number of participants is required"),
  participantRoles: z.string().min(2, "Participant roles are required"),
  participantSkillLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  trainingDeliveryMode: z.enum(["On-site", "Virtual", "Blended"]),
  trainingTimeline: z.date().optional(),

  // Section C: Project Support Requirements
  projectOverview: z.string().min(10, "Project overview is required"),
  projectScopeDeliverables: z.string().min(10, "Project scope and deliverables are required"),
  collaborationPreferences: z.array(z.string()).min(1, "Select at least one collaboration preference"),
  projectDeadline: z.date().optional(),

  // Section D: Additional Considerations
  toolsAndResources: z.string().optional(),
  longTermCollaboration: z.boolean(),
  additionalInformation: z.string().optional(),
});

export function DraftworkSupportRequirementsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      collaborationPreferences: [],
      longTermCollaboration: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Form submitted with values:", values);

      const response = await fetch("/api/support/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Error submitting form:", data.error);
        alert("Error submitting form. Please try again.");
      } else {
        console.log("Form submitted successfully:", data);
        alert("Support requirements submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h2 className="text-lg font-bold">Client Information</h2>
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
        </div>
      </form>
    </Form>
  );
}
