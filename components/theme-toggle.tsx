"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore (private mode, etc.)
  }
  listeners.forEach((l) => l());
}

export function ThemeToggle() {
  // Server + first client render fall back to "light"; the inline script in
  // layout.tsx has already set the real class, so we reconcile after mount.
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
    >
      <span suppressHydrationWarning aria-hidden>
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
