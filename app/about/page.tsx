import type { Metadata } from "next";
import Image from "next/image";
import { site, socials } from "@/lib/site";
import { experience } from "@/lib/experience";
import { ArrowLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, focus areas, and what I'm looking for.`,
};

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="hero-glow" aria-hidden />
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">About</h1>

      {/*
        One grid for the whole page body: col 1 = image width (auto), col 2 = everything
        else. Every section below (Education, Experience, Links) sits in col 2 with the
        same max-w-2xl cap as the intro paragraphs, so all text shares the same left and
        right edges. Skills stays sm:col-span-2 since it's a card grid, not prose text.
      */}
      <div className="mt-8 grid gap-x-8 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="shrink-0 overflow-hidden rounded-2xl border-2 border-accent/30 bg-bg-subtle shadow-[0_20px_60px_-15px_rgb(var(--glow)/0.5)]">
          <Image
            src="/portrait.jpg"
            alt={`Portrait of ${site.name}`}
            width={587 * 0.6}
            height={550 * 0.3}
          />
        </div>

        <div className="prose max-w-2xl text-[19px]">
          <p>
            My name is Aparajita Gupta and I&apos;m a junior in Computer Engineering at Purdue University working toward
            a concentration in Artificial Intelligence and Machine Learning.
          </p>
          <p>
            Most of my experience so far comes from my work at Purdue. Through The Data Mine, a Purdue’s data science
            research program, I worked with Inari, an agricultural biotech company, doing machine learning to help
            crop planting. With them, I built and evaluated several ML models that link soybean phenotypes to genotypes using real
            field images. I&apos;m also an electrical engineer on the Purdue IEEE Motorsports team, where I contributed to
            worked on the battery design and BMS system. Currently, I&apos;m working on an updated telemetry and an
            automated precharge circuit to replace manual switch-based charging.
          </p>
        </div>

        {/* Spans the full width below: left edge matches the image, right edge matches the text column above. */}
        <div className="prose mt-6 max-w-none text-[19px] sm:col-span-2">
          <p>
            Outside of coursework and team projects, I like using what I know to fix things that are
            difficult in my own life. Small things like Brightspace&apos;s confusing interface led me to creating a tool
            to automatically pulls due dates from multiple sources and syncs them to my todo-list using my previous
            naming conventions. When I got tired of manually watering plants on a schedule, I built an ESP32-based
            Wi-Fi sprinkler system I can control and monitor from my phone.
          </p>
        </div>

        <section className="mt-6 sm:col-span-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
            Education
          </h2>
          <div className="mt-3 rounded-2xl border border-border bg-card/40 p-6">
            <p className="text-sm">
              <span className="font-medium">{site.education.school}</span> —{" "}
              {site.education.degree}. {site.education.graduation}.
            </p>
            <p className="mt-1 text-sm text-fg-muted">
              Coursework: Electrical Engineering Fundamentals, Digital System Design,
              Microprocessor Systems &amp; Interfacing, Signals and Systems, Data
              Structures, Python for Data Science, Advanced C Programming, Linear
              Algebra, Multivariate Calculus, Ordinary Differential Equations, Discrete
              Math
            </p>
            <p className="mt-1 text-sm text-fg-muted">
              Activities: IEEE Motorsports, The Data Mine, Embedded Systems @ Purdue,
              Society of Women Engineers
            </p>
          </div>
        </section>

        <section className="mt-6 sm:col-span-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
            Experience
          </h2>
          <ol className="mt-3 flex flex-col gap-4">
            {experience.map((job) => (
              <li
                key={job.org}
                className="rounded-2xl border border-border bg-card/40 p-6"
              >
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

        <section className="mt-6 rounded-2xl border border-border bg-card/40 p-6 sm:col-span-2">
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
    </div>
  );
}
