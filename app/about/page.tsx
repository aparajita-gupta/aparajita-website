import type { Metadata } from "next";
import Image from "next/image";
import { site, socials } from "@/lib/site";
import { skillGroups } from "@/lib/skills";
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
          {/* TODO: rewrite these three paragraphs in your own voice. */}
          <p>
            I&apos;m a computer engineering student at {site.education.school}{" "}
            ({site.education.degree}, {site.education.graduation}). I work across
            the stack — from firmware on bare metal to web apps to training small
            models — and I like problems that sit on the boundary between
            hardware and software.
          </p>
          <p>
            Lately I&apos;ve been focused on [what you&apos;re actually doing —
            a class, a research group, a side project]. Before that, [prior
            experience or a formative project]. Outside of engineering, [one
            genuine line — a hobby, a competition, a community].
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
