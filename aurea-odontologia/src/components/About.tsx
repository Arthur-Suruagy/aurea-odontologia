import { images } from "../data/clinic";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

const values = [
  { t: "Atendimento individual", d: "Cada pessoa tem um ritmo, um histórico e prioridades próprias." },
  { t: "Comunicação transparente", d: "Explicamos o que foi observado e quais são as opções, sem pressa." },
  { t: "Conforto na consulta", d: "Um ambiente calmo e uma equipe atenta ao seu bem-estar." },
];

export default function About() {
  return (
    <section id="clinica" aria-labelledby="about-title" className="section-y">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <SmartImage
            src={images.about.src}
            alt={images.about.alt}
            widths={[500, 800, 1000]}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] rounded-[2rem]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-sand"
          />
        </Reveal>

        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <p className="eyebrow">A clínica</p>
            <h2 id="about-title" className="display mt-5 text-4xl sm:text-5xl">
              Um novo jeito de cuidar da sua saúde bucal.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              Na Áurea, a consulta é uma conversa. Antes de falar em procedimentos, queremos entender o que
              você sente, o que espera e o que é possível fazer com tranquilidade.
            </p>
          </Reveal>

          <dl className="mt-10 divide-y divide-petrol/10 border-y border-petrol/10">
            {values.map((v, i) => (
              <Reveal as="div" key={v.t} delay={i * 80} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="font-serif text-xl text-petrol">{v.t}</dt>
                <dd className="text-ink/70">{v.d}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-10">
            <a href="#experiencia" className="btn-primary">
              Conheça nossa estrutura
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
