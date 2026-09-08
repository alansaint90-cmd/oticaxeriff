import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { saveSetting } from "@/lib/actions/admin-actions";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-black text-ink">Configurações</h1>
      <p className="mt-1 text-slate-600">Dados institucionais, WhatsApp, Instagram, endereço, PIX, SEO, analytics e integrações futuras.</p>
      <Card className="mt-5 p-5">
        <form action={saveSetting} className="grid gap-4">
          <input name="key" type="hidden" value="general_settings" />
          <Field label="WhatsApp oficial"><Input name="whatsapp" /></Field>
          <Field label="Instagram"><Input name="instagram" defaultValue="@iba_litoral_norte" /></Field>
          <Field label="Endereço"><Textarea name="address" /></Field>
          <Field label="Chave PIX"><Input name="pix" /></Field>
          <Field label="Google Tag Manager"><Input name="value" /></Field>
          <Button type="submit">Salvar configurações</Button>
        </form>
      </Card>
    </div>
  );
}
