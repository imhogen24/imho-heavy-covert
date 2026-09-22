-- Spelling fixes, done as renames so data and constraints are kept. (Adding a
-- second PRIMARY KEY column to academy_support_submissions is rejected, and
-- ADD/DROP pairs would discard the existing values.)
-- A failed earlier run of this migration left an empty "institution_or_company"
-- on design_forge_submissions; drop it so the rename can take its place.
ALTER TABLE "design_forge_submissions" DROP COLUMN IF EXISTS "institution_or_company";--> statement-breakpoint
ALTER TABLE "design_forge_submissions" RENAME COLUMN "instituation_or_company" TO "institution_or_company";--> statement-breakpoint
ALTER TABLE "academy_support_submissions" RENAME COLUMN "acedemy_support_id" TO "academy_support_id";--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" RENAME COLUMN "additonal_information" TO "additional_information";
