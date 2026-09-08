import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border border-navy-100 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-navy-900", className)}
      {...props}
    />
  );
}
