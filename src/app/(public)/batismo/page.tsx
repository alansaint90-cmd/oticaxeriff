import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { ProcessForm } from "@/components/public/process-form";

const steps = ["Interesse", "Conversa inicial", "Preparação", "Entrevista", "Batismo"];

export default function BaptismPage() {
  return (
    <PageShell title="Quero me batizar" description="O batismo é uma expressão pública de fé em Jesus e um passo importante na caminhada cristã. Queremos acompanhar você com cuidado nessa decisão.">
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-app bg-navy-900 text-sm font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                <strong className="text-ink">{step}</strong>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5"><ProcessForm type="batismo" /></Card>
      </div>
    </PageShell>
  );
}
