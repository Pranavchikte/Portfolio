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
import { Button } from "@/components/ui/button"
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
    return {
      title: "Project Not Found",
    }
  }

  const title = `${project.title} | ${siteConfig.name}`
  const description = project.detailSubtitle
  const url = `${siteConfig.siteUrl}/projects/${project.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
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

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.detailSubtitle}</p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  Backend
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  Frontend
                </a>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-2xl mb-16">
            <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover" priority />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.solution}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature) => {
                const FeatureIcon = iconMap[feature.icon]
                return (
                  <div key={feature.title} className="bg-card border border-border p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <FeatureIcon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="bg-card border border-border px-4 py-3 rounded-lg text-center font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
            <div className="bg-card border border-border p-8 rounded-lg">
              <div className="space-y-3">
                {project.architectureSteps.map((step, i) => (
                  <div key={step}>
                    <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm inline-block">
                      {step}
                    </div>
                    {i < project.architectureSteps.length - 1 && (
                      <div className="pl-4 text-muted-foreground mt-1">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Deployment:</span>{" "}
                  {project.deploymentNote}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">My Role & Contributions</h2>
            <div className="bg-card border border-border p-8 rounded-lg">
              <ul className="space-y-4 text-lg text-muted-foreground">
                {project.contributions.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>
                      <span className="text-foreground font-medium">{item.bold}</span> {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Challenge Solved</h2>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{project.challenge.challengeTitle}</h3>
              <p className="text-lg text-muted-foreground mb-6">{project.challenge.challengeBody}</p>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{project.challenge.solutionTitle}</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 pl-4">
                {project.challenge.solutionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-lg font-semibold text-foreground">{project.challenge.result}</p>
            </div>
          </div>

          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold mb-4">Explore {project.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">Live in production. Try the demo or read the source code.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <IconExternalLink className="w-5 h-5" />
                  Try Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
