import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let cachedDb: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (cachedDb) return cachedDb;

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL não configurada. Configure PostgreSQL antes de gravar dados.");
  }

  const client = postgres(url, { max: 5, prepare: false });
  cachedDb = drizzle(client, { schema });
  return cachedDb;
}
