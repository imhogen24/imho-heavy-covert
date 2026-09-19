import { NextRequest, NextResponse } from "next/server";
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
} from "@/actions/action";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ type: string }> },
) {
  try {
    const formData = await req.formData();
    const { type: submissionType } = await params;

    let result: { success?: boolean; error?: string };

    switch (submissionType) {
      case "contact":
        result = await contactFormAction(formData);
        break;
      case "academy":
        result = await ImhoGenAcademyFormAction(formData);
        break;
      case "partnership":
        result = await AcademyPartnershipFormAction(formData);
        break;
      case "support":
        result = await AcademySupportFormAction(formData);
        break;
      case "capability-assessment":
        result = await CapabilityAssessmentFormAction(formData);
        break;
      case "cohort-sponsorship":
        result = await CohortSponsorshipFormAction(formData);
        break;
      case "design-forge":
        result = await DesignForgeFormAction(formData);
        break;
      case "custom-engineering":
        result = await CustomEngineeringFormAction(formData);
        break;
      case "drafting-digitization":
        result = await DraftingDigitizationFormAction(formData);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid submission type" },
          { status: 400 },
        );
    }

    if (result?.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("API Route Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
