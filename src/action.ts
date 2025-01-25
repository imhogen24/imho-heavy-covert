"use server";

import { parseWithZod } from "@conform-to/zod";
import { CadSchema, ProductSchema } from "./lib/z-schema";
import { redirect } from "next/navigation";
import { CadRequestEmail } from "../src/components/emails/cad-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const cadFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  // get form data and compare with zodschema to validate
  const submission = parseWithZod(formData, {
    schema: CadSchema,
  });

  if (submission.status !== "success") {
    console.log("there was an error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "CAD Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New CAD Request from ${formData.get("organizationName")}`,
      react: CadRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        address: formData.get("address") as string,
        organizationOperations: formData.get(
          "organizationOperations",
        ) as string,
        documentationPurpose: formData.get("documentationPurpose") as string,
        documentationTypes: formData.getAll("documentationTypes") as string[],
        otherDocumentationType: formData.get(
          "otherDocumentationType",
        ) as string,
        fileFormats: formData.getAll("fileFormats") as string[],
        otherFileFormat: formData.get("otherFileFormat") as string,
        technicalSpecifications: formData.get(
          "technicalSpecifications",
        ) as string,
        technicalStandards: formData.get("technicalStandards") as string,
        visualStylePreferences: formData.get(
          "visualStylePreferences",
        ) as string,
        layoutPreferences: formData.get("layoutPreferences") as string,
        preferredTimeline: formData.get("preferredTimeline") as string,
        requirePeriodicDrafts: formData.get("requirePeriodicDrafts") === "on",
        additionalServices: formData.get("additionalServices") as string,
        additionalComments: formData.get("additionalComments") as string,
        requestNumber: `CAD-${Date.now()}`,
      }) as React.ReactElement,
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};

export const ProductFormAction = async (
  initialState: unknown,
  formData: FormData,
) => {
  // get form data and compare with zodschema to validate
  const submission = parseWithZod(formData, {
    schema: CadSchema,
  });

  if (submission.status !== "success") {
    console.log("there was an error");
    return submission.reply();
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "CAD Request <onboarding@resend.dev>",
      to: ["imhogen22@gmail.com"],
      subject: `New CAD Request from ${formData.get("organizationName")}`,
      react: CadRequestEmail({
        organizationName: formData.get("organizationName") as string,
        contactPerson: formData.get("contactPerson") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        address: formData.get("address") as string,
        organizationOperations: formData.get(
          "organizationOperations",
        ) as string,
        documentationPurpose: formData.get("documentationPurpose") as string,
        documentationTypes: formData.getAll("documentationTypes") as string[],
        otherDocumentationType: formData.get(
          "otherDocumentationType",
        ) as string,
        fileFormats: formData.getAll("fileFormats") as string[],
        otherFileFormat: formData.get("otherFileFormat") as string,
        technicalSpecifications: formData.get(
          "technicalSpecifications",
        ) as string,
        technicalStandards: formData.get("technicalStandards") as string,
        visualStylePreferences: formData.get(
          "visualStylePreferences",
        ) as string,
        layoutPreferences: formData.get("layoutPreferences") as string,
        preferredTimeline: formData.get("preferredTimeline") as string,
        requirePeriodicDrafts: formData.get("requirePeriodicDrafts") === "on",
        additionalServices: formData.get("additionalServices") as string,
        additionalComments: formData.get("additionalComments") as string,
        requestNumber: `CAD-${Date.now()}`,
      }) as React.ReactElement,
    });

    if (error) {
      return { error };
    }
  } catch (error: any) {
    return { error: error };
  }

  redirect("/success");
};
