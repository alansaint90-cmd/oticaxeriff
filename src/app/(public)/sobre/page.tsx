import { BookOpen, Church, HeartHandshake, Library, Users } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { PageShell } from "@/components/public/page-shell";
import { institutionalCards } from "@/lib/content/institutional-content";
import { siteConfig } from "@/config/site";

const icons = [Church, BookOpen, HeartHandshake, Users];

export default function AboutPage() {
  return (
    <PageShell
      title="Conheça a IBA"
      description="Uma família para pertencer, crescer em Jesus e viver o Evangelho de forma simples, verdadeira e transformadora."
    >
      <div className="overflow-hidden rounded-app border border-line bg-white shadow-soft">
        <div className="relative aspect-[16/9] min-h-56">
          <Image src={siteConfig.brand.ledOffWhite} alt="Identidade visual IBA Litoral Norte" fill className="object-cover" sizes="100vw" priority />
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {institutionalCards.map((card, index) => {
          const Icon = icons[index] ?? Church;
          return (
            <Card key={card.title} className="overflow-hidden">
              <div className="grid gap-5 p-5 md:grid-cols-[0.25fr_1fr] md:p-7">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-app bg-navy-50 text-navy-900">
                    <Icon size={24} aria-hidden />
                  </span>
                  <Badge className="mt-4">{card.kicker}</Badge>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-ink">{card.title}</h2>
                  {card.subtitle ? <p className="mt-2 text-lg font-bold text-navy-900">{card.subtitle}</p> : null}
                  {card.highlight ? <p className="mt-1 text-base font-semibold text-slate-700">{card.highlight}</p> : null}

                  {card.paragraphs ? (
                    <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 md:text-base">
                      {card.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  ) : null}

                  {card.items ? (
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {card.items.map((item) => (
                        <div key={item.label} className="rounded-app border border-line bg-mist p-4">
                          <h3 className="text-sm font-black uppercase text-navy-900">{item.label}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 overflow-hidden bg-navy-950 p-5 text-white md:p-7">
        <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
          <span className="grid h-12 w-12 place-items-center rounded-app bg-white/10 text-white">
            <Library size={24} aria-hidden />
          </span>
          <div>
            <Badge className="bg-white/10 text-white">Nossa fé e prática</Badge>
            <h2 className="mt-3 text-2xl font-black">Estrutura doutrinária</h2>
            <p className="mt-2 text-sm leading-6 text-blue-100">
              Conheça os documentos que resumem os fundamentos da fé, eclesiologia, prática ministerial, pacto e organização da IBA.
            </p>
          </div>
          <LinkButton className="bg-white text-navy-950 hover:bg-blue-50" href="/doutrina">
            Ver doutrina
          </LinkButton>
        </div>
      </Card>
    </PageShell>
  );
}
