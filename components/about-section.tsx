"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const sectionRef = useInView()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-shell animate-on-scroll scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto section-wrap section-frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side: Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/p3.png"
                  alt="Pranav Chikte"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>

          {/* Right side: Story */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 text-center lg:text-left">
              <p className="section-kicker">About</p>
              <h2 className="section-title">About Me</h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I build backend-first AI products with a production mindset.
                I care about clean services, stable APIs, and deployments that teams can trust.
              </p>

              <p>
                My recent work includes async task pipelines with{" "}
                <span className="text-foreground font-medium">Flask, Celery, and Redis</span>,
                secure auth flows with token lifecycle controls, and conversational recommendation
                systems powered by{" "}
                <span className="text-foreground font-medium">Gemini integrations</span>.
              </p>

              <p>
                I work across the full lifecycle: architecture, implementation, documentation,
                testing workflows, and deployment across DigitalOcean and Vercel.
                <span className="text-foreground font-medium"> I optimize for systems that survive real usage.</span>
              </p>

              <p className="text-foreground font-semibold">
                Graduating May 2026, available immediately. Looking for an early-stage team
                where I can own backend systems and move fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
