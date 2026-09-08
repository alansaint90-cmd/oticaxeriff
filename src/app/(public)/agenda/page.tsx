import { CalendarDays, MapPin, Share2 } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { eventSeeds } from "@/lib/content/public-content";
import { siteConfig } from "@/config/site";

export default function AgendaPage() {
  return (
    <PageShell title="Cultos e programação" description="Eventos cadastráveis pelo painel. Os dados abaixo são espaços reservados até a liderança publicar a agenda real.">
      <div className="grid gap-4">
        {eventSeeds.map((event) => (
          <Card key={event.name} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-navy-700">{event.type}</span>
                <h2 className="mt-2 text-xl font-black text-ink">{event.name}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600"><CalendarDays size={16} aria-hidden />{event.date}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600"><MapPin size={16} aria-hidden />{siteConfig.placeholderAddress}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
              </div>
              <div className="grid gap-2">
                <LinkButton href="/localizacao" variant="secondary">Como chegar</LinkButton>
                <LinkButton href="/contato" variant="ghost"><Share2 size={16} aria-hidden />Compartilhar</LinkButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
