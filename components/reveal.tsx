"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared observer logic behind the scroll-in animation: watches an element
 * and flips `visible` true the first time it scrolls into view. Respects
 * prefers-reduced-motion via the global CSS override in globals.css (which
 * zeroes all transition durations, so this becomes an instant state flip
 * instead of a slide/fade).
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/** Wraps children in a <div> that fades + slides in on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal h-full ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Same effect, but renders an <li> directly — for cards inside <ol>/<ul>,
 * where wrapping in a <div> would be invalid HTML. */
export function RevealLi({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </li>
  );
}
