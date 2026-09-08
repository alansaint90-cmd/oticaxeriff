import { Menu } from "lucide-react";
import { navLinks } from "@/config/site";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "./logo";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-700 shadow-[0_10px_30px_rgba(12,29,59,0.18)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" aria-label="Ir para o início">
          <Logo tone="light" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white md:flex">
          {navLinks.slice(1, 5).map((link) => (
            <a
              key={link.href}
              className="rounded-sm py-2 text-white/82 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LinkButton
          className="hidden border border-white/25 bg-white text-navy-900 shadow-none hover:bg-navy-50 md:inline-flex"
          href="/visitante"
          size="md"
        >
          Primeira vez
        </LinkButton>
        <button
          className="grid h-11 w-11 place-items-center rounded-app border border-white/25 bg-white/10 text-white backdrop-blur md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={22} aria-hidden />
        </button>
      </div>
    </header>
  );
}
