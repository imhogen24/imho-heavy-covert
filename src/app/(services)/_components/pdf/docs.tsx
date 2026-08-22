
import { GenericPDFDocument } from "./generic-pdf";
import { academyPartnershipPdfConfig } from "./lib/config/academy-partnership-config";
import { academySupportPdfConfig } from "./lib/config/academy-support-config";
import { capabilityAssessmentPdfConfig } from "./lib/config/capability-assessment-config";
import { cohortSponsorshipPdfConfig } from "./lib/config/cohort-sponsorship-config";
import { designForgePdfConfig } from "./lib/config/design-forge-config";
import { customEngineeringPdfConfig } from "./lib/config/custom-engineering-config";
import { draftingDigitizationPdfConfig } from "./lib/config/drafting-digitization-config";
import { AcademyPartnershipFormData } from "@/lib/schemas/academy-partnership/z";
import { AcademySupportFormData } from "@/lib/schemas/academy-support/z";
import { CapabilityAssessmentFormData } from "@/lib/schemas/capability-assessment/z";
import { CohortSponsorshipFormData } from "@/lib/schemas/cohort-sponsorship/z";
import { DesignForgeFormData } from "@/lib/schemas/design-forge/z";
import { CustomEngineeringFormData } from "@/lib/schemas/custom-engineering/z";
import { DraftingDigitizationFormData } from "@/lib/schemas/drafting-digitization/z";

export const AcademyPartnershipPDF = ({
  data,
}: {
  data: AcademyPartnershipFormData;
}) => <GenericPDFDocument data={data} config={academyPartnershipPdfConfig} />;

export const AcademySupportPDF = ({
  data,
}: {
  data: AcademySupportFormData;
}) => <GenericPDFDocument data={data} config={academySupportPdfConfig} />;

export const CapabilityAssessmentPDF = ({
  data,
}: {
  data: CapabilityAssessmentFormData;
}) => (
  <GenericPDFDocument data={data} config={capabilityAssessmentPdfConfig} />
);

export const CohortSponsorshipPDF = ({
  data,
}: {
  data: CohortSponsorshipFormData;
}) => <GenericPDFDocument data={data} config={cohortSponsorshipPdfConfig} />;

export const DesignForgePDF = ({ data }: { data: DesignForgeFormData }) => (
  <GenericPDFDocument data={data} config={designForgePdfConfig} />
);

export const CustomEngineeringPDF = ({
  data,
}: {
  data: CustomEngineeringFormData;
}) => <GenericPDFDocument data={data} config={customEngineeringPdfConfig} />;

export const DraftingDigitizationPDF = ({
  data,
}: {
  data: DraftingDigitizationFormData;
}) => (
  <GenericPDFDocument data={data} config={draftingDigitizationPdfConfig} />
);
