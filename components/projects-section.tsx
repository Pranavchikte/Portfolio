"use client"

import { ProjectCard } from "@/components/ui/project-card"

const featuredProjects = [
  {
    title: "Finsight AI",
    image: "/f1.jpg",
    problem: "Async AI expense manager — Celery + Redis pipeline offloads Gemini 2.5-flash API calls from Flask, hitting 85–417ms response times in production. JWT auth with Redis-based token blacklisting. 95+ Lighthouse score on frontend.",
    stack: ["Flask", "Celery", "Redis", "Gemini API", "MongoDB", "Docker", "Next.js", "DigitalOcean"],
    githubUrl: "https://github.com/Pranavchikte/finsight_ai_backend",
    demoUrl: "https://www.finsightfinance.me/",
    detailUrl: "/projects/finsight-ai",
  },
  {
    title: "CineScope",
    image: "/m1.png",
    problem: "Full-stack movie platform — Gemini Pro powers a conversational recommendation engine with in-memory vector embeddings. JWT refresh token rotation in Redis. Versioned FastAPI routes with SQLAlchemy 2.0 and Alembic migrations.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "SQLAlchemy 2.0", "Gemini Pro", "Docker", "Next.js"],
    githubUrl: "https://github.com/Pranavchikte/cinescope-backend",
    demoUrl: "https://www.cinescopes.app/",
    detailUrl: "/projects/cinescope",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2 production AI products built and shipped solo — from system design to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}