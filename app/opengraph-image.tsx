import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #0b1220 55%, #0f766e 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.9 }}>{siteConfig.siteUrl.replace("https://", "")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.02 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 38, color: "#67e8f9" }}>{siteConfig.role}</div>
          <div style={{ fontSize: 26, opacity: 0.9 }}>{siteConfig.location}</div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>Backend-first AI systems • Production-focused engineering</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
