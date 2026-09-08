import { MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { siteConfig } from "@/config/site";

export default function LocationPage() {
  return (
    <PageShell title="Localização" description="Esta página já está preparada para múltiplas unidades no futuro. Cadastre endereço, mapa e horários no painel.">
      <Card className="p-5">
        <div className="grid aspect-video place-items-center rounded-app bg-navy-50 text-navy-900"><MapPin size={42} aria-hidden /></div>
        <h2 className="mt-5 text-xl font-black text-ink">{siteConfig.churchName}</h2>
        <p className="mt-2 text-slate-600">{siteConfig.placeholderAddress}</p>
        <p className="mt-1 text-slate-600">Horários principais a cadastrar.</p>
        <div className="mt-5 grid gap-3 sm:flex">
          <LinkButton href="/contato">ABRIR NO GOOGLE MAPS</LinkButton>
          <LinkButton href="/contato" variant="secondary">COMO CHEGAR</LinkButton>
        </div>
      </Card>
    </PageShell>
  );
}
