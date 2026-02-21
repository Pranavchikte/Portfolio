"use client"

import { Button } from "@/components/ui/button"
import { useAnimationSettings } from "@/hooks/use-animation-settings"
import { track } from "@vercel/analytics"
import { siteConfig } from "@/lib/site"
import Link from "next/link"
import dynamic from "next/dynamic"

const BackgroundRippleEffect = dynamic(
  () => import("@/components/ui/background-ripple-effect").then((m) => m.BackgroundRippleEffect),
  { ssr: false }
)

const TextHoverEffect = dynamic(
  () => import("@/components/ui/text-hover-effect").then((m) => m.TextHoverEffect),
  { ssr: false }
)

export function HeroSection() {
  const { disableAnimations } = useAnimationSettings()

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden px-4 md:px-8 pt-16 md:pt-20"
    >
      {!disableAnimations && (
        <div className="no-mobile-effects absolute inset-0">
          <BackgroundRippleEffect />
        </div>
      )}

      <div className="section-wrap relative z-10 mx-auto max-w-6xl rounded-3xl px-4 py-8 md:px-10 md:py-12 text-center surface-card">
        <div className="mb-5 flex items-center justify-center gap-2 flex-wrap text-xs font-semibold tracking-wide uppercase">
          <span className="accent-pill rounded-full px-3 py-1">Open To Work</span>
          <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">Backend Focused</span>
          <span className="accent-pill-alt rounded-full px-3 py-1">AI Systems</span>
        </div>

        <div className="font-display text-5xl font-bold text-balance mb-4 md:text-7xl lg:text-8xl leading-[0.95]">
          {disableAnimations ? (
            <span>
              Pranav <span className="text-cyan-400">Chikte</span>
            </span>
          ) : (
            <span>
              <TextHoverEffect text="Pranav" />
              <span className="block text-3xl md:text-5xl mt-2 text-cyan-400">Chikte</span>
            </span>
          )}
        </div>

        <h2 className="text-xl font-semibold text-cyan-400 mb-6 md:text-3xl">
          Backend Engineer (AI Systems)
        </h2>

        <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty md:text-xl">
          I build backend systems that power AI products in production.
          From async pipelines and auth design to deployment and observability, I focus on reliability that survives real traffic.
        </p>

        <div className="mx-auto mt-7 h-px w-36 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Core Strength</p>
            <p className="font-semibold">Async API Architecture</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Tools</p>
            <p className="font-semibold">FastAPI, Flask, Redis, Celery</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Deployment</p>
            <p className="font-semibold">DigitalOcean + Vercel</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Button asChild className="btn-primary" size="lg">
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => track("cta_email_hero_click")}
            >
              Hire Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects" onClick={() => track("cta_projects_hero_click")}>
              View Featured Projects
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/resume">View Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
