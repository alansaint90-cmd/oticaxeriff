"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  ChevronRight,
  ContactRound,
  Glasses,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Tags,
  X
} from "lucide-react";

const phone = "5571991138625";
const defaultMessage = "Olá! Conheci a Ótica Xeriff pelo site e gostaria de informações sobre armações e óculos.";

function whatsappLink(message = defaultMessage) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const navItems = [
  ["Início", "#inicio"],
  ["Armações", "#armacoes"],
  ["Óculos de Grau", "#grau"],
  ["Óculos de Sol", "#sol"],
  ["Marcas", "#marcas"],
  ["A Xeriff", "#xeriff"],
  ["Novo Endereço", "#endereco"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"]
];

const categories = [
  {
    id: "grau",
    title: "Óculos de Grau",
    text: "Modelos para rotina, leitura e presença visual com personalidade.",
    image: "/otica-xeriff/oculos-grau-modelo.png"
  },
  {
    id: "sol",
    title: "Óculos de Sol",
    text: "Peças para proteger o olhar e completar o estilo nos dias de Salvador.",
    image: "/otica-xeriff/oculos-sol-card-novo.png"
  },
  {
    id: "armacoes",
    title: "Armações",
    text: "Formatos, cores e acabamentos para diferentes rostos e momentos.",
    image: "/otica-xeriff/produto-rose.webp"
  }
];

const campaignSlides = [
  {
    image: "/otica-xeriff/campanha-armacao-gratis.png",
    alt: "Campanha Ótica Xeriff: armação grátis na compra das suas lentes",
    imageClassName: "object-center",
    activeClassName: "opacity-100",
    inactiveClassName: "opacity-0"
  },
  {
    image: "/otica-xeriff/campanha-novo-endereco.png",
    alt: "Campanha Ótica Xeriff: estamos no novo endereço no Comercial Arcada",
    imageClassName: "object-center",
    activeClassName: "opacity-100",
    inactiveClassName: "opacity-0"
  }
];

const catalog = [
  { name: "Acetato Redondo", category: "Armações", image: "/otica-xeriff/catalogo-acetato-redondo-original.jpg" },
  { name: "Metal Dourado", category: "Óculos de Grau", image: "/otica-xeriff/catalogo-metal-dourado-original.jpg" },
  { name: "Quadrado Preto", category: "Óculos de Sol", image: "/otica-xeriff/catalogo-quadrado-preto-original.jpg" },
  { name: "Cristal Translúcido", category: "Armações", image: "/otica-xeriff/catalogo-cristal-translucido-original.jpg" },
  { name: "Aviador Clássico", category: "Óculos de Sol", image: "/otica-xeriff/catalogo-aviador-classico-original.jpg" },
  { name: "Case e Limpeza", category: "Acessórios", image: "/otica-xeriff/catalogo-case-limpeza-original.jpg" }
];

const benefits = [
  { title: "Atendimento próximo", text: "Equipe disponível para orientar sua escolha, sem pressa.", icon: ShieldCheck },
  { title: "Produtos selecionados", text: "Curadoria de armações e óculos com acabamento cuidadoso.", icon: Sparkles },
  { title: "Variedade de estilos", text: "Do clássico ao contemporâneo, para diferentes personalidades.", icon: Tags },
  { title: "Localização central", text: "Campo da Pólvora, próximo ao metrô e pontos de referência.", icon: Store }
];

const steps = ["Escolha seu estilo", "Fale com a equipe", "Consulte disponibilidade", "Visite a loja", "Escolha sua armação"];

const marqueeItems = ["A visão que impressiona", "Óculos de grau", "Óculos de sol", "Armações", "Acessórios", "Lentes de contato"];

const quickLinks = [
  { label: "Óculos de grau", href: "#grau", icon: Glasses },
  { label: "Óculos de sol", href: "#sol", icon: Sun },
  { label: "Lentes de contato", href: whatsappLink("Olá! Gostaria de saber sobre lentes de contato na Ótica Xeriff."), icon: ContactRound },
  { label: "Novidades", href: "#instagram", icon: BadgePercent }
];

const faqs = [
  ["Onde fica o novo endereço?", "Av. Joana Angélica, 808, Comercial Arcada, 2º piso, Campo da Pólvora, Salvador - BA."],
  ["Vocês trabalham com óculos de grau?", "Sim. A loja apresenta óculos de grau, armações e lentes de grau. Valores e disponibilidade são confirmados no atendimento."],
  ["Vocês têm óculos de sol?", "Sim. A Ótica Xeriff trabalha com óculos de sol e armações selecionadas."],
  ["Quais marcas vocês trabalham?", "As marcas disponíveis podem mudar conforme estoque. Fale com a equipe para confirmar as opções atuais."],
  ["Como consulto preço e disponibilidade?", "Pelo WhatsApp ou diretamente na loja, informando o modelo ou estilo que você procura."],
  ["Como chego de metrô?", "A loja fica próxima ao Metrô Campo da Pólvora, entre a Faculdade Santa Casa e o Bradesco."]
];

export function XeriffHome() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [campaignIndex, setCampaignIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollCatalog = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({ left: direction === "left" ? -360 : 360, behavior: "smooth" });
  };

  const showCampaign = (direction: "previous" | "next") => {
    setCampaignIndex((current) => {
      if (direction === "next") {
        return (current + 1) % campaignSlides.length;
      }

      return (current - 1 + campaignSlides.length) % campaignSlides.length;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCampaignIndex((current) => (current + 1) % campaignSlides.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: "Ótica Xeriff",
    slogan: "A visão que impressiona.",
    telephone: "+55 71 99113-8625",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Joana Angélica, 808, Comercial Arcada, 2º piso",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR"
    },
    sameAs: ["https://www.instagram.com/oticaxeriff/"]
  };

  return (
    <main id="inicio" className="xeriff-page min-h-screen bg-[#050505] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <header className="fixed inset-x-0 top-0 z-[70] border-b border-[#C7983C]/25 bg-[#050505]/95 shadow-[0_14px_40px_rgba(0,0,0,.42)] backdrop-blur-md">
        <div className="xeriff-nav-shell flex h-[56px] items-center justify-between px-0 lg:h-[64px]">
          <a
            href="#inicio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-[32px] w-[92px] items-center justify-center overflow-hidden lg:h-[56px] lg:w-[168px]"
            aria-label="Ótica Xeriff - início"
          >
            <Image
              src="/otica-xeriff/logo-xeriff-header-transparent.png"
              alt="Ótica Xeriff - A visão que impressiona"
              width={900}
              height={300}
              priority
              className="h-full w-full object-contain"
            />
          </a>
          <nav className="hidden items-center gap-[26px] text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="xeriff-nav-link transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C]">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:ml-4 lg:block">
            <a className="xeriff-outline h-[32px] min-h-0 min-w-[150px] rounded-[5px] px-4 text-[9px]" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar com a Xeriff
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="grid h-11 w-11 place-items-center justify-self-end border border-[#C7983C]/25 text-[#E1BF77]/90 transition hover:border-[#C7983C]/70 hover:text-[#E1BF77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C] lg:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-controls="xeriff-mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={19} strokeWidth={1.8} aria-hidden /> : <Menu size={21} strokeWidth={1.8} aria-hidden />}
          </button>
        </div>
        <nav
          id="xeriff-mobile-menu"
          className={`overflow-hidden border-t border-[#C7983C]/15 bg-[#050505]/98 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            isMobileMenuOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-label="Menu mobile"
        >
          <div className="xeriff-nav-shell py-2">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-white transition hover:text-[#E1BF77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C]"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex min-h-11 items-center justify-center rounded-[5px] bg-[#C7983C] px-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#050505] transition hover:bg-[#E1BF77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C]"
            >
              Falar com a Xeriff
            </a>
            <a
              href="#endereco"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-[5px] border border-[#C7983C]/70 px-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#E1BF77] transition hover:bg-[#C7983C] hover:text-[#050505] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C]"
            >
              Como chegar
            </a>
          </div>
        </nav>
      </header>

      <section className="xeriff-reveal bg-[#F7F4EE] pt-14 lg:pt-16" aria-label="Campanhas e promoções da Ótica Xeriff">
        <div className="relative mx-auto h-[240px] w-full overflow-hidden bg-[#F7F4EE] sm:h-[320px] md:aspect-[1920/740] md:h-auto">
          {campaignSlides.map((slide, index) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-contain transition duration-500 ease-out md:object-cover ${slide.imageClassName} ${
                index === campaignIndex ? slide.activeClassName : slide.inactiveClassName
              }`}
            />
          ))}

          <button
            type="button"
            onClick={() => showCampaign("previous")}
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#C7983C]/70 bg-[#050505]/88 text-[#E1BF77] shadow-[0_12px_28px_rgba(5,5,5,.24)] transition hover:bg-[#C7983C] hover:text-[#050505] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C] md:left-6 md:h-12 md:w-12"
            aria-label="Ver campanha anterior"
          >
            <ArrowLeft size={22} strokeWidth={2.4} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => showCampaign("next")}
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#C7983C]/70 bg-[#050505]/88 text-[#E1BF77] shadow-[0_12px_28px_rgba(5,5,5,.24)] transition hover:bg-[#C7983C] hover:text-[#050505] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C] md:right-6 md:h-12 md:w-12"
            aria-label="Ver próxima campanha"
          >
            <ArrowRight size={22} strokeWidth={2.4} aria-hidden />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
            {campaignSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCampaignIndex(index)}
                className="group grid h-11 w-11 place-items-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7983C]"
                aria-label={`Ver campanha ${index + 1}`}
              >
                <span
                  className={`h-2.5 rounded-full transition-all ${
                    index === campaignIndex ? "w-8 bg-[#C7983C]" : "w-2.5 bg-[#050505]/28 group-hover:bg-[#C7983C]/70"
                }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="xeriff-marquee" aria-label="Produtos e atributos da Ótica Xeriff">
        <div>
          {Array.from({ length: 4 }).flatMap((_, repeatIndex) =>
            marqueeItems.map((item) => (
              <span key={`${repeatIndex}-${item}`}>
                {item}
                <b aria-hidden>✦</b>
              </span>
            ))
          )}
        </div>
      </div>

      <section className="xeriff-hero-frame relative flex min-h-[100svh] overflow-hidden bg-[#050505]" aria-label="Ótica Xeriff - hero">
        <div className="pointer-events-none absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[58vw]">
          <Image
            src="/otica-xeriff/hero-oculos-sol-xeriff.png"
            alt="Modelo usando óculos de sol Ótica Xeriff"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[62%_center] lg:object-[48%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.88)_0%,rgba(5,5,5,.64)_34%,rgba(5,5,5,.48)_62%,rgba(5,5,5,.92)_100%)] lg:bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.68)_16%,rgba(5,5,5,.12)_48%,rgba(5,5,5,.34)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="xeriff-hero-shell relative z-10 grid min-h-[calc(100svh-56px)] w-full items-center px-4 pb-24 pt-20 sm:px-0 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[1fr_.86fr] lg:py-16">
          <div className="max-w-[820px]">
            <p className="xeriff-eyebrow">Ótica Xeriff • Salvador</p>
            <h1 className="xeriff-hero-title mt-4 lg:mt-5">
              <span className="block md:whitespace-nowrap">Seu olhar também faz</span>
              <span className="block md:whitespace-nowrap">parte do <span className="xeriff-gold-gradient">seu estilo.</span></span>
            </h1>
            <p className="mt-5 max-w-[560px] text-[17px] font-semibold leading-8 text-white/85 md:mt-6 md:text-[19px]">
              Óculos de grau, óculos de sol e armações selecionadas para quem busca qualidade, conforto e personalidade.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="xeriff-button" href="#armacoes">Ver armações</a>
              <a className="xeriff-outline" href={whatsappLink()} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C7983C]">
              <MapPin size={16} aria-hidden /> Novo endereço no Campo da Pólvora
            </p>
          </div>

        </div>
      </section>

      <nav className="border-y border-[#C7983C]/20 bg-[#F7F4EE] px-4 py-4 md:px-8" aria-label="Atalhos de produtos">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4 md:gap-8">
          {quickLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex min-h-14 items-center justify-center gap-3 px-2 text-center text-[12px] font-semibold text-[#050505] transition hover:text-[#8A611D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7983C] md:text-[14px]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#050505] text-[#E1BF77] transition group-hover:bg-[#C7983C] group-hover:text-[#050505]">
                <Icon size={18} strokeWidth={1.9} aria-hidden />
              </span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <section className="xeriff-reveal xeriff-section-light bg-[#F7F4EE] px-4 py-24 md:px-8" aria-labelledby="categorias-title">
        <div className="mx-auto max-w-7xl">
          <p className="xeriff-eyebrow">Categorias</p>
          <h2 id="categorias-title" className="xeriff-heading mt-3 max-w-none md:whitespace-nowrap">
            Encontre o seu <span className="xeriff-gold-gradient">próximo olhar.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {categories.map((item) => (
              <a key={item.title} id={item.id} href={whatsappLink(`Olá! Vi a categoria ${item.title} no site da Ótica Xeriff e gostaria de saber opções disponíveis.`)} target="_blank" rel="noreferrer" className="xeriff-stagger group relative min-h-[430px] overflow-hidden border border-[#050505]/12 bg-[#151515]">
                <Image src={item.image} alt={`${item.title} da Ótica Xeriff`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="xeriff-eyebrow">{item.title}</p>
                  <h3 className="mt-2 text-4xl font-black uppercase leading-none">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="armacoes" className="xeriff-reveal border-y border-white/10 bg-[#151515] py-24" aria-labelledby="catalog-title">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="xeriff-eyebrow">Catálogo</p>
              <h2 id="catalog-title" className="xeriff-heading mt-3">Uma seleção para <span className="xeriff-gold-gradient">cada olhar.</span></h2>
              <p className="mt-4 max-w-2xl text-white/75">Deslize para conhecer estilos disponíveis na loja. Disponibilidade e valores são confirmados no atendimento.</p>
            </div>
            <div className="hidden gap-2 md:flex">
              <button className="xeriff-icon-button" onClick={() => scrollCatalog("left")} aria-label="Ver itens anteriores"><ArrowLeft size={18} /></button>
              <button className="xeriff-icon-button" onClick={() => scrollCatalog("right")} aria-label="Ver próximos itens"><ArrowRight size={18} /></button>
            </div>
          </div>
          <div ref={carouselRef} className="mt-9 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {catalog.map((item) => (
              <article key={item.name} className="xeriff-stagger min-w-[82vw] snap-start border border-white/12 bg-[#0b0b0b] sm:min-w-[300px] lg:min-w-[320px]">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={item.image} alt={`${item.name} - ${item.category}`} fill sizes="(min-width: 1024px) 320px, 300px" className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="min-h-[150px] border-t border-white/5 p-5">
                  <p className="xeriff-eyebrow">{item.category}</p>
                  <h3 className="mt-3 text-[24px] font-black uppercase leading-none">{item.name}</h3>
                  <a className="xeriff-outline mt-5 h-11 min-h-0 w-full px-2 text-[10px]" href={whatsappLink(`Olá! Vi ${item.name} no site da Ótica Xeriff e gostaria de saber disponibilidade e valor.`)} target="_blank" rel="noreferrer">
                    Quero saber mais
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a className="xeriff-button min-w-[224px]" href={whatsappLink("Olá! Gostaria de acessar o catálogo da Ótica Xeriff.")} target="_blank" rel="noreferrer">
              Acessar catálogo
            </a>
          </div>
        </div>
      </section>

      <section id="xeriff" className="xeriff-reveal bg-[#F7F4EE] py-20 text-[#050505]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_.9fr] md:items-center md:px-8">
          <div className="max-w-[520px]">
            <p className="xeriff-eyebrow">Estilo</p>
            <h2 className="mt-3 font-display text-[2.15rem] font-bold uppercase leading-[0.98] text-[#050505] md:text-[3.25rem] md:leading-[0.95]">
              Um acessório que muda o <span className="xeriff-gold-gradient">olhar inteiro.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#2A2A2A]/80">
              Formato, cor e proporção mudam completamente a leitura de um rosto. Na loja você experimenta modelos diferentes com calma e percebe, no espelho, qual armação combina com a sua personalidade e a sua rotina.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <span className="xeriff-chip border-[#C7983C]/45 text-[#111111]">Formato do rosto</span>
              <span className="xeriff-chip border-[#C7983C]/45 text-[#111111]">Personalidade</span>
              <span className="xeriff-chip border-[#C7983C]/45 text-[#111111]">Conforto no uso</span>
              <span className="xeriff-chip border-[#C7983C]/45 text-[#111111]">Uso diário ou social</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:h-[360px]">
            <div className="relative min-h-[320px] overflow-hidden border border-[#C7983C]/45 md:row-span-2 md:min-h-0">
              <Image src="/otica-xeriff/retrato-glamouroso-oculos-pretos.png" alt="Retrato glamouroso usando óculos pretos" fill sizes="(min-width: 768px) 28vw, 50vw" className="object-cover object-[center_34%]" />
            </div>
            <div className="relative min-h-[155px] overflow-hidden border border-[#C7983C]/45">
              <Image src="/otica-xeriff/torcida-brasileira-original.png" alt="Cliente em clima de festa usando óculos" fill sizes="(min-width: 768px) 22vw, 50vw" className="object-cover object-[center_28%]" />
            </div>
            <div className="relative min-h-[155px] overflow-hidden border border-[#C7983C]/45">
              <Image src="/otica-xeriff/retrato-masculino-oculos.jpg" alt="Homem usando óculos em retrato editorial" fill sizes="(min-width: 768px) 22vw, 50vw" className="object-cover object-[center_30%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="xeriff-reveal border-y border-white/10 bg-[#151515] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_.92fr] md:items-center md:px-8">
          <div className="relative h-[430px] overflow-hidden">
            <Image src="/otica-xeriff/atendimento-otica-fachada.jpeg" alt="Atendimento na Ótica Xeriff" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-[center_48%]" />
          </div>
          <div>
            <p className="xeriff-eyebrow">Atendimento</p>
            <h2 className="xeriff-heading mt-3">Atendimento que <span className="xeriff-gold-gradient">impressiona.</span></h2>
            <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-white">Escolher uma armação pode ser mais fácil <span className="xeriff-gold-gradient">com orientação.</span></h3>
            <p className="mt-5 text-lg leading-8 text-white/75">Nossa equipe ajuda você a encontrar opções que combinem com seu estilo, preferência e necessidades.</p>
            <a className="xeriff-button mt-8" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar no WhatsApp <ChevronRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section id="instagram" className="xeriff-reveal mx-auto max-w-7xl px-4 py-24 md:px-8">
        <p className="xeriff-eyebrow">Por que a Xeriff</p>
        <h2 className="xeriff-heading mt-3">Qualidade, estilo e <span className="xeriff-gold-gradient">atendimento que você merece.</span></h2>
        <div className="mt-10 grid border border-white/12 md:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title} className="xeriff-stagger border-b border-white/12 p-7 md:border-b-0 md:border-r md:last:border-r-0">
              <Icon className="text-[#C7983C]" size={25} aria-hidden />
              <h3 className="mt-6 text-xl font-black uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="marcas" className="xeriff-reveal overflow-hidden bg-[#F5F2EB] px-4 py-24 text-[#050505] md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_.58fr]">
          <div className="max-w-4xl text-center md:text-left">
            <p className="xeriff-eyebrow text-[#A16207]">Marcas</p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-[44px]">Marcas que combinam <span className="xeriff-gold-gradient">qualidade e estilo.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-black/70 md:mx-0">Trabalhamos com um mix de marcas que muda conforme a disponibilidade da loja. Fale com a nossa equipe para confirmar quais marcas estão disponíveis no momento.</p>
            <a className="xeriff-light-button mt-8" href={whatsappLink("Olá! Gostaria de consultar quais marcas estão disponíveis atualmente na Ótica Xeriff.")} target="_blank" rel="noreferrer">Consultar marcas disponíveis</a>
          </div>
          <div className="xeriff-slide-in-right pointer-events-none relative mx-auto h-48 w-full max-w-[420px] md:h-64 md:max-w-none">
            <Image
              src="/otica-xeriff/oculos-marcas-destaque.png"
              alt=""
              fill
              sizes="(min-width: 768px) 36vw, 90vw"
              className="object-contain drop-shadow-[0_24px_40px_rgba(5,5,5,.24)]"
            />
          </div>
        </div>
      </section>

      <section id="endereco" className="xeriff-reveal mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8">
        <div>
          <p className="xeriff-eyebrow">Novo endereço</p>
          <h2 className="xeriff-heading mt-3">Estamos ainda mais <span className="xeriff-gold-gradient">perto de você.</span></h2>
          <h3 className="mt-4 text-2xl font-black uppercase leading-none text-white md:text-[32px]">Próximo ao <span className="xeriff-gold-gradient">Metrô Campo da Pólvora.</span></h3>
          <div className="mt-7 space-y-2 text-lg font-bold text-white/85">
            <p>Av. Joana Angélica, 808</p>
            <p>Comercial Arcada</p>
            <p>2º piso</p>
            <p>Campo da Pólvora, Salvador - BA</p>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-white/75">Entre a Faculdade Santa Casa e o Bradesco. Próximo ao Metrô Campo da Pólvora.</p>
          <a className="xeriff-button mt-8" href="https://www.google.com/maps/search/?api=1&query=Av.%20Joana%20Ang%C3%A9lica%2C%20808%20Comercial%20Arcada%20Salvador%20BA" target="_blank" rel="noreferrer">
            <Navigation size={18} aria-hidden /> Como chegar
          </a>
        </div>
        <div className="border border-[#C7983C]/45 bg-[#151515] p-4">
          <div className="grid gap-4 md:grid-cols-[.98fr_1fr] md:items-stretch">
            <div className="relative min-h-[260px] overflow-hidden border border-white/10 md:min-h-[390px]">
              <Image
                src="/otica-xeriff/localizacao-otica-xeriff.jpeg"
                alt="Entrada e interior da Ótica Xeriff"
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-2 md:p-5">
              <h3 className="font-display text-2xl font-bold uppercase leading-none text-white md:text-[34px]">
                Ótica <span className="xeriff-gold-gradient">Xeriff</span>
              </h3>
              <p className="text-sm leading-6 text-white/75">
                Av. Joana Angélica, 808, Comercial Arcada, 2º piso, Campo da Pólvora.
              </p>
              <div className="grid gap-3 text-sm font-semibold text-white/82">
                <span className="border border-white/10 bg-white/[0.03] px-4 py-3">(71) 99113-8625</span>
                <span className="border border-white/10 bg-white/[0.03] px-4 py-3">Próximo ao Metrô Campo da Pólvora</span>
                <span className="border border-white/10 bg-white/[0.03] px-4 py-3">Salvador - BA</span>
              </div>
              <a
                className="xeriff-button mt-2 w-full"
                href="https://www.google.com/maps/search/?api=1&query=Av.%20Joana%20Ang%C3%A9lica%2C%20808%20Comercial%20Arcada%20Campo%20da%20P%C3%B3lvora%20Salvador%20BA"
                target="_blank"
                rel="noreferrer"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="xeriff-reveal border-y border-white/10 bg-[#151515] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="xeriff-eyebrow">Como comprar</p>
          <h2 className="xeriff-heading mt-3">Simples, do site <span className="xeriff-gold-gradient">até a loja.</span></h2>
          <ol className="mt-10 grid gap-3 md:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step} className="xeriff-stagger border border-white/12 p-5">
                <span className="text-sm font-black text-[#E1BF77]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-black uppercase">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <a
              className="xeriff-button min-w-[260px]"
              href={whatsappLink("Olá! Gostaria de falar com um especialista da Ótica Xeriff.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} aria-hidden /> Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      <section className="xeriff-reveal mx-auto max-w-7xl px-4 py-24 md:px-8">
        <p className="xeriff-eyebrow">Instagram</p>
        <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr] md:items-end">
          <div>
            <h2 className="xeriff-heading mt-3">Novos olhares também passam pelo <span className="xeriff-gold-gradient">Instagram.</span></h2>
            <a className="xeriff-outline mt-8" href="https://www.instagram.com/oticaxeriff/" target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden /> Seguir @oticaxeriff
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {["modelo-sorriso.webp", "instagram-look-azul.png", "retrato-glamouroso-oculos-pretos.png", "hero-oculos-sol-xeriff.png", "oculos-sol-card-novo.png", "campanha-brasil.webp"].map((asset) => (
              <Image key={asset} src={`/otica-xeriff/${asset}`} alt="Galeria editorial da Ótica Xeriff" width={360} height={360} className="aspect-square w-full object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="xeriff-reveal border-y border-white/10 bg-[#151515] py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <p className="xeriff-eyebrow">FAQ</p>
          <h2 className="xeriff-heading mt-3">Perguntas <span className="xeriff-gold-gradient">frequentes.</span></h2>
          <div className="mt-8 divide-y divide-white/12 border-y border-white/12">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black uppercase">
                  {question}
                  <Sun className="shrink-0 text-[#C7983C] transition group-open:rotate-45" size={18} aria-hidden />
                </summary>
                <p className="mt-4 leading-7 text-white/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="xeriff-reveal relative overflow-hidden px-4 py-24 md:px-8">
        <Image src="/otica-xeriff/produto-rose.webp" alt="Armação premium em composição escura" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#050505]/82" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="xeriff-eyebrow justify-center">Ótica Xeriff</p>
          <h2 className="mt-4 text-[2.15rem] font-black uppercase leading-none md:text-[3.25rem]">O seu <span className="xeriff-gold-gradient">próximo olhar</span> começa aqui.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82">Conheça as armações da Ótica Xeriff e encontre um modelo que combine com você.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="xeriff-button" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden /> Falar no WhatsApp</a>
            <a className="xeriff-outline" href="#endereco">Como chegar</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/12 bg-[#050505] px-4 pb-24 pt-12 md:px-8 md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_2fr]">
          <div>
            <Image
              src="/otica-xeriff/logo-xeriff-transparent.png"
              alt="Ótica Xeriff - A visão que impressiona"
              width={1158}
              height={676}
              className="h-auto w-64 object-contain"
            />
            <p className="mt-5 text-sm leading-6 text-white/60">Óculos de grau, óculos de sol, armações, acessórios e lentes de grau em Salvador.</p>
          </div>
          <div className="grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <h3 className="font-black uppercase"><span className="xeriff-gold-gradient">Contato</span></h3>
              <p className="mt-3 text-white/70">@oticaxeriff</p>
              <p className="mt-2 text-white/70">(71) 99113-8625</p>
            </div>
            <div>
              <h3 className="font-black uppercase"><span className="xeriff-gold-gradient">Endereço</span></h3>
              <p className="mt-3 text-white/70">Av. Joana Angélica, 808<br />Comercial Arcada, 2º piso<br />Campo da Pólvora</p>
            </div>
            <div>
              <h3 className="font-black uppercase"><span className="xeriff-gold-gradient">Categorias</span></h3>
              <p className="mt-3 text-white/70">Óculos de grau<br />Óculos de sol<br />Armações<br />Acessórios</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-4 border-t border-white/10 pt-6 text-xs text-white/45">
          <span>© {new Date().getFullYear()} Ótica Xeriff. Todos os direitos reservados.</span>
          <a href="#" className="hover:text-[#E1BF77]">Política de Privacidade</a>
          <a href="#" className="hover:text-[#E1BF77]">Termos</a>
        </div>
      </footer>

      <a className="fixed bottom-5 right-5 z-50 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_46px_rgba(37,211,102,.34)] transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar com a Ótica Xeriff pelo WhatsApp">
        <svg width="31" height="31" viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.01 3.2c-6.86 0-12.43 5.56-12.43 12.42 0 2.2.58 4.35 1.69 6.24L3.2 28.8l7.12-1.87a12.4 12.4 0 0 0 5.69 1.37c6.86 0 12.43-5.56 12.43-12.42S22.87 3.2 16.01 3.2Zm0 22.98c-1.78 0-3.52-.45-5.06-1.3l-.36-.2-4.22 1.11 1.13-4.11-.24-.42a10.27 10.27 0 0 1-1.56-5.64c0-5.68 4.62-10.29 10.31-10.29s10.31 4.61 10.31 10.29-4.63 10.56-10.31 10.56Z" fill="currentColor" />
          <path d="M21.65 18.52c-.31-.16-1.84-.91-2.12-1.01-.28-.11-.49-.16-.69.16-.2.31-.79 1.01-.97 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57s1.11 2.98 1.26 3.19c.16.21 2.18 3.33 5.28 4.66.74.32 1.31.51 1.76.65.74.23 1.41.2 1.95.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.59-.36Z" fill="currentColor" />
        </svg>
      </a>
    </main>
  );
}
