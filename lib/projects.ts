// ─────────────────────────────────────────────────────────────────────────────
// Synced from Aparajita_Resume(V8).pdf. Each entry drives both the /projects
// grid and its /projects/[slug] detail page.
//
// The `approach` / `challenges` / `outcome` fields below are drafted from the
// resume bullets — expand them in your own words before launch, and add repo
// links + images (put images in /public/projects/<slug>/).
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
  summary: string;
  category: ProjectCategory[];
  featured?: boolean;
  date: string; // used only for sorting (newest first)
  stack: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
    writeup?: string;
  };
  role?: string;
  problem: string;
  approach: string;
  challenges: string;
  outcome: string;
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "soybean-digital-phenotyping",
    title: "Digital Phenotyping with Soybean Imagery",
    summary:
      "CNN pipeline linking soybean plant phenotypes to genotypes from 8K field images, reaching 96.4% accuracy.",
    category: ["ai"],
    featured: true,
    date: "2026-05",
    stack: ["Python", "PyTorch", "ResNet-18", "OpenCV", "scikit-learn"],
    links: {
      // github: "https://github.com/yourhandle/...", // TODO if public
    },
    role: "Data Mine researcher (ML + data science) on the Inari-sponsored project at Purdue, Aug 2025 – May 2026.",
    problem:
      "Inari wanted to connect observable soybean plant traits (phenotypes) to their underlying genetics (genotypes) directly from field imagery, so breeding decisions could be driven by automated image analysis instead of manual scoring.",
    approach:
      "Built phenotyping algorithms to process and analyze ~8,000 soybean images: exploratory data analysis, OTSU and SAM segmentation to isolate plants, and feature extraction of color/vegetation indices (DGCI, MPRI, HSV). Trained and compared 5+ models — a custom CNN, ResNet-18, KNN, SVM, and Random Forest — to find the best predictor of genotype.",
    challenges:
      "Cleaning and standardizing a large, inconsistent field-image dataset; choosing segmentation that held up across lighting conditions; and avoiding overfitting when comparing models on limited labeled data.",
    outcome:
      "ResNet-18 was the strongest predictor at 96.4% accuracy and an F1 score of 0.965. The extracted trait features and evaluation framework were delivered to the industry partner.",
    images: [
      // { src: "/projects/soybean-digital-phenotyping/segmentation.png", alt: "Soybean image segmentation example" },
    ],
  },
  {
    slug: "ev-race-car-battery-system",
    title: "EV Race Car Battery System",
    summary:
      "Electrical design of a 24s8p, 192-cell pack for a student-built EV — 1st place in Battery Efficiency at the EV Grand Prix.",
    category: ["embedded"],
    featured: true,
    date: "2026-04",
    stack: ["Battery management systems", "Thermal management", "KiCad", "Telemetry"],
    role: "Electrical Engineer on Purdue IEEE Racing, Jan 2025 – present.",
    problem:
      "The team needed a safe, efficient high-voltage battery for a student-built electric race car that could sustain a full competition run while minimizing power loss.",
    approach:
      "Contributed to the electrical design of a 24s8p, 192-cell pack with 36 backup cells. Integrated nickel-strip interconnects and a battery management system with thermal management for safe motor control, and coordinated with the mechanical team on power distribution and telemetry integration to speed up testing.",
    challenges:
      "Keeping resistive and thermal losses low across nearly 200 cells while maintaining safety margins, and integrating BMS telemetry with the rest of the car under a competition timeline.",
    outcome:
      "Power loss held to ~5 W. The 4,320 Wh, 86.4 V pack sustained a 55-minute race and earned 1st Place in Battery Efficiency at the EV Grand Prix.",
    images: [
      // { src: "/projects/ev-race-car-battery-system/pack.jpg", alt: "Assembled battery pack" },
    ],
  },
  {
    slug: "brightgrade",
    title: "BrightGrade — Automated Deadline Tracking",
    summary:
      "Dual-source pipeline that parses syllabi with an LLM and syncs 219 course tasks to Todoist and Calendar.",
    category: ["swe", "ai"],
    featured: true,
    date: "2026-02",
    stack: [
      "Python",
      "Playwright",
      "Google Gemini API",
      "Todoist REST API",
      "AppleScript",
    ],
    links: {
      // github: "https://github.com/yourhandle/brightgrade", // TODO if public
    },
    role: "Solo project.",
    problem:
      "Tracking assignment due dates across many courses is tedious and error-prone when each class publishes them differently (LMS, syllabus PDF, announcements).",
    approach:
      "Built a dual-source pipeline covering 219 tasks across 7 courses: scraped the LMS with Playwright and used the Google Gemini API to parse syllabus PDFs and auto-generate task titles matching the user's naming style. Results are pushed to Todoist via its REST API and to Calendar.app via AppleScript-driven events.",
    challenges:
      "Reconciling conflicting or missing dates between sources, keeping LLM-generated titles consistent with the user's style, and cutting false positives — fixed 30+ bugs by validating against live account data.",
    outcome:
      "Resolved 88% of due dates automatically, matched user style across 193 tasks, corrected 35+ real tasks, and reduced false-positive noise by ~50%, syncing exams and 40+ tasks into the calendar.",
    images: [
      // { src: "/projects/brightgrade/pipeline.png", alt: "BrightGrade pipeline diagram" },
    ],
  },
  {
    slug: "iot-home-sprinkler-system",
    title: "IoT Home Sprinkler System",
    summary:
      "ESP32-based 4-zone sprinkler controller with Wi-Fi scheduling and an iOS app over a REST API.",
    category: ["embedded", "swe"],
    date: "2025-12",
    stack: ["C++", "Python", "Swift", "ESP32", "REST API"],
    links: {
      // github: "https://github.com/yourhandle/...", // TODO if public
    },
    role: "Solo project.",
    problem:
      "Home irrigation controllers are often closed, inflexible, and hard to control remotely.",
    approach:
      "Designed an ESP32 microcontroller system controlling 4 water zones with Wi-Fi scheduling. Wrote the control logic in C++/Python, exposed a REST API, and built an iOS app in Swift for remote control. Added an on-device LCD to display live sensor data.",
    challenges:
      "Maintaining reliable Wi-Fi connectivity and low-latency control on a constrained microcontroller while keeping the API responsive from the phone.",
    outcome:
      "Achieved sub-1-second response latency per zone for remote control, with real-time feedback on the device LCD.",
    images: [
      // { src: "/projects/iot-home-sprinkler-system/device.jpg", alt: "Sprinkler controller hardware" },
    ],
  },
  {
    slug: "3-band-analog-audio-equalizer",
    title: "3-Band Analog Audio Equalizer",
    summary:
      "5-stage analog equalizer with bass/mid/treble control built from passive RC filters and op-amps.",
    category: ["embedded"],
    date: "2025-11",
    stack: ["Analog circuit design", "LM356", "LM386", "RC filters", "Oscilloscope"],
    role: "Solo project.",
    problem:
      "Build a working audio equalizer entirely in the analog domain to shape bass, midrange, and treble before amplification.",
    approach:
      "Designed and built a 5-stage circuit: passive RC filters set three frequency bands, op-amps provide gain and buffering, and an LM386 power stage drives the speaker. Verified the design on an oscilloscope with frequency-response analysis.",
    challenges:
      "Hitting the target cutoff frequencies within tolerance and keeping the output flat and low-noise across the full audio band with real component values.",
    outcome:
      "All three cutoff frequencies landed well within ±10% tolerance, output ripple stayed under 1.26 mV RMS across 100 Hz–10 kHz, and the LM386 stage drove an 8 Ω speaker at 578–601 mW across the tested range.",
    images: [
      // { src: "/projects/3-band-analog-audio-equalizer/bench.jpg", alt: "Equalizer on the bench" },
    ],
  },
];

export const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredProjects = sortedProjects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
