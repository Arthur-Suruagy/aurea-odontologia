import { whatsappLink } from "../lib/whatsapp";
import Reveal from "./ui/Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section id="contato" aria-labelledby="cta-title" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-petrol text-offwhite sm:rounded-[2.5rem]">
        {/* Detalhes decorativos */}
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold/30" />
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-80 w-80 rounded-full border border-gold/20" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-petrol-700" />

        <Reveal className="shell relative py-24 text-center sm:py-32">
          <p className="eyebrow !text-gold">Contato</p>
          <h2 id="cta-title" className="display mx-auto mt-6 max-w-3xl text-4xl !text-offwhite sm:text-6xl">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-offwhite/75">
            Entre em contato com nossa equipe e descubra como começar.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-gold mt-10">
            <WhatsAppIcon />
            Agendar pelo WhatsApp
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
