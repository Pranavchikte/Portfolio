"use client"

import { ProjectCard } from "@/components/ui/project-card"
import { getFeaturedProjects } from "@/lib/projects"

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="projects" className="section-shell section-shell-alt scroll-mt-16">
      <div className="max-w-6xl mx-auto section-wrap section-frame">
        <div className="section-intro">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production systems built end-to-end: architecture, implementation, and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                title: project.title,
                image: "",
                summary: project.cardSummary,
                problem: project.cardProblem,
                solution: project.cardSolution,
                outcome: project.cardOutcome,
                stack: project.stack,
                githubUrl: project.links.backend,
                demoUrl: project.links.demo,
                detailUrl: `/projects/${project.slug}`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
