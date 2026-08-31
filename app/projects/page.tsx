import type { Metadata } from "next";
import { sortedProjects } from "@/lib/projects";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, embedded systems, and AI/ML projects.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted">
        A selection of what I&apos;ve built. Each write-up covers the problem, how
        it works, and what was hard about it.
      </p>
      <div className="mt-8">
        <ProjectsGrid projects={sortedProjects} />
      </div>
    </div>
  );
}
