"use client"

import { CardSpotlight } from "@/components/ui/card-spotlight"
import { IconArrowRight, IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import { useAnimationSettings } from "@/hooks/use-animation-settings"
import { cn } from "@/lib/utils"
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

function CaseStudyLine({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className={cn("rounded-lg border border-border/70 bg-background/65 px-3 py-2", highlight && "accent-pill-alt")}>
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className="text-sm leading-relaxed text-foreground/90">{value}</p>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { disableAnimations } = useAnimationSettings()
  const visibleStack = project.stack.slice(0, disableAnimations ? 5 : 7)

  return (
    <CardSpotlight className="group h-full w-full overflow-hidden rounded-2xl p-0">
      <article className="relative z-20 flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              "object-cover",
              !disableAnimations && "transition-transform duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            )}
          />
          {project.detailUrl && !disableAnimations && (
            <Link
              href={project.detailUrl}
              className="absolute inset-0 flex items-center justify-center bg-black/58 opacity-0 transition-opacity duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
            >
              <span className="inline-flex items-center gap-2 text-base font-semibold text-white">
                Open Case Study
                <IconArrowRight className="h-5 w-5" />
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="accent-pill rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]">
              Project Case Study
            </span>
            <span className="text-xs text-muted-foreground">{project.stack.length} technologies</span>
          </div>

          {project.detailUrl ? (
            <Link href={project.detailUrl} className="inline-block">
              <h3 className="font-display text-2xl font-bold leading-tight text-foreground hover:text-cyan-400">
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3 className="font-display text-2xl font-bold leading-tight text-foreground">{project.title}</h3>
          )}

          <p className="mb-4 mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="space-y-2.5">
            <CaseStudyLine label="Problem" value={project.problem} />
            <CaseStudyLine label="Solution" value={project.solution} />
            <CaseStudyLine label="Outcome" value={project.outcome} highlight />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {visibleStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/80 bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border/70 pt-4">
            {project.detailUrl && (
              <Link
                href={project.detailUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View Details
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
    </CardSpotlight>
  )
}
