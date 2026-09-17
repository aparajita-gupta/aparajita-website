"use client";

import { useEffect } from "react";

/** Scrolls to the element with this id, respecting reduced-motion. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  el.scrollIntoView({
    behavior: reduceMotion ? "instant" : "smooth",
    block: "start",
  });
}

/**
 * Scrolls to the element matching the current URL hash on mount — handles
 * arriving from another page with a hash already in the URL (e.g. the nav
 * "Projects" link from /about → /#projects, where Next's client-side
 * routing doesn't fire a native `hashchange`). Same-page hash clicks are
 * handled directly in the nav via `scrollToId`, since a route that isn't
 * changing won't remount this component. Rendered once on the home page,
 * where the hash targets (#projects, #skills) live.
 */
export function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) scrollToId(id);
  }, []);

  return null;
}
