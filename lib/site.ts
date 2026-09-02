// ─────────────────────────────────────────────────────────────────────────────
// Synced from Aparajita_Resume(V8).pdf. Items still needing your input are
// marked // TODO.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Aparajita Gupta",
  // Appears after your name in the browser tab.
  role: "Computer Engineer",
  tagline:
    "Computer engineering student at Purdue (AI/ML concentration), working across embedded systems, machine learning, and backend automation.",
  description:
    "Portfolio of Aparajita Gupta — a computer engineering student at Purdue University concentrating in AI/ML, with experience across embedded systems, machine learning research, and full-stack automation.",
  // Set this once deployed (e.g. https://aparajitagupta.vercel.app or a custom domain).
  url: "https://your-portfolio.vercel.app", // TODO
  email: "gguptaparajita@gmail.com",
  location: "San Ramon, California",
  education: {
    school: "Purdue University",
    degree: "B.S. Computer Engineering, concentration in AI/ML",
    graduation: "Graduating May 2027",
  },
  availability:
    "Seeking internships in software engineering, embedded systems, and AI/ML.",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export const socials: SocialLink[] = [
  // TODO: replace with your real GitHub URL (remove this entry if you don't
  // want to link it).
  { label: "GitHub", href: "https://github.com/yourhandle", primary: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guptaaparajita",
    primary: true,
  },
  { label: "Email", href: `mailto:${site.email}`, primary: true },
  { label: "Resume", href: "/resume.pdf", primary: true },
];

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];
