ALTER TABLE "design_forge_submissions" ADD COLUMN "institution_or_company" text NOT NULL;--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ADD COLUMN "academy_support_id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "design_forge_submissions" DROP COLUMN "instituation_or_company";--> statement-breakpoint
ALTER TABLE "academy_support_submissions" DROP COLUMN "acedemy_support_id";--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" DROP COLUMN "additonal_information";