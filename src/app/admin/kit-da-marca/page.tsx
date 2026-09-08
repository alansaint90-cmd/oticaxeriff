import Image from "next/image";
import { Download, FileText, ImageIcon, Video } from "lucide-react";
import { brandKitAssets, siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function iconFor(type: string) {
  if (type === "MP4") return Video;
  if (type === "PDF") return FileText;
  return ImageIcon;
}

function canPreview(type: string) {
  return ["PNG", "JPG", "SVG"].includes(type);
}

export default function BrandKitPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 rounded-app border border-line bg-white p-5 shadow-soft md:p-6">
        <Badge>Materiais oficiais hospedados</Badge>
        <h1 className="mt-3 text-3xl font-black text-ink md:text-4xl">Kit da marca</h1>
        <p className="mt-1 max-w-3xl text-slate-600">
          Logos, artes de LED, QR codes, camisas, credenciais e materiais institucionais extraídos do pacote oficial da IBA.
        </p>
      </div>

      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="overflow-hidden">
          <div className="relative aspect-video bg-navy-950">
            <Image src={siteConfig.brand.ledBlue} alt="Arte LED azul IBA Litoral Norte" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-black text-ink">Identidade aplicada</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A plataforma usa o azul institucional, o logo oficial e variações visuais do kit para manter consistência entre telão, QR Code e experiência digital.
            </p>
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="text-xl font-black text-ink">Arquivos disponíveis</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {brandKitAssets.map((asset) => {
              const Icon = iconFor(asset.type);
              return (
                <a
                  key={asset.href}
                  href={asset.href}
                  download
                  className="group rounded-app border border-line bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-navy-100 hover:bg-navy-50"
                >
                  <div className="flex min-h-16 items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-app bg-navy-900 text-white">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-ink">{asset.name}</p>
                      <p className="text-xs font-semibold text-slate-500">{asset.category} • {asset.type}</p>
                    </div>
                    <Download className="ml-auto shrink-0 text-navy-900 opacity-60 group-hover:opacity-100" size={17} aria-hidden />
                  </div>
                </a>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-xl font-black text-ink">Prévia das artes</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {brandKitAssets.filter((asset) => canPreview(asset.type)).slice(0, 12).map((asset) => (
            <Card key={asset.href} className="overflow-hidden">
              <div className="relative aspect-video bg-white">
                <Image src={asset.href} alt={asset.name} fill className="object-contain p-3" sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
              </div>
              <div className="border-t border-line p-3">
                <p className="truncate text-sm font-black text-ink">{asset.name}</p>
                <p className="text-xs text-slate-500">{asset.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
