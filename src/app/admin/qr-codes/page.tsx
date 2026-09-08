import { Download, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { createQrCode } from "@/lib/actions/admin-actions";

const codes = ["QR Home", "QR Visitantes", "QR Decisão", "QR Oração", "QR Batismo", "QR Membresia", "QR Contribuição", "QR Evento", "QR Ministério"];

export default function QRCodesPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-black text-ink">QR Codes</h1>
      <p className="mt-1 text-slate-600">Crie destinos amigáveis, acompanhe scans e baixe PNGs para telão ou impressão.</p>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-5">
          <form action={createQrCode} className="grid gap-4">
            <Field label="Nome"><Input name="name" placeholder="QR Visitantes" required /></Field>
            <Field label="Destino"><Select name="destination"><option>/bem-vindo</option><option>/decisao</option><option>/oracao</option><option>/batismo</option><option>/contribua</option></Select></Field>
            <Button type="submit">Gerar QR Code</Button>
          </form>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {codes.map((name) => (
            <Card key={name} className="p-5">
              <div className="grid h-28 place-items-center rounded-app bg-mist text-navy-900"><QrCode size={42} aria-hidden /></div>
              <h2 className="mt-3 font-black text-ink">{name}</h2>
              <p className="text-sm text-slate-500">Scans: 0 • Conversões: 0</p>
              <a className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-app border border-line px-3 text-sm font-semibold text-navy-900" href={`/api/qr?data=${encodeURIComponent("/")}`}>
                <Download size={16} aria-hidden />PNG
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
