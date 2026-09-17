import { sortedProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { navLinks, site, socials } from "@/lib/site";
import { ProjectsGrid } from "@/components/projects-grid";
import { ArrowLink, Button, Eyebrow, IconBadge, Section } from "@/components/ui";
import { HashScroll } from "@/components/hash-scroll";

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

        <Eyebrow>Computer Engineering @ Purdue</Eyebrow>

        <h1 className="mt-5 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          Building across{" "}
          <span className="gradient-text font-medium">hardware and software</span> —
          embedded systems, machine learning, and backend automation.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={primary.href} external={primary.href.startsWith("http")}>
            {primary.label}
          </Button>
          {rest.map((s) => (
            <Button
              key={s.href}
              href={s.href}
              variant="outline"
              external={s.href.startsWith("http")}
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="card-glow rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={g.icon} />
                <h3 className="text-sm font-medium">{g.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-fg-muted">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Get in touch">
        <p className="text-sm leading-relaxed text-fg-muted">
          {site.availability} The fastest way to reach me is{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            email
          </a>
          .
        </p>
        <p className="mt-3">
          <ArrowLink href={navLinks[1].href}>More about me</ArrowLink>
        </p>
      </Section>
    </div>
  );
}
