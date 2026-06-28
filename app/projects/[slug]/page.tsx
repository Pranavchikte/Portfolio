import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  IconBolt,
  IconBrandGithub,
  IconCpu,
  IconDatabase,
  IconExternalLink,
  IconSearch,
  IconServer,
} from "@tabler/icons-react"
import { Header } from "@/components/header"
import { getProjectBySlug, projects } from "@/lib/projects"
import { siteConfig } from "@/lib/site"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

const iconMap = {
  cpu: IconCpu,
  bolt: IconBolt,
  database: IconDatabase,
  server: IconServer,
  search: IconSearch,
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  const title = `${project.title} | ${siteConfig.name}`
  const description = project.detailSubtitle
  const url = `${siteConfig.siteUrl}/projects/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
          >
            ← Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.detailSubtitle}</p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <IconExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                Backend
              </a>
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                Frontend
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border mb-14">
            <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover" priority />
          </div>

          {/* Problem */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-3">The Problem</h2>
            <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">{project.solution}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature) => {
                const FeatureIcon = iconMap[feature.icon]
                return (
                  <div key={feature.title} className="surface-card rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <FeatureIcon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
            <div className="surface-card rounded-xl p-6">
              <div className="space-y-3">
                {project.architectureSteps.map((step, i) => (
                  <div key={step}>
                    <div className="bg-secondary border border-border px-4 py-2 rounded-md font-mono text-sm text-foreground inline-block">
                      {step}
                    </div>
                    {i < project.architectureSteps.length - 1 && (
                      <div className="pl-4 text-muted-foreground mt-1 text-sm">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Deployment:</span>{" "}
                  {project.deploymentNote}
                </p>
              </div>
            </div>
          </div>

          {/* Contributions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">My Role & Contributions</h2>
            <div className="surface-card rounded-xl p-6">
              <ul className="space-y-3">
                {project.contributions.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span className="text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{item.bold}</span>{" "}
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Challenge Solved</h2>
            <div className="surface-card rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">{project.challenge.challengeTitle}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.challenge.challengeBody}</p>
              <h3 className="font-semibold text-foreground mb-2">{project.challenge.solutionTitle}</h3>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-5 pl-1">
                {project.challenge.solutionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-sm font-semibold text-foreground">{project.challenge.result}</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-10 border-t border-border">
            <h2 className="text-2xl font-bold mb-2">Explore {project.title}</h2>
            <p className="text-sm text-muted-foreground mb-6">Live in production — try the demo or read the source.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <IconExternalLink className="w-4 h-4" />
                Try Live Demo
              </a>
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
