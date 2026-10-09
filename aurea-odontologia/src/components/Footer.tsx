import { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic, navLinks } from "../data/clinic";
import { whatsappLink } from "../lib/whatsapp";
import Logo from "./ui/Logo";
import { Icon } from "./ui/Icons";
import PrivacyDialog from "./PrivacyDialog";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 pb-10 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs leading-relaxed text-ink/70">
              Clínica odontológica fictícia criada para demonstração de um site institucional. Todo o conteúdo
              é ilustrativo.
            </p>
            <ul className="mt-6 flex gap-3">
              {clinic.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={`${s.label} (perfil demonstrativo)`}
                    onClick={(e) => e.preventDefault()}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-petrol/20 text-petrol transition hover:bg-petrol hover:text-offwhite"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold-dark">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink/75 transition hover:text-petrol">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold-dark">Horários (demo)</h2>
            <ul className="mt-5 space-y-3 text-ink/75">
              {clinic.hours.map((h) => (
                <li key={h.label} className="flex gap-3">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span>
                    {h.label}
                    <br />
                    <span className="text-ink/55">{h.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold-dark">Contato (placeholder)</h2>
            <ul className="mt-5 space-y-3 text-ink/75">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <address className="not-italic">
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <span>
                  Tel.: {clinic.phoneDisplay}
                  <br />
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gold underline-offset-4 hover:text-petrol"
                  >
                    WhatsApp: {clinic.whatsappDisplay}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-petrol/15 pt-6 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinic.fullName}. Projeto demonstrativo, sem fins comerciais.
          </p>
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="self-start underline decoration-gold underline-offset-4 hover:text-petrol sm:self-auto"
          >
            Aviso de privacidade
          </button>
        </div>
      </div>
      <PrivacyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
