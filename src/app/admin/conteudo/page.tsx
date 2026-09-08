import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { saveSetting } from "@/lib/actions/admin-actions";

const sections = ["Hero", "Vídeo de boas-vindas", "Textos institucionais", "Cultos", "Eventos", "Ministérios", "Liderança", "Links", "PIX", "Banners"];

export default function ContentPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-black text-ink">Conteúdo gerenciável</h1>
      <p className="mt-1 text-slate-600">CMS simples para textos, links, banners e configurações públicas.</p>
      <Card className="mt-5 p-5">
        <form action={saveSetting} className="grid gap-4">
          <Field label="Seção"><select name="key" className="min-h-11 rounded-app border border-line px-3">{sections.map((section) => <option key={section}>{section}</option>)}</select></Field>
          <Field label="Título"><Input name="title" /></Field>
          <Field label="Conteúdo"><Textarea name="value" required /></Field>
          <Button type="submit">Salvar conteúdo</Button>
        </form>
      </Card>
    </div>
  );
}
