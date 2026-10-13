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

      </div>
    </div>
  );
}
