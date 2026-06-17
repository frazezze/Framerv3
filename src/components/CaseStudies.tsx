import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { CASE_STUDIES } from "../data/site";

export default function CaseStudies() {
  const reduce = useReducedMotion();
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Our Projects">Recent Case Studies</SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <motion.a
              key={c.title}
              href="#work"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-card bg-[#e7e7e7] ring-1 ring-black/[0.03]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full scale-[1.04] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.09]"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-medium tracking-tight text-ink">
                  {c.title}
                </h3>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
