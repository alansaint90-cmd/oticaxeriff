import { Button, LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, CheckboxLine } from "@/components/ui/form";
import { Consent } from "@/components/public/consent";
import { PageShell } from "@/components/public/page-shell";
import { submitVisitor } from "@/lib/actions/public-actions";

const needs = [
  "Quero conhecer melhor a igreja",
  "Quero conversar com um pastor",
  "Quero receber oração",
  "Quero conhecer um pequeno grupo",
  "Quero conhecer os ministérios",
  "Quero conhecer Jesus",
  "Outro"
];

export default function VisitorPage() {
  return (
    <PageShell title="Que alegria receber você!" description="Queremos conhecer você e tornar sua experiência na IBA ainda mais especial.">
      <Card className="p-5">
        <form action={submitVisitor} className="grid gap-4">
          <Field label="Nome"><Input name="name" required /></Field>
          <Field label="WhatsApp"><Input name="whatsapp" inputMode="tel" required /></Field>
          <Field label="E-mail opcional"><Input name="email" type="email" /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cidade"><Input name="city" /></Field>
            <Field label="Bairro"><Input name="district" /></Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Data de nascimento opcional"><Input name="birthDate" type="date" /></Field>
            <Field label="Estado civil opcional"><Input name="maritalStatus" /></Field>
          </div>
          <Field label="É sua primeira vez na IBA?">
            <Select name="visitFrequency" required>
              <option>Sim</option>
              <option>Já visitei algumas vezes</option>
              <option>Já frequento</option>
            </Select>
          </Field>
          <Field label="Como você conheceu a IBA?">
            <Select name="howMet" required>
              {["Convite de amigo", "Instagram", "Google", "Evento", "Passando em frente", "Família", "Outro"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </Field>
          <Field label="Quem convidou você?"><Input name="invitedBy" /></Field>
          <Field label="Você gostaria que alguém da nossa equipe entrasse em contato?">
            <Select name="wantsContact" required><option>Sim</option><option>Não</option></Select>
          </Field>
          <div className="grid gap-3">
            <p className="text-sm font-semibold text-ink">Como podemos ajudar você neste momento?</p>
            {needs.map((need) => (
              <CheckboxLine key={need}><input className="mt-1 h-4 w-4" name="needs" value={need} type="checkbox" />{need}</CheckboxLine>
            ))}
          </div>
          <Consent />
          <Button size="lg" type="submit">ENVIAR</Button>
        </form>
      </Card>
      <LinkButton className="mt-4" href="/proximo-passo" variant="ghost">Ver meus próximos passos</LinkButton>
    </PageShell>
  );
}
