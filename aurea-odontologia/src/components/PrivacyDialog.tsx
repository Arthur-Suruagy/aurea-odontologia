import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = { open: boolean; onClose: () => void };

/** Aviso de privacidade DEMONSTRATIVO. Não substitui política elaborada por profissional jurídico. */
export default function PrivacyDialog({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="privacy-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl bg-offwhite p-0 text-ink backdrop:bg-petrol-900/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <h2 id="privacy-title" className="font-serif text-3xl">
            Aviso de privacidade
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar aviso de privacidade"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-petrol/20 text-petrol hover:bg-petrol hover:text-offwhite"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold text-petrol">
          Texto demonstrativo
        </p>
        <div className="mt-5 space-y-4 leading-relaxed text-ink/80">
          <p>
            Este site não possui formulários nem coleta dados em servidor próprio. Ao tocar nos botões de
            agendamento, você é direcionado ao WhatsApp, serviço de terceiros com política própria.
          </p>
          <p>
            Esta é uma página de exemplo. Não constitui política de privacidade válida nem garante conformidade
            com a LGPD. Para uso comercial, a clínica deve contar com texto elaborado por profissional jurídico,
            descrevendo os dados tratados, finalidades, bases legais e canais para exercício de direitos.
          </p>
        </div>
        <button type="button" onClick={onClose} className="btn-primary mt-7">
          Entendi
        </button>
      </div>
    </dialog>
  );
}
