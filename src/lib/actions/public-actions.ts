"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import {
  decisions,
  ministryInterests,
  ministries,
  people,
  prayerRequests,
  processTables,
  timelineEvents,
  visitors,
  volunteerInterests
} from "@/lib/db/schema";
import { SYSTEM_USER_ID } from "@/lib/constants";
import {
  decisionSchema,
  ministryInterestSchema,
  prayerSchema,
  processInterestSchema,
  valuesOf,
  visitorSchema,
  volunteerSchema
} from "@/lib/validators/public-forms";

function str(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

async function createPerson(input: {
  name: string;
  whatsapp?: string;
  email?: string;
  city?: string;
  district?: string;
  birthDate?: string;
  maritalStatus?: string;
  howMet?: string;
  invitedBy?: string;
  origin: string;
}) {
  const db = getDb();
  const [person] = await db
    .insert(people)
    .values({
      name: input.name,
      whatsapp: input.whatsapp,
      email: input.email || null,
      city: input.city || null,
      district: input.district || null,
      birthDate: input.birthDate || null,
      maritalStatus: input.maritalStatus || null,
      firstVisitAt: new Date().toISOString().slice(0, 10),
      howMet: input.howMet || null,
      invitedBy: input.invitedBy || null,
      origin: input.origin,
      consentLgpd: true,
      modifiedBy: SYSTEM_USER_ID
    })
    .returning();

  return person;
}

async function addTimeline(personId: string, title: string, description?: string) {
  await getDb().insert(timelineEvents).values({
    personId,
    title,
    description,
    modifiedBy: SYSTEM_USER_ID
  });
}

export async function submitVisitor(formData: FormData) {
  const parsed = visitorSchema.parse({
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    email: str(formData, "email"),
    city: str(formData, "city"),
    district: str(formData, "district"),
    birthDate: str(formData, "birthDate"),
    maritalStatus: str(formData, "maritalStatus"),
    visitFrequency: str(formData, "visitFrequency"),
    howMet: str(formData, "howMet"),
    invitedBy: str(formData, "invitedBy"),
    wantsContact: str(formData, "wantsContact"),
    needs: valuesOf(formData, "needs"),
    consentLgpd: str(formData, "consentLgpd")
  });

  const person = await createPerson({ ...parsed, origin: "visitante" });
  await getDb().insert(visitors).values({
    personId: person.id,
    visitFrequency: parsed.visitFrequency,
    wantsContact: parsed.wantsContact === "Sim",
    needs: parsed.needs,
    modifiedBy: SYSTEM_USER_ID
  });
  await addTimeline(person.id, "Preencheu formulário de visitante.", parsed.needs.join(", "));
  redirect("/obrigado?tipo=visitante");
}

export async function submitDecision(formData: FormData) {
  const parsed = decisionSchema.parse({
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    decisionType: str(formData, "decisionType"),
    duringService: str(formData, "duringService"),
    serviceDate: str(formData, "serviceDate"),
    consentLgpd: str(formData, "consentLgpd")
  });

  const person = await createPerson({ name: parsed.name, whatsapp: parsed.whatsapp, origin: "decisao" });
  await getDb().insert(decisions).values({
    personId: person.id,
    decisionType: parsed.decisionType,
    duringService: parsed.duringService === "Sim",
    serviceDate: parsed.serviceDate || null,
    modifiedBy: SYSTEM_USER_ID
  });
  await addTimeline(person.id, `Decisão registrada: ${parsed.decisionType}.`);
  redirect("/obrigado?tipo=decisao");
}

export async function submitPrayer(formData: FormData) {
  const parsed = prayerSchema.parse({
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    request: str(formData, "request"),
    category: str(formData, "category"),
    privacy: str(formData, "privacy"),
    isAnonymous: str(formData, "isAnonymous") || undefined,
    wantsContact: str(formData, "wantsContact"),
    consentLgpd: str(formData, "consentLgpd")
  });

  await getDb().insert(prayerRequests).values({
    name: parsed.isAnonymous ? null : parsed.name || null,
    whatsapp: parsed.isAnonymous ? null : parsed.whatsapp || null,
    request: parsed.request,
    category: parsed.category,
    isAnonymous: Boolean(parsed.isAnonymous),
    isConfidential: parsed.privacy === "confidential",
    wantsContact: parsed.wantsContact === "Sim",
    modifiedBy: SYSTEM_USER_ID
  });
  redirect("/obrigado?tipo=oracao");
}

export async function submitProcessInterest(formData: FormData) {
  const parsed = processInterestSchema.parse({
    type: str(formData, "type"),
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    age: str(formData, "age"),
    participationTime: str(formData, "participationTime"),
    acceptedJesus: str(formData, "acceptedJesus"),
    wantsConversation: str(formData, "wantsConversation"),
    consentLgpd: str(formData, "consentLgpd")
  });

  const person = await createPerson({ name: parsed.name, whatsapp: parsed.whatsapp, origin: parsed.type });
  await getDb().insert(processTables).values({
    personId: person.id,
    type: parsed.type,
    stage: "interesse",
    answers: parsed,
    modifiedBy: SYSTEM_USER_ID
  });
  await addTimeline(person.id, `Demonstrou interesse em ${parsed.type}.`);
  redirect(`/obrigado?tipo=${parsed.type}`);
}

export async function submitMinistryInterest(formData: FormData) {
  const parsed = ministryInterestSchema.parse({
    ministrySlug: str(formData, "ministrySlug"),
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    age: str(formData, "age"),
    message: str(formData, "message"),
    consentLgpd: str(formData, "consentLgpd")
  });

  const db = getDb();
  const [ministry] = await db.select().from(ministries).where(eq(ministries.slug, parsed.ministrySlug)).limit(1);
  if (!ministry) throw new Error("Ministério não encontrado.");
  const person = await createPerson({ name: parsed.name, whatsapp: parsed.whatsapp, origin: "ministerio" });
  await db.insert(ministryInterests).values({
    personId: person.id,
    ministryId: ministry.id,
    age: parsed.age,
    message: parsed.message || null,
    modifiedBy: SYSTEM_USER_ID
  });
  await addTimeline(person.id, `Demonstrou interesse no ministério ${ministry.name}.`);
  redirect("/obrigado?tipo=ministerio");
}

export async function submitVolunteer(formData: FormData) {
  const parsed = volunteerSchema.parse({
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    participationTime: str(formData, "participationTime"),
    isMember: str(formData, "isMember"),
    ministries: valuesOf(formData, "ministries"),
    previousExperience: str(formData, "previousExperience"),
    availability: str(formData, "availability"),
    consentLgpd: str(formData, "consentLgpd")
  });

  const person = await createPerson({ name: parsed.name, whatsapp: parsed.whatsapp, origin: "servir" });
  await getDb().insert(volunteerInterests).values({
    personId: person.id,
    ministrySlugs: parsed.ministries,
    participationTime: parsed.participationTime,
    isMember: parsed.isMember === "Sim",
    previousExperience: parsed.previousExperience || null,
    availability: parsed.availability,
    modifiedBy: SYSTEM_USER_ID
  });
  await addTimeline(person.id, "Demonstrou interesse em servir.", parsed.ministries.join(", "));
  redirect("/obrigado?tipo=servir");
}
