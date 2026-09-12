import { featuredProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { navLinks, site, socials } from "@/lib/site";
import { ProjectCard } from "@/components/project-card";
import { ArrowLink, Button, Eyebrow, IconBadge, Section } from "@/components/ui";

export default function HomePage() {
  const primary = socials.find((s) => s.label === "Email") ?? socials[0];
  const rest = socials.filter((s) => s !== primary);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="hero-glow" aria-hidden />

        <Eyebrow>Computer Engineering @ Purdue</Eyebrow>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
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

      <Section
        title="Featured Projects"
        action={<ArrowLink href="/projects">All projects</ArrowLink>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section title="Skills">
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
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {g.items.join(" · ")}
              </p>
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
