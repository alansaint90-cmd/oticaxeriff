import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea, CheckboxLine } from "@/components/ui/form";
import { Consent } from "@/components/public/consent";
import { PageShell } from "@/components/public/page-shell";
import { submitPrayer } from "@/lib/actions/public-actions";

export default function PrayerPage() {
  return (
    <PageShell title="Como podemos orar por você?" description="Seu pedido será tratado com respeito. Pedidos confidenciais ficam restritos à liderança autorizada.">
      <Card className="p-5">
        <form action={submitPrayer} className="grid gap-4">
          <CheckboxLine><input className="mt-1 h-4 w-4" name="isAnonymous" type="checkbox" />Enviar de forma anônima</CheckboxLine>
          <Field label="Nome"><Input name="name" /></Field>
          <Field label="WhatsApp opcional"><Input name="whatsapp" inputMode="tel" /></Field>
          <Field label="Pedido de oração"><Textarea name="request" required /></Field>
          <Field label="Tipo">
            <Select name="category" required>
              {["Saúde", "Família", "Espiritual", "Financeiro", "Relacionamento", "Trabalho", "Outros"].map((item) => <option key={item}>{item}</option>)}
            </Select>
          </Field>
          <Field label="Privacidade">
            <Select name="privacy" required>
              <option value="team">Pode compartilhar com a equipe de intercessão</option>
              <option value="confidential">Pedido confidencial — somente liderança autorizada</option>
            </Select>
          </Field>
          <Field label="Gostaria de conversar com alguém?"><Select name="wantsContact"><option>Sim</option><option>Não</option></Select></Field>
          <Consent />
          <Button size="lg" type="submit">ENVIAR PEDIDO</Button>
        </form>
      </Card>
    </PageShell>
  );
}
