import type { Metadata } from "next";
import Image from "next/image";
import { site, socials } from "@/lib/site";
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
            My name is Aparajita Gupta and I'm a junior in Computer Engineering at Purdue University working toward
            a concentration in Artificial Intelligence and Machine Learning.
          </p>
          <p>
            Most of my experience so far comes from my work at Purdue. Through The Data Mine, a Purdue’s data science
            research program, I worked with Inari, an agricultural biotech company, doing machine learning to help
            crop planting. With them, I built and evaluated several ML models that link soybean phenotypes to genotypes using real
            field images. I'm also an electrical engineer on the Purdue IEEE Motorsports team, where I contributed to
            worked on the battery design and BMS system. Currently, I'm working on an updated telemetry and an
            automated precharge circuit to replace manual switch-based charging.
          </p>
        </div>

        {/* Spans the full width below: left edge matches the image, right edge matches the text column above. */}
        <div className="prose mt-6 max-w-none text-[19px] sm:col-span-2">
          <p>
            Outside of coursework and team projects, I like using what I know to fix things that are
            difficult in my own life. Small things like Brightspace's confusing interface led me to creating a tool
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
              <span className="font-medium">Purdue University (2024 - 2028)</span>
              <br />
              B.S. Computer Engineering, Concentration in AI/ML
            </p>
            <p className="mt-5 text-sm text-fg-muted">
              Coursework: Electrical Engineering Fundamentals, Digital System Design,
              Microprocessor Systems & Interfacing, Signals and Systems, Data
              Structures, Python for Data Science, Advanced C Programming, Linear
              Algebra, Multivariate Calculus, Ordinary Differential Equations, Discrete
              Math
            </p>
            <p className="mt-2 text-sm text-fg-muted">
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
            <li className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-medium">
                  Inari
                </h3>
                <span className="font-mono text-xs text-fg-muted">
                  Aug 2025 – May 2026
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-muted">
                AI/ML Developer · Purdue University
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
                <li>
                  Linked plant phenotypes to genotypes, achieving accuracy of 96.4% and an F1 score of 0.965 using ResNet-18 CNN
                </li>
                <li>
                  Extracted key physical plant traits by developing phenotyping algorithms to process and analyze 8K soybean images
                </li>
                <li>
                  Optimized dataset quality by conducting EDA, OTSU/SAM segmentation, and feature extraction (DGCI, MPRI, HSV)
                </li>
                <li>
                  Identified top predictor by evaluating 5+ ML models in Scikit-learn & TensorFlow (ResNet-18 CNN, KNN, SVM, RF)
                </li>
              </ul>
            </li>

            <li className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-medium">IEEE Motorsports</h3>
                <span className="font-mono text-xs text-fg-muted">
                  Jan 2025 – Present
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-muted">
                Electrical Engineer · Purdue University
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
                <li>
                  Contributed to electrical design of a 24s8p, 192-cell battery system with backup cells for a student-built EV race car
                </li>
                <li>
                  Minimized power loss to 5W by integrating nickel strips and BMS with thermal management for safe motor control
                </li>
                <li>
                  Redesigned automated precharge circuit to operate with 0 chatter or lag, replacing manual switch-based charging
                </li>
                <li>
                  Earned 1st Place in Battery Efficiency at the EV Grand Prix with a 4,320 Wh, 86.4V battery sustaining a 55-min race
                </li>
              </ul>
            </li>

            <li className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-medium">The Data Mine</h3>
                <span className="font-mono text-xs text-fg-muted">
                  Aug 2024 – May 2026
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-muted">
                Undergraduate Data Science Researcher · Purdue University
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
                <li>
                  Analyzed 10+ real-world datasets using statistical techniques and visualizations to generate actionable insights
                </li>
                <li>
                  Performed full-stack data analysis with R, Python, SQL, Bash, Polars, PyTorch, and MongoDB for cleaning/modeling
                </li>
                <li>
                  Collaborated in a 12-member Agile team, improving deliverable quality & team communication through biweekly sprints
                </li>
                <li>
                  Delivered technical reports w/ self-assessments and future goals, delivering findings implemented by industry partners
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
