import { BarChart3, Bell, HandHeart, Map, UserCheck, Users } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { MetricCard } from "@/components/ui/metric-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDashboardMetrics } from "@/lib/repositories/admin-read-model";

const icons = [Users, UserCheck, UserCheck, HandHeart, Map, Map, Users, BarChart3];

export default async function AdminDashboardPage() {
  const data = await getDashboardMetrics();
  const entries = Object.entries(data.metrics);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 rounded-app border border-line bg-white p-5 shadow-soft md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge>Visão da liderança</Badge>
          <h1 className="mt-3 text-3xl font-black text-ink md:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Acompanhamento de pessoas, decisões, oração, integração e conversões por QR Code.</p>
        </div>
        <div className="flex gap-2 text-sm">
          {["Hoje", "7 dias", "30 dias", "Personalizado"].map((item) => (
            <button key={item} className="min-h-10 rounded-app border border-line bg-white px-3 font-bold text-slate-600 transition hover:bg-navy-50 hover:text-navy-900">{item}</button>
          ))}
        </div>
        </div>
      </div>
      {!data.configured ? <EmptyState title="Banco ainda não configurado" description="Configure DATABASE_URL e execute as migrations para carregar métricas reais." /> : null}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {entries.map(([label, value], index) => (
          <MetricCard key={label} label={label} value={String(value)} icon={icons[index] ?? Bell} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <Card className="overflow-hidden p-5">
          <div className="-mx-5 -mt-5 mb-5 h-1.5 bg-navy-900" />
          <h2 className="font-black text-ink">Visitantes por período</h2>
          <div className="mt-4 grid h-56 place-items-center rounded-app border border-dashed border-line bg-mist text-center text-sm text-slate-500">
            Gráfico Recharts conectado ao banco
          </div>
        </Card>
        <Card className="overflow-hidden p-5">
          <div className="-mx-5 -mt-5 mb-5 h-1.5 bg-gold-500" />
          <h2 className="font-black text-ink">Conversões por QR Code</h2>
          <div className="mt-4 grid h-56 place-items-center rounded-app border border-dashed border-line bg-mist text-center text-sm text-slate-500">
            Métricas de scans e conversões
          </div>
        </Card>
      </div>
    </div>
  );
}
