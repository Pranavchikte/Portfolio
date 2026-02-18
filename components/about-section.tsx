"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const sectionRef = useInView()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 animate-on-scroll scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About Me
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I've built and shipped{" "}
                <span className="text-foreground font-medium">2 production AI products solo</span> —
                full stack, from architecture to deployment. Not side projects. Live apps with
                real users, real infrastructure, and real performance requirements.
              </p>

              <p>
                At Finsight AI, I engineered an async pipeline using{" "}
                <span className="text-foreground font-medium">Celery + Redis to offload Gemini API calls</span>,
                hitting 85–417ms response times in production. The Next.js frontend scored{" "}
                <span className="text-foreground font-medium">95+ on Lighthouse</span>.
                At CineScope, I integrated{" "}
                <span className="text-foreground font-medium">Gemini Pro for a conversational movie recommendation engine</span>{" "}
                with in-memory vector embeddings and JWT refresh token rotation in Redis.
              </p>

              <p>
                I care about the full lifecycle — system design, clean service layers,
                Swagger-documented APIs, Pytest coverage, and CI/CD on DigitalOcean and Vercel.{" "}
                <span className="text-foreground font-medium">When I build something, it ships and it works.</span>
              </p>

              <p className="text-foreground font-semibold">
                Graduating May 2026, available immediately. Looking for an early-stage team
                where I can own backend systems and move fast.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">85ms</div>
                <div className="text-sm text-muted-foreground">Avg API Response (prod)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">95+</div>
                <div className="text-sm text-muted-foreground">Lighthouse Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}