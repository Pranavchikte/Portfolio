"use client"

import { IconAward, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const certifications = [
  {
    name: "CS50's Introduction to AI with Python",
    issuer: "Harvard / edX",
    pdfPath: "/CS50AI.pdf",
    date: "2024",
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Coursera",
    pdfPath: "/Coursera Supervised Machine Learning.pdf",
    date: "2024",
  },
  {
    name: "Machine Learning",
    issuer: "IBM / edX",
    pdfPath: "/edx Machine learning.pdf",
    date: "2024",
  },
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    pdfPath: "/Udemy Web-dev.pdf",
    date: "2024",
  },
]

export function AchievementsSection() {
  const sectionRef = useInView()

  return (
    <section id="achievements" ref={sectionRef} className="py-24 px-4 md:px-8 animate-on-scroll scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified credentials from Harvard, Coursera, IBM, and Udemy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Link
              key={cert.name}
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4 h-16">
                <IconAward className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>

              <h4 className="text-lg font-semibold mb-2 text-center group-hover:text-cyan-400 transition-colors">
                {cert.name}
              </h4>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Certificate</span>
                <IconExternalLink className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}