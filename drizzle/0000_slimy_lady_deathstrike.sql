CREATE TABLE "cohort_sponsorship_submissions" (
	"cohort_sponsorship_id" text PRIMARY KEY NOT NULL,
	"organization_name" text NOT NULL,
	"contact_person" text NOT NULL,
	"position_role" text NOT NULL,
	"website" text,
	"email" text NOT NULL,
	"phone_number" text,
	"sponsorship_areas" jsonb NOT NULL,
	"why_support" text NOT NULL,
	"impact_areas" text NOT NULL,
	"scheduleDiscussion" text,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "custom_engineering_submissions" (
	"custom_engineering_id" text PRIMARY KEY NOT NULL,
	"organization_name" text NOT NULL,
	"contact_person" text NOT NULL,
	"email" text NOT NULL,
	"phone_number" text NOT NULL,
	"site_location" text NOT NULL,
	"project_scope" jsonb NOT NULL,
	"project_title" text NOT NULL,
	"primary_objective" text NOT NULL,
	"material_inputs" text NOT NULL,
	"energy_and_information_inputs" text NOT NULL,
	"transformation" text NOT NULL,
	"outputs" text NOT NULL,
	"by_products" text,
	"human_system" text,
	"active_environment" text,
	"budget_expectations" text,
	"target_timeline" text,
	"file_attachments" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "design_forge_submissions" (
	"design_forge_id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"phone_number" text NOT NULL,
	"instituation_or_company" text NOT NULL,
	"current_role" text NOT NULL,
	"areas_of_interest" jsonb NOT NULL,
	"mentorship_interest" text NOT NULL,
	"collaborations_interest" text NOT NULL,
	"challenge_workshop_interest" text NOT NULL,
	"linkedin_profile" text,
	"portfolio_link" text,
	"social_handle" text,
	"why_join" text NOT NULL,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "drafting_digitization_submissions" (
	"drafting_digitization_id" text PRIMARY KEY NOT NULL,
	"organization_name" text NOT NULL,
	"contact_person" text NOT NULL,
	"email" text NOT NULL,
	"phone_number" text NOT NULL,
	"site_location" text NOT NULL,
	"input_material_type" text NOT NULL,
	"asset_condition" text NOT NULL,
	"drafting_services" jsonb NOT NULL,
	"end_goal" text NOT NULL,
	"drafting_standard" text NOT NULL,
	"output_formats" jsonb NOT NULL,
	"file_attachment" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "academy_support_submissions" (
	"acedemy_support_id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"country" text NOT NULL,
	"support_types" jsonb NOT NULL,
	"support_contribution" text NOT NULL,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "capability_assessment_submissions" (
	"capability_assessment_id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"background" text NOT NULL,
	"experience_level" text NOT NULL,
	"problem_definition" integer NOT NULL,
	"concept_generation" integer NOT NULL,
	"cad_modelling" integer NOT NULL,
	"engineering_analysis" integer NOT NULL,
	"technical_documentation" integer NOT NULL,
	"manufacturing_understanding" integer NOT NULL,
	"systems_thinking" integer NOT NULL,
	"project_description" text NOT NULL,
	"improvement_area" text NOT NULL,
	"biggest_weakness" text NOT NULL,
	"portfolio_link" text,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact_submissions" (
	"contact_id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"files" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "imhogen_partnership_submissions" (
	"imho_partnership_id" text PRIMARY KEY NOT NULL,
	"organization_name" text NOT NULL,
	"organization_website" text,
	"contact_person" text NOT NULL,
	"positionRole" text NOT NULL,
	"email" text NOT NULL,
	"phone_number" text,
	"areas_of_interest" jsonb NOT NULL,
	"collaboration_description" text NOT NULL,
	"expected_outcomes" text,
	"additonal_information" text,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "imhogen_academy_submissions" (
	"imho_academy_id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"phone_number" text NOT NULL,
	"email" text NOT NULL,
	"country" text NOT NULL,
	"city_town" text NOT NULL,
	"current_status" text NOT NULL,
	"institution_company" text NOT NULL,
	"program_discipline_role" text NOT NULL,
	"current_level_year" text,
	"why_join" text NOT NULL,
	"areas_of_interest" jsonb NOT NULL,
	"has_prior_projects" text NOT NULL,
	"portfolio_link" text,
	"willing_for_intensive_training" text NOT NULL,
	"weekly_hours_commitment" text NOT NULL,
	"why_select_you" text NOT NULL,
	"request_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
