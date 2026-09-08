import { Copy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";

export default function ContributePage() {
  return (
    <PageShell title="Generosidade também é adoração." description="Dados de PIX, QR Code e projetos são gerenciáveis pelo painel administrativo.">
      <div className="grid gap-4 md:grid-cols-2">
        {["Dízimos", "Ofertas", "Missões", "Projetos", "Ação social"].map((item) => (
          <Card key={item} className="p-5">
            <h2 className="font-black text-ink">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Informações a cadastrar no painel.</p>
          </Card>
        ))}
      </div>
      <Card className="mt-5 p-5">
        <p className="text-sm font-semibold text-slate-500">Chave PIX</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-app bg-mist p-3">
          <code>PIX_A_CADASTRAR</code>
          <button className="inline-flex min-h-11 items-center gap-2 rounded-app border border-line px-3 font-semibold text-navy-900"><Copy size={16} aria-hidden />Copiar chave PIX</button>
        </div>
      </Card>
    </PageShell>
  );
}
