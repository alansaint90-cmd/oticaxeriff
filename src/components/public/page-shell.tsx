import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export function PageShell({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-14">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h1 className="mt-4 text-4xl font-black leading-[1.02] text-navy-950 md:text-6xl">{title}</h1>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{description}</p> : null}
      <div className="mt-8">{children}</div>
    </main>
  );
}
