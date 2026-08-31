import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 24, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 24, color: "#818cf8", marginTop: 40 }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size,
  );
}
