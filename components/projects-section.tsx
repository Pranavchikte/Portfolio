"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Finsight AI",
    image: "/f1.jpg",
    problem: "AI-powered expense tracker with natural language input. Type 'coffee for 10 rupees' and Gemini API automatically categorizes and logs it.",
    stack: ["Flask", "Celery", "Redis", "Gemini API", "MongoDB", "Railway"],
    githubUrl: "https://github.com/Pranavchikte/finsight_ai_backend",
    demoUrl: "https://www.finsightfinance.me/",
    detailUrl: "/projects/finsight-ai",
  },
  {
    title: "CineScope",
    image: "/m1.png",
    problem: "Full-stack movie platform with TMDB API integration, Redis caching for optimized performance, and personalized watchlist management.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "TMDB API", "Docker"],
    githubUrl: "https://github.com/Pranavchikte/cinescope-backend",
    demoUrl: "https://www.cinescopes.app/",
    detailUrl: "/projects/cinescope",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Production systems built from concept to deployment. Real code solving real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* <div className="text-center">
          <Button asChild className="btn-primary" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div> */}
      </div>
    </section>
  )
}