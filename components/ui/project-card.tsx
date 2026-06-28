"use client"

import { IconArrowRight, IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  image: string
  summary: string
  problem: string
  solution: string
  outcome: string
  stack: string[]
  githubUrl: string
  demoUrl: string
  detailUrl?: string
}

export function ProjectCard({ project }: { project: Project }) {
  const visibleStack = project.stack.slice(0, 6)

  return (
    <article className="surface-card card-hover group rounded-xl overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {project.detailUrl ? (
          <Link href={project.detailUrl}>
            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors leading-snug">
              {project.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-xl font-semibold text-foreground leading-snug">{project.title}</h3>
        )}

        <p className="mt-2 mb-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-foreground/75"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              +{project.stack.length - 6}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
          {project.detailUrl && (
            <Link
              href={project.detailUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Case Study
              <IconArrowRight className="h-4 w-4" />
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1.5 text-sm font-medium"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1.5 text-sm font-medium"
          >
            <IconExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  )
}
