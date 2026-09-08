import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      <span>{label}</span>
      {children}
      {hint ? <span className="text-xs font-normal text-slate-500">{hint}</span> : null}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 rounded-app border border-line bg-white px-3 py-2 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-100",
        props.className
      )}
      {...props}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "min-h-11 rounded-app border border-line bg-white px-3 py-2 text-base text-ink outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-100",
        props.className
      )}
      {...props}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 rounded-app border border-line bg-white px-3 py-2 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-100",
        props.className
      )}
      {...props}
    />
  );
}

export function CheckboxLine({ children }: { children: ReactNode }) {
  return <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">{children}</label>;
}
