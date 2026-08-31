"use client";

import { useState } from "react";
import {
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { ProjectCard } from "./project-card";

const filters: ("all" | ProjectCategory)[] = ["all", "swe", "embedded", "ai"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const shown =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              active === f
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-fg-muted hover:text-fg"
            }`}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
