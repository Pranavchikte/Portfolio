"use client"

import { useEffect, useRef } from "react"
import { IconTrophy, IconCode, IconAward, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"

// LeetCode stats data
const leetcodeStats = {
  username: "chiktepranav1378",
  profileUrl: "https://leetcode.com/u/chiktepranav1378/",
  totalSolved: 160,
  easy: 62,
  medium: 82,
  hard: 22,
  badges: ["50 Days Badge 2024", "100 Days Badge 2024", "Monthly Challenge"],
}

// Certifications data
const certifications = [
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    pdfPath: "/Udemy Web-dev.pdf",
    date: "2024",
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Coursera",
    pdfPath: "/Coursera Supervised Machine Learning.pdf",
    date: "2024",
  },
  {
    name: "CS50's Introduction to AI with Python",
    issuer: "Harvard - edX",
    pdfPath: "/CS50AI.pdf",
    date: "2024",
  },
  {
    name: "Machine Learning",
    issuer: "IBM - edX",
    pdfPath: "/edx Machine learning.pdf",
    date: "2024",
  },
]

export function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-8 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proof of continuous learning and problem-solving skills
          </p>
        </div>

        {/* LeetCode Stats Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <IconCode className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold">LeetCode Progress</h3>
              <Link 
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <IconExternalLink className="w-6 h-6" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {leetcodeStats.totalSolved}+
                </div>
                <div className="text-sm text-muted-foreground">Total Solved</div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {leetcodeStats.easy}
                </div>
                <div className="text-sm text-muted-foreground">Easy</div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {leetcodeStats.medium}
                </div>
                <div className="text-sm text-muted-foreground">Medium</div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">
                  {leetcodeStats.hard}
                </div>
                <div className="text-sm text-muted-foreground">Hard</div>
              </div>
            </div>

            {/* Badges */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <IconTrophy className="w-5 h-5 text-yellow-400" />
                <h4 className="text-lg font-semibold">Badges Earned</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {leetcodeStats.badges.map((badge) => (
                  <div
                    key={badge}
                    className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    🏆 {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <IconAward className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}