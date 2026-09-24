ALTER TABLE "academy_support_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "academy_support_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "capability_assessment_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "contact_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "custom_engineering_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "design_forge_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "drafting_digitization_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "imhogen_academy_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD COLUMN "admin_notified_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD COLUMN "confirmation_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "imhogen_partnership_submissions" ADD COLUMN "notify_attempts" integer DEFAULT 0 NOT NULL;