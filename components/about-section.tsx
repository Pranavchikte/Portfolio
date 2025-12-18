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
                I'm passionate about building <span className="text-foreground font-medium">AI models that ease automation</span> and 
                reduce human intervention. For me, technology should make life easier—not more complicated.
              </p>

              <p>
                I love building <span className="text-foreground font-medium">scalable backend systems</span> that are fast, 
                reliable, and handle real-world traffic. Whether it's designing APIs, implementing caching with Redis, 
                or managing async tasks with Celery—I focus on making applications that actually perform under pressure.
              </p>

              <p>
                I don't build demo apps. <span className="text-foreground font-medium">I build products that people genuinely use</span>. 
                From concept to deployment, I care about the entire lifecycle. My projects aren't just portfolio pieces—they're 
                solutions to real problems that I've deployed and maintained in production.
              </p>

              <p className="text-foreground font-semibold">
                Currently, I'm seeking a backend or full-stack role where I can build production-grade systems 
                and work with AI/ML pipelines to create impactful products.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">LeetCode Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Deployed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}