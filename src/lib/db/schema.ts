// Drizzle table definitions. Export every table from this file so both
// the `db` client and drizzle-kit pick it up.
//
// Example:
// import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
//
// export const leads = pgTable("leads", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   email: text("email").notNull(),
//   createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
// });

import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  contactId: text("contact_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  files: jsonb("files").$type<string[]>().default([]).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdateFn(() => new Date())
    .notNull(),
});

export const imhogenAcademySubmissions = pgTable(
  "imhogen_academy_submissions",
  {
    imhoAcademyId: text("imho_academy_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
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
    hasPriorProjects: text("has_prior_projects").notNull(),
    portfolioLink: text("portfolio_link"),
    willingForIntensiveTraining: text(
      "willing_for_intensive_training",
    ).notNull(),
    weeklyHoursCommitment: text("weekly_hours_commitment").notNull(),
    whySelectYou: text("why_select_you").notNull(),
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const imghogenPartnershipSubmissions = pgTable(
  "imhogen_partnership_submissions",
  {
    imhoPartnershipId: text("imho_partnership_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    organizationName: text("organization_name").notNull(),
    organizationWebsite: text("organization_website"),
    contactPerson: text("contact_person").notNull(),
    positionRole: text("positionRole").notNull(),
    email: text("email").notNull(),
    phoneNumber: text("phone_number"),
    areasOfInterest: jsonb("areas_of_interest").$type<string[]>().notNull(),
    collaborationDescription: text("collaboration_description").notNull(),
    expectedOutcomes: text("expected_outcomes"),
    additionalInformation: text("additonal_information"),
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const academySupportSubmissions = pgTable(
  "academy_support_submissions",
  {
    academySupportId: text("acedemy_support_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    country: text("country").notNull(),
    supportTypes: jsonb("support_types").$type<string[]>().notNull(),
    supportContribution: text("support_contribution").notNull(),
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const capabilityAssessmentSubmissions = pgTable(
  "capability_assessment_submissions",
  {
    capabilityAssessmentId: text("capability_assessment_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
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
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const CohortSponsorshipSubmissions = pgTable(
  "cohort_sponsorship_submissions",
  {
    cohortSponsorshipId: text("cohort_sponsorship_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    organizationName: text("organization_name").notNull(),
    contactPerson: text("contact_person").notNull(),
    positionRole: text("position_role").notNull(),
    website: text("website"),
    email: text("email").notNull(),
    phoneNumber: text("phone_number"),
    sponsorshipAreas: jsonb("sponsorship_areas").$type<string[]>().notNull(),
    whySupport: text("why_support").notNull(),
    impactAreas: text("impact_areas").notNull(),
    scheduleDiscussion: text("scheduleDiscussion"),
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const DesignForgeSubmissions = pgTable("design_forge_submissions", {
  designForgeId: text("design_forge_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  institutionOrCompany: text("instituation_or_company").notNull(),
  currentRole: text("current_role").notNull(),
  areasOfInterest: jsonb("areas_of_interest").$type<string[]>().notNull(),
  mentorshipInterest: text("mentorship_interest").notNull(),
  collaborationsInterest: text("collaborations_interest").notNull(),
  challengesWorkshopsInterest: text("challenge_workshop_interest").notNull(),
  linkedinProfile: text("linkedin_profile"),
  portfolioLink: text("portfolio_link"),
  socialHandle: text("social_handle"),
  whyJoin: text("why_join").notNull(),
  requestId: text("request_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdateFn(() => new Date())
    .notNull(),
});

export const CustomEngineeringSubmissions = pgTable(
  "custom_engineering_submissions",
  {
    customEngineeringId: text("custom_engineering_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
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
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);

export const DraftingDigitizationSubmissions = pgTable(
  "drafting_digitization_submissions",
  {
    draftingDigitizationId: text("drafting_digitization_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
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
    requestId: text("request_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdateFn(() => new Date())
      .notNull(),
  },
);
