import { differentials } from "../data/clinic";
import Reveal from "./ui/Reveal";
import { Icon } from "./ui/Icons";

export default function Differentials() {
  return (
    <section aria-labelledby="dif-title" className="section-y bg-petrol text-offwhite">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow !text-gold">Nosso jeito</p>
            <h2 id="dif-title" className="display mt-5 text-4xl !text-offwhite sm:text-5xl">
              Cuidar de você vai além do sorriso.
            </h2>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-3xl bg-offwhite/10 sm:grid-cols-2 lg:col-span-8">
            {differentials.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 90} className="group bg-petrol p-8 transition duration-500 hover:bg-petrol-700 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition duration-500 group-hover:bg-gold group-hover:text-petrol">
                  <Icon name={d.icon} />
                </span>
                <h3 className="mt-7 font-serif text-2xl !text-offwhite">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-offwhite/70">{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
