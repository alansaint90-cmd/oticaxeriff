import { EmptyState } from "@/components/ui/empty-state";
import { Card } from "@/components/ui/card";
import { listPeople } from "@/lib/repositories/admin-read-model";

export default async function PeoplePage() {
  const people = await listPeople();

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-black text-ink">Pessoas</h1>
      <p className="mt-1 text-slate-600">CRM com status, tags, responsável, última interação e próxima ação.</p>
      <div className="mt-5 grid gap-3">
        {people.length === 0 ? <EmptyState title="Nenhuma pessoa cadastrada" description="Cadastros públicos aparecerão aqui assim que o banco estiver conectado." /> : null}
        {people.map((person) => (
          <a key={person.id} href={`/admin/pessoas/${person.id}`}>
            <Card className="p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-black text-ink">{person.name}</h2>
                  <p className="text-sm text-slate-500">{person.whatsapp ?? "WhatsApp não informado"}</p>
                </div>
                <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-900">{person.status}</span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
