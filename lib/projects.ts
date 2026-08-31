// ─────────────────────────────────────────────────────────────────────────────
// YOUR PROJECTS. This array is the single source of truth for both the
// /projects grid and each /projects/[slug] detail page.
//
// Tips:
//  - 4–6 projects. Aim for coverage: a couple SWE, 1–2 embedded, 1–2 AI.
//  - `featured: true` surfaces it on the homepage (keep it to 3).
//  - Write `problem` / `approach` / `challenges` / `outcome` as if explaining
//    to an interviewer. 2–4 sentences each. Be specific, use numbers.
//  - Put images in /public/projects/<slug>/ and reference them as
//    "/projects/<slug>/whatever.png". Real hardware photos > mockups.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory = "swe" | "embedded" | "ai";

export const categoryLabels: Record<ProjectCategory, string> = {
  swe: "Software",
  embedded: "Embedded / Hardware",
  ai: "AI / ML",
};

export type Project = {
  slug: string;
  title: string;
  summary: string; // one line, shown on cards
  category: ProjectCategory[];
  featured?: boolean;
  date: string; // ISO-ish, used only for sorting (newest first)
  stack: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
    writeup?: string;
  };
  role?: string; // fill in for team/course projects
  problem: string;
  approach: string;
  challenges: string;
  outcome: string;
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "example-swe-project",
    title: "Example — Full-stack Project",
    summary:
      "One sentence on what it does and who it's for. Replace this whole entry.",
    category: ["swe"],
    featured: true,
    date: "2026-05",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/yourhandle/example",
      demo: "https://example.com",
    },
    role: "Solo project. Designed the schema, built the API and frontend, deployed to Fly.io.",
    problem:
      "Describe the problem. What need does this address, and why did it matter enough to build?",
    approach:
      "Describe the architecture and the key technical decisions. Why this database, this framework, this pattern? Mention one tradeoff you made on purpose.",
    challenges:
      "The hardest part and how you worked through it. This is the part interviewers dig into — pick something real (a race condition, a perf cliff, a protocol quirk).",
    outcome:
      "The result. Numbers if you have them: latency, users, throughput, a grade-independent measure of impact. What you'd do differently next time.",
    images: [
      // { src: "/projects/example-swe-project/screenshot.png", alt: "App dashboard" },
    ],
  },
  {
    slug: "example-embedded-project",
    title: "Example — Embedded Systems Project",
    summary: "One sentence on the device and what it does. Replace this entry.",
    category: ["embedded"],
    featured: true,
    date: "2026-03",
    stack: ["C", "STM32", "FreeRTOS", "I2C", "KiCad"],
    links: { github: "https://github.com/yourhandle/example-fw" },
    role: "Course project, team of 3. I owned the firmware and the sensor driver layer.",
    problem:
      "What the system senses/controls and the real-world constraint (power budget, timing deadline, cost).",
    approach:
      "MCU choice, RTOS vs. bare-metal decision, how tasks/interrupts are structured, the bus protocol and why.",
    challenges:
      "e.g. debugging an intermittent I2C bus lockup, meeting a hard real-time deadline, fitting into flash/RAM.",
    outcome:
      "Measured result: sample rate achieved, power draw, accuracy vs. reference. Demo video or photos below.",
    images: [
      // { src: "/projects/example-embedded-project/board.jpg", alt: "Assembled PCB on the bench" },
    ],
  },
  {
    slug: "example-ai-project",
    title: "Example — Applied AI Project",
    summary:
      "One sentence: the task, the data, and the outcome. Replace this entry.",
    category: ["ai"],
    featured: true,
    date: "2026-01",
    stack: ["Python", "PyTorch", "Hugging Face", "Weights & Biases"],
    links: { github: "https://github.com/yourhandle/example-ml" },
    role: "Solo. Data pipeline, training, evaluation, and a small inference demo.",
    problem:
      "The task and why a learned model is the right tool. What does success look like numerically?",
    approach:
      "Data sources and cleaning, model architecture or base model, training setup, and how you evaluated (metric, baseline, held-out set).",
    challenges:
      "e.g. class imbalance, overfitting on a small dataset, inference latency, prompt/eval design for an LLM feature.",
    outcome:
      "Final metric vs. baseline, what the model gets wrong, and any deployment (a demo, an API, a batch job).",
    images: [
      // { src: "/projects/example-ai-project/results.png", alt: "Evaluation results chart" },
    ],
  },
  {
    slug: "example-second-swe-project",
    title: "Example — Systems / Tooling Project",
    summary:
      "A CLI, library, or systems tool. One sentence. Replace this entry.",
    category: ["swe"],
    date: "2025-11",
    stack: ["Rust", "Tokio"],
    links: { github: "https://github.com/yourhandle/example-tool" },
    problem: "What friction this removes for its users.",
    approach: "Design of the tool, key algorithms or data structures.",
    challenges: "The interesting engineering problem inside it.",
    outcome: "Adoption, stars, benchmarks, or personal use.",
  },
];

// Newest first.
export const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredProjects = sortedProjects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
