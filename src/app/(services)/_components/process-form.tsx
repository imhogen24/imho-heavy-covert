"use client";

import { useRef } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ProcessSchema } from "@/lib/z-schema";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Submit } from "./submit";
import { useActionState } from "react";
import { ProcessFormAction } from "@/action";

export const ProcessForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [lastResult, action] = useActionState(ProcessFormAction, undefined);
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProcessSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Process Improvement Request</h1>

      <form
        ref={ref}
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="space-y-6"
      >
        {/* Section A: Client Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Client Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="organization-name">Organization Name</Label>
              <Input
                key={fields.organizationName.key}
                name={fields.organizationName.name}
                defaultValue={fields.organizationName.initialValue}
                placeholder="Your Organization Name"
                id="organization-name"
              />
              {fields.organizationName.errors && (
                <p className="text-red-500 text-sm">
                  {fields.organizationName.errors}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-person">Contact Person</Label>
              <Input
                key={fields.contactPerson.key}
                name={fields.contactPerson.name}
                defaultValue={fields.contactPerson.initialValue}
                placeholder="Full Name"
                id="contact-person"
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
                type="email"
                id="email"
                placeholder="email@example.com"
              />
              {fields.email.errors && (
                <p className="text-red-500 text-sm">{fields.email.errors}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                key={fields.phoneNumber.key}
                name={fields.phoneNumber.name}
                defaultValue={fields.phoneNumber.initialValue}
                type="tel"
                placeholder="Phone Number"
                id="phone-number"
              />
              {fields.phoneNumber.errors && (
                <p className="text-red-500 text-sm">
                  {fields.phoneNumber.errors}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              key={fields.address.key}
              name={fields.address.name}
              defaultValue={fields.address.initialValue}
              placeholder="Physical/Postal Address"
              id="address"
            />
            {fields.address.errors && (
              <p className="text-red-500 text-sm">{fields.address.errors}</p>
            )}
          </div>
        </div>

        {/* Section B: Business Overview */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Business Overview</h2>

          <div className="space-y-2">
            <Label htmlFor="business-operations">Business Operations</Label>
            <Textarea
              key={fields.businessOperations.key}
              name={fields.businessOperations.name}
              defaultValue={fields.businessOperations.initialValue}
              placeholder="Describe your business operations"
              id="business-operations"
            />
            {fields.businessOperations.errors && (
              <p className="text-red-500 text-sm">
                {fields.businessOperations.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="process-purpose">Process Purpose</Label>
            <Textarea
              key={fields.processPurpose.key}
              name={fields.processPurpose.name}
              defaultValue={fields.processPurpose.initialValue}
              placeholder="Describe the purpose of this process"
              id="process-purpose"
            />
            {fields.processPurpose.errors && (
              <p className="text-red-500 text-sm">
                {fields.processPurpose.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section C: Current Process & Challenges */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Current Process & Challenges
          </h2>

          <div className="space-y-2">
            <Label htmlFor="current-process">Current Process</Label>
            <Textarea
              key={fields.currentProcess.key}
              name={fields.currentProcess.name}
              defaultValue={fields.currentProcess.initialValue}
              placeholder="Describe your current process"
              id="current-process"
            />
            {fields.currentProcess.errors && (
              <p className="text-red-500 text-sm">
                {fields.currentProcess.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="current-process-purpose">
              Current Process Purpose
            </Label>
            <Textarea
              key={fields.currentProcessPurpose.key}
              name={fields.currentProcessPurpose.name}
              defaultValue={fields.currentProcessPurpose.initialValue}
              placeholder="Explain the purpose of your current process"
              id="current-process-purpose"
            />
            {fields.currentProcessPurpose.errors && (
              <p className="text-red-500 text-sm">
                {fields.currentProcessPurpose.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="current-performance-metrics">
              Current Performance Metrics
            </Label>
            <Textarea
              key={fields.currentPerformanceMetrics.key}
              name={fields.currentPerformanceMetrics.name}
              defaultValue={fields.currentPerformanceMetrics.initialValue}
              placeholder="Describe your current performance metrics"
              id="current-performance-metrics"
            />
            {fields.currentPerformanceMetrics.errors && (
              <p className="text-red-500 text-sm">
                {fields.currentPerformanceMetrics.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pain-points">Pain Points</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Low efficiency",
                "High operating costs",
                "Safety concerns",
                "Low output",
                "Quality issues",
                "Other",
              ].map((point) => (
                <div key={point} className="flex items-center space-x-2">
                  <Checkbox
                    name="painPoints"
                    value={point}
                    id={`pain-point-${point.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                  <Label
                    htmlFor={`pain-point-${point.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {point}
                  </Label>
                </div>
              ))}
            </div>
            {fields.painPoints?.errors && (
              <p className="text-red-500 text-sm">{fields.painPoints.errors}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="specific-challenges">Specific Challenges</Label>
            <Textarea
              key={fields.specificChallenges.key}
              name={fields.specificChallenges.name}
              defaultValue={fields.specificChallenges.initialValue}
              placeholder="Describe specific challenges you're facing"
              id="specific-challenges"
            />
            {fields.specificChallenges.errors && (
              <p className="text-red-500 text-sm">
                {fields.specificChallenges.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section D: Desired Improvements */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Desired Improvements</h2>

          <div className="space-y-2">
            <Label htmlFor="improvement-goals">Improvement Goals</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Increased efficiency",
                "Reduced costs",
                "Improved safety",
                "Enhanced quality",
                "Higher output",
                "Other",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    name="improvementGoals"
                    value={goal}
                    id={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                  <Label
                    htmlFor={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
            {fields.improvementGoals?.errors && (
              <p className="text-red-500 text-sm">
                {fields.improvementGoals.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="performance-targets">Performance Targets</Label>
            <Textarea
              key={fields.performanceTargets.key}
              name={fields.performanceTargets.name}
              defaultValue={fields.performanceTargets.initialValue}
              placeholder="Describe your desired performance targets"
              id="performance-targets"
            />
            {fields.performanceTargets.errors && (
              <p className="text-red-500 text-sm">
                {fields.performanceTargets.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section E: Functional Requirements */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Functional Requirements</h2>

          <div className="space-y-2">
            <Label htmlFor="primary-functions">Primary Functions</Label>
            <Textarea
              key={fields.primaryFunctions.key}
              name={fields.primaryFunctions.name}
              defaultValue={fields.primaryFunctions.initialValue}
              placeholder="Describe the primary functions required"
              id="primary-functions"
            />
            {fields.primaryFunctions.errors && (
              <p className="text-red-500 text-sm">
                {fields.primaryFunctions.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="operational-needs">Operational Needs</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {["Manually", "Conveyor or automated systems", "Other"].map(
                (need) => (
                  <div key={need} className="flex items-center space-x-2">
                    <Checkbox
                      name="operationalNeeds"
                      value={need}
                      id={`need-${need.toLowerCase().replace(/\s+/g, "-")}`}
                    />
                    <Label
                      htmlFor={`need-${need.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {need}
                    </Label>
                  </div>
                ),
              )}
            </div>
            {fields.operationalNeeds?.errors && (
              <p className="text-red-500 text-sm">
                {fields.operationalNeeds.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="special-requirements">Special Requirements</Label>
            <Textarea
              key={fields.specialRequirements.key}
              name={fields.specialRequirements.name}
              defaultValue={fields.specialRequirements.initialValue}
              placeholder="Describe any special requirements"
              id="special-requirements"
            />
            {fields.specialRequirements.errors && (
              <p className="text-red-500 text-sm">
                {fields.specialRequirements.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section F: Space and Power Constraints */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Space and Power Constraints</h2>

          <div className="space-y-2">
            <Label htmlFor="space-availability">Space Availability</Label>
            <Textarea
              key={fields.spaceAvailability.key}
              name={fields.spaceAvailability.name}
              defaultValue={fields.spaceAvailability.initialValue}
              placeholder="Describe the available space"
              id="space-availability"
            />
            {fields.spaceAvailability.errors && (
              <p className="text-red-500 text-sm">
                {fields.spaceAvailability.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="power-supply">Power Supply</Label>
            <Textarea
              key={fields.powerSupply.key}
              name={fields.powerSupply.name}
              defaultValue={fields.powerSupply.initialValue}
              placeholder="Describe power supply specifications"
              id="power-supply"
            />
            {fields.powerSupply.errors && (
              <p className="text-red-500 text-sm">
                {fields.powerSupply.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="environmentalFactors">Environmental Factors</Label>
            <Textarea
              key={fields.environmentalFactors.key}
              name={fields.environmentalFactors.name}
              defaultValue={fields.environmentalFactors.initialValue}
              placeholder="Describe environmental considerations"
              id="environmental-factors"
            />
            {fields.environmentalFactors.errors && (
              <p className="text-red-500 text-sm">
                {fields.environmentalFactors.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section G: Scalability */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Scalability</h2>

          <div className="space-x-4">
            <Checkbox
              id="growth-yes"
              key={fields.anticipateFutureGrowth.name}
              name={fields.anticipateFutureGrowth.name}
              defaultValue={fields.anticipateFutureGrowth.initialValue}
            />
            <Label>Anticipate Future Growth</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="growthAccommodation">Growth Accommodation</Label>
            <Textarea
              key={fields.growthAccommodation.key}
              id="growth-accomodation"
              name={fields.growthAccommodation.name}
              defaultValue={fields.growthAccommodation.initialValue}
              placeholder="Describe how future growth can be accommodated"
            />
            {fields.growthAccommodation.errors && (
              <p className="text-red-500 text-sm">
                {fields.growthAccommodation.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comparableSystems">Comparable Systems</Label>
            <Textarea
              key={fields.comparableSystems.key}
              id="comparable-system"
              name={fields.comparableSystems.name}
              defaultValue={fields.comparableSystems.initialValue}
              placeholder="Describe any comparable systems you're aware of"
            />
            {fields.comparableSystems.errors && (
              <p className="text-red-500 text-sm">
                {fields.comparableSystems.errors}
              </p>
            )}
          </div>
        </div>

        {/* Section H: Additional Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Additional Information</h2>

          <div className="space-y-2">
            <Label>Collaboration Preferences</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Regular Meetings",
                "Weekly Updates via Email",
                "On-demand Reporting",
              ].map((pref) => (
                <div key={pref} className="flex items-center space-x-2">
                  <Checkbox
                    name="collaborationPreferences"
                    value={pref}
                    id={`pref-${pref.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                  <Label
                    htmlFor={`pref-${pref.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {pref}
                  </Label>
                </div>
              ))}
            </div>
            {fields.collaborationPreferences?.errors && (
              <p className="text-red-500 text-sm">
                {fields.collaborationPreferences.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalComments">Additional Comments</Label>
            <Textarea
              key={fields.additionalComments.key}
              name={fields.additionalComments.name}
              id="additional-comments"
              defaultValue={fields.additionalComments.initialValue}
              placeholder="Any additional information or special requirements"
            />
            {fields.additionalComments.errors && (
              <p className="text-red-500 text-sm">
                {fields.additionalComments.errors}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Submit label="Submit Process Request" />
        </div>
      </form>
    </div>
  );
};
