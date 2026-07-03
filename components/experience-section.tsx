"use client"

import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    type: "Full-time",
    period: "Jun 2026 – Present",
    location: "Pune, Maharashtra · On-site",
    description:
      "Working in TCS's Digital stream on Python backend development and Generative AI integration. Building expertise in agentic AI systems, LLM APIs, and scalable backend architecture.",
  },
]

export function ExperienceSection() {
  const sectionRef = useInView()

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-shell animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-2xl">
        <div className="section-intro">
          <p className="section-kicker">Work</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="surface-card card-hover rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {exp.company} · {exp.type}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
