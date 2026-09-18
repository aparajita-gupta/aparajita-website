import { sortedProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { navLinks, site, socials } from "@/lib/site";
import { ProjectsGrid } from "@/components/projects-grid";
import { ArrowLink, Button, Eyebrow, IconBadge, Section, Tag } from "@/components/ui";
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
            external={primary.href.startsWith("http")}
          >
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
        <div className="flex flex-col gap-4">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="card-glow rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={g.icon} />
                <h3 className="text-sm font-medium">{g.title}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-3.5">
                {g.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
