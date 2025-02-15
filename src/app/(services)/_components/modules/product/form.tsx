"use client";

import { ProductFormAction } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Submit } from "../../submit";
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
import { ProductSchema } from "@/lib/z-schema";

export const ProductForm = () => {
  const [lastResult, action] = useActionState(ProductFormAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProductSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="p-5 md:p-10 lg:p-20 max-w-4xl mx-auto">





      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="space-y-6 border muted-border p-5 md:p-10 rounded-[0.5rem]"
      >
        <h1 className="text-lg md:text-3xl pb-5 md:pb-8 font-bold ">Physical Product Request</h1>
        {/* Client Information Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="space-y-4">
            <Label htmlFor="name">Organization Name</Label>
            <Input
              key={fields.organizationName.key}
              name={fields.organizationName.name}
              defaultValue={fields.organizationName.initialValue}
              id="organization-name"
              placeholder="TechNova Solutions Ltd."
              type="text"
            />
            {fields.organizationName.errors && (
              <p className="text-red-500 text-sm">
                {fields.organizationName.errors}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="name">Contact Person</Label>
            <Input
              key={fields.contactPerson.key}
              name={fields.contactPerson.name}
              defaultValue={fields.contactPerson.initialValue}
              id="contact-person"
              placeholder="John Doe"
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
          <div className="space-y-4">
            <Label htmlFor="email">Email</Label>
            <Input
              key={fields.email.key}
              name={fields.email.name}
              defaultValue={fields.email.initialValue}
              id="email"
              type="email"
              placeholder="johndoe@technovasolutions.com"
            />
            {fields.email.errors && (
              <p className="text-red-500 text-sm">{fields.email.errors}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              key={fields.phoneNumber.key}
              name={fields.phoneNumber.name}
              defaultValue={fields.phoneNumber.initialValue}
              id="phone-number"
              placeholder="0244567890"
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
        <div className="space-y-4">
          <Label htmlFor="address">Address</Label>
          <Input
            key={fields.address.key}
            name={fields.address.name}
            defaultValue={fields.address.initialValue}
            id="address"
            placeholder="P.O. Box AN 1234, Accra, Ghana"
            type="text"
          />
          {fields.address.errors && (
            <p className="text-red-500 text-sm">{fields.address.errors}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="name">Business Operations</Label>
          <Textarea
            key={fields.businessOperations.key}
            name={fields.businessOperations.name}
            defaultValue={fields.businessOperations.initialValue}
            id="buniness-operations"
            typeof="text"
            placeholder="TechNova Solutions specializes in providing technological hardware and software solutions to small and medium-sized enterprises in Africa."
          />
          {fields.businessOperations.errors && (
            <p className="text-red-500 text-sm">
              {fields.businessOperations.errors}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="name">Product Purpose</Label>
          <Textarea
            key={fields.productPurpose.key}
            name={fields.productPurpose.name}
            defaultValue={fields.productPurpose.initialValue}
            id="product-purpose"
            typeof="text"
            placeholder="To enhance productivity and improve safety in small-scale manufacturing environments through an ergonomic workstation tool."
          />
          {fields.productPurpose.errors && (
            <p className="text-red-500 text-sm">
              {fields.productPurpose.errors}
            </p>
          )}
        </div>

        {/* product vision */}
        <div className="space-y-4">
          <Label htmlFor="name">Product Vision</Label>
          <Textarea
            key={fields.productVision.key}
            name={fields.productVision.name}
            defaultValue={fields.productVision.initialValue}
            id="product-vision"
            typeof="text"
            placeholder="A lightweight, adjustable workstation designed for small-scale manufacturing that combines efficiency, durability, and ergonomic comfort."
          />
          {fields.productVision.errors && (
            <p className="text-red-500 text-sm">
              {fields.productVision.errors}
            </p>
          )}
        </div>

        {/* product objectives */}
        <div className="space-y-4">
          <Label htmlFor="name">Product Objectives</Label>
          <Textarea
            key={fields.productObjectives.key}
            name={fields.productObjectives.name}
            defaultValue={fields.productObjectives.initialValue}
            id="product-objectives"
            typeof="text"
            placeholder="Increase efficiency in small-scale manufacturing,
            Reduce worker fatigue through ergonomic features,
            Ensure durability and cost-effectiveness"
          />
          {fields.productObjectives.errors && (
            <p className="text-red-500 text-sm">
              {fields.productObjectives.errors}
            </p>
          )}
        </div>

        {/* target audience*/}
        <div className="space-y-4">
          <Label htmlFor="name">Target Audience</Label>
          <Textarea
            key={fields.targetAudience.key}
            name={fields.targetAudience.name}
            defaultValue={fields.targetAudience.initialValue}
            id="target-audience"
            typeof="text"
            placeholder="Small-scale manufacturers in the furniture and textile industries across Africa"
          />
          {fields.targetAudience.errors && (
            <p className="text-red-500 text-sm">
              {fields.targetAudience.errors}
            </p>
          )}
        </div>

        {/* core functions*/}
        <div className="space-y-4">
          <Label htmlFor="name">Core Functions</Label>
          <Textarea
            key={fields.coreFunctions.key}
            name={fields.coreFunctions.name}
            defaultValue={fields.coreFunctions.initialValue}
            id="core-functions"
            typeof="text"
            placeholder="Provide a stable and adjustable work surface,
            Enable easy movement and storage,
            Accommodate tools and materials securely"
          />
          {fields.coreFunctions.errors && (
            <p className="text-red-500 text-sm">
              {fields.coreFunctions.errors}
            </p>
          )}
        </div>

        {/* performance metrics*/}
        <div className="space-y-4">
          <Label htmlFor="name">Performance metrics</Label>
          <Textarea
            key={fields.performanceMetrics.key}
            name={fields.performanceMetrics.name}
            defaultValue={fields.performanceMetrics.initialValue}
            id="performace-metrics"
            typeof="text"
            placeholder="Durable for 10+ years of daily use,
            Support up to 100 kg of distributed weight,
            Adjustable height range: 50–100 cm"
          />
          {fields.performanceMetrics.errors && (
            <p className="text-red-500 text-sm">
              {fields.performanceMetrics.errors}
            </p>
          )}
        </div>

        {/* prefered materials*/}
        <div className="space-y-4">
          <Label htmlFor="name">Prefered materials</Label>
          <Textarea
            key={fields.preferredMaterials.key}
            name={fields.preferredMaterials.name}
            defaultValue={fields.preferredMaterials.initialValue}
            id="prefered-materials"
            typeof="text"
            placeholder="Lightweight aluminum frame, high-grade rubber feet for stability, and MDF surface coated with scratch-resistant laminate"
          />
          {fields.preferredMaterials.errors && (
            <p className="text-red-500 text-sm">
              {fields.preferredMaterials.errors}
            </p>
          )}
        </div>

        {/* compliance standards*/}
        <div className="space-y-4">
          <Label htmlFor="name">Compliance Standards</Label>
          <Textarea
            key={fields.complianceStandards.key}
            name={fields.complianceStandards.name}
            defaultValue={fields.complianceStandards.initialValue}
            id="compliance-standards"
            typeof="text"
            placeholder="ISO 9001 for quality assurance,
            CE marking for safety compliance"
          />
          {fields.complianceStandards.errors && (
            <p className="text-red-500 text-sm">
              {fields.complianceStandards.errors}
            </p>
          )}
        </div>

        {/* environmental conditions*/}
        <div className="space-y-4">
          <Label htmlFor="name">Environtmental Conditions</Label>
          <Textarea
            key={fields.environmentalConditions.key}
            name={fields.environmentalConditions.name}
            defaultValue={fields.environmentalConditions.initialValue}
            id="environmental-conditions"
            typeof="text"
            placeholder="Indoor use with occasional exposure to high humidity (e.g., 80%)"
          />
          {fields.environmentalConditions.errors && (
            <p className="text-red-500 text-sm">
              {fields.environmentalConditions.errors}
            </p>
          )}
        </div>

        {/* visual style*/}
        <div className="space-y-4">
          <Label htmlFor="name">Visual Style</Label>
          <Textarea
            key={fields.visualStyle.key}
            name={fields.visualStyle.name}
            defaultValue={fields.visualStyle.initialValue}
            id="visual-style"
            placeholder="Modern and sleek with matte black and gray finishes"
          />
          {fields.visualStyle.errors && (
            <p className="text-red-500 text-sm">{fields.visualStyle.errors}</p>
          )}
        </div>

        {/* egornomic features*/}
        <div className="space-y-4">
          <Label htmlFor="name">Egornomic Features</Label>
          <Textarea
            key={fields.ergonomicFeatures.key}
            name={fields.ergonomicFeatures.name}
            defaultValue={fields.ergonomicFeatures.initialValue}
            id="ergonomic-features"
            typeof="text"
            placeholder="Easy-to-use height adjustment mechanism,
            Rounded edges for safety"
          />
          {fields.ergonomicFeatures.errors && (
            <p className="text-red-500 text-sm">
              {fields.ergonomicFeatures.errors}
            </p>
          )}
        </div>

        {/* branding requirements*/}
        <div className="space-y-4">
          <Label htmlFor="name">Branding requirements</Label>
          <Textarea
            key={fields.brandingRequirements.key}
            name={fields.brandingRequirements.name}
            defaultValue={fields.brandingRequirements.initialValue}
            id="branding-requirements"
            typeof="text"
            placeholder="Incorporate our logo on the surface,
            Customizable color scheme (branding kit attached)"
          />
          {fields.brandingRequirements.errors && (
            <p className="text-red-500 text-sm">
              {fields.brandingRequirements.errors}
            </p>
          )}
        </div>

        {/* budget range*/}
        <div className="space-y-4">
          <Label htmlFor="name">Budget Range</Label>
          <Textarea
            key={fields.budgetRange.key}
            name={fields.budgetRange.name}
            defaultValue={fields.budgetRange.initialValue}
            id="budget-purpose"
            typeof="text"
            placeholder="$5,000–$7,500 for initial design and prototyping"
          />
          {fields.budgetRange.errors && (
            <p className="text-red-500 text-sm">{fields.budgetRange.errors}</p>
          )}
        </div>

        {/* prefered timeline*/}
        <div className="space-y-4">
          <Label htmlFor="name">Prefered timeline</Label>
          <Textarea
            key={fields.preferredTimeline.key}
            name={fields.preferredTimeline.name}
            defaultValue={fields.preferredTimeline.initialValue}
            id="prefered-timeline"
            typeof="text"
            placeholder="8 weeks from the start date"
          />
          {fields.preferredTimeline.errors && (
            <p className="text-red-500 text-sm">
              {fields.preferredTimeline.errors}
            </p>
          )}
        </div>

        {/* require prototypes */}
        <div className="space-y-4">
          <Label>Require Prototypes</Label>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="require-prototypes"
              key={fields.requirePrototypes.name}
              name={fields.requirePrototypes.name}
              defaultValue={fields.requirePrototypes.initialValue}
            />
            <Label className="text-muted-foreground">
              Yes, we require prototypes
            </Label>
            clas
          </div>
        </div>

        {/* number of prototypes */}
        <div className="space-y-4">
          <Label htmlFor="numberOfPrototypes">Number of Prototypes</Label>
          <Input
            key={fields.numberOfPrototypes.key}
            name={fields.numberOfPrototypes.name}
            defaultValue={fields.numberOfPrototypes.initialValue}
            id="number-of-prototypes"
            type="number"
            placeholder="Three (for testing in different environments)"
          />
          {fields.numberOfPrototypes.errors && (
            <p className="text-red-500 text-sm">
              {fields.numberOfPrototypes.errors}
            </p>
          )}
        </div>

        {/* collaboration preferences */}
        <div className="space-y-4">
          <Label>Collaboration Preferences</Label>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Regular Meetings",
              "Weekly Updates via Email",
              "On-demand Reporting",
            ].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  key={fields.collaborationPreferences.name}
                  name={fields.collaborationPreferences.name}
                  defaultValue={`fields.collaborationPreferences${type}.initialValue`}
                  value={type}
                  id={`collab-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                />
                <Label
                  htmlFor={`collab-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* required tests*/}
        <div className="space-y-4">
          <Label htmlFor="name">Required Tests</Label>
          <Textarea
            key={fields.requiredTests.key}
            name={fields.requiredTests.name}
            defaultValue={fields.requiredTests.initialValue}
            id="required-tests"
            typeof="text"
            placeholder="Load-bearing tests,
            Ergonomic usability tests"
          />
          {fields.requiredTests.errors && (
            <p className="text-red-500 text-sm">
              {fields.requiredTests.errors}
            </p>
          )}
        </div>

        {/* comparable products*/}
        <div className="space-y-4">
          <Label htmlFor="name">Comparable products</Label>
          <Textarea
            key={fields.comparableProducts.key}
            name={fields.comparableProducts.name}
            defaultValue={fields.comparableProducts.initialValue}
            id="comparable-products"
            typeof="text"
            placeholder="similar to the Ikea Skarsta desk but with enhanced load capacity"
          />
          {fields.comparableProducts.errors && (
            <p className="text-red-500 text-sm">
              {fields.comparableProducts.errors}
            </p>
          )}
        </div>

        {/* additional comments */}
        <div className="space-y-4">
          <Label htmlFor="additional-comments">Additional Comments</Label>
          <Textarea
            key={fields.additionalComments.key}
            name={fields.additionalComments.name}
            defaultValue={fields.additionalComments.initialValue}
            id="additional-comments"
            placeholder="Consider compatibility with add-on accessories like monitor mounts and tool holders"
          />

          {fields.additionalComments.errors && (
            <p className="text-red-500 text-sm">
              {fields.additionalComments.errors}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Submit label="Submit Process Request" />
        </div>
      </form>
    </div>
  );
};
