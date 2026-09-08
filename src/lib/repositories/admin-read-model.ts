import { count, desc, eq } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { decisions, people, prayerRequests, processTables, qrCodes, timelineEvents, visitors, volunteerInterests } from "@/lib/db/schema";

export async function getDashboardMetrics() {
  try {
    const db = getDb();
    const [peopleCount] = await db.select({ value: count() }).from(people).where(eq(people.isDeleted, false));
    const [visitorCount] = await db.select({ value: count() }).from(visitors).where(eq(visitors.isDeleted, false));
    const [decisionCount] = await db.select({ value: count() }).from(decisions).where(eq(decisions.isDeleted, false));
    const [prayerCount] = await db.select({ value: count() }).from(prayerRequests).where(eq(prayerRequests.isDeleted, false));
    const [baptismCount] = await db.select({ value: count() }).from(processTables).where(eq(processTables.type, "batismo"));
    const [membershipCount] = await db.select({ value: count() }).from(processTables).where(eq(processTables.type, "membresia"));
    const [volunteerCount] = await db.select({ value: count() }).from(volunteerInterests).where(eq(volunteerInterests.isDeleted, false));
    const [qrCount] = await db.select({ value: count() }).from(qrCodes).where(eq(qrCodes.isDeleted, false));

    return {
      configured: true,
      metrics: {
        Pessoas: peopleCount.value,
        Visitantes: visitorCount.value,
        "Decisões por Jesus": decisionCount.value,
        "Pedidos de oração": prayerCount.value,
        Batismo: baptismCount.value,
        Membresia: membershipCount.value,
        Voluntariado: volunteerCount.value,
        "QR Codes": qrCount.value
      }
    };
  } catch {
    return {
      configured: false,
      metrics: {
        Pessoas: 0,
        Visitantes: 0,
        "Decisões por Jesus": 0,
        "Pedidos de oração": 0,
        Batismo: 0,
        Membresia: 0,
        Voluntariado: 0,
        "QR Codes": 0
      }
    };
  }
}

export async function listPeople() {
  try {
    return await getDb().select().from(people).where(eq(people.isDeleted, false)).orderBy(desc(people.createdAt)).limit(50);
  } catch {
    return [];
  }
}

export async function listTimeline(personId: string) {
  try {
    return await getDb()
      .select()
      .from(timelineEvents)
      .where(eq(timelineEvents.personId, personId))
      .orderBy(desc(timelineEvents.occurredAt));
  } catch {
    return [];
  }
}
