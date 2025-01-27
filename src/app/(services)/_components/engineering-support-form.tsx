"use client";

import { SupportFormAction } from "@/action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { SupportSchema } from "@/lib/z-schema";

export const SupportForm = () => {
  const [lastResult, action] = useActionState(SupportFormAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SupportSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Support and Training Request</h1>
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="space-y-6"
      >
        {/* Section A: Client Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="organizationName">Organization Name</Label>
            <Input
              key={fields.organizationName.key}
              name={fields.organizationName.name}
              defaultValue={fields.organizationName.initialValue}
              id="organization-name"
              placeholder="Your Organization Name"
              type="text"
            />
            {fields.organizationName.errors && (
              <p className="text-red-500 text-sm">
                {fields.organizationName.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person</Label>
            <Input
              key={fields.contactPerson.key}
              name={fields.contactPerson.name}
              defaultValue={fields.contactPerson.initialValue}
              id="contact-person"
              placeholder="Full Name"
              type="text"
            />
            {fields.contactPerson.errors && (
              <p className="text-red-500 text-sm">
                {fields.contactPerson.errors}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              key={fields.email.key}
              name={fields.email.name}
              defaultValue={fields.email.initialValue}
              id="email"
              type="email"
              placeholder="email@example.com"
            />
            {fields.email.errors && (
              <p className="text-red-500 text-sm">{fields.email.errors}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              key={fields.phoneNumber.key}
              name={fields.phoneNumber.name}
              defaultValue={fields.phoneNumber.initialValue}
              id="phone-number"
              placeholder="Your Phone Number"
              type="tel"
            />
            {fields.phoneNumber.errors && (
              <p className="text-red-500 text-sm">
                {fields.phoneNumber.errors}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="physicalPostalAddress">Physical/Postal Address</Label>
          <Input
            key={fields.physicalPostalAddress.key}
            name={fields.physicalPostalAddress.name}
            defaultValue={fields.physicalPostalAddress.initialValue}
            id="physical-postal-address"
            placeholder="Your Complete Address"
            type="text"
          />
          {fields.physicalPostalAddress.errors && (
            <p className="text-red-500 text-sm">
              {fields.physicalPostalAddress.errors}
            </p>
          )}
        </div>

        {/* Section B: Training Requirements */}
        <div className="space-y-2">
          <Label htmlFor="trainingNeeds">Training Needs</Label>
          <Textarea
            key={fields.trainingNeeds.key}
            name={fields.trainingNeeds.name}
            defaultValue={fields.trainingNeeds.initialValue}
            id="training-needs"
            placeholder="Describe your training needs"
          />
          {fields.trainingNeeds.errors && (
            <p className="text-red-500 text-sm">
              {fields.trainingNeeds.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="trainingObjectives">Training Objectives</Label>
          <Textarea
            key={fields.trainingObjectives.key}
            name={fields.trainingObjectives.name}
            defaultValue={fields.trainingObjectives.initialValue}
            id="training-objectives"
            placeholder="Describe your training objectives"
          />
          {fields.trainingObjectives.errors && (
            <p className="text-red-500 text-sm">
              {fields.trainingObjectives.errors}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="numberOfParticipants">Number of Participants</Label>
            <Input
              key={fields.numberOfParticipants.key}
              name={fields.numberOfParticipants.name}
              defaultValue={fields.numberOfParticipants.initialValue}
              id="number-of-participants"
              type="number"
              placeholder="Enter number of participants"
            />
            {fields.numberOfParticipants.errors && (
              <p className="text-red-500 text-sm">
                {fields.numberOfParticipants.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="participantRoles">Participant Roles</Label>
            <Input
              key={fields.participantRoles.key}
              name={fields.participantRoles.name}
              defaultValue={fields.participantRoles.initialValue}
              id="participant-roles"
              placeholder="Describe participant roles"
              type="text"
            />
            {fields.participantRoles.errors && (
              <p className="text-red-500 text-sm">
                {fields.participantRoles.errors}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="participantSkillLevel">
              Participant Skill Level
            </Label>
            <Select
              name={fields.participantSkillLevel.name}
              defaultValue={fields.participantSkillLevel.initialValue}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            {fields.participantSkillLevel.errors && (
              <p className="text-red-500 text-sm">
                {fields.participantSkillLevel.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="trainingDeliveryMode">Training Delivery Mode</Label>
            <Select
              name={fields.trainingDeliveryMode.name}
              defaultValue={fields.trainingDeliveryMode.initialValue}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select delivery mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="On-site">On-site</SelectItem>
                <SelectItem value="Virtual">Virtual</SelectItem>
                <SelectItem value="Blended">Blended</SelectItem>
              </SelectContent>
            </Select>
            {fields.trainingDeliveryMode.errors && (
              <p className="text-red-500 text-sm">
                {fields.trainingDeliveryMode.errors}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="trainingTimeline">Training Timeline</Label>
          <Input
            key={fields.trainingTimeline.key}
            name={fields.trainingTimeline.name}
            defaultValue={fields.trainingTimeline.initialValue}
            id="training-timeline"
            placeholder="Specify your preferred timeline"
            type="text"
          />
          {fields.trainingTimeline.errors && (
            <p className="text-red-500 text-sm">
              {fields.trainingTimeline.errors}
            </p>
          )}
        </div>

        {/* Section C: Project Support Requirements */}
        <div className="space-y-2">
          <Label htmlFor="projectOverview">Project Overview</Label>
          <Textarea
            key={fields.projectOverview.key}
            name={fields.projectOverview.name}
            defaultValue={fields.projectOverview.initialValue}
            id="project-overview"
            placeholder="Provide an overview of your project"
          />
          {fields.projectOverview.errors && (
            <p className="text-red-500 text-sm">
              {fields.projectOverview.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectScopeDeliverables">
            Project Scope & Deliverables
          </Label>
          <Textarea
            key={fields.projectScopeDeliverables.key}
            name={fields.projectScopeDeliverables.name}
            defaultValue={fields.projectScopeDeliverables.initialValue}
            id="project-scope-deliverables"
            placeholder="Describe the project scope and deliverables"
          />
          {fields.projectScopeDeliverables.errors && (
            <p className="text-red-500 text-sm">
              {fields.projectScopeDeliverables.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Collaboration Preferences</Label>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Regular meetings",
              "Weekly updates via email",
              "On-demand reporting",
            ].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  key={fields.collaborationPreferences.name}
                  name={fields.collaborationPreferences.name}
                  value={type}
                  id={`collab-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                />
                <Label
                  htmlFor={`collab-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDeadline">Project Deadline</Label>
          <Input
            key={fields.projectDeadline.key}
            name={fields.projectDeadline.name}
            defaultValue={fields.projectDeadline.initialValue}
            id="project-deadline"
            type="date"
          />
          {fields.projectDeadline.errors && (
            <p className="text-red-500 text-sm">
              {fields.projectDeadline.errors}
            </p>
          )}
        </div>

        {/* Section D: Additional Considerations */}
        <div className="space-y-2">
          <Label htmlFor="toolsAndResources">Tools and Resources</Label>
          <Textarea
            key={fields.toolsAndResources.key}
            name={fields.toolsAndResources.name}
            defaultValue={fields.toolsAndResources.initialValue}
            id="tools-and-resources"
            placeholder="Describe required tools and resources"
          />
          {fields.toolsAndResources.errors && (
            <p className="text-red-500 text-sm">
              {fields.toolsAndResources.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Long-term Collaboration</Label>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="long-term-collaboration"
              key={fields.longTermCollaboration.name}
              name={fields.longTermCollaboration.name}
              defaultValue={fields.longTermCollaboration.initialValue}
            />
            <Label>Interested in long-term collaboration</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInformation">Additional Information</Label>
          <Textarea
            key={fields.additionalInformation.key}
            name={fields.additionalInformation.name}
            defaultValue={fields.additionalInformation.initialValue}
            id="additional-information"
            placeholder="Any other relevant information"
          />
          {fields.additionalInformation.errors && (
            <p className="text-red-500 text-sm">
              {fields.additionalInformation.errors}
            </p>
          )}
        </div>

        <Button
          className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
          variant={"secondary"}
          type="submit"
        >
          Submit Support Request
        </Button>
      </form>
    </div>
  );
};
