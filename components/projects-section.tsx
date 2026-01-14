"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import Link from "next/link"

// Updated project data - both projects now have detail pages
const featuredProjects = [
  {
    title: "Finsight AI",
    image: "/f1.jpg",
    problem: "Manual expense tracking is a waste of your time. Let an AI do it.",
    stack: ["Flask", "Celery", "Redis", "Gemini API", "MongoDB", "Railway"],
    githubUrl: "https://github.com/Pranavchikte/finsight_ai_backend",
    demoUrl: "https://finsight-ai-frontend-2grh.vercel.app/",
    detailUrl: "/projects/finsight-ai",
  },
  {
    title: "CineScope",
    image: "/m1.png",
    problem: "It's hard to find info, new releases, and trending movies all in one place.",
    stack: ["Flask", "React", "TMDB API", "Celery", "Redis", "DigitalOcean"],
    githubUrl: "https://github.com/Pranavchikte/cinescope-backend",
    demoUrl: "https://www.cinescopes.app/",
    detailUrl: "/projects/cinescope", // ADDED
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Here are a few key projects I've built from concept to deployment.
          </p>
        </div>

        {/* Both projects now have "View Details" functionality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="btn-primary" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}