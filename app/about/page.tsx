import type { Metadata } from "next";
import Image from "next/image";
import { site, socials } from "@/lib/site";
import { skillGroups } from "@/lib/skills";
import { experience } from "@/lib/experience";
import { ArrowLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, focus areas, and what I'm looking for.`,
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row-reverse sm:items-start">
        {/* Replace /public/portrait.svg with a real photo (square, ~600px) and
            update the src below to "/portrait.jpg". */}
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl border border-border bg-bg-subtle">
          <Image
            src="/portrait.svg"
            alt={`Portrait of ${site.name}`}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none text-[15px]">
          {/* TODO: make this sound like you — the facts are from your resume. */}
          <p>
            I&apos;m a computer engineering student at {site.education.school},
            concentrating in AI/ML and graduating in May 2027. I like problems
            that sit on the boundary between hardware and software — from analog
            circuits and embedded firmware to CNN training pipelines and backend
            automation.
          </p>
          <p>
            Right now I&apos;m doing machine-learning research through The Data
            Mine, linking soybean phenotypes to genotypes from field imagery for
            Inari, and I&apos;m an electrical engineer on Purdue&apos;s IEEE
            Racing team, where our battery pack took 1st in Battery Efficiency at
            the EV Grand Prix. On the side I build tools like BrightGrade, an
            LLM-assisted deadline tracker, and embedded projects like a Wi-Fi
            sprinkler controller.
          </p>
          <p>{site.availability}</p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
          Education
        </h2>
        <p className="mt-2 text-sm">
          <span className="font-medium">{site.education.school}</span> —{" "}
          {site.education.degree}. {site.education.graduation}.
        </p>
        <p className="mt-1 text-sm text-fg-muted">
          Coursework: Digital System Design, Microprocessor Systems &amp;
          Interfacing, Signals and Systems, Data Structures, Advanced C
          Programming, Linear Algebra, Differential Equations. Activities: IEEE
          Racing, Society of Women Engineers, The Data Mine.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
          Experience
        </h2>
        <ol className="mt-4 flex flex-col gap-8">
          {experience.map((job) => (
            <li key={job.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-medium">{job.org}</h3>
                <span className="font-mono text-xs text-fg-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-muted">
                {job.title} · {job.location}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-fg-muted">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
          Skills
        </h2>
        <dl className="mt-3 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <dt className="text-sm font-medium">{g.title}</dt>
              <dd className="mt-1 text-sm text-fg-muted">{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
          Links
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <ArrowLink href="/projects">See what I&apos;ve built</ArrowLink>
        </p>
      </section>
    </div>
  );
}
