"use client"

import {
  IconCpu,
  IconDatabase,
  IconTool,
  IconCode,
} from "@tabler/icons-react"
import { useInView } from "@/hooks/use-in-view"

const skillsData = [
  {
    category: "Agentic AI & LLMs",
    icon: <IconCpu className="h-5 w-5" />,
    skills: [
      "Agentic AI Systems",
      "Tool Use & Function Calling",
      "Multi-step LLM Pipelines",
      "Google Gemini API (2.5-flash, Pro)",
      "LLM Integration",
      "Prompt Engineering",
      "Async AI Processing",
      "Vector Embeddings",
    ],
  },
  {
    category: "Backend & Data",
    icon: <IconDatabase className="h-5 w-5" />,
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Celery",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "SQLAlchemy 2.0",
      "JWT (PyJWT)",
      "REST APIs",
      "Swagger / OpenAPI",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <IconTool className="h-5 w-5" />,
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "DigitalOcean",
      "Vercel",
      "Git",
      "GitHub",
      "Pytest",
    ],
  },
  {
    category: "Frontend",
    icon: <IconCode className="h-5 w-5" />,
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useInView()

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-shell section-shell-alt animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="section-intro">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Primary focus on agentic AI and backend systems, with supporting skills across the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="surface-card card-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-base font-semibold text-foreground">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
