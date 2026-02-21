import { IconBolt, IconCode, IconRocket, IconUsers } from "@tabler/icons-react"

const highlights = [
  {
    icon: IconRocket,
    title: "Production Mindset",
    description: "I focus on systems that can be shipped, monitored, and maintained in real usage.",
  },
  {
    icon: IconCode,
    title: "Backend Ownership",
    description: "API design, async workflows, auth, data modeling, and deployment handled end-to-end.",
  },
  {
    icon: IconBolt,
    title: "Fast Execution",
    description: "I move from architecture to implementation quickly without sacrificing reliability.",
  },
  {
    icon: IconUsers,
    title: "Team Ready",
    description: "Clear documentation, clean handoffs, and pragmatic engineering decisions in collaborative settings.",
  },
]

export function CredibilitySection() {
  return (
    <section id="credibility" className="section-shell section-shell-alt scroll-mt-16">
      <div className="max-w-6xl mx-auto section-wrap section-frame">
        <div className="section-intro">
          <p className="section-kicker">Hiring Signal</p>
          <h2 className="section-title">Why Teams Hire Me</h2>
          <p className="section-subtitle">
            I build backend-heavy products with a production-first approach and clear delivery focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="surface-card desktop-card-hover rounded-2xl p-6">
                <div className="inline-flex items-center justify-center rounded-lg bg-cyan-500/15 p-2.5 mb-4">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
