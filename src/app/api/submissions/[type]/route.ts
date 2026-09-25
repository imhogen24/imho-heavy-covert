import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  contactFormAction,
  ImhoGenAcademyFormAction,
  AcademyPartnershipFormAction,
  AcademySupportFormAction,
  CapabilityAssessmentFormAction,
  CohortSponsorshipFormAction,
  DesignForgeFormAction,
  CustomEngineeringFormAction,
  DraftingDigitizationFormAction,
  type Submission,
} from "@/actions/action";
import { ContactFormSchema } from "@/lib/schemas/contact-form/z";
import { ImhoGenAcademySchema } from "@/lib/schemas/imho-gen-academy/z";
import { AcademyPartnershipSchema } from "@/lib/schemas/academy-partnership/z";
import { AcademySupportSchema } from "@/lib/schemas/academy-support/z";
import { CapabilityAssessmentSchema } from "@/lib/schemas/capability-assessment/z";
import { CohortSponsorshipSchema } from "@/lib/schemas/cohort-sponsorship/z";
import { DesignForgeSchema } from "@/lib/schemas/design-forge/z";
import { CustomEngineeringSchema } from "@/lib/schemas/custom-engineering/z";
import { DraftingDigitizationSchema } from "@/lib/schemas/drafting-digitization/z";

// Generated once per form fill on the client and resent on every retry, so a
// repeated POST maps to the same request_id and is not stored twice.
const SubmissionEnvelope = z.object({ submissionId: z.uuid() });

const INVALID_SUBMISSION =
  "Some answers are invalid. Please review the form and try again.";

/**
 * Builds the handler for one form: validates the body against the form's own
 * schema (the browser check is not a trust boundary), derives the request id
 * from the idempotency key, and hands typed data to the service function.
 */
const submissionHandler =
  <S extends z.ZodType>(
    schema: S,
    prefix: string,
    save: (submission: Submission<z.output<S>>) => Promise<void>,
  ) =>
  async (req: NextRequest): Promise<NextResponse> => {
    let body: unknown;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Request body must be valid JSON" },
        { status: 400 },
      );
    }

    const parsed = schema.safeParse(body);
    const envelope = SubmissionEnvelope.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: INVALID_SUBMISSION,
          fieldErrors: z.flattenError(parsed.error).fieldErrors,
        },
        { status: 400 },
      );
    }

    if (!envelope.success) {
      return NextResponse.json({ error: INVALID_SUBMISSION }, { status: 400 });
    }

    const requestId = `${prefix}-${envelope.data.submissionId}`;

    await save({ data: parsed.data, requestId });

    return NextResponse.json({ success: true, requestId }, { status: 200 });
  };

const handlers = new Map([
  ["contact", submissionHandler(ContactFormSchema, "CF", contactFormAction)],
  [
    "academy",
    submissionHandler(ImhoGenAcademySchema, "AA", ImhoGenAcademyFormAction),
  ],
  [
    "partnership",
    submissionHandler(
      AcademyPartnershipSchema,
      "AP",
      AcademyPartnershipFormAction,
    ),
  ],
  [
    "support",
    submissionHandler(AcademySupportSchema, "AS", AcademySupportFormAction),
  ],
  [
    "capability-assessment",
    submissionHandler(
      CapabilityAssessmentSchema,
      "CA",
      CapabilityAssessmentFormAction,
    ),
  ],
  [
    "cohort-sponsorship",
    submissionHandler(
      CohortSponsorshipSchema,
      "CS",
      CohortSponsorshipFormAction,
    ),
  ],
  [
    "design-forge",
    submissionHandler(DesignForgeSchema, "DF", DesignForgeFormAction),
  ],
  [
    "custom-engineering",
    submissionHandler(
      CustomEngineeringSchema,
      "T1",
      CustomEngineeringFormAction,
    ),
  ],
  [
    "drafting-digitization",
    submissionHandler(
      DraftingDigitizationSchema,
      "T3",
      DraftingDigitizationFormAction,
    ),
  ],
]);

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type: submissionType } = await params;
  const handler = handlers.get(submissionType);

  if (!handler) {
    return NextResponse.json(
      { error: "Invalid submission type" },
      { status: 404 },
    );
  }

  try {
    return await handler(req);
  } catch (error) {
    // Database and other internal failures: keep the details in the logs.
    console.error(`Submission error (${submissionType}):`, error);

    return NextResponse.json(
      { error: "We couldn't save your submission. Please try again." },
      { status: 500 },
    );
  }
}
