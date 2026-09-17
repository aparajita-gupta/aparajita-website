import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  action,
  children,
}: {
  id?: string;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24">
      {title && (
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-fg-muted">
            {title}
          </h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all";
  const styles =
    variant === "primary"
      ? "text-white bg-[linear-gradient(135deg,var(--accent-from),var(--accent-to))] shadow-[0_0_0_1px_rgb(var(--glow)/0.4),0_10px_30px_-10px_rgb(var(--glow)/0.7)] hover:shadow-[0_0_0_1px_rgb(var(--glow)/0.6),0_14px_36px_-8px_rgb(var(--glow)/0.85)] hover:brightness-110"
      : "border border-border bg-card text-fg hover:border-accent/60 hover:bg-bg-subtle";

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (!external && href.startsWith("/")) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`} {...props}>
      {children}
    </a>
  );
}

export function IconBadge({ icon }: { icon: ReactNode }) {
  return (
    <span className="icon-badge" aria-hidden>
      {icon}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 font-mono text-xs text-fg-muted">
      {children}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    "inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children} ↗
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children} →
    </Link>
  );
}
