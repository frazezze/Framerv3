import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export default function Connect() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[36px] bg-ink text-white">
        {/* diagonal light streak */}
        <div className="pointer-events-none absolute -left-1/4 -top-1/3 h-[120%] w-[80%] rotate-[24deg] bg-[radial-gradient(closest-side,rgba(255,255,255,0.16),transparent_70%)] blur-2xl" />
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" />

        <div className="container-x relative flex flex-col items-center py-28 text-center sm:py-40">
          <span className="flex items-center justify-center gap-4 font-serif text-[22px] italic text-white/55">
            <span className="h-px w-14 bg-white/15 sm:w-20" />
            2 spots available
            <span className="h-px w-14 bg-white/15 sm:w-20" />
          </span>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3rem,11vw,8rem)] font-medium leading-[0.92] tracking-[-0.045em]"
          >
            <span className="text-white">Let's</span>
            <br />
            <span className="text-white/40">Connect</span>
          </motion.h2>

          <p className="mt-8 max-w-[46ch] text-balance text-lg text-white/65 sm:text-xl">
            Feel free to contact me if having any questions. I'm available for new
            projects or just for chatting.
          </p>

          <a href="mailto:joris@hanzo.com" className="btn-ghost mt-9">
            Book a free intro call
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* footer bar */}
        <div className="container-x relative">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
            <span className="text-sm text-white/55">© Hanzo Studio, 2025</span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:joris@hanzo.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full text-white/70 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid h-10 w-10 place-items-center rounded-full text-white/70 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
