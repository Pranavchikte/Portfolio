import type { Metadata } from "next"
import Link from "next/link"
import { IconArrowLeft, IconDownload } from "@tabler/icons-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

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
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <IconArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
              <p className="text-muted-foreground mt-2">
                {siteConfig.name} · {siteConfig.role}
              </p>
            </div>
            <Button asChild className="btn-primary">
              <a href={resumePath} download="Pranav_Chikte_Resume.pdf" className="inline-flex items-center gap-2">
                <IconDownload className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <iframe
              src={resumePath}
              title="Pranav Chikte Resume"
              className="w-full h-[75vh] md:h-[82vh]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
