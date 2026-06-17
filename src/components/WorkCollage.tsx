import { motion, useReducedMotion } from "framer-motion";
import { COLLAGE_ROWS } from "../data/site";

function FolderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3.2c.6 0 1.17.26 1.56.72l.98 1.16c.39.46.96.72 1.56.72H18.5A2.5 2.5 0 0 1 21 10.1V16.5A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
        stroke="#0d0d0d"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkCollage() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-16 sm:mt-20">
      <div className="container-x">
        <div className="relative h-[440px] overflow-hidden rounded-card-lg bg-[#1b1b1b] sm:h-[560px] lg:h-[660px]">
          {/* tilted perspective plane */}
          <div
            className="absolute left-1/2 top-[8%] h-full w-[150%] -translate-x-1/2"
            style={{ perspective: "1700px" }}
          >
            <div
              className="flex flex-col items-center gap-6 sm:gap-8"
              style={{
                transform: "rotateX(52deg) rotateZ(0deg)",
                transformOrigin: "center top",
              }}
            >
              {COLLAGE_ROWS.map((row, r) => (
                <div
                  key={r}
                  className="flex items-center gap-6 sm:gap-8"
                  style={{ transform: `translateX(${r % 2 === 0 ? "-4%" : "5%"})` }}
                >
                  {row.map((src, i) => (
                    <motion.img
                      key={src + i}
                      src={src}
                      alt=""
                      loading="lazy"
                      initial={reduce ? false : { opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (r * 4 + i) * 0.04, duration: 0.6 }}
                      className="h-[150px] w-[300px] flex-none rounded-2xl object-cover shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 sm:h-[200px] sm:w-[380px] lg:h-[230px] lg:w-[440px]"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* vignette + fades */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_30%,rgba(20,20,20,0.65)_72%,#161616_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1b1b1b] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#161616] to-transparent" />
          <div className="grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

          {/* center CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.span
              initial={{ rotate: -4 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-btn ring-1 ring-white/10"
            >
              See Recent Work
            </motion.span>
            <a
              href="#work"
              aria-label="See recent work"
              className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-pill transition-transform duration-300 hover:-translate-y-1"
            >
              <FolderIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
