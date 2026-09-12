import Link from "next/link";
import { categoryLabels, type Project } from "@/lib/projects";
import { Tag } from "./ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-glow group flex flex-col rounded-xl border border-border bg-card p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium tracking-tight group-hover:text-accent">
          {project.title}
        </h3>
        <span aria-hidden className="text-fg-muted transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.category.map((c) => (
          <span
            key={c}
            className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent"
          >
            {categoryLabels[c]}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Link>
  );
}
