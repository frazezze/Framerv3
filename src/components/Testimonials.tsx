import { TESTIMONIALS } from "../data/site";

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-5 w-7 flex-none text-black/25" fill="currentColor" aria-hidden>
      <path d="M0 24V12C0 5.4 4.4 1 11 0l1.6 3.4C9 4.6 7 6.8 6.6 10H12v14H0Zm20 0V12C20 5.4 24.4 1 31 0l1.6 3.4C29 4.6 27 6.8 26.6 10H32v14H20Z" />
    </svg>
  );
}

type T = (typeof TESTIMONIALS)[number];

function Card({ t, offset }: { t: T; offset: boolean }) {
  return (
    <figure
      className={`flex w-[78vw] max-w-[560px] flex-none flex-col border-l border-black/10 pl-8 sm:w-[46vw] ${
        offset ? "lg:mt-24" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <blockquote className="text-[clamp(1.25rem,2vw,1.7rem)] font-normal leading-snug tracking-[-0.01em] text-ink">
          {t.quote}
        </blockquote>
        <QuoteMark />
      </div>
      <figcaption className="mt-8 flex items-center gap-4">
        <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <div className="font-medium text-ink">{t.name}</div>
          <div className="text-sm text-muted-light">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pause-on-hover relative flex w-max gap-12 animate-marquee-x pr-12 [--marquee-duration:46s] sm:gap-16">
        {loop.map((t, i) => (
          <Card key={i} t={t} offset={i % 2 === 1} />
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
    </section>
  );
}
