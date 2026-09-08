import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { ProcessForm } from "@/components/public/process-form";

const steps = ["Conhecer", "Participar", "Classe de membresia", "Entrevista", "Recepção como membro"];

export default function MembershipPage() {
  return (
    <PageShell title="Faça parte da família IBA" description="Membresia é caminhar em aliança, cuidado e missão com a igreja local. Este processo ajuda você a conhecer melhor a IBA e ser acompanhado pela liderança.">
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-app bg-navy-900 text-sm font-black text-white">{index + 1}</span>
                <strong className="text-ink">{step}</strong>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5"><ProcessForm type="membresia" /></Card>
      </div>
    </PageShell>
  );
}
