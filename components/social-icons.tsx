// Small inline SVG icon set for social/contact buttons — no external
// dependency, just enough detail to read clearly at ~16px.

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

export function MailIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </IconBase>
  );
}

export function GitHubIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.77.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.8 10.8 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.21.66.79.55 4.51-1.51 7.77-5.76 7.77-10.77C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.64h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.52 2.5 4.52 5.76V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <IconBase>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 17h6" />
    </IconBase>
  );
}

export function socialIcon(label: string) {
  switch (label) {
    case "Email":
      return <MailIcon />;
    case "GitHub":
      return <GitHubIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Resume":
      return <DocumentIcon />;
    default:
      return null;
  }
}
