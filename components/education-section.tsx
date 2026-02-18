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
    years: "Mar 2021 – Jul 2022",
  },
  {
    institution: "Gurukul Dnyanpeeth Telhara",
    degree: "Secondary Education (10th)",
    years: "Jun 2010 – May 2020",
  },
]

export function EducationSection() {
  const { disableAnimations } = useAnimationSettings()

  return (
    <section id="education" className="py-24 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-neutral-700">
            {educationData.map((item, index) => (
              disableAnimations ? (
                <div key={index} className="mb-10 ml-6">
                  <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-neutral-900"></span>
                  <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-white mb-1">{item.institution}</h3>
                    <p className="text-base font-normal text-neutral-400 mb-2">{item.degree}</p>
                    <p className="text-sm font-normal text-neutral-500">{item.years}</p>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={index}
                  className="mb-10 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-neutral-900"></span>
                  <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-white mb-1">{item.institution}</h3>
                    <p className="text-base font-normal text-neutral-400 mb-2">{item.degree}</p>
                    <p className="text-sm font-normal text-neutral-500">{item.years}</p>
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