import { sortedProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { navLinks, site, socials } from "@/lib/site";
import { ProjectsGrid } from "@/components/projects-grid";
import { ArrowLink, Button, Eyebrow, IconBadge, Section, Tag } from "@/components/ui";
import { HashScroll } from "@/components/hash-scroll";
import { socialIcon } from "@/components/social-icons";
import { Reveal, RevealLi } from "@/components/reveal";

// Open in a new tab for off-site links and downloadable files (e.g. the
// resume PDF), not just "http" links — a relative /resume.pdf link should
// still open in a new tab rather than navigating away from the site.
function opensInNewTab(href: string) {
  return href.startsWith("http") || href.endsWith(".pdf");
}

export default function HomePage() {
  const primary = socials.find((s) => s.label === "Email") ?? socials[0];
  const rest = socials.filter((s) => s !== primary);

  return (
    <div>
      <HashScroll />

      {/* Hero — big name, takes most of the first screen so there's real
          "scroll down to see more" motion into Projects/Skills below. */}
      <section className="relative flex min-h-[75vh] flex-col justify-center">
        <div className="hero-glow" aria-hidden />

        <Eyebrow>Computer Engineering @ Purdue University</Eyebrow>

        <h1 className="mt-5 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          Building across hardware and software,
          embedded systems, and machine learning.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            href={primary.href}
            variant="outline"
            icon={socialIcon(primary.label)}
            external={opensInNewTab(primary.href)}
          >
            {primary.label}
          </Button>
          {rest.map((s) => (
            <Button
              key={s.href}
              href={s.href}
              variant="outline"
              icon={socialIcon(s.label)}
              external={opensInNewTab(s.href)}
            >
              {s.label}
            </Button>
          ))}
        </div>
      </section>

      <Section id="projects" title="Projects">
        <ProjectsGrid projects={sortedProjects} />
      </Section>

      <Section id="skills" title="Skills">
        <div className="flex flex-col gap-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon={g.icon} color={g.color} />
                  <h3 className="text-sm font-medium">{g.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-3.5">
                  {g.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="flex items-center gap-3">
              <IconBadge icon="🎓" />
              <p className="text-sm">
                <span className="font-medium">Purdue University (2024 - 2028)</span>
                <br />
                B.S. Computer Engineering, Concentration in AI/ML
              </p>
            </div>
            <p className="mt-5 text-sm text-fg-muted">
              Coursework: Electrical Engineering Fundamentals, Digital System
              Design, Microprocessor Systems & Interfacing, Signals and
              Systems, Data Structures, Python for Data Science, Advanced C
              Programming, Linear Algebra, Multivariate Calculus, Ordinary
              Differential Equations, Discrete Math
            </p>
            <p className="mt-2 text-sm text-fg-muted">
              Activities: IEEE Motorsports, The Data Mine, Embedded Systems @
              Purdue, Society of Women Engineers
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="flex flex-col gap-4">
          <RevealLi delay={0} className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-3">
              <div className="flex items-center gap-3">
                <IconBadge icon="🌱" />
                <h3 className="text-sm font-medium">Inari</h3>
              </div>
              <span className="font-mono text-xs text-fg-muted">
                Aug 2025 – May 2026
              </span>
            </div>
            <p className="mt-2.5 text-sm text-fg-muted">
              AI/ML Developer · Purdue University
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              <li>
                Linked plant phenotypes to genotypes, achieving accuracy of 96.4%
                and an F1 score of 0.965 using ResNet-18 CNN
              </li>
              <li>
                Extracted key physical plant traits by developing phenotyping
                algorithms to process and analyze 8K soybean images
              </li>
              <li>
                Optimized dataset quality by conducting EDA, OTSU/SAM
                segmentation, and feature extraction (DGCI, MPRI, HSV)
              </li>
              <li>
                Identified top predictor by evaluating 5+ ML models in
                Scikit-learn & TensorFlow (ResNet-18 CNN, KNN, SVM, RF)
              </li>
            </ul>
          </RevealLi>

          <RevealLi delay={100} className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-3">
              <div className="flex items-center gap-3">
                <IconBadge icon="⚡" />
                <h3 className="text-sm font-medium">IEEE Motorsports</h3>
              </div>
              <span className="font-mono text-xs text-fg-muted">
                Jan 2025 – Present
              </span>
            </div>
            <p className="mt-2.5 text-sm text-fg-muted">
              Electrical Engineer · Purdue University
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              <li>
                Contributed to electrical design of a 24s8p, 192-cell battery
                system with backup cells for a student-built EV race car
              </li>
              <li>
                Minimized power loss to 5W by integrating nickel strips and BMS
                with thermal management for safe motor control
              </li>
              <li>
                Redesigned automated precharge circuit to operate with 0
                chatter or lag, replacing manual switch-based charging
              </li>
              <li>
                Earned 1st Place in Battery Efficiency at the EV Grand Prix
                with a 4,320 Wh, 86.4V battery sustaining a 55-min race
              </li>
            </ul>
          </RevealLi>

          <RevealLi delay={200} className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-3">
              <div className="flex items-center gap-3">
                <IconBadge icon="📊" />
                <h3 className="text-sm font-medium">The Data Mine</h3>
              </div>
              <span className="font-mono text-xs text-fg-muted">
                Aug 2024 – May 2026
              </span>
            </div>
            <p className="mt-2.5 text-sm text-fg-muted">
              Undergraduate Data Science Researcher · Purdue University
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              <li>
                Analyzed 10+ real-world datasets using statistical techniques
                and visualizations to generate actionable insights
              </li>
              <li>
                Performed full-stack data analysis with R, Python, SQL, Bash,
                Polars, PyTorch, and MongoDB for cleaning/modeling
              </li>
              <li>
                Collaborated in a 12-member Agile team, improving deliverable
                quality & team communication through biweekly sprints
              </li>
              <li>
                Delivered technical reports w/ self-assessments and future
                goals, delivering findings implemented by industry partners
              </li>
            </ul>
          </RevealLi>
        </ol>
      </Section>
    </div>
  );
}
