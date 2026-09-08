import { BookOpen, Download, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { doctrineDocuments, doctrineIntro, doctrinePillars } from "@/lib/content/doctrine-content";

export default function DoctrinePage() {
  return (
    <PageShell title={doctrineIntro.title} description={doctrineIntro.description}>
      <section className="overflow-hidden rounded-app border border-line bg-white shadow-soft">
        <div className="h-2 bg-navy-900" />
        <div className="p-5 md:p-7">
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>Estrutura doutrinária</Badge>
            <h2 className="mt-4 text-2xl font-black text-ink">O que fundamenta nossa caminhada</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{doctrineIntro.note}</p>
            <LinkButton className="mt-5" href="/sobre" variant="secondary">
              Conheça a IBA
            </LinkButton>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {doctrinePillars.map((pillar) => (
              <div key={pillar} className="flex items-start gap-3 rounded-app bg-mist p-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-navy-900" size={18} aria-hidden />
                <span className="text-sm font-semibold leading-6 text-slate-700">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4">
        {doctrineDocuments.map((document) => (
          <Card key={document.href} className="group p-5 transition duration-200 hover:-translate-y-0.5 hover:border-navy-100 hover:shadow-lift md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-app bg-navy-900 text-white">
                    <FileText size={21} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-navy-700">{document.part}</p>
                    <h2 className="text-xl font-black text-ink">{document.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{document.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {document.topics.map((topic) => (
                    <span key={topic} className="rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-bold text-navy-900">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-2 sm:flex md:grid">
                <LinkButton href={document.href} variant="secondary">
                  <BookOpen size={16} aria-hidden />
                  Abrir
                </LinkButton>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-app bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-700"
                  href={document.href}
                  download
                >
                  <Download size={16} aria-hidden />
                  Baixar
                </a>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </PageShell>
  );
}
