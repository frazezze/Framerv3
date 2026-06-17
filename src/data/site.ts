export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const SKILL_PILLS = [
  { label: "Design systems", color: "#eb4b26", icon: "grid" },
  { label: "UI/UX", color: "#1c1c1c", icon: "layout" },
  { label: "Research", color: "#2f6bff", icon: "search" },
  { label: "Animation", color: "#16a34a", icon: "wave" },
  { label: "Prototyping", color: "#d6409f", icon: "frame" },
  { label: "Strategy", color: "#eab308", icon: "target" },
] as const;

export const PROCESS_STEPS = [
  {
    n: "1",
    title: "Subscribe",
    body: "Choose a plan and request as many designs as you need.",
  },
  {
    n: "2",
    title: "Request",
    body: "Send your briefs and we'll get to work — one task at a time.",
  },
  {
    n: "3",
    title: "Get Your Designs",
    body: "Receive polished, dev-ready designs within a day or two.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Joris was a game-changer. He instantly understood our vision and translated it into a sleek, intuitive product. The process felt effortless, and the results exceeded our expectations.",
    name: "Sophie Lemaire",
    role: "Product Lead at Loomi",
    avatar: "/assets/avatar-sophie.png",
  },
  {
    quote:
      "Joris brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been incredible.",
    name: "Milan Bakker",
    role: "Founder of Drifted Studio",
    avatar: "/assets/avatar-milan.png",
  },
  {
    quote:
      "Astrid's minimalist design approach transformed our brand. The simplicity and clarity she brought to our identity made us stand out in a crowded market.",
    name: "Helena Moreau",
    role: "Creative Director at Studio Novo",
    avatar: "/assets/avatar-helena.png",
  },
];

export const CASE_STUDIES = [
  {
    title: "Strida",
    image: "/assets/case-strida.jpg",
    tags: ["portfolio", "sidebar"],
  },
  {
    title: "Bravo",
    image: "/assets/case-bravo.jpg",
    tags: ["UI/UX", "App"],
  },
  {
    title: "Nitro",
    image: "/assets/case-nitro.jpg",
    tags: ["Design System", "Web"],
  },
  {
    title: "Fargo",
    image: "/assets/case-fargo.jpg",
    tags: ["SaaS", "Web"],
  },
];

export const WORK_HISTORY = [
  { role: "Freelance Practice", company: "Hanzo Co.", from: "2011", to: "Now" },
  { role: "Design Lead", company: "Google", from: "2024", to: "Now" },
  { role: "Senior Designer", company: "PayPal", from: "2019", to: "2024" },
  { role: "Product Designer", company: "Meta", from: "2016", to: "2019" },
];

export const PLAN_FEATURES = [
  "Unlimited design requests",
  "Fast, 1–2 day turnaround",
  "Fixed monthly rate",
  "Async communication",
  "Flexible, scalable scope",
  "Pause or cancel anytime",
];

export const TRAITS = [
  { label: "Senior-level quality", icon: "sparkles" },
  { label: "Systems thinking", icon: "boxes" },
  { label: "Developer-friendly", icon: "code" },
  { label: "Clear process", icon: "pie" },
  { label: "On-brand, every time", icon: "palette" },
  { label: "Reliable partner", icon: "handshake" },
  { label: "Fast execution", icon: "zap" },
  { label: "Thoughtful feedback", icon: "message" },
  { label: "Smooth handoff", icon: "package" },
];

export const FAQS = [
  {
    q: "What's the difference between a subscription and a custom project?",
    a: "The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch.",
  },
  {
    q: "How fast is the turnaround?",
    a: "Most requests are delivered within 1–2 business days. Larger tasks may take longer, but you'll always be kept in the loop.",
  },
  {
    q: "How many requests can I make?",
    a: "As many as you like — with a subscription, you can queue unlimited requests, and they'll be handled one at a time in priority order.",
  },
  {
    q: "What types of design do you handle?",
    a: "Websites, product UI, landing pages, brand assets, decks, social media visuals — anything digital that needs to look and feel sharp.",
  },
  {
    q: "What tools do you use?",
    a: "Figma for design, Notion for task management, and Slack or email for async communication.",
  },
  {
    q: "Can I pause the subscription?",
    a: "Yes — you can pause anytime and resume when you're ready. Unused days roll over.",
  },
  {
    q: "Do you offer development too?",
    a: "Joris focuses on design only, but all deliverables are dev-ready. He can also recommend trusted no-code or Webflow/Framer developers if needed.",
  },
];

/** Mockups used in the hero collage (perspective grid rows). */
export const COLLAGE_ROWS: string[][] = [
  [
    "/assets/mock-imac.jpg",
    "/assets/mock-checkout.jpg",
    "/assets/mock-wallet.jpg",
    "/assets/mock-piggy.jpg",
  ],
  [
    "/assets/mock-builder.png",
    "/assets/mock-hobby.jpg",
    "/assets/mock-career.jpg",
    "/assets/mock-card.jpg",
  ],
  [
    "/assets/case-fargo.jpg",
    "/assets/case-nitro.jpg",
    "/assets/case-bravo.jpg",
    "/assets/case-strida.jpg",
  ],
];

export const TRUSTED_AVATARS = [
  "/assets/avatar-sophie.png",
  "/assets/avatar-milan.png",
  "/assets/avatar-a.png",
  "/assets/avatar-b.png",
];
