"use client";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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
  trainingTimeline: z.string().min(2, "Training timeline is required"),

  // Section C: Project Support Requirements
  projectOverview: z.string().min(10, "Project overview is required"),
  projectScopeDeliverables: z.string().min(10, "Project scope and deliverables are required"),
  collaborationPreferences: z.array(z.string()).min(1, "Select at least one collaboration preference"),
  projectDeadline: z.string().min(2, "Project deadline is required"),

  // Section D: Additional Considerations
  toolsAndResources: z.string().optional(),
  longTermCollaboration: z.boolean(),
  additionalInformation: z.string().optional(),
});

export function SupportRequirementsForm() {
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

      const response = await fetch('/api/support/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Error submitting form:', data.error);
        alert('Error submitting form. Please try again.');
      } else {
        console.log('Form submitted successfully:', data);
        alert('Support requirements submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  }

  const collaborationOptions = [
    { value: "Regular meetings", label: "Regular Meetings" },
    { value: "Weekly updates via email", label: "Weekly Updates via Email" },
    { value: "On-demand reporting", label: "On-demand Reporting" },
  ];

  return (
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Section A: Client Information */}
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
            <CardDescription>
              Please provide your organization and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
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
            </div>

            <FormField
              control={form.control}
              name="physicalPostalAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physical/Postal Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your address" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section B: Training Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Training Requirements</CardTitle>
            <CardDescription>
              Tell us about your training needs and objectives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="trainingNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Needs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your training needs"
                        className="resize-none"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="What are your training objectives?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="numberOfParticipants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Participants</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        {...field}
                        onChange={e => field.onChange(parseInt(e.target.value))}
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
                      <Input placeholder="e.g., Developers, Managers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="participantSkillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Participant Skill Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select skill level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
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
                    <FormLabel>Training Delivery Mode</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery mode" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="On-site">On-site</SelectItem>
                        <SelectItem value="Virtual">Virtual</SelectItem>
                        <SelectItem value="Blended">Blended</SelectItem>
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
                        <FormControl>
                          <Button variant="outline" className="w-full pl-3 text-left font-normal">
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Section C: Project Support Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Project Support Requirements</CardTitle>
            <CardDescription>
              Provide details about your project support needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="projectOverview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Overview</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide an overview of your project"
                        className="resize-none"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Describe the project scope and deliverables"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="collaborationPreferences"
              render={() => (
                <FormItem>
                  <FormLabel>Collaboration Preferences</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {collaborationOptions.map((option) => (
                      <FormField
                        key={option.value}
                        control={form.control}
                        name="collaborationPreferences"
                        render={({ field }) => (
                          <FormItem
                            key={option.value}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(option.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, option.value])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== option.value
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
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
                        <Button variant="outline" className="w-[240px] pl-3 text-left font-normal">
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section D: Additional Considerations */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Considerations</CardTitle>
            <CardDescription>
              Additional information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="toolsAndResources"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tools and Resources</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe any specific tools or resources needed"
                      className="resize-none"
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
                    <FormLabel>Long-term Collaboration</FormLabel>
                    <FormDescription>
                      Are you interested in long-term collaboration?
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInformation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any additional information you'd like to share"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
              variant={"secondary"}
            >
              Submit Requirements
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

export default SupportRequirementsForm;
