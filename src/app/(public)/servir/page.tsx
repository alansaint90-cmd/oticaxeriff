import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea, CheckboxLine } from "@/components/ui/form";
import { Consent } from "@/components/public/consent";
import { PageShell } from "@/components/public/page-shell";
import { ministryGroups } from "@/lib/content/public-content";
import { submitVolunteer } from "@/lib/actions/public-actions";

export default function ServePage() {
  return (
    <PageShell title="Encontre seu lugar." description="Deus deu dons e talentos a cada pessoa. Queremos ajudar você a descobrir onde pode servir.">
      <Card className="p-5">
        <form action={submitVolunteer} className="grid gap-4">
          <Field label="Nome"><Input name="name" required /></Field>
          <Field label="WhatsApp"><Input name="whatsapp" inputMode="tel" required /></Field>
          <Field label="Há quanto tempo participa da IBA?"><Input name="participationTime" required /></Field>
          <Field label="Já é membro?"><Select name="isMember"><option>Sim</option><option>Não</option></Select></Field>
          <div className="grid gap-3">
            <p className="text-sm font-semibold text-ink">Selecione até 3 áreas de interesse</p>
            {ministryGroups.map((group) => (
              <fieldset key={group.slug} className="rounded-app border border-line p-3">
                <legend className="px-1 text-xs font-bold uppercase text-navy-700">{group.name}</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {group.ministries.map((ministry) => (
                    <CheckboxLine key={ministry.slug}>
                      <input className="mt-1 h-4 w-4" name="ministries" value={ministry.slug} type="checkbox" />
                      {ministry.name}
                    </CheckboxLine>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <Field label="Experiência anterior opcional"><Textarea name="previousExperience" /></Field>
          <Field label="Disponibilidade"><Input name="availability" required /></Field>
          <Consent />
          <Button size="lg" type="submit">ENVIAR INTERESSE</Button>
        </form>
      </Card>
    </PageShell>
  );
}
