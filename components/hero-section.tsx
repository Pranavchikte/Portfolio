"use client"

import { track } from "@vercel/analytics"
import { siteConfig } from "@/lib/site"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] w-full items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium text-muted-foreground tracking-wide">
          Software Engineer · Tata Consultancy Services
        </p>

        <h1 className="font-display font-bold tracking-tight text-foreground" style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)", lineHeight: 1.05 }}>
          Pranav Chikte
        </h1>

        <p className="mt-4 text-lg font-medium text-primary">
          Agentic AI · Backend Systems · LLM APIs
        </p>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
          I build Python backends and agentic AI systems at TCS. My focus is on
          multi-step LLM pipelines, tool-use patterns, and the backend infrastructure
          that makes AI products reliable in production.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/#projects"
            onClick={() => track("cta_projects_hero_click")}
            className="btn-primary inline-block"
          >
            View Projects
          </Link>
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_resume_hero_click")}
            className="inline-block rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
