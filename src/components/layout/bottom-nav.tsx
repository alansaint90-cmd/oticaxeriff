"use client";

import Link from "next/link";
import { Calendar, HandHeart, Home, Map, MessageCircle } from "lucide-react";

const items = [
  { href: "/", label: "Início", icon: Home },
  { href: "/agenda", label: "Agenda", icon: Calendar },
  { href: "/proximo-passo", label: "Passo", icon: Map },
  { href: "/oracao", label: "Oração", icon: HandHeart },
  { href: "/contato", label: "Contato", icon: MessageCircle }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-2 pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-2 shadow-[0_-12px_30px_rgba(12,29,59,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="grid min-h-12 place-items-center rounded-app text-[11px] font-bold text-slate-600 transition hover:bg-navy-50 hover:text-navy-900">
            <Icon size={20} aria-hidden />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
