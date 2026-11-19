-- Split the idempotency key out of request_id so request_id can become a short
-- public reference. Existing rows reuse their request_id as submission_key.
-- Left nullable so the previous deploy, which doesn't write it, keeps working.
ALTER TABLE "academy_support_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "academy_support_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ADD CONSTRAINT "academy_support_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "capability_assessment_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD CONSTRAINT "capability_assessment_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "cohort_sponsorship_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD CONSTRAINT "cohort_sponsorship_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "contact_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD CONSTRAINT "contact_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "custom_engineering_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD CONSTRAINT "custom_engineering_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "design_forge_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD CONSTRAINT "design_forge_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "drafting_digitization_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD CONSTRAINT "drafting_digitization_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "imhogen_academy_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD CONSTRAINT "imhogen_academy_submissions_submission_key_unique" UNIQUE("submission_key");
--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD COLUMN "submission_key" text;
--> statement-breakpoint
UPDATE "imhogen_partnership_submissions" SET "submission_key" = "request_id" WHERE "submission_key" IS NULL;
--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD CONSTRAINT "imhogen_partnership_submissions_submission_key_unique" UNIQUE("submission_key");
