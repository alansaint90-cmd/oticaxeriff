ALTER TABLE "ministries" ADD COLUMN "ministry_area" text DEFAULT 'Geral' NOT NULL;--> statement-breakpoint
ALTER TABLE "ministries" ADD COLUMN "ministry_area_slug" text DEFAULT 'geral' NOT NULL;
