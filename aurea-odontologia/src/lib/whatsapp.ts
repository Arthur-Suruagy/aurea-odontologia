import { clinic } from "../data/clinic";

/** Monta o link do WhatsApp a partir da configuração central. */
export function whatsappLink(message: string = clinic.whatsappMessage): string {
  const digits = clinic.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
