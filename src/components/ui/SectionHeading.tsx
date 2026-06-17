import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  children,
  align = "center",
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {align === "center" ? (
        <span className="eyebrow">{eyebrow}</span>
      ) : (
        <span className="font-serif text-[22px] italic text-muted">{eyebrow}</span>
      )}
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 text-[clamp(2rem,5vw,3.7rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink"
      >
        {children}
      </motion.h2>
    </div>
  );
}
