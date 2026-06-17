import { motion, useReducedMotion } from "framer-motion";
import WorkCollage from "./WorkCollage";
import { TRUSTED_AVATARS } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

function InlineThumb({ src, rotate }: { src: string; rotate: number }) {
  return (
    <span
      className="mx-[0.18em] inline-block h-[0.62em] w-[1.05em] overflow-hidden rounded-[0.2em] align-middle shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/10 sm:rounded-[0.24em]"
      style={{ transform: `translateY(-0.04em) rotate(${rotate}deg)` }}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </span>
  );
}

function InlineSquircle() {
  return (
    <span className="mx-[0.18em] inline-grid h-[0.72em] w-[0.72em] -translate-y-[0.04em] place-items-center rounded-[0.24em] bg-gradient-to-b from-[#2c2c2c] to-[#0c0c0c] align-middle shadow-[0_12px_24px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
      <svg viewBox="0 0 24 24" className="h-[0.38em] w-[0.38em]" fill="none" aria-hidden>
        <path
          d="M12 3l2.4 5.8L20 11l-5.6 2.2L12 19l-2.4-5.8L4 11l5.6-2.2L12 3z"
          fill="#fff"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* soft radial light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(80%_60%_at_50%_0%,#fafafa_0%,#ededed_60%)]" />

      <div className="container-x relative">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="pill-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Booking Open — 2 Spots Left
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-7 font-sans text-[clamp(2.4rem,6.6vw,4.8rem)] font-medium leading-[1.05] tracking-[-0.04em] text-ink"
          >
            <span className="block sm:whitespace-nowrap">
              Unlimited <InlineThumb src="/assets/mock-card.jpg" rotate={-6} />{" "}
              <span className="text-muted-light">Design</span>
            </span>
            <span className="block sm:whitespace-nowrap">
              <span className="text-muted-light">for</span>{" "}
              <InlineSquircle /> Solid Startups
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mt-7 max-w-[44ch] text-balance text-lg text-muted sm:text-xl"
          >
            We help startups and brands create beautiful, functional products —
            fast and hassle-free.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
          >
            <a href="#pricing" className="btn-dark">
              Choose your plan
              <span aria-hidden>→</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {TRUSTED_AVATARS.map((a) => (
                  <img
                    key={a}
                    src={a}
                    alt=""
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-surface"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted">
                Trusted by Leaders
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <WorkCollage />
    </section>
  );
}
