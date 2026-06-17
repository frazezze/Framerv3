import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-x flex items-center justify-between py-5 sm:py-7">
        <a
          href="#top"
          className="pointer-events-auto select-none rounded-full bg-white px-6 py-3 text-lg font-bold tracking-tight text-ink shadow-pill transition-transform duration-300 hover:-translate-y-0.5"
        >
          Hanzo
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="pointer-events-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-white shadow-pill transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 rounded-full bg-ink" />
            <span className="block h-[2px] w-5 rounded-full bg-ink" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto fixed inset-0 z-50 grain bg-ink/95 backdrop-blur-xl"
          >
            <div className="container-x flex items-center justify-between py-5 sm:py-7">
              <span className="rounded-full bg-white px-6 py-3 text-lg font-bold tracking-tight text-ink">
                Hanzo
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rotate-45 rounded-full bg-white" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
                </span>
              </button>
            </div>

            <nav className="container-x mt-10 flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                  className="border-b border-white/10 py-4 font-sans text-5xl font-medium tracking-tight text-white/90 transition hover:text-white sm:text-7xl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-x mt-12">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-ghost">
                Book a free intro call
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
