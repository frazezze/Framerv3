/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        "ink-soft": "#1c1c1c",
        accent: "#eb4b26",
        "accent-bright": "#ff5b29",
        muted: "#727272",
        "muted-light": "#9a9a9a",
        "surface": "#ededed",
        "surface-2": "#e3e3e3",
        "surface-3": "#d6d6d6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
        mono: ["'Fragment Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "28px",
        "card-lg": "36px",
      },
      boxShadow: {
        pill: "0 10px 24px -8px rgba(0,0,0,0.28), 0 2px 6px rgba(0,0,0,0.12)",
        card: "0 30px 60px -28px rgba(0,0,0,0.30), 0 8px 24px -12px rgba(0,0,0,0.18)",
        soft: "0 18px 40px -22px rgba(0,0,0,0.35)",
        btn: "inset 0 1px 0 rgba(255,255,255,0.18), 0 14px 30px -10px rgba(0,0,0,0.55), 0 4px 10px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};
