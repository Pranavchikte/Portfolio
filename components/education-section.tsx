"use client"

import React from "react"
import { motion } from "motion/react"
import { useAnimationSettings } from "@/hooks/use-animation-settings"

const educationData = [
  {
    institution: "P.R. Pote Patil College of Engineering and Management, Amravati",
    degree: "B.E. in Artificial Intelligence and Data Science | CGPA: 8.0/10.0",
    years: "Nov 2022 – May 2026",
  },
  {
    institution: "Jagruthi Vidyaalya Akola",
    degree: "Higher Secondary (12th), Computer Science",
    years: "May 2020 – Jul 2022",
  },
  {
    institution: "Gurukul Dnyanpeeth Telhara",
    degree: "Secondary Education (10th)",
    years: "Jun 2010 – Mar 2020",
  },
]

export function EducationSection() {
  const { disableAnimations } = useAnimationSettings()

  return (
    <section id="education" className="section-shell section-shell-alt scroll-mt-16">
      <div className="max-w-6xl mx-auto section-wrap section-frame">
        <div className="section-intro">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-border">
            {educationData.map((item, index) => (
              disableAnimations ? (
                <div key={index} className="mb-8 ml-6">
                  <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-background"></span>
                  <div className="surface-card rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.institution}</h3>
                    <p className="text-base font-normal text-muted-foreground mb-2">{item.degree}</p>
                    <p className="text-sm font-normal text-muted-foreground/80">{item.years}</p>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={index}
                  className="mb-8 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-background"></span>
                  <div className="surface-card desktop-card-hover rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.institution}</h3>
                    <p className="text-base font-normal text-muted-foreground mb-2">{item.degree}</p>
                    <p className="text-sm font-normal text-muted-foreground/80">{item.years}</p>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
