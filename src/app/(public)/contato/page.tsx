import { MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/form";
import { PageShell } from "@/components/public/page-shell";
import { siteConfig } from "@/config/site";
import { submitContact } from "@/lib/actions/admin-actions";

export default function ContactPage() {
  return (
    <PageShell title="Contato" description="Fale com a IBA Litoral Norte pelos canais oficiais. Os dados reais devem ser cadastrados no painel.">
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <p className="font-semibold text-ink">WhatsApp a cadastrar</p>
          <p className="mt-2 text-slate-600">{siteConfig.instagram}</p>
          <p className="mt-2 text-slate-600">E-mail a cadastrar</p>
          <p className="mt-2 text-slate-600">{siteConfig.placeholderAddress}</p>
          <LinkButton className="mt-5" href="/localizacao"><MessageCircle size={16} aria-hidden />FALAR NO WHATSAPP</LinkButton>
        </Card>
        <Card className="p-5">
          <form action={submitContact} className="grid gap-4">
            <Field label="Nome"><Input name="name" required /></Field>
            <Field label="WhatsApp"><Input name="whatsapp" /></Field>
            <Field label="Mensagem"><Textarea name="message" required /></Field>
            <button className="min-h-12 rounded-app bg-navy-900 px-5 font-semibold text-white">ENVIAR</button>
          </form>
        </Card>
      </div>
    </PageShell>
  );
}
