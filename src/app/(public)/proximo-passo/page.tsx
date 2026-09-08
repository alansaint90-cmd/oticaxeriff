import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { PageShell } from "@/components/public/page-shell";
import { nextSteps } from "@/lib/content/public-content";

export default function NextStepPage() {
  return (
    <PageShell title="Todo mundo tem um próximo passo." description="Onde você está hoje? Escolha uma opção e veja um caminho simples para continuar.">
      <div className="grid gap-3 md:grid-cols-2">
        {nextSteps.map(([title, result]) => (
          <Card key={title} className="p-5">
            <h2 className="text-lg font-black text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{result}</p>
            <LinkButton className="mt-4" href={title.includes("batizar") ? "/batismo" : title.includes("servir") ? "/servir" : "/visitante"} variant="secondary">
              Avançar <ArrowRight size={16} aria-hidden />
            </LinkButton>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
