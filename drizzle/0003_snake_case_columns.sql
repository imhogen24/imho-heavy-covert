-- Bring the last two camelCase column names in line with the snake_case convention.
ALTER TABLE "imhogen_partnership_submissions" RENAME COLUMN "positionRole" TO "position_role";--> statement-breakpoint
ALTER TABLE "cohort_sponsorship_submissions" RENAME COLUMN "scheduleDiscussion" TO "schedule_discussion";
