// Drizzle table definitions. Export every table from this file so both
// the `db` client and drizzle-kit pick it up.

import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const primaryId = (name: string) =>
  text(name)
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID());

// Public reference for a submission, built from the client's idempotency key.
// Unique so a retried POST cannot insert the same submission twice.
const requestId = () => text("request_id").notNull().unique();

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdateFn(() => new Date())
    .notNull(),
};

export const contactSubmissions = pgTable(
  "contact_submissions",
  {
    contactId: primaryId("contact_id"),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    files: jsonb("files").$type<string[]>().default([]).notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("contact_submissions_email_idx").on(t.email),
    index("contact_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const imhogenAcademySubmissions = pgTable(
  "imhogen_academy_submissions",
  {
    imhoAcademyId: primaryId("imho_academy_id"),
    fullName: text("full_name").notNull(),
    phoneNumber: text("phone_number").notNull(),
    email: text("email").notNull(),
    country: text("country").notNull(),
    cityTown: text("city_town").notNull(),
    currentStatus: text("current_status").notNull(),
    institutionOrCompany: text("institution_company").notNull(),
    programDisciplineRole: text("program_discipline_role").notNull(),
    currentLevelYear: text("current_level_year"),
    whyJoin: text("why_join").notNull(),
    areasOfInterest: jsonb("areas_of_interest").$type<string[]>().notNull(),
    hasPriorProjects: boolean("has_prior_projects").notNull(),
    portfolioLink: text("portfolio_link"),
    willingForIntensiveTraining: boolean(
      "willing_for_intensive_training",
    ).notNull(),
    weeklyHoursCommitment: text("weekly_hours_commitment").notNull(),
    whySelectYou: text("why_select_you").notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("imhogen_academy_submissions_email_idx").on(t.email),
    index("imhogen_academy_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const imhogenPartnershipSubmissions = pgTable(
  "imhogen_partnership_submissions",
  {
    imhoPartnershipId: primaryId("imho_partnership_id"),
    organizationName: text("organization_name").notNull(),
    organizationWebsite: text("organization_website"),
    contactPerson: text("contact_person").notNull(),
    positionRole: text("position_role").notNull(),
    email: text("email").notNull(),
    phoneNumber: text("phone_number"),
    areasOfInterest: jsonb("areas_of_interest").$type<string[]>().notNull(),
    collaborationDescription: text("collaboration_description").notNull(),
    expectedOutcomes: text("expected_outcomes"),
    additionalInformation: text("additional_information"),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("imhogen_partnership_submissions_email_idx").on(t.email),
    index("imhogen_partnership_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const academySupportSubmissions = pgTable(
  "academy_support_submissions",
  {
    academySupportId: primaryId("academy_support_id"),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    country: text("country").notNull(),
    supportTypes: jsonb("support_types").$type<string[]>().notNull(),
    supportContribution: text("support_contribution").notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("academy_support_submissions_email_idx").on(t.email),
    index("academy_support_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const capabilityAssessmentSubmissions = pgTable(
  "capability_assessment_submissions",
  {
    capabilityAssessmentId: primaryId("capability_assessment_id"),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    background: text("background").notNull(),
    experienceLevel: text("experience_level").notNull(),
    problemDefinition: integer("problem_definition").notNull(),
    conceptGeneration: integer("concept_generation").notNull(),
    cadModeling: integer("cad_modelling").notNull(),
    engineeringAnalysis: integer("engineering_analysis").notNull(),
    technicalDocumentation: integer("technical_documentation").notNull(),
    manufacturingUnderstanding: integer(
      "manufacturing_understanding",
    ).notNull(),
    systemsThinking: integer("systems_thinking").notNull(),
    projectDescription: text("project_description").notNull(),
    improvementArea: text("improvement_area").notNull(),
    biggestWeakness: text("biggest_weakness").notNull(),
    portfolioLink: text("portfolio_link"),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("capability_assessment_submissions_email_idx").on(t.email),
    index("capability_assessment_submissions_created_at_idx").on(t.createdAt),
    // Every self-assessment score sits on the 1–5 RATING_SCALE.
    check(
      "capability_assessment_ratings_range",
      sql`${t.problemDefinition} BETWEEN 1 AND 5
        AND ${t.conceptGeneration} BETWEEN 1 AND 5
        AND ${t.cadModeling} BETWEEN 1 AND 5
        AND ${t.engineeringAnalysis} BETWEEN 1 AND 5
        AND ${t.technicalDocumentation} BETWEEN 1 AND 5
        AND ${t.manufacturingUnderstanding} BETWEEN 1 AND 5
        AND ${t.systemsThinking} BETWEEN 1 AND 5`,
    ),
  ],
);

export const cohortSponsorshipSubmissions = pgTable(
  "cohort_sponsorship_submissions",
  {
    cohortSponsorshipId: primaryId("cohort_sponsorship_id"),
    organizationName: text("organization_name").notNull(),
    contactPerson: text("contact_person").notNull(),
    positionRole: text("position_role").notNull(),
    website: text("website"),
    email: text("email").notNull(),
    phoneNumber: text("phone_number"),
    sponsorshipAreas: jsonb("sponsorship_areas").$type<string[]>().notNull(),
    whySupport: text("why_support").notNull(),
    impactAreas: text("impact_areas").notNull(),
    // Optional question: NULL means it was left unanswered.
    scheduleDiscussion: boolean("schedule_discussion"),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("cohort_sponsorship_submissions_email_idx").on(t.email),
    index("cohort_sponsorship_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const designForgeSubmissions = pgTable(
  "design_forge_submissions",
  {
    designForgeId: primaryId("design_forge_id"),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phoneNumber: text("phone_number").notNull(),
    institutionOrCompany: text("institution_or_company").notNull(),
    currentRole: text("current_role").notNull(),
    areasOfInterest: jsonb("areas_of_interest").$type<string[]>().notNull(),
    mentorshipInterest: boolean("mentorship_interest").notNull(),
    collaborationsInterest: boolean("collaborations_interest").notNull(),
    challengesWorkshopsInterest: boolean(
      "challenge_workshop_interest",
    ).notNull(),
    linkedinProfile: text("linkedin_profile"),
    portfolioLink: text("portfolio_link"),
    socialHandle: text("social_handle"),
    whyJoin: text("why_join").notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("design_forge_submissions_email_idx").on(t.email),
    index("design_forge_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const customEngineeringSubmissions = pgTable(
  "custom_engineering_submissions",
  {
    customEngineeringId: primaryId("custom_engineering_id"),
    organizationName: text("organization_name").notNull(),
    contactPerson: text("contact_person").notNull(),
    email: text("email").notNull(),
    phoneNumber: text("phone_number").notNull(),
    siteLocation: text("site_location").notNull(),
    projectScope: jsonb("project_scope").$type<string[]>().notNull(),
    projectTitle: text("project_title").notNull(),
    primaryObjective: text("primary_objective").notNull(),
    materialInputs: text("material_inputs").notNull(),
    energyAndInformationInputs: text("energy_and_information_inputs").notNull(),
    transformation: text("transformation").notNull(),
    outputs: text("outputs").notNull(),
    byProducts: text("by_products"),
    humanSystem: text("human_system"),
    activeEnvironment: text("active_environment"),
    budgetExpectations: text("budget_expectations"),
    targetTimeline: text("target_timeline"),
    fileAttachments: jsonb("file_attachments")
      .$type<string[]>()
      .default([])
      .notNull(),
    // When the submitter accepted the terms of agreement (the disclaimer).
    termsAcceptedAt: timestamp("terms_accepted_at", {
      withTimezone: true,
    }).notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("custom_engineering_submissions_email_idx").on(t.email),
    index("custom_engineering_submissions_created_at_idx").on(t.createdAt),
  ],
);

export const draftingDigitizationSubmissions = pgTable(
  "drafting_digitization_submissions",
  {
    draftingDigitizationId: primaryId("drafting_digitization_id"),
    organizationName: text("organization_name").notNull(),
    contactPerson: text("contact_person").notNull(),
    email: text("email").notNull(),
    phoneNumber: text("phone_number").notNull(),
    siteLocation: text("site_location").notNull(),
    inputMaterialType: text("input_material_type").notNull(),
    assetCondition: text("asset_condition").notNull(),
    draftingServices: jsonb("drafting_services").$type<string[]>().notNull(),
    endGoal: text("end_goal").notNull(),
    draftingStandard: text("drafting_standard").notNull(),
    outputFormats: jsonb("output_formats").$type<string[]>().notNull(),
    fileAttachments: jsonb("file_attachment")
      .$type<string[]>()
      .default([])
      .notNull(),
    // When the submitter accepted the terms of agreement (the disclaimer).
    termsAcceptedAt: timestamp("terms_accepted_at", {
      withTimezone: true,
    }).notNull(),
    requestId: requestId(),
    ...timestamps,
  },
  (t) => [
    index("drafting_digitization_submissions_email_idx").on(t.email),
    index("drafting_digitization_submissions_created_at_idx").on(t.createdAt),
  ],
);
