import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/form";
import { Consent } from "@/components/public/consent";
import { PageShell } from "@/components/public/page-shell";
import { ministrySeeds } from "@/lib/content/public-content";
import { submitMinistryInterest } from "@/lib/actions/public-actions";

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = ministrySeeds.find((item) => item.slug === slug);
  if (!ministry) notFound();

  return (
    <PageShell title={ministry.name} description={ministry.description}>
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <div className="aspect-video rounded-app bg-navy-50" />
          <p className="mt-5 text-xs font-bold uppercase text-navy-700">{ministry.groupName}</p>
          <dl className="mt-5 grid gap-3 text-sm">
            <div><dt className="font-bold text-ink">Frase ou versículo</dt><dd className="text-slate-600">{ministry.verse}</dd></div>
            <div><dt className="font-bold text-ink">Líder</dt><dd className="text-slate-600">{ministry.leaderName}</dd></div>
            <div><dt className="font-bold text-ink">Encontros</dt><dd className="text-slate-600">{ministry.meetingDays} • {ministry.meetingTime}</dd></div>
            <div><dt className="font-bold text-ink">Local</dt><dd className="text-slate-600">{ministry.location}</dd></div>
          </dl>
        </Card>
        <Card className="p-5">
          <form action={submitMinistryInterest} className="grid gap-4">
            <input name="ministrySlug" type="hidden" value={ministry.slug} />
            <Field label="Nome"><Input name="name" required /></Field>
            <Field label="WhatsApp"><Input name="whatsapp" inputMode="tel" required /></Field>
            <Field label="Idade"><Input name="age" min={8} type="number" /></Field>
            <Field label="Mensagem opcional"><Textarea name="message" /></Field>
            <Consent />
            <Button size="lg" type="submit">QUERO PARTICIPAR</Button>
          </form>
        </Card>
      </div>
    </PageShell>
  );
}
