import {
  boolean,
  date,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";

export const accessRole = pgEnum("access_role", [
  "administrador",
  "pastor",
  "secretaria",
  "integracao",
  "discipulado",
  "intercessao",
  "lider_ministerio"
]);

export const personStatus = pgEnum("person_status", [
  "novo_visitante",
  "contato_pendente",
  "contato_realizado",
  "em_integracao",
  "participando",
  "membro",
  "servindo"
]);

const audit = {
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  isDeleted: boolean("is_deleted").notNull().default(false),
  modifiedBy: uuid("modified_by").notNull()
};

export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  slug: accessRole("slug").notNull().unique(),
  description: text("description"),
  ...audit
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  authUserId: uuid("auth_user_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  roleId: uuid("role_id").notNull().references(() => roles.id, { onDelete: "restrict" }),
  ministryId: uuid("ministry_id"),
  ...audit
});

export const permissions = pgTable("permissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  ...audit
});

export const rolePermissions = pgTable(
  "role_permissions",
  {
    roleId: uuid("role_id").notNull().references(() => roles.id, { onDelete: "restrict" }),
    permissionId: uuid("permission_id").notNull().references(() => permissions.id, { onDelete: "restrict" }),
    ...audit
  },
  (table) => ({ pk: primaryKey({ columns: [table.roleId, table.permissionId] }) })
);

export const people = pgTable("people", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  photoUrl: text("photo_url"),
  whatsapp: text("whatsapp"),
  email: text("email"),
  birthDate: date("birth_date"),
  city: text("city"),
  district: text("district"),
  maritalStatus: text("marital_status"),
  firstVisitAt: date("first_visit_at"),
  howMet: text("how_met"),
  invitedBy: text("invited_by"),
  status: personStatus("status").notNull().default("novo_visitante"),
  tags: text("tags").array().notNull().default([]),
  notes: text("notes"),
  ownerId: uuid("owner_id").references(() => users.id, { onDelete: "restrict" }),
  origin: text("origin").notNull().default("public_form"),
  lastContactAt: timestamp("last_contact_at", { withTimezone: true }),
  nextAction: text("next_action"),
  nextActionAt: timestamp("next_action_at", { withTimezone: true }),
  consentLgpd: boolean("consent_lgpd").notNull().default(false),
  ...audit
});

export const ministries = pgTable("ministries", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  ministryArea: text("ministry_area").notNull().default("Geral"),
  ministryAreaSlug: text("ministry_area_slug").notNull().default("geral"),
  imageUrl: text("image_url"),
  description: text("description").notNull(),
  verse: text("verse"),
  leaderName: text("leader_name"),
  leaderPhotoUrl: text("leader_photo_url"),
  meetingDays: text("meeting_days"),
  meetingTime: text("meeting_time"),
  location: text("location"),
  instagram: text("instagram"),
  whatsapp: text("whatsapp"),
  acceptsVolunteers: boolean("accepts_volunteers").notNull().default(true),
  order: integer("order_index").notNull().default(0),
  ...audit
});

export const visitors = pgTable("visitors", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  visitFrequency: text("visit_frequency").notNull(),
  wantsContact: boolean("wants_contact").notNull().default(false),
  needs: text("needs").array().notNull().default([]),
  sourceQrCodeId: uuid("source_qr_code_id"),
  ...audit
});

export const decisions = pgTable("decisions", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  decisionType: text("decision_type").notNull(),
  duringService: boolean("during_service").notNull().default(false),
  serviceDate: date("service_date"),
  funnelStage: text("funnel_stage").notNull().default("nova_decisao"),
  ...audit
});

export const prayerRequests = pgTable("prayer_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").references(() => people.id, { onDelete: "restrict" }),
  name: text("name"),
  whatsapp: text("whatsapp"),
  request: text("request").notNull(),
  category: text("category").notNull(),
  isAnonymous: boolean("is_anonymous").notNull().default(false),
  isConfidential: boolean("is_confidential").notNull().default(false),
  wantsContact: boolean("wants_contact").notNull().default(false),
  ...audit
});

export const ministryInterests = pgTable("ministry_interests", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  ministryId: uuid("ministry_id").notNull().references(() => ministries.id, { onDelete: "restrict" }),
  age: integer("age"),
  message: text("message"),
  ...audit
});

export const events = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  imageUrl: text("image_url"),
  type: text("type").notNull(),
  startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
  description: text("description").notNull(),
  location: text("location"),
  address: text("address"),
  ministryId: uuid("ministry_id").references(() => ministries.id, { onDelete: "restrict" }),
  linkUrl: text("link_url"),
  allowRegistration: boolean("allow_registration").notNull().default(false),
  ...audit
});

export const eventRegistrations = pgTable("event_registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  eventId: uuid("event_id").notNull().references(() => events.id, { onDelete: "restrict" }),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  status: text("status").notNull().default("confirmado"),
  ...audit
});

export const processTables = pgTable("processes", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  type: text("type").notNull(),
  stage: text("stage").notNull(),
  answers: jsonb("answers").notNull().default({}),
  ...audit
});

export const volunteerInterests = pgTable("volunteer_interests", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  ministrySlugs: text("ministry_slugs").array().notNull(),
  participationTime: text("participation_time"),
  isMember: boolean("is_member").notNull().default(false),
  previousExperience: text("previous_experience"),
  availability: text("availability"),
  ...audit
});

export const timelineEvents = pgTable("timeline_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  title: text("title").notNull(),
  description: text("description"),
  occurredAt: timestamp("occurred_at", { withTimezone: true }).notNull().defaultNow(),
  metadata: jsonb("metadata").notNull().default({}),
  ...audit
});

export const followups = pgTable("followups", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").notNull().references(() => people.id, { onDelete: "restrict" }),
  ownerId: uuid("owner_id").references(() => users.id, { onDelete: "restrict" }),
  action: text("action").notNull(),
  dueAt: timestamp("due_at", { withTimezone: true }).notNull(),
  notes: text("notes"),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  ...audit
});

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id").references(() => people.id, { onDelete: "restrict" }),
  ownerId: uuid("owner_id").references(() => users.id, { onDelete: "restrict" }),
  title: text("title").notNull(),
  dueAt: timestamp("due_at", { withTimezone: true }),
  status: text("status").notNull().default("pendente"),
  notes: text("notes"),
  ...audit
});

export const qrCodes = pgTable("qr_codes", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  destination: text("destination").notNull(),
  accessSlug: text("access_slug").notNull().unique(),
  scansCount: integer("scans_count").notNull().default(0),
  conversionsCount: integer("conversions_count").notNull().default(0),
  ...audit
});

export const qrScans = pgTable("qr_scans", {
  id: uuid("id").primaryKey().defaultRandom(),
  qrCodeId: uuid("qr_code_id").notNull().references(() => qrCodes.id, { onDelete: "restrict" }),
  userAgent: text("user_agent"),
  ipHash: text("ip_hash"),
  convertedAt: timestamp("converted_at", { withTimezone: true }),
  ...audit
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  audienceRole: accessRole("audience_role"),
  readAt: timestamp("read_at", { withTimezone: true }),
  metadata: jsonb("metadata").notNull().default({}),
  ...audit
});

export const pages = pgTable("pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: jsonb("content").notNull().default({}),
  ...audit
});

export const settings = pgTable("settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: text("key").notNull().unique(),
  value: jsonb("value").notNull().default({}),
  ...audit
});

export const leaders = pgTable("leaders", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  photoUrl: text("photo_url"),
  roleTitle: text("role_title").notNull(),
  shortBio: text("short_bio"),
  ministryId: uuid("ministry_id").references(() => ministries.id, { onDelete: "restrict" }),
  instagram: text("instagram"),
  order: integer("order_index").notNull().default(0),
  ...audit
});

export const contributionsSettings = pgTable("contributions_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  pixKey: text("pix_key"),
  pixQrCodeUrl: text("pix_qr_code_url"),
  content: jsonb("content").notNull().default({}),
  ...audit
});

export const media = pgTable("media", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  alt: text("alt").notNull(),
  mimeType: text("mime_type").notNull(),
  sizeBytes: integer("size_bytes"),
  uploadedBy: uuid("uploaded_by").references(() => users.id, { onDelete: "restrict" }),
  ...audit
});

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  whatsapp: text("whatsapp"),
  message: text("message").notNull(),
  ...audit
});

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "restrict" }),
  action: text("action").notNull(),
  entity: text("entity").notNull(),
  entityId: uuid("entity_id"),
  metadata: jsonb("metadata").notNull().default({}),
  ...audit
});
