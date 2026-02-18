"use client"

import React from "react"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import {
  IconCpu,
  IconDatabase,
  IconTool,
  IconCode,
} from "@tabler/icons-react"

const skillsData = [
  {
    category: "AI / ML",
    icon: <IconCpu className="h-6 w-6" />,
    skills: [
      "Google Gemini API (2.5-flash, Pro)",
      "LLM Integration",
      "Async AI Processing",
      "Prompt Engineering",
      "Vector Embeddings",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Backend & Data",
    icon: <IconDatabase className="h-6 w-6" />,
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
    icon: <IconTool className="h-6 w-6" />,
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
    icon: <IconCode className="h-6 w-6" />,
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
  },
]

const SkillCard = ({
  title,
  icon,
  skills,
}: {
  title: string
  icon: React.ReactNode
  skills: string[]
}) => (
  <CardSpotlight className="h-full w-full">
    <div className="relative z-20 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-cyan-400">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="list-none space-y-2 flex-grow">
        {skills.map((skill) => (
          <li key={skill} className="flex gap-2 items-start">
            <CheckIcon />
            <span className="text-neutral-300 text-sm font-medium">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </CardSpotlight>
)

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical toolbox for building scalable, production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <SkillCard
              key={category.category}
              title={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}