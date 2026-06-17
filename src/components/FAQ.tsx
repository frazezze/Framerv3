import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { FAQS } from "../data/site";

function Toggle({ open }: { open: boolean }) {
  return (
    <span className="relative grid h-7 w-7 flex-none place-items-center">
      <span className="absolute h-[2.5px] w-4 rounded-full bg-accent" />
      <motion.span
        animate={{ rotate: open ? 0 : 90 }}
        transition={{ duration: 0.3 }}
        className="absolute h-[2.5px] w-4 rounded-full bg-accent"
      />
    </span>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="FAQ">Your Questions, Answered</SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
          {/* sticky helper card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card-lg bg-[linear-gradient(160deg,#f4f4f4_0%,#dedede_100%)] p-8 shadow-soft ring-1 ring-black/[0.03]">
              <img
                src="/assets/avatar-joris.png"
                alt="Joris"
                className="h-14 w-14 rounded-full object-cover ring-4 ring-white"
              />
              <p className="mt-6 text-[22px] font-medium leading-snug tracking-[-0.01em] text-ink">
                Have more questions? Book a free discovery call
              </p>
              <a href="#contact" className="btn-dark mt-6">
                Book a Discovery Call
                <span aria-hidden>→</span>
              </a>
              <p className="mt-6 text-[15px] text-muted">
                Or, email me at{" "}
                <a href="mailto:joris@hanzo.com" className="text-accent underline-offset-2 hover:underline">
                  joris@hanzo.com
                </a>
              </p>
            </div>
          </div>

          {/* accordion */}
          <div>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-black/10">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[clamp(1.05rem,1.6vw,1.4rem)] font-medium leading-snug tracking-[-0.01em] text-ink">
                      {f.q}
                    </span>
                    <Toggle open={isOpen} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] pb-7 pr-10 text-[17px] leading-relaxed text-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
