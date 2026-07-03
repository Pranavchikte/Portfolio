import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  IconBolt,
  IconCpu,
  IconDatabase,
  IconServer,
  IconSearch,
  IconArrowUpRight,
  IconArrowLeft,
} from "@tabler/icons-react"
import { Header } from "@/components/header"
import { getProjectBySlug, projects } from "@/lib/projects"
import { siteConfig } from "@/lib/site"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

const BORDER = "0.5px solid #E8E5DF"
const SERIF = "var(--font-playfair), Georgia, serif"
const MONO = "var(--font-geist-mono), ui-monospace, monospace"

const iconMap = {
  cpu: IconCpu,
  bolt: IconBolt,
  database: IconDatabase,
  server: IconServer,
  search: IconSearch,
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Project Not Found" }

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
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.18em] mb-5" style={{ color: "#B0A89E" }}>
      {children}
    </p>
  )
}

function GhostNum({ n }: { n: string }) {
  return (
    <span
      className="absolute top-0 right-0 text-[44px] md:text-[72px] font-black leading-none select-none pointer-events-none"
      style={{ fontFamily: SERIF, color: "#F0EDE8", letterSpacing: "-0.04em" }}
      aria-hidden
    >
      {n}
    </span>
  )
}

function ArrowLink({ href, children, accent = false }: { href: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.1em] transition-opacity hover:opacity-60"
      style={{ color: accent ? "#BF5C1A" : "#9A9690" }}
    >
      {children}
      <IconArrowUpRight className="h-3 w-3 stroke-[1.5]" aria-hidden />
    </a>
  )
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main style={{ background: "#F8F7F3", color: "#1A1918", minHeight: "100vh" }}>
      <Header />

      <div className="pt-14">

        {/* ── Back + Links bar ── */}
        <div
          className="flex items-center justify-between px-5 md:px-16 py-4"
          style={{ borderBottom: BORDER }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            style={{ color: "#9A9690" }}
          >
            <IconArrowLeft className="h-3 w-3 stroke-[1.5]" aria-hidden />
            Work
          </Link>
          <div className="flex items-center gap-6">
            <ArrowLink href={project.links.demo} accent>Live</ArrowLink>
            <ArrowLink href={project.links.backend}>GitHub</ArrowLink>
          </div>
        </div>

        {/* ── Title block ── */}
        <section
          className="relative px-5 md:px-16 pt-12 pb-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="00" />
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] mb-4" style={{ color: "#B0A89E" }}>
            Case Study
          </p>
          <h1
            className="font-black leading-[0.88] tracking-[-0.02em] mb-4 max-w-[680px]"
            style={{ fontFamily: SERIF, fontSize: "clamp(36px, 8vw, 100px)", color: "#1A1918" }}
          >
            {project.title}
          </h1>
          <p className="text-[14px] leading-[1.8] max-w-[520px]" style={{ color: "#787369" }}>
            {project.detailSubtitle}
          </p>
        </section>

        {/* ── Problem ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="01" />
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-[14px] leading-[1.85] max-w-[600px]" style={{ color: "#787369" }}>
            {project.problem}
          </p>
        </section>

        {/* ── Solution ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="02" />
          <SectionLabel>The Solution</SectionLabel>
          <p className="text-[14px] leading-[1.85] max-w-[600px] mb-10" style={{ color: "#787369" }}>
            {project.solution}
          </p>

          {/* Feature rows — mobile-friendly */}
          <div style={{ borderTop: BORDER }}>
            {project.features.map((feature) => {
              const FeatureIcon = iconMap[feature.icon]
              return (
                <div
                  key={feature.title}
                  className="py-4"
                  style={{ borderBottom: BORDER }}
                >
                  {/* Mobile: stacked. Desktop: grid */}
                  <div className="flex items-center gap-2 mb-1 md:hidden">
                    <FeatureIcon className="w-3.5 h-3.5 shrink-0 stroke-[1.5]" style={{ color: "#BF5C1A" }} />
                    <span className="text-[12px] font-semibold" style={{ color: "#1A1918" }}>{feature.title}</span>
                  </div>
                  <p className="text-[12px] leading-[1.65] md:hidden pl-[22px]" style={{ color: "#787369" }}>{feature.description}</p>

                  {/* Desktop only grid row */}
                  <div
                    className="hidden md:grid gap-6"
                    style={{ gridTemplateColumns: "20px 160px 1fr" }}
                  >
                    <FeatureIcon className="w-4 h-4 mt-0.5 stroke-[1.5]" style={{ color: "#BF5C1A" }} />
                    <span className="text-[12px] font-semibold" style={{ color: "#1A1918" }}>{feature.title}</span>
                    <span className="text-[12px] leading-[1.7]" style={{ color: "#787369" }}>{feature.description}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Stack ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="03" />
          <SectionLabel>Stack</SectionLabel>
          <p className="text-[13px] leading-[2] max-w-[600px]" style={{ color: "#787369", fontFamily: MONO }}>
            {project.stack.map((tech, i) => (
              <span key={tech}>
                {i > 0 && <span style={{ color: "#D5D0C9" }}> · </span>}
                {tech}
              </span>
            ))}
          </p>
        </section>

        {/* ── Architecture ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="04" />
          <SectionLabel>Architecture</SectionLabel>
          <div className="max-w-[560px]" style={{ borderTop: BORDER }}>
            {project.architectureSteps.map((step, i) => (
              <div
                key={step}
                className="flex items-baseline gap-4 py-3"
                style={{ borderBottom: BORDER }}
              >
                <span
                  className="shrink-0 text-[11px] font-medium"
                  style={{ fontFamily: MONO, color: "#BF5C1A", minWidth: "28px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[12px] leading-[1.65]" style={{ fontFamily: MONO, color: "#787369" }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] leading-[1.7] max-w-[480px]" style={{ color: "#B0A89E" }}>
            {project.deploymentNote}
          </p>
        </section>

        {/* ── Contributions ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="05" />
          <SectionLabel>My Role</SectionLabel>
          <div className="max-w-[600px] flex flex-col gap-4">
            {project.contributions.map((item) => (
              <p key={item.bold} className="text-[13px] leading-[1.8]" style={{ color: "#787369" }}>
                <span className="font-semibold" style={{ color: "#1A1918" }}>{item.bold}</span>
                {" "}{item.rest}
              </p>
            ))}
          </div>
        </section>

        {/* ── Challenge ── */}
        <section
          className="relative px-5 md:px-16 py-10 md:py-14 overflow-hidden"
          style={{ borderBottom: BORDER }}
        >
          <GhostNum n="06" />
          <SectionLabel>Technical Challenge</SectionLabel>
          <div
            className="max-w-[580px] pl-4"
            style={{ borderLeft: "1.5px solid #BF5C1A" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: "#BF5C1A" }}>
              {project.challenge.challengeTitle}
            </p>
            <p className="text-[13px] leading-[1.85] mb-6" style={{ color: "#787369" }}>
              {project.challenge.challengeBody}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: "#BF5C1A" }}>
              {project.challenge.solutionTitle}
            </p>
            <ol className="flex flex-col gap-2 mb-6" style={{ listStyle: "none", padding: 0 }}>
              {project.challenge.solutionSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-[13px] leading-[1.7]" style={{ color: "#787369" }}>
                  <span style={{ color: "#BF5C1A", fontFamily: MONO, fontSize: "11px", paddingTop: "2px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="text-[13px] font-semibold" style={{ color: "#1A1918" }}>
              {project.challenge.result}
            </p>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="px-5 md:px-16 py-12 md:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] mb-4" style={{ color: "#B0A89E" }}>
            Explore {project.title}
          </p>
          <h2
            className="font-bold italic leading-[0.9] mb-6 max-w-[520px]"
            style={{ fontFamily: SERIF, fontSize: "clamp(32px, 6vw, 72px)", color: "#1A1918" }}
          >
            Live in production.
          </h2>
          <div className="flex flex-wrap gap-6">
            <ArrowLink href={project.links.demo} accent>Try the demo</ArrowLink>
            <ArrowLink href={project.links.backend}>Backend source</ArrowLink>
            <ArrowLink href={project.links.frontend}>Frontend source</ArrowLink>
          </div>
        </section>
      </div>
    </main>
  )
}
