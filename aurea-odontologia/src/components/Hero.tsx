import { ArrowDown, Leaf } from "lucide-react";
import { images } from "../data/clinic";
import { whatsappLink } from "../lib/whatsapp";
import SmartImage from "./ui/SmartImage";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem]">
      {/* Detalhe decorativo: círculo em bege no canto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sand/60"
      />
      <div className="shell relative grid items-center gap-12 pb-20 pt-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-6">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow animate-rise" style={{ animationDelay: "60ms" }}>
            Clínica odontológica · Demonstração
          </p>
          <h1
            id="hero-title"
            className="display mt-6 animate-rise text-[2.9rem] sm:text-6xl xl:text-[5.1rem]"
            style={{ animationDelay: "160ms" }}
          >
            Seu sorriso merece um <em className="font-normal italic text-gold-dark">cuidado extraordinário.</em>
          </h1>
          <p
            className="mt-7 max-w-md animate-rise text-lg leading-relaxed text-ink/75"
            style={{ animationDelay: "280ms" }}
          >
            Odontologia integrada, tecnologia e acolhimento em cada etapa do seu cuidado.
          </p>
          <div
            className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "400ms" }}
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon />
              Agendar minha consulta
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
            <a href="#clinica" className="btn-outline">
              Conheça a clínica
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative animate-rise lg:col-span-6" style={{ animationDelay: "320ms" }}>
          <div className="relative ml-auto w-full max-w-xl lg:max-w-none">
            {/* Moldura offset dourada */}
            <div
              aria-hidden="true"
              className="absolute -left-4 top-6 hidden h-full w-full rounded-[2rem] border border-gold/60 sm:block"
            />
            <SmartImage
              src={images.hero.src}
              alt={images.hero.alt}
              widths={[600, 900, 1200]}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="relative aspect-[4/5] rounded-t-[12rem] rounded-b-[2rem] sm:aspect-[5/6] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-petrol p-5 text-offwhite shadow-[0_18px_40px_-20px_rgba(15,42,39,0.6)] sm:left-auto sm:right-[-1rem] sm:max-w-[17.5rem] lg:-left-10 lg:right-auto">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Leaf className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <p className="font-serif text-xl leading-tight">Cuidado pensado para você</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
