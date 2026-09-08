import { BarChart3, Bell, FileText, Home, LayoutGrid, QrCode, Settings, Sparkles, Users } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Badge } from "@/components/ui/badge";

const nav = [
  { label: "Dashboard", href: "/admin", icon: BarChart3 },
  { label: "Pessoas", href: "/admin/pessoas", icon: Users },
  { label: "Visitantes", href: "/admin/visitantes", icon: Users },
  { label: "Decisões", href: "/admin/decisoes", icon: Sparkles },
  { label: "Oração", href: "/admin/oracao", icon: Bell },
  { label: "Funis", href: "/admin/funis", icon: LayoutGrid },
  { label: "QR Codes", href: "/admin/qr-codes", icon: QrCode },
  { label: "Kit da marca", href: "/admin/kit-da-marca", icon: FileText },
  { label: "Conteúdo", href: "/admin/conteudo", icon: FileText },
  { label: "Configurações", href: "/admin/configuracoes", icon: Settings }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-line bg-white p-5 lg:block">
        <Logo />
        <Badge className="mt-6">IBA Gestão</Badge>
        <nav className="mt-6 grid gap-1">
          {nav.map(({ label, href, icon: Icon }) => (
            <a key={href} href={href} className="flex min-h-11 items-center gap-3 rounded-app px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-navy-50 hover:text-navy-900">
              <Icon size={18} aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="absolute inset-x-5 bottom-5 rounded-app border border-navy-100 bg-navy-50 p-4">
          <p className="text-sm font-black text-navy-950">Pessoas primeiro</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">Acompanhe cada história com clareza, cuidado e próximo passo.</p>
        </div>
      </aside>
      <header className="sticky top-0 z-20 border-b border-line bg-white/95 px-4 py-3 backdrop-blur-xl lg:ml-72">
        <div className="flex items-center justify-between">
          <strong className="text-ink">IBA Gestão</strong>
          <a className="inline-flex min-h-10 items-center gap-2 rounded-app border border-line bg-white px-3 text-sm font-bold text-navy-900 transition hover:bg-navy-50" href="/">
            <Home size={16} aria-hidden />
            Ver público
          </a>
        </div>
        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {nav.map(({ label, href }) => (
            <a key={href} href={href} className="whitespace-nowrap rounded-app border border-line bg-white px-3 py-2 text-xs font-bold text-slate-600">
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main className="px-4 py-6 lg:ml-72 lg:px-7">{children}</main>
    </div>
  );
}
