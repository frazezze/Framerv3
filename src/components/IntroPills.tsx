import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SKILL_PILLS } from "../data/site";

function Glyph({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "#fff",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "grid":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <rect x="4" y="4" width="7" height="7" rx="1.6" {...common} />
          <rect x="13" y="4" width="7" height="7" rx="1.6" {...common} />
          <rect x="4" y="13" width="7" height="7" rx="1.6" {...common} />
          <rect x="13" y="13" width="7" height="7" rx="1.6" {...common} />
        </svg>
      );
    case "layout":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <rect x="4" y="4" width="16" height="16" rx="2.5" {...common} />
          <path d="M10 4v16" {...common} />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <circle cx="11" cy="11" r="6" {...common} />
          <path d="m20 20-3.5-3.5" {...common} />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <path d="M3 14c3 0 3-6 6-6s3 8 6 8 3-6 6-6" {...common} />
        </svg>
      );
    case "frame":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <path d="M8 3H6a3 3 0 0 0-3 3v2M16 3h2a3 3 0 0 1 3 3v2M8 21H6a3 3 0 0 1-3-3v-2M16 21h2a3 3 0 0 0 3-3v-2" {...common} />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          <circle cx="12" cy="12" r="8" {...common} />
          <circle cx="12" cy="12" r="3.4" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

// desktop positions (percent within the section) — left + top
const POS = [
  { left: "0%", top: "16%", rot: -7 }, // Design systems
  { left: "3%", top: "54%", rot: 6 }, // UI/UX
  { left: "9%", top: "84%", rot: -4 }, // Research
  { left: "81%", top: "12%", rot: 6 }, // Animation
  { left: "84%", top: "50%", rot: -8 }, // Prototyping
  { left: "74%", top: "85%", rot: 5 }, // Strategy
];

export default function IntroPills() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,#f3f3f3_0%,#dedede_100%)]" />
      <div ref={ref} className="container-x relative">
        <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
          <span className="font-serif text-[28px] italic text-muted">Hello!</span>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-[1.14] tracking-[-0.03em]"
          >
            <span className="text-ink">We help startups and enterprise to </span>
            <span className="text-muted-light">
              establish an emotional connection between their products and happy
              engaged customers
            </span>
          </motion.h2>
        </div>

        {/* desktop floating draggable pills */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {SKILL_PILLS.map((p, i) => (
            <motion.div
              key={p.label}
              drag
              dragConstraints={ref}
              dragElastic={0.2}
              whileDrag={{ scale: 1.06, zIndex: 30 }}
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200, damping: 18 }}
              className="pointer-events-auto absolute z-10 cursor-grab active:cursor-grabbing"
              style={{ left: POS[i].left, top: POS[i].top, rotate: `${POS[i].rot}deg` }}
            >
              <div className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-5 shadow-pill ring-1 ring-black/[0.03]">
                <span
                  className="grid h-9 w-9 place-items-center rounded-[12px]"
                  style={{ backgroundColor: p.color }}
                >
                  <Glyph name={p.icon} />
                </span>
                <span className="whitespace-nowrap text-[15px] font-medium text-ink">
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* mobile/tablet static row */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
          {SKILL_PILLS.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 shadow-pill"
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-[10px]"
                style={{ backgroundColor: p.color }}
              >
                <Glyph name={p.icon} />
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-ink">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
