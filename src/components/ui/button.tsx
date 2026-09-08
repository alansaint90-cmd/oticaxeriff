import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-navy-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy-700 focus-visible:ring-navy-500",
  secondary: "border border-line bg-white text-navy-900 hover:-translate-y-0.5 hover:border-navy-100 hover:bg-navy-50 focus-visible:ring-navy-500",
  accent: "bg-gold-500 text-navy-950 shadow-soft hover:-translate-y-0.5 hover:bg-gold-100 focus-visible:ring-gold-500",
  ghost: "text-navy-900 hover:bg-navy-50 focus-visible:ring-navy-500"
};

const sizes = {
  md: "min-h-11 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-3 text-base",
  icon: "h-11 w-11 p-0"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-app font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function LinkButton({ className, variant = "primary", size = "md", ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-app font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
