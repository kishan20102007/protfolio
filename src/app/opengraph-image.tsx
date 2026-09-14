import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Gunnireddy JaiKishanReddy - Full-Stack Web Developer & AI Creative Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090c",
          color: "#f4f6f8",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#5cc8ff",
            letterSpacing: 4,
            fontWeight: 600,
          }}
        >
          JKR.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 920,
            }}
          >
            Full-Stack Web Developer & AI Creative Developer
          </div>
          <div style={{ fontSize: 24, color: "#97a0ae", maxWidth: 820 }}>
            Modern websites, landing pages, interactive experiences, and
            AI-powered visual content.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#97a0ae" }}>
          Gunnireddy JaiKishanReddy
        </div>
      </div>
    ),
    size,
  );
}
