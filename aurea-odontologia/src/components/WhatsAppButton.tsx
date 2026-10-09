import { useEffect, useState } from "react";
import { whatsappLink } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

/** Botão flutuante discreto; aparece após rolar a primeira dobra. */
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp (abre em nova aba)"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-petrol text-gold shadow-[0_14px_30px_-12px_rgba(15,42,39,0.7)] transition duration-500 hover:scale-105 hover:bg-petrol-700 active:scale-95 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
