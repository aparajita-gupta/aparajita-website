// ─────────────────────────────────────────────────────────────────────────────
// Synced from Aparajita_Resume.pdf (latest, Sep 14 2026). Each entry drives
// both the /projects grid and its /projects/[slug] detail page.
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
    stack: ["Python", "PyTorch", "TensorFlow", "ResNet-18", "OpenCV", "scikit-learn"],
    links: {
      // github: "https://github.com/yourhandle/...", // TODO if public
    },
    role: "Data Mine researcher (ML + data science) on the Inari-sponsored project at Purdue, Aug 2025 – May 2026.",
    problem:
      "Inari wanted to connect observable soybean plant traits (phenotypes) to their underlying genetics (genotypes) directly from field imagery, so breeding decisions could be driven by automated image analysis instead of manual scoring.",
    approach:
      "Built phenotyping algorithms to process and analyze ~8,000 soybean images: exploratory data analysis, OTSU and SAM segmentation to isolate plants, and feature extraction of color/vegetation indices (DGCI, MPRI, HSV). Trained and compared 5+ models in Scikit-learn and TensorFlow — a ResNet-18 CNN, KNN, SVM, and Random Forest — to find the best predictor of genotype.",
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
    stack: ["Battery management systems", "Thermal management", "KiCad", "Precharge circuits"],
    role: "Electrical Engineer on Purdue IEEE Motorsports, Jan 2025 – present.",
    problem:
      "The team needed a safe, efficient high-voltage battery for a student-built electric race car that could sustain a full competition run while minimizing power loss.",
    approach:
      "Contributed to the electrical design of a 24s8p, 192-cell pack with 36 backup cells. Integrated nickel-strip interconnects and a battery management system with thermal management for safe motor control, then redesigned the automated precharge circuit to eliminate chatter and lag, replacing manual switch-based charging.",
    challenges:
      "Keeping resistive and thermal losses low across nearly 200 cells while maintaining safety margins, and getting the precharge circuit to switch cleanly with zero chatter under real load.",
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
      "BrightGrade runs two flows that both feed one shared list of assignments. The first is a fully automated pipeline that runs on a schedule: it pulls the class calendar feed from the school's LMS, cross-checks it against the assignment list on Gradescope to fill in anything missing a due date, then pushes new or updated items to Todoist — writing a task title that matches how the user already names their tasks. The second flow is manual and runs whenever a new syllabus PDF shows up: the user picks the file, an LLM reads it and pulls out the assignments, dates, and locations, and if it spots an exam, it can create a calendar event with the exam's location instead of a plain task. Both flows write into the same central store, so nothing gets pushed twice, and the automated sync always picks up anything the manual step added.",
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
    stack: ["C", "Python", "Swift", "ESP32", "REST API"],
    links: {
      // github: "https://github.com/yourhandle/...", // TODO if public
    },
    role: "Solo project.",
    problem:
      "Home irrigation controllers are often closed, inflexible, and hard to control remotely.",
    approach:
      "Designed an ESP32 microcontroller system controlling 4 water zones with Wi-Fi scheduling. Wrote the control logic in C/Python, exposed a REST API, and built an iOS app in Swift for remote control. Added an on-device LCD to display live sensor data.",
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
      "5-stage analog equalizer with independent bass/mid/treble control, built from passive RC filters, op-amps, and a power amp — no DSP.",
    category: ["embedded"],
    date: "2025-12",
    stack: ["Analog circuit design", "LF356", "LM386", "RC filters", "Oscilloscope"],
    role: "Team project (2), Purdue ECE 20007 final project, Dec 2025, with lab partner Miguel Silguero.",
    problem:
      "Build a working audio equalizer entirely in the analog domain — split an input signal into bass, mid, and treble bands, let the user adjust each independently, then recombine and amplify it to drive a speaker — using only passive filters and op-amps, no digital signal processing.",
    approach:
      "Designed a 5-stage circuit: an input buffer isolates the source; three passive RC filters (LF356-buffered) split the signal into bass (≤320 Hz low-pass), mid (320 Hz–3.2 kHz band-pass), and treble (≥3.2 kHz high-pass) bands; three op-amp volume-control stages let each band's gain be adjusted from 0 to 1 via a 10 kΩ potentiometer; an inverting summing amplifier recombines the three bands with its own potentiometer as master volume; and an LM386 power stage drives an 8 Ω speaker. Verified every stage — filter cutoffs, output-level limits, ripple, and output power — on an oscilloscope with frequency response analysis.",
    challenges:
      "Hitting the 320 Hz and 3.2 kHz cutoff frequencies within ±10% using real resistor values, and reconciling a theoretical summing-stage calculation that predicted a much higher maximum output (~291 mV) than the 100 mV actually measured — most likely because the design math assumed one band at full gain rather than three simultaneous full-gain inputs summing together.",
    outcome:
      "All three filter cutoffs landed within tolerance (338.8 Hz bass, 3.09 kHz treble, matching mid-band cutoffs). Volume control held the signal under 15 mV at minimum (as low as 2.15 mV) and within ~10% of the 100 mV target at maximum across 100 Hz–10 kHz, with only 1.26 mV of ripple across the full spectrum. The LM386 power stage delivered 578–601 mW into an 8 Ω speaker, comfortably clearing the 400 mW requirement at every tested frequency.",
    images: [
      // { src: "/projects/3-band-analog-audio-equalizer/bench.jpg", alt: "Equalizer on the bench" },
    ],
  },
  // Older projects — dropped from the resume as it got more selective, but
  // still real work worth showing. Pulled from earlier resume versions.
  {
    slug: "c-server-client-network",
    title: "C-Based Server & Client Network",
    summary:
      "C chat server handling 5+ concurrent clients over raw TCP/IP and UDP sockets, built to learn network programming from the ground up.",
    category: ["swe"],
    date: "2025-07",
    stack: ["C", "TCP/IP", "UDP", "Sockets"],
    links: {
      // github: "https://github.com/aparajita-gupta/...", // TODO if public
    },
    role: "Solo project.",
    problem:
      "Wanted a concrete, from-scratch understanding of how networked applications actually work below the level of a framework — sockets, ports, the OSI model — instead of treating networking as a black box.",
    approach:
      "Built a C-based chat server handling 5+ concurrent clients, implementing both TCP/IP and UDP socket programming to directly compare performance, latency, and protocol trade-offs. Applied OSI model principles to structure reliable client-server communication and built a terminal-based interface for real-time message exchange.",
    challenges:
      "Managing concurrent client connections without a framework, handling message framing and ordering correctly over raw sockets, and keeping connections stable under load while comparing TCP's reliability against UDP's lower overhead.",
    outcome:
      "A working multi-client chat server validated under load, and a much more concrete grasp of transport-layer protocols and real-time communication trade-offs.",
    images: [],
  },
  {
    slug: "adaptive-cruise-control-analysis",
    title: "Adaptive Cruise Control (ACC) Algorithm Development & Analysis",
    summary:
      "MATLAB algorithm that automatically identifies first-order system parameters for an ACC system from noisy vehicle test data.",
    category: ["ai"],
    date: "2025-06",
    stack: ["MATLAB", "Signal Processing", "System Identification"],
    role: "Purdue University project, Summer 2025.",
    problem:
      "Adaptive cruise control systems need accurate first-order system parameters (time constant, settling time, gain) to tune their control response, but real vehicle test data is noisy and those parameters aren't directly measurable.",
    approach:
      "Developed a MATLAB algorithm to automatically identify first-order system parameters from vehicle test data. Built data filtering pipelines to process 10,000+ test points, reducing measurement noise by roughly 30%, and visualized system response and parameter trends to validate and communicate the results.",
    challenges:
      "Extracting clean parameter estimates from noisy, real-world sensor data without manual tuning, and validating the automated pipeline's accuracy against known benchmarks.",
    outcome:
      "Achieved under 40% average error against benchmarks with a ~30% noise reduction in the processed data — a reliable, automated alternative to manual parameter identification.",
    images: [],
  },
  {
    slug: "555-timer-police-lights",
    title: "555 Timer Police Lights — Monostable & Astable Circuits",
    summary:
      "Dual 555 timer circuit simulating a police strobe pattern, plus monostable/astable timing circuits verified against theory, LTspice, and an oscilloscope.",
    category: ["embedded"],
    date: "2025-11",
    stack: ["555 Timer", "LTspice", "Analog circuit design", "Oscilloscope"],
    role: "Solo course project, Purdue ECE 20007, Nov 2025.",
    problem:
      "Wanted to experimentally verify 555 timer behavior in monostable and astable configurations, then apply it to a real-world timing problem: simulating a police/emergency vehicle strobe pattern, which needs two independent flash rates layered on top of each other.",
    approach:
      "Designed and built a monostable circuit tuned for a 3-second pulse (R ≈ 27 kΩ, C = 100 µF) and astable circuits for 60% and 75% duty cycles, validating each against theoretical calculations, LTspice simulation, and oscilloscope measurements. For the real-world application, chained two 555 timers in astable mode: a slow timer (~0.67 Hz) power-gates a fast timer (~10 Hz), so one LED group strobes quickly in bursts set by the slow timer, alternating with a second LED group — producing a two-color police-light effect.",
    challenges:
      "Getting resistor values to land on exact target timing given available discrete component values, and reasoning through the two-timer power-gating logic so the fast/slow interaction produced alternating rather than simultaneous flashes.",
    outcome:
      "All configurations matched target specs closely: a 3.12 s measured pulse vs. a 3 s target in monostable mode (4% error), and 0%/1.76% error on the 60%/75% astable duty cycles. The police-light circuit produced a working 10 Hz strobe modulated by a ~0.67 Hz alternating signal between two LED colors, confirmed on both LTspice and a real oscilloscope.",
    images: [],
  },
  {
    slug: "lunar-lander-fpga",
    title: "Lunar Lander — FPGA Digital System",
    summary:
      "Real-time lunar lander physics simulator on an FPGA — custom memory, BCD arithmetic unit, control FSM, and display driver, all in SystemVerilog.",
    category: ["embedded"],
    date: "2026-04",
    stack: ["SystemVerilog", "FPGA", "Digital logic design", "FSM design"],
    role: "Purdue ECE 27000 (Digital System Design) capstone lab, Spring 2026.",
    problem:
      "Design a complete digital system — not just a single circuit — that reads live pushbutton input, runs real-time physics for a simulated lunar landing (altitude, velocity, fuel, thrust), and displays the result on seven-segment displays, entirely in synthesizable hardware.",
    approach:
      "Split the design into four communicating modules on an FPGA, mirroring how a CPU separates memory from logic: a memory unit that holds the lander's four quantities in ten's-complement BCD and updates them on each clock edge; an arithmetic unit that computes the next altitude, velocity, and fuel using custom BCD adder/subtractor circuits built from scratch; a control-unit FSM that watches those values each cycle to detect a crash or safe landing and gate further writes; and a display unit that decodes the values onto seven-segment displays, switching between altitude, velocity, fuel, and thrust based on which of four pushbuttons was pressed. All four modules were then integrated and tested on real hardware, with live pushbuttons setting the thrust and triggering a synchronized change on the crash/landing LEDs.",
    challenges:
      "Getting BCD (not binary) arithmetic to correctly handle negative values in ten's-complement form, especially detecting when velocity dropped below a crash threshold when everything is unsigned by default in Verilog; and making the crash/landing LED and the display update on the exact same clock cycle as the underlying value change, with no one-cycle lag.",
    outcome:
      "A fully working lander: starting at 4,500 ft with adjustable thrust (0–9 ft/s²) against 5 ft/s² of lunar gravity, it correctly tracks a full descent in real time on the FPGA, lighting the green LED for a safe landing or the red LED for a crash at the exact moment the outcome is determined, with all four quantities viewable live on the seven-segment display.",
    images: [],
  },
];

export const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredProjects = sortedProjects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
