-- Hand-edited after drizzle-kit generate: the generated casts and NOT NULL
-- additions fail on tables that already hold rows, so each is paired with a
-- backfill. Data fixes first, then types, then constraints and indexes.

-- Optional answers were stored as "" rather than NULL.
UPDATE "imhogen_academy_submissions" SET "current_level_year" = NULLIF("current_level_year", ''), "portfolio_link" = NULLIF("portfolio_link", '');--> statement-breakpoint
UPDATE "imhogen_partnership_submissions" SET "organization_website" = NULLIF("organization_website", ''), "phone_number" = NULLIF("phone_number", ''), "expected_outcomes" = NULLIF("expected_outcomes", ''), "additional_information" = NULLIF("additional_information", '');--> statement-breakpoint
UPDATE "capability_assessment_submissions" SET "portfolio_link" = NULLIF("portfolio_link", '');--> statement-breakpoint
UPDATE "cohort_sponsorship_submissions" SET "website" = NULLIF("website", ''), "phone_number" = NULLIF("phone_number", '');--> statement-breakpoint
UPDATE "design_forge_submissions" SET "linkedin_profile" = NULLIF("linkedin_profile", ''), "portfolio_link" = NULLIF("portfolio_link", ''), "social_handle" = NULLIF("social_handle", '');--> statement-breakpoint
UPDATE "custom_engineering_submissions" SET "by_products" = NULLIF("by_products", ''), "human_system" = NULLIF("human_system", ''), "active_environment" = NULLIF("active_environment", ''), "budget_expectations" = NULLIF("budget_expectations", ''), "target_timeline" = NULLIF("target_timeline", '');--> statement-breakpoint

-- Yes/No answers become booleans. The optional scheduleDiscussion keeps NULL for unanswered.
ALTER TABLE "imhogen_academy_submissions" ALTER COLUMN "has_prior_projects" SET DATA TYPE boolean USING "has_prior_projects" = 'Yes';--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ALTER COLUMN "willing_for_intensive_training" SET DATA TYPE boolean USING "willing_for_intensive_training" = 'Yes';--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ALTER COLUMN "mentorship_interest" SET DATA TYPE boolean USING "mentorship_interest" = 'Yes';--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ALTER COLUMN "collaborations_interest" SET DATA TYPE boolean USING "collaborations_interest" = 'Yes';--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ALTER COLUMN "challenge_workshop_interest" SET DATA TYPE boolean USING "challenge_workshop_interest" = 'Yes';--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ALTER COLUMN "scheduleDiscussion" SET DATA TYPE boolean USING CASE "scheduleDiscussion" WHEN 'Yes' THEN true WHEN 'No' THEN false END;--> statement-breakpoint

-- Terms acceptance: rows saved so far could only be submitted with the
-- disclaimer ticked, so their submission time stands in for acceptance time.
ALTER TABLE "custom_engineering_submissions" ADD COLUMN "terms_accepted_at" timestamp with time zone;--> statement-breakpoint
UPDATE "custom_engineering_submissions" SET "terms_accepted_at" = "created_at";--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ALTER COLUMN "terms_accepted_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD COLUMN "terms_accepted_at" timestamp with time zone;--> statement-breakpoint
UPDATE "drafting_digitization_submissions" SET "terms_accepted_at" = "created_at";--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ALTER COLUMN "terms_accepted_at" SET NOT NULL;--> statement-breakpoint

-- request_id: required everywhere, contact included. Backfill any gaps from the row id.
ALTER TABLE "contact_submissions" ADD COLUMN "request_id" text;--> statement-breakpoint
UPDATE "contact_submissions" SET "request_id" = 'CF-' || "contact_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "imhogen_academy_submissions" SET "request_id" = 'AA-' || "imho_academy_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "imhogen_partnership_submissions" SET "request_id" = 'AP-' || "imho_partnership_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "academy_support_submissions" SET "request_id" = 'AS-' || "academy_support_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "capability_assessment_submissions" SET "request_id" = 'CA-' || "capability_assessment_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "cohort_sponsorship_submissions" SET "request_id" = 'CS-' || "cohort_sponsorship_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "design_forge_submissions" SET "request_id" = 'DF-' || "design_forge_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "custom_engineering_submissions" SET "request_id" = 'T1-' || "custom_engineering_id" WHERE "request_id" IS NULL;--> statement-breakpoint
UPDATE "drafting_digitization_submissions" SET "request_id" = 'T3-' || "drafting_digitization_id" WHERE "request_id" IS NULL;--> statement-breakpoint
ALTER TABLE "contact_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ALTER COLUMN "request_id" SET NOT NULL;--> statement-breakpoint

-- Constraints and indexes (as generated).
CREATE INDEX "cohort_sponsorship_submissions_email_idx" ON "cohort_sponsorship_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "cohort_sponsorship_submissions_created_at_idx" ON "cohort_sponsorship_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "custom_engineering_submissions_email_idx" ON "custom_engineering_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "custom_engineering_submissions_created_at_idx" ON "custom_engineering_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "design_forge_submissions_email_idx" ON "design_forge_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "design_forge_submissions_created_at_idx" ON "design_forge_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "drafting_digitization_submissions_email_idx" ON "drafting_digitization_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "drafting_digitization_submissions_created_at_idx" ON "drafting_digitization_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "academy_support_submissions_email_idx" ON "academy_support_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "academy_support_submissions_created_at_idx" ON "academy_support_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "capability_assessment_submissions_email_idx" ON "capability_assessment_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "capability_assessment_submissions_created_at_idx" ON "capability_assessment_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "contact_submissions_email_idx" ON "contact_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "imhogen_partnership_submissions_email_idx" ON "imhogen_partnership_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "imhogen_partnership_submissions_created_at_idx" ON "imhogen_partnership_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "imhogen_academy_submissions_email_idx" ON "imhogen_academy_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "imhogen_academy_submissions_created_at_idx" ON "imhogen_academy_submissions" USING btree ("created_at");--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD CONSTRAINT "cohort_sponsorship_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD CONSTRAINT "custom_engineering_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD CONSTRAINT "design_forge_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD CONSTRAINT "drafting_digitization_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ADD CONSTRAINT "academy_support_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD CONSTRAINT "capability_assessment_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD CONSTRAINT "contact_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD CONSTRAINT "imhogen_partnership_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD CONSTRAINT "imhogen_academy_submissions_request_id_unique" UNIQUE("request_id");--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD CONSTRAINT "capability_assessment_ratings_range" CHECK ("capability_assessment_submissions"."problem_definition" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."concept_generation" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."cad_modelling" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."engineering_analysis" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."technical_documentation" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."manufacturing_understanding" BETWEEN 1 AND 5
        AND "capability_assessment_submissions"."systems_thinking" BETWEEN 1 AND 5);
