"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"
import { getFeaturedProjects } from "@/lib/projects"
import { siteConfig } from "@/lib/site"

const BORDER = "0.5px solid #E8E5DF"
const SERIF = "var(--font-playfair), Georgia, serif"

const sections = [
  { id: "hero",     label: "Index" },
  { id: "projects", label: "Work" },
  { id: "about",    label: "About" },
  { id: "stack",    label: "Stack" },
  { id: "now",      label: "Now" },
  { id: "contact",  label: "Contact" },
]

const stackRows = [
  { label: "AI / Agentic", items: ["Claude Code", "Anthropic SDK", "MCP", "Tool Use", "Gemini API"],       strong: ["Claude Code", "Anthropic SDK", "MCP"] },
  { label: "Backend",      items: ["Python", "FastAPI", "Flask", "Celery", "Redis", "PostgreSQL", "MongoDB"], strong: ["Python", "FastAPI", "Flask"] },
  { label: "Deploy",       items: ["Docker", "DigitalOcean", "Vercel", "GitHub Actions"],                    strong: ["Docker"] },
  { label: "Frontend",     items: ["Next.js", "TypeScript", "React", "Tailwind CSS"],                        strong: ["React"] },
]

const nowRows = [
  { label: "Working",  value: "Tata Consultancy Services", detail: ", Pune — Digital / IAE" },
  { label: "Building", value: "Anthropic SDK + MCP",       detail: " tool patterns for agentic workflows" },
  { label: "Seeking",  value: "GenAI backend roles",        detail: " — CRED, Razorpay, Groww tier" },
  { label: "Reading",  value: "Anthropic research",         detail: " on agentic systems and MCP architecture" },
]

const focusAreas = [
  { num: "01", title: "Agentic AI",      body: "Multi-step LLM pipelines, tool-use, retry patterns, async orchestration", accent: true },
  { num: "02", title: "Claude Code",     body: "Anthropic SDK, MCP servers, agentic coding workflows" },
  { num: "03", title: "Backend Systems", body: "FastAPI, Celery, Redis, PostgreSQL, Docker, async architecture" },
]

function ArrowLink({ href, children, accent = false, internal = false }: {
  href: string; children: React.ReactNode; accent?: boolean; internal?: boolean
}) {
  const cls = `inline-flex items-center gap-1 text-[12px] font-medium transition-opacity hover:opacity-60 ${accent ? "text-[#BF5C1A]" : "text-[#9A9690]"}`
  const icon = <IconArrowUpRight className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden />
  if (internal) return <Link href={href} className={cls}>{children}{icon}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}{icon}</a>
}

function SectionNum({ n }: { n: string }) {
  return (
    <span
      className="absolute top-0 right-0 text-[80px] font-black leading-none select-none pointer-events-none"
      style={{ fontFamily: SERIF, color: "#F0EDE8", letterSpacing: "-0.04em" }}
      aria-hidden
    >
      {n}
    </span>
  )
}

export default function Home() {
  const projects = getFeaturedProjects().slice(0, 2)
  const [activeSection, setActiveSection] = useState("hero")
  const observerRefs = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const railLabel = sections.find((s) => s.id === activeSection)?.label ?? "Index"

  return (
    <div className="min-h-screen flex" style={{ background: "#F8F7F3", color: "#1A1918" }}>

      {/* ── Left Rail (desktop only) ───────────────────────────────── */}
      <aside
        className="hidden md:flex flex-col items-center justify-between fixed top-0 left-0 h-screen py-6 z-30"
        style={{ width: "88px", borderRight: BORDER, background: "#F8F7F3" }}
      >
        <Link
          href="/"
          className="text-[15px] font-bold tracking-tight transition-opacity hover:opacity-60"
          style={{ fontFamily: SERIF, color: "#1A1918" }}
        >
          PC
        </Link>

        <div
          className="flex items-center justify-center"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span
            className="text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-200"
            style={{ color: "#B0A89E" }}
            key={railLabel}
          >
            {railLabel}
          </span>
        </div>

        <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          <span className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "#C8C3BC" }}>
            18.52°N 73.86°E
          </span>
        </div>
      </aside>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="w-full md:ml-[88px]">

        {/* Mobile nav */}
        <nav
          className="md:hidden flex items-center justify-between px-6 py-5"
          style={{ borderBottom: BORDER }}
        >
          <Link href="/" className="text-[16px] font-bold" style={{ fontFamily: SERIF, color: "#1A1918" }}>PC</Link>
          <div className="flex gap-5">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-[12px] hover:text-[#BF5C1A] transition-colors" style={{ color: "#9A9690" }}>GitHub</a>
            <a href={siteConfig.resumePdf} target="_blank" rel="noopener noreferrer" className="text-[12px] hover:text-[#BF5C1A] transition-colors" style={{ color: "#9A9690" }}>Resume</a>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative px-8 md:px-16 pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden"
          style={{ borderBottom: BORDER, minHeight: "88vh" }}
        >
          <SectionNum n="01" />
          <div className="flex flex-col justify-between h-full" style={{ minHeight: "inherit" }}>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-12" style={{ color: "#A09890" }}>
                Software Engineer · Pune ·{" "}
                <span style={{ color: "#BF5C1A" }}>Open to opportunities</span>
              </p>
              <h1
                className="font-black leading-[0.85] tracking-[-0.03em] mb-8 max-w-[720px]"
                style={{ fontFamily: SERIF, fontSize: "clamp(64px, 10vw, 130px)", color: "#1A1918" }}
              >
                Pranav
                <br />
                Chikte
              </h1>
              <p className="text-[15px] leading-[1.85] max-w-[440px] mb-3" style={{ color: "#787369" }}>
                I build{" "}
                <span className="font-semibold" style={{ color: "#1A1918" }}>agentic AI backends</span>{" "}
                — systems that reason through failure, coordinate tools, and stay reliable at production scale.
              </p>
              <p className="text-[13px] leading-[1.7] max-w-[440px]" style={{ color: "#9A9690" }}>
                Currently building with{" "}
                <span className="font-medium" style={{ color: "#BF5C1A" }}>Claude Code</span>{" "}
                and the Anthropic SDK — learning MCP tool patterns from the ground up.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-14">
              <ArrowLink href={siteConfig.social.github} accent>github.com/pranavchikte</ArrowLink>
              <ArrowLink href={siteConfig.resumePdf}>Resume</ArrowLink>
            </div>
          </div>
        </section>

        {/* ── Projects ──────────────────────────────────────────────── */}
        <section id="projects" className="relative px-8 md:px-16 py-16 md:py-20 overflow-hidden" style={{ borderBottom: BORDER }}>
          <SectionNum n="02" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-12" style={{ color: "#B0A89E" }}>Selected Work</p>
          <div className="flex flex-col gap-14">
            {projects.map((project, i) => (
              <article key={project.slug} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
                <div className="flex md:flex-col gap-4 md:gap-0 items-center md:items-start">
                  <span
                    className="font-black leading-none"
                    style={{ fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 52px)", color: "#EDE9E3" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="hidden md:block mt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] mb-1" style={{ color: "#B0A89E" }}>2024</p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em]" style={{ color: "#BF5C1A" }}>Live</p>
                  </div>
                </div>
                <div style={{ borderTop: BORDER, paddingTop: "20px" }}>
                  <h2
                    className="font-bold tracking-[-0.01em] mb-3"
                    style={{ fontFamily: SERIF, fontSize: "clamp(22px, 3vw, 30px)", color: "#1A1918" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-[13px] leading-[1.75] mb-3 max-w-[520px]" style={{ color: "#787369" }}>
                    {project.cardSummary}
                  </p>
                  <p className="text-[10px] tracking-[0.04em] mb-5" style={{ color: "#B0A89E" }}>
                    {project.stack.slice(0, 5).join(" · ")}
                  </p>
                  <div className="flex items-center gap-6">
                    <ArrowLink href={`/projects/${project.slug}`} accent internal>Case Study</ArrowLink>
                    <ArrowLink href={project.links.backend}>GitHub</ArrowLink>
                    <ArrowLink href={project.links.demo}>Live</ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────────── */}
        <section id="about" className="relative px-8 md:px-16 py-16 md:py-20 overflow-hidden" style={{ borderBottom: BORDER }}>
          <SectionNum n="03" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-12" style={{ color: "#B0A89E" }}>About</p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-14">
            <blockquote
              className="text-[20px] italic leading-[1.5]"
              style={{ fontFamily: SERIF, color: "#1A1918", borderLeft: "1.5px solid #BF5C1A", paddingLeft: "20px" }}
            >
              "Reliability is a feature, not an afterthought."
            </blockquote>
            <p className="text-[13px] leading-[1.9]" style={{ color: "#787369" }}>
              AI & Data Science background, but what I keep returning to is the{" "}
              <span className="font-medium" style={{ color: "#1A1918" }}>infrastructure layer</span>{" "}
              — async pipelines, retry logic, and tool-coordination patterns that make AI systems actually work in production.
              Drawn to the space where{" "}
              <span className="font-medium" style={{ color: "#1A1918" }}>LLM reasoning meets backend reliability.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="pt-4" style={{ borderTop: `1.5px solid ${area.accent ? "#BF5C1A" : "#E8E5DF"}` }}>
                <p className="text-[9px] font-medium tracking-[0.14em] uppercase mb-2" style={{ color: "#B0A89E" }}>{area.num}</p>
                <p className="text-[12px] font-semibold mb-1.5" style={{ color: "#1A1918" }}>{area.title}</p>
                <p className="text-[11px] leading-[1.65]" style={{ color: "#787369" }}>{area.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stack ─────────────────────────────────────────────────── */}
        <section id="stack" className="relative px-8 md:px-16 py-16 md:py-20 overflow-hidden" style={{ borderBottom: BORDER }}>
          <SectionNum n="04" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-10" style={{ color: "#B0A89E" }}>Stack</p>
          <div className="max-w-[640px]" style={{ borderTop: BORDER }}>
            {stackRows.map((row) => (
              <div key={row.label} className="grid gap-4 py-3 text-[12px]" style={{ borderBottom: BORDER, gridTemplateColumns: "100px 1fr" }}>
                <span className="font-medium" style={{ color: "#A09890" }}>{row.label}</span>
                <span style={{ color: "#787369" }}>
                  {row.items.map((item, idx) => (
                    <span key={item}>
                      {idx > 0 && <span style={{ color: "#D5D0C9" }}> · </span>}
                      <span className={row.strong.includes(item) ? "font-medium" : ""} style={{ color: row.strong.includes(item) ? "#1A1918" : "#787369" }}>
                        {item}
                      </span>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Now ───────────────────────────────────────────────────── */}
        <section id="now" className="relative px-8 md:px-16 py-16 md:py-20 overflow-hidden" style={{ borderBottom: BORDER }}>
          <SectionNum n="05" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] mb-10" style={{ color: "#B0A89E" }}>Now</p>
          <div className="grid gap-y-5 max-w-[560px]" style={{ gridTemplateColumns: "80px 1fr" }}>
            {nowRows.map((row) => (
              <div key={row.label} className="contents">
                <span className="text-[10px] font-medium uppercase tracking-[0.1em] pt-0.5" style={{ color: "#B0A89E" }}>{row.label}</span>
                <span className="text-[13px] leading-[1.65]" style={{ color: "#787369" }}>
                  <span className="font-medium" style={{ color: "#1A1918" }}>{row.value}</span>
                  {row.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────── */}
        <section id="contact" className="relative px-8 md:px-16 py-20 md:py-28 overflow-hidden" style={{ borderBottom: BORDER }}>
          <SectionNum n="06" />
          <h2
            className="font-bold italic leading-[0.88] mb-6 max-w-[640px]"
            style={{ fontFamily: SERIF, fontSize: "clamp(52px, 8vw, 110px)", color: "#1A1918" }}
          >
            Let's talk.
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[14px] font-medium block mb-8 transition-opacity hover:opacity-60"
            style={{ color: "#BF5C1A" }}
          >
            {siteConfig.email}
          </a>
          <div className="flex flex-wrap gap-6 text-[12px]" style={{ color: "#9A9690" }}>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#BF5C1A] transition-colors">GitHub</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#BF5C1A] transition-colors">LinkedIn</a>
            <a href={siteConfig.resumePdf} target="_blank" rel="noopener noreferrer" className="hover:text-[#BF5C1A] transition-colors">Resume</a>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="flex items-center justify-between px-8 md:px-16 py-5 text-[11px]"
          style={{ color: "#B0A89E" }}
        >
          <span>© 2026 Pranav Chikte</span>
          <span>Pune, Maharashtra</span>
        </footer>
      </div>
    </div>
  )
}
