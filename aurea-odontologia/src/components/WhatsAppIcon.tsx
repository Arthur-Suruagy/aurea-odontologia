/** Ícone simples de conversa, usado nos botões de WhatsApp. */
import { MessageCircle } from "lucide-react";

export default function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <MessageCircle className={className} strokeWidth={1.6} aria-hidden="true" />;
}
