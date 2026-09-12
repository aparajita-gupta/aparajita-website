import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryLabels,
  getProject,
  projects,
} from "@/lib/projects";
import { Tag } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const { links } = project;

  return (
    <article className="relative max-w-3xl">
      <div className="hero-glow" aria-hidden />

      <Link
        href="/projects"
        className="text-sm text-fg-muted transition-colors hover:text-fg"
      >
        ← Projects
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap gap-2">
          {project.category.map((c) => (
            <span
              key={c}
              className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[14px] uppercase tracking-wider text-accent"
            >
              {categoryLabels[c]}
            </span>
          ))}
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 max-w-xl text-[19px] leading-relaxed text-fg-muted">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {links && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                GitHub ↗
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Live demo ↗
              </a>
            )}
            {links.video && (
              <a href={links.video} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Video ↗
              </a>
            )}
            {links.writeup && (
              <a href={links.writeup} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Full write-up ↗
              </a>
            )}
          </div>
        )}
      </header>

      {project.images && project.images.length > 0 && (
        <div className="mt-8 flex flex-col gap-4">
          {project.images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border border-border bg-bg-subtle"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="prose mt-10 max-w-none">
        {project.role && (
          <>
            <h2>My role</h2>
            <p>{project.role}</p>
          </>
        )}
        <h2>Problem</h2>
        <p>{project.problem}</p>
        <h2>How it works</h2>
        <p>{project.approach}</p>
        <h2>Challenges &amp; what I learned</h2>
        <p>{project.challenges}</p>
        <h2>Outcome</h2>
        <p>{project.outcome}</p>
      </div>
    </article>
  );
}
