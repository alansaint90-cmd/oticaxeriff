import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/form";
import { Consent } from "@/components/public/consent";
import { PageShell } from "@/components/public/page-shell";
import { submitDecision } from "@/lib/actions/public-actions";

export default function DecisionPage() {
  return (
    <PageShell title="Hoje pode ser o começo de uma nova história." description="Você não precisa caminhar sozinho. Queremos celebrar sua decisão e dar os próximos passos com você.">
      <Card className="p-5">
        <form action={submitDecision} className="grid gap-4">
          <Field label="Qual foi sua decisão hoje?">
            <Select name="decisionType" required>
              {["Entreguei minha vida a Jesus", "Reconciliei minha vida com Jesus", "Quero conhecer melhor Jesus", "Quero conversar com alguém", "Quero começar um discipulado"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </Field>
          <Field label="Nome"><Input name="name" required /></Field>
          <Field label="WhatsApp"><Input name="whatsapp" inputMode="tel" required /></Field>
          <Field label="Você tomou essa decisão durante um culto da IBA?">
            <Select name="duringService"><option>Sim</option><option>Não</option></Select>
          </Field>
          <Field label="Data do culto"><Input name="serviceDate" type="date" /></Field>
          <Consent />
          <Button size="lg" type="submit">REGISTRAR MINHA DECISÃO</Button>
        </form>
      </Card>
    </PageShell>
  );
}
