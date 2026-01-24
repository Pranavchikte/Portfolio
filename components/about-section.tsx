"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-8 animate-on-scroll"
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
              {/* Decorative gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>

          {/* Right side: Story */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I build <span className="text-foreground font-medium">backend systems that perform under real-world conditions</span>. 
                Fast APIs, proper caching with Redis, async job processing with Celery—I focus on making applications that 
                handle actual traffic without breaking.
              </p>

              <p>
                My projects aren't demos. <span className="text-foreground font-medium">Finsight AI processes natural language transactions 
                using Gemini's API</span> and handles background tasks through Celery workers. 
                <span className="text-foreground font-medium"> CineScope aggregates movie data from TMDB with Redis caching</span> to 
                optimize response times. Both are deployed and running in production.
              </p>

              <p>
                I care about the full lifecycle—from architecting the solution to deploying on Railway or Vercel to monitoring 
                performance. <span className="text-foreground font-medium">When I build something, it ships and it works.</span>
              </p>

              <p className="text-foreground font-semibold">
                Currently seeking a software engineering role where I can build scalable backend systems and work with AI/ML pipelines.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">160+</div>
                <div className="text-sm text-muted-foreground">LeetCode Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">Production Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}