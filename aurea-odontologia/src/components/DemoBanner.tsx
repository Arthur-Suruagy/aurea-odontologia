import { clinic } from "../data/clinic";

/** Faixa que deixa claro que o site é demonstrativo. Desligue com clinic.demoMode = false. */
export default function DemoBanner() {
  if (!clinic.demoMode) return null;
  return (
    <div className="bg-petrol-900 px-4 py-2 text-center text-xs text-offwhite/80">
      Site demonstrativo de portfólio · Clínica, equipe, contatos e endereço são fictícios
    </div>
  );
}
