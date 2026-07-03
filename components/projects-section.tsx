"use client"

import { ProjectCard } from "@/components/ui/project-card"
import { getFeaturedProjects } from "@/lib/projects"
import { useInView } from "@/hooks/use-in-view"

export function ProjectsSection() {
  const sectionRef = useInView()
  const featuredProjects = getFeaturedProjects()

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-shell animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="section-intro">
          <p className="section-kicker">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Production systems built end-to-end — architecture, AI integration, and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
