import { journey } from "../data/clinic";
import Reveal from "./ui/Reveal";

/**
 * Seção alternativa aos depoimentos: como é a experiência de atendimento.
 * Como a clínica é fictícia, não há avaliações de pacientes.
 * Se a clínica real tiver depoimentos autênticos e autorizados, substitua esta seção.
 */
export default function Journey() {
  return (
    <section aria-labelledby="journey-title" className="section-y">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Experiência de atendimento</p>
          <h2 id="journey-title" className="display mt-5 text-4xl sm:text-5xl">
            Do primeiro contato ao acompanhamento.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {journey.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 100} className="relative border-t border-petrol/20 pt-6">
              <span className="absolute -top-px left-0 h-px w-12 bg-gold" aria-hidden="true" />
              <span className="font-serif text-5xl text-gold-dark/80">{s.step}</span>
              <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
