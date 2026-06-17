import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { PLAN_FEATURES, TESTIMONIALS } from "../data/site";

export default function Pricing() {
  const reduce = useReducedMotion();
  const [plan, setPlan] = useState<"monthly" | "custom">("monthly");
  const helena = TESTIMONIALS[2];

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Pricing">Fixed Price, Zero Limits</SectionHeading>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-[1080px] overflow-hidden rounded-card-lg bg-[linear-gradient(160deg,#f4f4f4_0%,#e0e0e0_100%)] p-7 shadow-card ring-1 ring-black/[0.03] sm:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* left: price */}
            <div className="flex flex-col">
              <div className="inline-flex w-fit items-center rounded-full bg-black/5 p-1 text-sm font-medium">
                <button
                  onClick={() => setPlan("monthly")}
                  className={`rounded-full px-5 py-2 transition ${
                    plan === "monthly"
                      ? "bg-accent text-white shadow"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setPlan("custom")}
                  className={`rounded-full px-5 py-2 transition ${
                    plan === "custom"
                      ? "bg-accent text-white shadow"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Custom
                </button>
              </div>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-[clamp(3rem,7vw,5.2rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                  {plan === "monthly" ? "$7,500" : "Let's talk"}
                </span>
                {plan === "monthly" && (
                  <span className="mb-2 text-2xl font-normal text-muted-light">/mo</span>
                )}
              </div>
              <p className="mt-4 max-w-[34ch] text-[17px] leading-snug text-muted">
                {plan === "monthly"
                  ? "One flat monthly rate. Pause or cancel anytime — no contracts, no surprises."
                  : "Have a larger, fixed-scope project in mind? Let's scope it together."}
              </p>

              <div className="mt-auto pt-10">
                <div className="mb-5 flex items-center gap-2 text-sm text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Booking Open — only 2 Spots Left
                </div>
                <a href="#contact" className="btn-dark">
                  Book Free Discovery Call
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* right: included + testimonial */}
            <div className="rounded-card bg-white p-7 shadow-soft sm:p-8">
              <h3 className="text-lg font-medium text-ink">What's included</h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-muted">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full ring-1 ring-black/15">
                      <Plus className="h-3.5 w-3.5 text-ink" strokeWidth={2} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-black/10 pt-6">
                <p className="text-[15px] leading-snug text-ink">
                  "{helena.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={helena.avatar}
                    alt={helena.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-ink">{helena.name}</div>
                    <div className="text-xs text-muted-light">{helena.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
