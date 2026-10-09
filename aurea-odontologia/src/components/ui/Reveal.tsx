import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
