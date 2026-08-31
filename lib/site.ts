// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE FIRST. Everything below shows up across the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Your Name", // TODO
  // Appears after your name in the browser tab, e.g. "Your Name — Computer Engineer".
  role: "Computer Engineer", // TODO
  // One line under your name in the hero. Keep it concrete.
  tagline:
    "Computer engineering student building across software, embedded systems, and applied AI.",
  // 2–3 sentences for meta description / link previews.
  description:
    "Portfolio of Your Name — a computer engineering student focused on software engineering, hardware/embedded systems, and applied AI. Selected projects, background, and resume.",
  // Set this once you know your deployed URL (e.g. https://yourname.vercel.app
  // or a custom domain). Used for absolute URLs in metadata / OG tags.
  url: "https://your-portfolio.vercel.app", // TODO
  email: "asthu0907@gmail.com", // TODO confirm this is the address you want public
  location: "City, Country", // TODO — city-level only, no street address
  // Expected graduation, availability — shown on the About page.
  education: {
    school: "Your University", // TODO
    degree: "B.S. Computer Engineering", // TODO
    graduation: "Expected May 2027", // TODO
  },
  availability: "Seeking Summer 2027 internships in SWE, embedded systems, or AI.", // TODO
} as const;

export type SocialLink = {
  label: string;
  href: string;
  // Whether to show in the top nav (vs. footer only).
  primary?: boolean;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yourhandle", primary: true }, // TODO
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourhandle",
    primary: true,
  }, // TODO
  { label: "Email", href: `mailto:${site.email}`, primary: true },
  // Resume PDF lives in /public. Replace resume.pdf with your real file.
  { label: "Resume", href: "/resume.pdf", primary: true },
];

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];
