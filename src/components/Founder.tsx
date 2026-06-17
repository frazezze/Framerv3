import { motion, useReducedMotion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { WORK_HISTORY } from "../data/site";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export default function Founder() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Our Projects</span>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(2.1rem,5.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.04em]"
          >
            <span className="text-ink">Pushing boundaries </span>
            <span className="text-muted-light">since 2011</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          {/* portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[26px] bg-white p-1.5 shadow-card">
              <img
                src="/assets/portrait-joris.png"
                alt="Joris van Dijk"
                className="aspect-[4/3.4] w-full rounded-[20px] object-cover"
              />
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div className="flex items-center gap-3 text-muted-light">
                <a href="#" aria-label="Instagram" className="transition hover:text-ink">
                  <Instagram className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </a>
                <a href="#" aria-label="LinkedIn" className="transition hover:text-ink">
                  <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </a>
                <a href="#" aria-label="X" className="transition hover:text-ink">
                  <XIcon />
                </a>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-ink">Joris van Dijk</div>
                <div className="text-sm text-muted-light">Hanzo Studio, Founder</div>
              </div>
            </div>
          </motion.div>

          {/* bio + history */}
          <div className="flex flex-col">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[52ch] text-[clamp(1.25rem,2vw,1.7rem)] font-normal leading-snug tracking-[-0.01em] text-ink"
            >
              Joris van Dijk is a Dutch designer known for his minimalist,
              expressive digital work. He helps startups and studios create clean
              interfaces and strong branding. Based in Utrecht, he blends function
              with emotion — and often spends his free time cycling or exploring
              generative art.
            </motion.p>

            <div className="mt-12 border-l border-black/15 pl-6 lg:mt-16">
              {WORK_HISTORY.map((w) => (
                <div
                  key={w.role + w.company}
                  className="grid grid-cols-2 items-center gap-4 border-b border-black/10 py-5 last:border-b-0 sm:grid-cols-3"
                >
                  <span className="text-[17px] text-ink">{w.role}</span>
                  <span className="hidden text-[17px] text-muted-light sm:block">
                    {w.company}
                  </span>
                  <span className="text-right text-[17px] text-muted-light">
                    {w.from} <span className="px-1">→</span> {w.to}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
