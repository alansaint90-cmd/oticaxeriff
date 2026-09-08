"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { getDb } from "@/lib/db/client";
import { contactMessages, qrCodes, settings } from "@/lib/db/schema";
import { SYSTEM_USER_ID } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(120),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(1200)
});

const qrSchema = z.object({
  name: z.string().trim().min(3).max(120),
  destination: z.string().trim().startsWith("/").max(200)
});

const settingSchema = z.object({
  key: z.string().trim().min(2).max(80),
  value: z.string().trim().max(5000).optional().or(z.literal(""))
});

function str(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitContact(formData: FormData) {
  const parsed = contactSchema.parse({
    name: str(formData, "name"),
    whatsapp: str(formData, "whatsapp"),
    message: str(formData, "message")
  });

  await getDb().insert(contactMessages).values({
    ...parsed,
    whatsapp: parsed.whatsapp || null,
    modifiedBy: SYSTEM_USER_ID
  });
  revalidatePath("/admin");
}

export async function createQrCode(formData: FormData) {
  const parsed = qrSchema.parse({
    name: str(formData, "name"),
    destination: str(formData, "destination")
  });
  const accessSlug = parsed.destination.replace(/^\//, "").replace(/[^a-z0-9-]/gi, "-").toLowerCase();

  await getDb().insert(qrCodes).values({
    name: parsed.name,
    destination: parsed.destination,
    accessSlug,
    modifiedBy: SYSTEM_USER_ID
  });
  revalidatePath("/admin/qr-codes");
}

export async function saveSetting(formData: FormData) {
  const parsed = settingSchema.parse({
    key: str(formData, "key"),
    value: str(formData, "value")
  });

  const value = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, String(value)]));

  await getDb().insert(settings).values({
    key: parsed.key,
    value,
    modifiedBy: SYSTEM_USER_ID
  });
  revalidatePath("/admin/conteudo");
  revalidatePath("/admin/configuracoes");
}

export async function loginWithPassword(formData: FormData) {
  const email = str(formData, "email");
  const password = str(formData, "password");
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase Auth não configurado.");
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
      }
    }
  });

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error("Não foi possível entrar com essas credenciais.");
  redirect("/admin");
}
