import { images, team } from "../data/clinic";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

export default function Team() {
  return (
    <section id="equipe" aria-labelledby="team-title" className="section-y bg-sand/50">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Equipe</p>
          <h2 id="team-title" className="display mt-5 text-4xl sm:text-5xl">
            Pessoas que cuidam de pessoas.
          </h2>
          <p className="mt-5 text-ink/70">
            Perfis e fotos ilustrativos, apenas para demonstração do layout. Nomes, áreas e textos são fictícios.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {team.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 100} className={i === 1 ? "md:mt-12" : ""}>
              <article className="group">
                <div className="relative">
                  <SmartImage
                    src={images.team[i].src}
                    alt={images.team[i].alt}
                    widths={[400, 600, 800]}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[4/5] rounded-[1.75rem]"
                    imgClassName="transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-offwhite/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-petrol">
                    Ilustrativo
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-dark">{p.role}</p>
                <p className="mt-3 leading-relaxed text-ink/70">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
