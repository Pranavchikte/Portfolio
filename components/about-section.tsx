"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const sectionRef = useInView()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-shell section-shell-alt animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-kicker">About</p>
        <h2 className="section-title">About Me</h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-left">
          <p>
            I&apos;m a Software Engineer at{" "}
            <span className="font-medium text-foreground">Tata Consultancy Services</span>,
            working in the Digital stream on Python backend development and Generative AI integration.
          </p>
          <p>
            My focus is on{" "}
            <span className="font-medium text-foreground">agentic AI systems</span> — designing
            multi-step LLM pipelines, integrating tool-use patterns, and building the backend
            infrastructure that makes AI products reliable in production. I work across async API
            design, LLM API integration, and scalable backend architecture.
          </p>
          <p>
            Outside TCS, my projects (CineScope, Finsight AI) reflect the same priorities:
            production-grade backends with real AI integration — async task pipelines,
            conversational recommendation systems, and auth flows built to handle real traffic.
          </p>
        </div>
      </div>
    </section>
  )
}
