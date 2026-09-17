"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site, socials } from "@/lib/site";
import { scrollToId } from "./hash-scroll";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    // Hash links (e.g. "/#projects") point at a section on the home page,
    // not a separate route — treat them as active whenever we're on "/".
    if (href.startsWith("/#")) return pathname === "/";
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  // Already on "/" and clicking a "/#section" link: Next's client router
  // won't fire a native hashchange (it uses pushState), and the page isn't
  // remounting, so HashScroll's mount effect won't re-run either. Scroll
  // directly in that case; arriving from another page is handled by
  // HashScroll on mount instead.
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      scrollToId(href.slice(2));
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgb(var(--glow)/0.6)]"
          />
          {site.name}
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  scroll={!l.href.startsWith("/#")}
                  onClick={() => handleNavClick(l.href)}
                  className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-fg ${
                    isActive(l.href) ? "text-fg" : "text-fg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-5 py-3 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  scroll={!l.href.startsWith("/#")}
                  onClick={() => {
                    handleNavClick(l.href);
                    setOpen(false);
                  }}
                  className="block rounded-md px-3 py-2 text-sm text-fg-muted hover:text-fg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-sm text-fg-muted hover:text-fg"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
