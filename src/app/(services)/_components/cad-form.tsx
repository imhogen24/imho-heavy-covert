"use client";
import { cadFormAction } from "@/action";
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
import { CadSchema } from "@/lib/z-schema";
import { Submit } from "./submit";
import { useRef } from "react";

export const CadForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [lastResult, action] = useActionState(cadFormAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CadSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Computer Aided Design (CAD) Request
      </h1>
      <form
        ref={ref}
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="space-y-6"
      >
        {/* Client Information Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Organization Name</Label>
            <Input
              key={fields.organizationName.key}
              name={fields.organizationName.name}
              defaultValue={fields.organizationName.initialValue}
              id="organization-name"
              placeholder="IMHO Heavy Covert"
              type="text"
            />
            {fields.organizationName.errors && (
              <p className="text-red-500 text-sm">
                {fields.organizationName.errors}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Contact Person</Label>
            <Input
              key={fields.contactPerson.key}
              name={fields.contactPerson.name}
              defaultValue={fields.contactPerson.initialValue}
              id="contact-person"
              placeholder="Kennedy Anyidoho"
              type="text"
            />
            {fields.contactPerson.errors && (
              <p className="text-red-500 text-sm">
                {fields.contactPerson.errors}
              </p>
            )}
          </div>
        </div>

        {/* Contact Details */}
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
            <Label htmlFor="number">Phone Number</Label>
            <Input
              key={fields.phoneNumber.key}
              name={fields.phoneNumber.name}
              defaultValue={fields.phoneNumber.initialValue}
              id="phone-number"
              placeholder="0557685929"
              type="tel"
            />
            {fields.phoneNumber.errors && (
              <p className="text-red-500 text-sm">
                {fields.phoneNumber.errors}
              </p>
            )}
          </div>
        </div>

        {/* Address and Operations */}
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            key={fields.address.key}
            name={fields.address.name}
            defaultValue={fields.address.initialValue}
            id="address"
            placeholder="Physical/Postal Address"
            type="text"
          />
          {fields.address.errors && (
            <p className="text-red-500 text-sm">{fields.address.errors}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Organizational Operations</Label>
          <Textarea
            key={fields.organizationOperations.key}
            name={fields.organizationOperations.name}
            defaultValue={fields.organizationOperations.initialValue}
            id="organization-operations"
            typeof="text"
            placeholder="Briefly describe your company's core business and primary activities"
          />
          {fields.organizationOperations.errors && (
            <p className="text-red-500 text-sm">
              {fields.organizationOperations.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Documentation Purpose</Label>
          <Textarea
            key={fields.documentationPurpose.key}
            name={fields.documentationPurpose.name}
            defaultValue={fields.documentationPurpose.initialValue}
            id="documentation-purpose"
            typeof="text"
            placeholder="Explain the specific goals and intended use of the requested documentation"
          />
          {fields.documentationPurpose.errors && (
            <p className="text-red-500 text-sm">
              {fields.documentationPurpose.errors}
            </p>
          )}
        </div>

        {/* Documentation Types */}
        <div className="space-y-2">
          <Label>Documentation Types</Label>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "2D Engineering Drawings",
              "3D Models",
              "Rendered Images",
              "Technical Illustrations",
              "User Manuals",
            ].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  key={fields.documentationTypes.key}
                  name={fields.documentationTypes.name}
                  defaultValue={`fields.documentationTypes${type}.initialValue`}
                  value={type}
                  id={`doc-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                />
                <Label
                  htmlFor={`doc-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">
            Please specify other documentation types if applicable
          </Label>
          <Input
            name="otherDocumentationType"
            id="other-documentation-type"
            type="text"
            placeholder="other documentation types"
          />

          {fields.otherDocumentationType.errors && (
            <p className="text-red-500 text-sm">
              {fields.otherDocumentationType.errors}
            </p>
          )}
        </div>

        {/* File Formats */}
        <div className="space-y-2">
          <Label>Preferred File Formats</Label>
          <div className="grid md:grid-cols-3 gap-4">
            {["CAD files", "Vector images", "PDF documents"].map((format) => (
              <div key={format} className="flex items-center space-x-2">
                <Checkbox
                  name="fileFormats"
                  value={format}
                  id={`file-format-${format.toLowerCase().replace(/\s+/g, "-")}`}
                />
                <Label
                  htmlFor={`file-format-${format.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {format}
                </Label>

                {fields.fileFormats.errors && (
                  <p className="text-red-500 text-sm">
                    {fields.fileFormats.errors}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="other-file-format">
            Please specify other file formats if applicable
          </Label>
          <Input
            name="otherFileFormat"
            id="other-file-format"
            placeholder="other file formats"
          />

          {fields.otherFileFormat.errors && (
            <p className="text-red-500 text-sm">
              {fields.otherFileFormat.errors}
            </p>
          )}
        </div>

        {/* Technical Details */}
        <div className="space-y-2">
          <Label htmlFor="technical-specifications">
            Technical Specifications
          </Label>
          <Textarea
            name="technicalSpecifications"
            id="technical-specifications"
            placeholder="List critical dimensions, tolerances, or technical requirements"
          />

          {fields.technicalSpecifications.errors && (
            <p className="text-red-500 text-sm">
              {fields.technicalSpecifications.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="technical-standards">Technical Standards</Label>
          <Input
            name="technicalStandards"
            id="technical-standards"
            placeholder="Specify any industry or engineering standards to be followed"
          />

          {fields.technicalStandards.errors && (
            <p className="text-red-500 text-sm">
              {fields.technicalStandards.errors}
            </p>
          )}
        </div>

        {/* Aesthetic Preferences */}
        <div className="space-y-2">
          <Label htmlFor="visual-style">Visual Style Preferences</Label>
          <Textarea
            name="visualStylePreferences"
            id="visual-style"
            placeholder="Describe desired aesthetic and visual approach for documentation"
          />

          {fields.visualStylePreferences.errors && (
            <p className="text-red-500 text-sm">
              {fields.visualStylePreferences.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="layout-preferences">Layout Preferences</Label>
          <Textarea
            name="layoutPreferences"
            id="layout-preferences"
            placeholder="Specify requirements for document layout and presentation"
          />

          {fields.layoutPreferences.errors && (
            <p className="text-red-500 text-sm">
              {fields.layoutPreferences.errors}
            </p>
          )}
        </div>

        {/* Project Specifics */}
        <div className="space-y-2">
          <Label htmlFor="preferred-timeline">Preferred Timeline</Label>
          <Input
            name="preferredTimeline"
            id="preferred-timeline"
            placeholder="Estimated timeframe for project completion"
          />

          {fields.preferredTimeline.errors && (
            <p className="text-red-500 text-sm">
              {fields.preferredTimeline.errors}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox name="requirePeriodicDrafts" id="periodic-drafts" />
          <Label htmlFor="periodic-drafts">Require Periodic Drafts</Label>

          {fields.requirePeriodicDrafts.errors && (
            <p className="text-red-500 text-sm">
              {fields.requirePeriodicDrafts.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="additional-services">Additional Services</Label>
          <Textarea
            name="additionalServices"
            id="additional-services"
            placeholder="Any additional services you require"
          />

          {fields.additionalServices.errors && (
            <p className="text-red-500 text-sm">
              {fields.additionalServices.errors}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="additional-comments">Additional Comments</Label>
          <Textarea
            name="additionalComments"
            id="additional-comments"
            placeholder="Any extra information, special requests, or additional context"
          />

          {fields.additionalComments.errors && (
            <p className="text-red-500 text-sm">
              {fields.additionalComments.errors}
            </p>
          )}
        </div>
        <div className="mt-8">
          <Submit label="Send CAD Request" />
        </div>
      </form>
    </div>
  );
};
