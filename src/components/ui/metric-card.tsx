import type { LucideIcon } from "lucide-react";
import { Card } from "./card";

export function MetricCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <Card className="p-5 transition duration-200 hover:-translate-y-0.5 hover:border-navy-100 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <strong className="mt-2 block text-3xl text-ink">{value}</strong>
          <span className="mt-3 inline-flex rounded-full bg-navy-50 px-2.5 py-1 text-xs font-bold text-navy-900">tempo real</span>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-app bg-navy-900 text-white">
          <Icon size={21} aria-hidden />
        </span>
      </div>
    </Card>
  );
}
