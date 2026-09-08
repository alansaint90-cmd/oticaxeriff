import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { ministryGroups } from "@/lib/content/public-content";

export default function MinistriesPage() {
  return (
    <PageShell title="Ministérios" description="Conheça áreas de cuidado, comunhão e serviço. As informações completas podem ser atualizadas pelo painel administrativo.">
      <div className="grid gap-5">
        {ministryGroups.map((group) => (
          <section key={group.slug} aria-labelledby={`ministerio-${group.slug}`}>
            <div className="mb-3 rounded-app border border-line bg-white p-5 shadow-soft">
              <h2 id={`ministerio-${group.slug}`} className="text-xl font-black text-ink">{group.name}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{group.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.ministries.map((ministry) => (
                <a key={ministry.slug} href={`/ministerios/${ministry.slug}`}>
                  <Card className="h-full p-5 transition duration-200 hover:-translate-y-0.5 hover:border-navy-100 hover:shadow-lift">
                    <span className="text-xs font-bold uppercase text-navy-700">{ministry.groupName}</span>
                    <h3 className="mt-2 text-lg font-black text-ink">{ministry.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{ministry.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900">Conhecer <ArrowRight size={16} aria-hidden /></span>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
