"use client"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { Button } from "@/components/ui/button"
import { useAnimationSettings } from "@/hooks/use-animation-settings"
import Link from "next/link"

export function HeroSection() {
  const { disableAnimations } = useAnimationSettings()

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 md:px-8"
    >
      {!disableAnimations && <BackgroundRippleEffect />}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="text-6xl font-bold text-balance mb-4 md:text-8xl">
          <TextHoverEffect text="Pranav" />
        </div>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-8 md:text-3xl">
          Software Engineer — Backend & AI Systems
        </h2>

        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty md:text-xl">
          I build and ship production AI products solo — from system design to deployment.
          Specialized in{" "}
          <span className="text-foreground font-medium">async backends with Flask & FastAPI</span>,{" "}
          <span className="text-foreground font-medium">Gemini AI integrations</span>, and{" "}
          <span className="text-foreground font-medium">full-stack deployments on DigitalOcean & Vercel</span>.
          Graduating May 2026 — available immediately.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button asChild className="btn-primary" size="lg">
            <Link href="#projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}