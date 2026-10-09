import { Armchair, ClipboardList, Facebook, Heart, Instagram, ScanLine } from "lucide-react";

const map = {
  heart: Heart,
  scan: ScanLine,
  clipboard: ClipboardList,
  armchair: Armchair,
  instagram: Instagram,
  facebook: Facebook,
};

export type IconName = keyof typeof map;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const C = map[name];
  return <C className={className} strokeWidth={1.4} aria-hidden="true" />;
}
