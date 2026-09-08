import { navLinks, siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 md:pb-8">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo compact />
          <p className="mt-4 text-sm text-slate-600">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm font-semibold text-navy-900">{siteConfig.instagram}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          {navLinks.map((link) => (
            <a key={link.href} className="font-semibold text-slate-600 hover:text-navy-900" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.institutionalName}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
