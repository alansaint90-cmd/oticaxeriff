import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/public/page-shell";
import { pastors } from "@/lib/content/institutional-content";

export default function LeadershipPage() {
  return (
    <PageShell
      title="Nossos pastores"
      description="Uma família servindo famílias, cuidando da igreja com amor, fé e propósito."
    >
      <Card className="overflow-hidden">
        <div className="grid gap-6 p-5 md:grid-cols-[0.85fr_1.15fr] md:p-7">
          <div className="grid min-h-64 place-items-center rounded-app bg-navy-950 p-6 text-center text-white">
            <div>
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl font-black">
                ED
              </div>
              <p className="mt-4 text-sm text-blue-100">Foto oficial dos pastores a cadastrar</p>
            </div>
          </div>
          <div>
            <Badge>Liderança pastoral</Badge>
            <h2 className="mt-4 text-2xl font-black text-ink">Emmanuel Dias e Deyziane Dias</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Pastores e líderes da IBA Litoral Norte, chamados para servir pessoas e cuidar da igreja com amor, fé e propósito.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Vindos de Recife/PE, chegaram ao Litoral Norte da Bahia e, conduzidos por Deus, abraçaram o desafio de plantar e liderar uma igreja que pudesse servir à comunidade e cumprir sua missão neste território.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Ao lado do filho, Matheus Dias, formam uma família dedicada ao propósito de Deus e ao cuidado de pessoas.
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {pastors.map((pastor) => (
          <Card key={pastor.name} className="p-5">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-50 text-sm font-black text-navy-900">
                {pastor.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h3 className="text-lg font-black text-ink">{pastor.name}</h3>
                <p className="mt-1 text-sm font-semibold text-navy-900">{pastor.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pastor.bio}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
