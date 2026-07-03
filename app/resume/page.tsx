import type { Metadata } from "next"
import Link from "next/link"
import { IconArrowLeft, IconDownload } from "@tabler/icons-react"
import { Header } from "@/components/header"
import { siteConfig } from "@/lib/site"

const BORDER = "0.5px solid #E8E5DF"

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}, ${siteConfig.role}.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/resume`,
  },
}

export default function ResumePage() {
  const resumePath = encodeURI(siteConfig.resumePdf)

  return (
    <main style={{ background: "#F8F7F3", color: "#1A1918", minHeight: "100vh" }}>
      <Header />

      <div className="pt-14">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-5 md:px-16 py-4"
          style={{ borderBottom: BORDER }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            style={{ color: "#9A9690" }}
          >
            <IconArrowLeft className="h-3 w-3 stroke-[1.5]" aria-hidden />
            Home
          </Link>
          <a
            href={resumePath}
            download="Pranav_Chikte_Resume.pdf"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            style={{ color: "#BF5C1A" }}
          >
            <IconDownload className="h-3 w-3 stroke-[1.5]" aria-hidden />
            Download
          </a>
        </div>

        {/* Header info */}
        <div className="px-5 md:px-16 py-8" style={{ borderBottom: BORDER }}>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] mb-3" style={{ color: "#B0A89E" }}>
            Resume
          </p>
          <h1
            className="font-black leading-[0.9] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 64px)", color: "#1A1918" }}
          >
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-[13px]" style={{ color: "#9A9690" }}>{siteConfig.role}</p>
        </div>

        {/* PDF viewer */}
        <div className="px-5 md:px-16 py-6">
          <div style={{ border: BORDER, background: "#F2F0EB" }}>
            <iframe
              src={resumePath}
              title="Pranav Chikte Resume"
              className="w-full"
              style={{ height: "80vh", display: "block" }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
