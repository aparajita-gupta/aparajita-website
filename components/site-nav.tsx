"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site, socials } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          {site.name}
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
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
                  onClick={() => setOpen(false)}
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
