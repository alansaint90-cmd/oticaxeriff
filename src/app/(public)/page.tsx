import type { Metadata } from "next";
import { XeriffHome } from "@/components/public/xeriff-home";

export const metadata: Metadata = {
  title: {
    absolute: "Ótica Xeriff | Óculos de Grau, Sol e Armações em Salvador"
  },
  description:
    "Ótica Xeriff no Campo da Pólvora, Salvador. Óculos de grau, óculos de sol, armações, acessórios e atendimento pelo WhatsApp.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ótica Xeriff | A visão que impressiona",
    description:
      "Armações e óculos selecionados para quem busca qualidade, conforto e personalidade em Salvador.",
    type: "website",
    images: ["/otica-xeriff/hero-casal.webp"]
  }
};

export default function HomePage() {
  return <XeriffHome />;
}
