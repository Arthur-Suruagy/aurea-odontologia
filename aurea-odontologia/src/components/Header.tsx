import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clinic, navLinks } from "../data/clinic";
import { whatsappLink } from "../lib/whatsapp";
import Logo from "./ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Esconde ao rolar para baixo, reaparece ao subir (discreto).
      setHidden(y > last && y > 240 && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "bg-offwhite/90 shadow-[0_1px_0_rgba(23,63,58,0.08)] backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between">
        <a href="#inicio" aria-label={`${clinic.fullName} — início`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative py-2 text-[0.92rem] text-ink/80 transition hover:text-petrol"
                >
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !min-h-[2.75rem] sm:inline-flex"
          >
            Agendar consulta
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-petrol/20 text-petrol transition hover:bg-petrol hover:text-offwhite lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-4.5rem)] overflow-y-auto bg-offwhite`}
      >
        <nav aria-label="Menu mobile" className="shell flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-petrol/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-3xl text-petrol"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 w-full"
          >
            Agendar consulta
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
