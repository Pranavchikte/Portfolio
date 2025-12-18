"use client"

import React from "react"
import { motion } from "motion/react"

// 1. We define our education data based on your image
const educationData = [
  {
    institution: "Sant Gadge Baba Amravati University, Amravati",
    degree: "B.E Artificial Intelligence and Data science",
    years: "Nov 2022 - Nov 2026",
  },
  {
    institution: "Jagruthi Vidyaalya Akola",
    degree: "Higher Secondary Education, Computer Science",
    years: "Mar 2021 - Jul 2022",
  },
  {
    institution: "GURUKUL DNYANPEETH TELHARA",
    degree: "Secondary Education",
    years: "Jun 2010 - May 2020",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Education
          </h2>
        </div>

        {/* 2. This is our minimalist timeline container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-neutral-700">
            {/* 3. We map over each education item */}
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* The dot on the timeline */}
                <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-neutral-900"></span>
                
                {/* The text content */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-base font-normal text-neutral-400 mb-2">
                    {item.degree}
                  </p>
                  <p className="text-sm font-normal text-neutral-500">
                    {item.years}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}