"use client"

import { useInView } from "@/hooks/use-in-view"

const educationData = [
  {
    institution: "P.R. Pote Patil College of Engineering and Management, Amravati",
    degree: "B.E. in Artificial Intelligence and Data Science",
    detail: "CGPA: 8.0 / 10.0",
    years: "Nov 2022 – May 2026",
  },
  {
    institution: "Jagruthi Vidyaalya Akola",
    degree: "Higher Secondary (12th) — Computer Science",
    detail: "",
    years: "May 2020 – Jul 2022",
  },
  {
    institution: "Gurukul Dnyanpeeth Telhara",
    degree: "Secondary Education (10th)",
    detail: "",
    years: "Jun 2010 – Mar 2020",
  },
]

export function EducationSection() {
  const sectionRef = useInView()

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-shell section-shell-alt animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-2xl">
        <div className="section-intro">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="relative border-l border-border pl-6 space-y-6">
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="surface-card card-hover rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 className="text-base font-semibold text-foreground leading-snug">{item.institution}</h3>
                  <p className="text-xs text-muted-foreground shrink-0 sm:ml-4">{item.years}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                {item.detail && (
                  <p className="text-xs text-primary font-medium mt-1">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
