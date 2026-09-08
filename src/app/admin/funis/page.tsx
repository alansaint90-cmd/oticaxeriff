import { Card } from "@/components/ui/card";

const funnels = {
  "Integração": ["Novo visitante", "Contato pendente", "Contato realizado", "Em integração", "Participando", "Membro", "Servindo"],
  "Novos convertidos": ["Nova decisão", "Primeiro contato", "Discipulado iniciado", "Em acompanhamento", "Batismo", "Integrado"],
  "Batismo": ["Interesse", "Contato", "Preparação", "Entrevista", "Aprovado", "Batismo agendado", "Batizado"],
  "Membresia": ["Interessado", "Contato", "Classe", "Entrevista", "Aprovação", "Recepção", "Membro"]
};

export default function FunnelsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-black text-ink">Funis</h1>
      <p className="mt-1 text-slate-600">Kanban preparado para drag and drop e acompanhamento por etapa.</p>
      <div className="mt-5 grid gap-6">
        {Object.entries(funnels).map(([name, stages]) => (
          <section key={name}>
            <h2 className="mb-3 text-xl font-black text-ink">{name}</h2>
            <div className="grid gap-3 overflow-x-auto md:grid-cols-4 xl:grid-cols-7">
              {stages.map((stage) => (
                <Card key={stage} className="min-h-36 min-w-44 p-3">
                  <h3 className="text-sm font-black text-ink">{stage}</h3>
                  <div className="mt-3 rounded-app border border-dashed border-line bg-mist p-3 text-xs text-slate-500">Sem cards</div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
