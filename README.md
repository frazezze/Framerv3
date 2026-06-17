# Hanzo — Design Craftsman's Portfolio (Pixel-Faithful Clone)

A high-fidelity recreation of the [Hanzo Framer template](https://hanzo.framer.website/), rebuilt from scratch as a modern, production-ready React application. The screenshots in the source brief were treated as the primary source of truth; original assets (images, SVG icons, mockups) were extracted from the live site for maximum visual fidelity.

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (custom design-token theme)
- **Framer Motion** (scroll reveals, draggable skill pills, marquees, accordion)
- **lucide-react** (outline icons)

## Design System

| Token | Value |
| --- | --- |
| Accent (vermilion) | `#eb4b26` |
| Ink (near-black) | `#0d0d0d` |
| Light surface | `#ededed` |
| Display / body | Inter |
| Eyebrow accents | Instrument Serif (italic) |
| Mono labels | Fragment Mono |

## Sections

Hero (embedded-image headline + tilted work collage) · "Hello!" intro with draggable skill pills · Process (Subscribe / Request / Get Your Designs) · Testimonials marquee · Case studies (Strida / Bravo / Nitro / Fargo) · Founder & work history · Pricing ($7,500/mo) · Trait badges · FAQ accordion · "Let's Connect" footer.

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
  components/        # one component per section + ui/ primitives
  data/site.ts       # all copy + asset references (single source of content)
  index.css          # Tailwind layers + design-system utilities
  App.tsx            # page composition
public/assets/       # original images, mockups, avatars, SVG icons
```

## Accessibility

Semantic landmarks, keyboard-operable nav/accordion, `aria-label`s on icon
buttons, and a `prefers-reduced-motion` fallback that renders all reveal
animations in their final visible state.
