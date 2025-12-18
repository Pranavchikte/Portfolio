"use client"

import React from "react"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import {
  IconCpu,
  IconDatabase,
  IconTool,
  IconCode,
} from "@tabler/icons-react"

// Your skills data remains the same
const skillsData = [
  {
    category: "AI / Machine Learning",
    icon: <IconCpu className="h-6 w-6" />,
    skills: [
      "Generative AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "LLM Deployment",
      "OpenAI API",
      "Embeddings",
      "Prompt Engineering",
      "AI Agents",
      "Agentic Workflows",
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
      "MongoDB",
      "PostgreSQL",
      "API Integration",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <IconTool className="h-6 w-6" />,
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Railway",
    ],
  },
  {
    category: "Frontend",
    icon: <IconCode className="h-6 w-6" />,
    skills: [
      "JavaScript",
      "React", 
      "Next.js",
      "Tailwind CSS",
    ],
  },
]

// New component using CardSpotlight for each skill category
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
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-cyan-400">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      {/* Skills list with checkmarks */}
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

// Checkmark icon component
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
    <section id="skills" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical toolbox for building scalable, production-ready applications.
          </p>
        </div>

        {/* Grid layout with CardSpotlight - 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI/ML takes full left column */}
          <div className="lg:col-span-1">
            <SkillCard
              title={skillsData[0].category}
              icon={skillsData[0].icon}
              skills={skillsData[0].skills}
            />
          </div>

          {/* Other skills stacked on right column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <SkillCard
              title={skillsData[1].category}
              icon={skillsData[1].icon}
              skills={skillsData[1].skills}
            />
            <SkillCard
              title={skillsData[2].category}
              icon={skillsData[2].icon}
              skills={skillsData[2].skills}
            />
            <SkillCard
              title={skillsData[3].category}
              icon={skillsData[3].icon}
              skills={skillsData[3].skills}
            />
          </div>
        </div>
      </div>
    </section>
  )
}