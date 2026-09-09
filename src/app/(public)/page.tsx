import type { Metadata } from "next";
import { XeriffHome } from "@/components/public/xeriff-home";

export const metadata: Metadata = {
  title: {
    absolute: "Ótica Xeriff | Visão que impressiona"
  },
  description: "Óculos de grau, óculos de sol, armações e atendimento especializado em Salvador.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ótica Xeriff",
    description: "A visão que impressiona em Salvador.",
    type: "website",
    images: ["/otica-xeriff/campanha-novo-endereco.png"]
  }
};

export default function HomePage() {
  return <XeriffHome />;
}
