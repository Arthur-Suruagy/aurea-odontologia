import { images } from "../data/clinic";
import Reveal from "./ui/Reveal";
import SmartImage from "./ui/SmartImage";

/** Posicionamento editorial assimétrico (desktop). */
const layout = [
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-4 lg:mt-16",
  "lg:col-span-3",
  "lg:col-span-7 lg:-mt-10",
];

export default function Gallery() {
  return (
    <section id="experiencia" aria-labelledby="gal-title" className="section-y overflow-hidden">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Experiência e ambiente</p>
            <h2 id="gal-title" className="display mt-5 text-4xl sm:text-5xl">
              Espaços pensados para o seu conforto.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            Imagens ilustrativas. Na versão final, esta galeria exibe fotos reais da recepção e dos consultórios.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 items-start gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          {images.gallery.map((g, i) => (
            <Reveal
              as="li"
              key={g.label}
              delay={i * 100}
              className={`${layout[i]} ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <figure className="group">
                <SmartImage
                  src={g.src}
                  alt={g.alt}
                  widths={[400, 700, 1000]}
                  sizes="(min-width: 1024px) 35vw, 50vw"
                  className={`${g.ratio} rounded-2xl`}
                  imgClassName="transition duration-700 group-hover:scale-105"
                />
                <figcaption className="mt-3 flex items-center gap-3 text-sm text-ink/70">
                  <span aria-hidden="true" className="h-px w-6 bg-gold" />
                  {g.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
