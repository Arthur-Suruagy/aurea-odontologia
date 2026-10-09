import { ArrowUpRight } from "lucide-react";
import { images, treatments } from "../data/clinic";
import { whatsappLink } from "../lib/whatsapp";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

export default function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="treat-title" className="section-y bg-sand/50">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Tratamentos</p>
          <h2 id="treat-title" className="display mt-5 text-4xl sm:text-5xl">
            Cuidado completo para cada fase do seu sorriso.
          </h2>
          <p className="mt-5 text-ink/70">
            A indicação de qualquer tratamento depende de avaliação individual com o profissional.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {treatments.map((t, i) => {
            const img = images.treatments[t.key];
            const msg = `Olá! Gostaria de saber mais sobre: ${t.title}.`;
            return (
              <Reveal as="li" key={t.key} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-offwhite transition duration-500 hover:-translate-y-1">
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    widths={[400, 700, 1000]}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="aspect-[4/3]"
                    imgClassName="transition duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl">{t.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink/70">{t.text}</p>
                    <a
                      href={whatsappLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-petrol underline decoration-gold decoration-2 underline-offset-[6px] transition hover:gap-2.5"
                    >
                      Saber mais
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only"> sobre {t.title} (abre o WhatsApp em nova aba)</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
