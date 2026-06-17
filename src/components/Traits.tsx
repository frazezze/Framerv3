import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Boxes,
  Code2,
  PieChart,
  Palette,
  Handshake,
  Zap,
  MessageSquare,
  Package,
  type LucideIcon,
} from "lucide-react";
import { TRAITS } from "../data/site";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  boxes: Boxes,
  code: Code2,
  pie: PieChart,
  palette: Palette,
  handshake: Handshake,
  zap: Zap,
  message: MessageSquare,
  package: Package,
};

export default function Traits() {
  const reduce = useReducedMotion();
  return (
    <section className="relative pb-8 pt-4 sm:pb-16">
      <div className="container-x">
        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-x-16 sm:grid-cols-2">
          {TRAITS.map((t, i) => {
            const Icon = ICONS[t.icon];
            return (
              <motion.div
                key={t.label}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
                className="flex items-center gap-4 border-b border-black/10 py-5"
              >
                <Icon className="h-5 w-5 flex-none text-muted" strokeWidth={1.5} />
                <span className="text-[17px] text-muted">{t.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
