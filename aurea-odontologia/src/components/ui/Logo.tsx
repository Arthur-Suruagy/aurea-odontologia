type Props = { light?: boolean };

export default function Logo({ light = false }: Props) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-serif text-[1.75rem] font-medium tracking-[0.04em] ${
          light ? "text-offwhite" : "text-petrol"
        }`}
      >
        Áurea
      </span>
      <span
        className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-gold" : "text-gold-dark"
        }`}
      >
        Odontologia Integrada
      </span>
    </span>
  );
}
