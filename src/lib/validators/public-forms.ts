import { z } from "zod";

const phoneRegex = /^\+?[0-9\s().-]{10,20}$/;

export const basePersonSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo.").max(120),
  whatsapp: z.string().trim().regex(phoneRegex, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido.").optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  district: z.string().trim().max(80).optional().or(z.literal("")),
  birthDate: z.string().optional().or(z.literal("")),
  maritalStatus: z.string().optional().or(z.literal("")),
  consentLgpd: z.literal("on", { errorMap: () => ({ message: "Autorize o contato para continuar." }) })
});

export const visitorSchema = basePersonSchema.extend({
  visitFrequency: z.enum(["Sim", "Já visitei algumas vezes", "Já frequento"]),
  howMet: z.string().trim().min(2).max(80),
  invitedBy: z.string().trim().max(120).optional().or(z.literal("")),
  wantsContact: z.enum(["Sim", "Não"]),
  needs: z.array(z.string()).default([])
});

export const decisionSchema = z.object({
  name: z.string().trim().min(3).max(120),
  whatsapp: z.string().trim().regex(phoneRegex),
  decisionType: z.string().trim().min(3).max(80),
  duringService: z.enum(["Sim", "Não"]),
  serviceDate: z.string().optional().or(z.literal("")),
  consentLgpd: z.literal("on")
});

export const prayerSchema = z.object({
  name: z.string().trim().max(120).optional().or(z.literal("")),
  whatsapp: z.string().trim().regex(phoneRegex).optional().or(z.literal("")),
  request: z.string().trim().min(8).max(2000),
  category: z.string().trim().min(3).max(80),
  privacy: z.enum(["team", "confidential"]),
  isAnonymous: z.enum(["on"]).optional(),
  wantsContact: z.enum(["Sim", "Não"]),
  consentLgpd: z.literal("on")
});

export const processInterestSchema = z.object({
  type: z.enum(["batismo", "membresia"]),
  name: z.string().trim().min(3).max(120),
  whatsapp: z.string().trim().regex(phoneRegex),
  age: z.coerce.number().min(8).max(120).optional(),
  participationTime: z.string().trim().max(120).optional().or(z.literal("")),
  acceptedJesus: z.enum(["Sim", "Não"]).optional(),
  wantsConversation: z.enum(["Sim", "Não"]).optional(),
  consentLgpd: z.literal("on")
});

export const ministryInterestSchema = z.object({
  ministrySlug: z.string().trim().min(2).max(80),
  name: z.string().trim().min(3).max(120),
  whatsapp: z.string().trim().regex(phoneRegex),
  age: z.coerce.number().min(8).max(120).optional(),
  message: z.string().trim().max(800).optional().or(z.literal("")),
  consentLgpd: z.literal("on")
});

export const volunteerSchema = z.object({
  name: z.string().trim().min(3).max(120),
  whatsapp: z.string().trim().regex(phoneRegex),
  participationTime: z.string().trim().max(120),
  isMember: z.enum(["Sim", "Não"]),
  ministries: z.array(z.string()).min(1).max(3),
  previousExperience: z.string().trim().max(1200).optional().or(z.literal("")),
  availability: z.string().trim().max(300),
  consentLgpd: z.literal("on")
});

export function valuesOf(formData: FormData, key: string) {
  return formData.getAll(key).map(String).filter(Boolean);
}
