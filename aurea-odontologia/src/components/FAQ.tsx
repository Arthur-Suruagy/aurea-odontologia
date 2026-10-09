import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/clinic";
import Reveal from "./ui/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="section-y bg-sand/50">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 id="faq-title" className="display mt-5 text-4xl sm:text-5xl">
            Antes de agendar, talvez você queira saber.
          </h2>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-petrol/15 border-y border-petrol/15">
            {faqs.map((f, i) => {
              const open = openIndex === i;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex min-h-[4.5rem] w-full items-center justify-between gap-6 py-5 text-left font-serif text-xl text-petrol sm:text-2xl"
                    >
                      {f.q}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-petrol/25 transition duration-300 ${
                          open ? "rotate-45 bg-petrol text-offwhite" : ""
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 leading-relaxed text-ink/75">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
