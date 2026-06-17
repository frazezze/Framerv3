import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { PROCESS_STEPS } from "../data/site";

const CARD_TRANSFORMS = [
  "lg:-rotate-[5deg] lg:translate-y-6",
  "lg:rotate-[3deg] lg:-translate-y-4",
  "lg:-rotate-[3deg] lg:translate-y-8",
];

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 160 90"
      className={`h-24 w-40 ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M6 70C40 12 110 8 150 40"
        stroke="#eb4b26"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.5 9"
      />
      <path
        d="M150 40c-9-3-16-7-20-13M150 40c-9 1-17 1-23-2"
        stroke="#eb4b26"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Our Process, Explained">
          Here's how it works
        </SectionHeading>

        <div className="relative mx-auto mt-20 grid max-w-[1120px] grid-cols-1 gap-7 md:grid-cols-3 lg:gap-10">
          {/* connecting hand-drawn arrows */}
          <div className="pointer-events-none absolute left-[30%] top-[-8px] z-20 hidden -translate-x-1/2 lg:block">
            <Arrow />
          </div>
          <div className="pointer-events-none absolute left-[70%] top-[-18px] z-20 hidden -translate-x-1/2 lg:block">
            <Arrow />
          </div>

          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`group relative z-10 transition-transform duration-500 will-change-transform hover:!rotate-0 hover:!translate-y-0 ${CARD_TRANSFORMS[i]}`}
            >
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-[280px] flex-col rounded-card bg-white p-8 shadow-card sm:h-[320px]"
              >
                <span className="font-sans text-[64px] font-semibold leading-none tracking-tight text-ink">
                  {s.n}
                </span>
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[26ch] text-[17px] leading-snug text-muted-light">
                    {s.body}
                  </p>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
