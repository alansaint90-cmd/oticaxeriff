import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo({ compact = false, tone = "default" }: { compact?: boolean; tone?: "default" | "light" }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={tone === "light" ? siteConfig.brand.logoWhite : siteConfig.brand.logo}
        alt="IBA Litoral Norte"
        width={176}
        height={72}
        className={compact ? "h-9 w-auto object-contain" : "h-11 w-auto object-contain"}
        priority
      />
      {!compact ? (
        <div className="sr-only leading-tight">
          <strong className="block text-sm text-ink">{siteConfig.churchName}</strong>
          <span className="text-xs text-slate-500">Conecta</span>
        </div>
      ) : null}
    </div>
  );
}
