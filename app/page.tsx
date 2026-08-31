import { featuredProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";
import { navLinks, site, socials } from "@/lib/site";
import { ProjectCard } from "@/components/project-card";
import { ArrowLink, Section } from "@/components/ui";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">
          {site.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </section>

      <Section
        title="Featured Projects"
        action={<ArrowLink href="/projects">All projects</ArrowLink>}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <dl className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                {g.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">
                {g.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
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
