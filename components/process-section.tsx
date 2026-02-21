const processSteps = [
  {
    title: "1. Design For Failure",
    description:
      "I design service boundaries, retries, and fallback behavior early so the system remains stable under real-world conditions.",
  },
  {
    title: "2. Build Clean Service Layers",
    description:
      "I keep route handlers thin, push business logic into services, and keep data access explicit for easier iteration.",
  },
  {
    title: "3. Automate Delivery",
    description:
      "I deploy with repeatable workflows, environment separation, and docs that let teams ship without hidden tribal knowledge.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-16">
      <div className="max-w-6xl mx-auto section-wrap section-frame">
        <div className="section-intro">
          <p className="section-kicker">Engineering Workflow</p>
          <h2 className="section-title">How I Build</h2>
          <p className="section-subtitle max-w-3xl">
            My workflow is focused on shipping robust systems quickly and keeping them easy for teams to extend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <article key={step.title} className="surface-card desktop-card-hover rounded-2xl p-6">
              <div className="mb-3 inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title.replace(/^\d+\.\s*/, "")}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
