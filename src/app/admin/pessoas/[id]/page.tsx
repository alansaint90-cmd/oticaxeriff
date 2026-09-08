import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { listTimeline } from "@/lib/repositories/admin-read-model";

export default async function PersonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const timeline = await listTimeline(id);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-black text-ink">Perfil da pessoa</h1>
      <p className="mt-1 text-slate-600">Histórico completo, observações, responsável e próximas ações.</p>
      <Card className="mt-5 p-5">
        <h2 className="font-black text-ink">Timeline</h2>
        <div className="mt-4 grid gap-3">
          {timeline.length === 0 ? <EmptyState title="Sem eventos ainda" description="Eventos de formulários e follow-ups aparecerão aqui." /> : null}
          {timeline.map((event) => (
            <div key={event.id} className="border-l-2 border-navy-100 pl-4">
              <p className="text-sm font-bold text-ink">{event.title}</p>
              <p className="text-xs text-slate-500">{event.occurredAt?.toLocaleString("pt-BR")}</p>
              {event.description ? <p className="mt-1 text-sm text-slate-600">{event.description}</p> : null}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
