"use client"

import { CardSpotlight } from "@/components/ui/card-spotlight"
import { IconBrandGithub, IconExternalLink, IconArrowRight } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"

// Define the shape of our project data
type Project = {
  title: string
  image: string
  problem: string
  stack: string[]
  githubUrl: string
  demoUrl: string
  detailUrl?: string // ADDED: Optional detail page URL
}

export function ProjectCard({ project }: { project: Project }) {
  // Track hover state for AnimatePresence
  const [isHovered, setIsHovered] = useState(false)

  return (
    <CardSpotlight
      className="group w-full h-full p-0 overflow-hidden"
      key={project.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-20 flex flex-col h-full">
        {/* 1. Image on top with optional detail link overlay */}
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* ADDED: "View Details" overlay on image hover - only shows if detailUrl exists */}
          {project.detailUrl && (
            <Link 
              href={project.detailUrl}
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white font-semibold flex items-center gap-2 text-lg">
                View Details <IconArrowRight className="w-5 h-5" />
              </span>
            </Link>
          )}
        </div>

        {/* 2. Text content below */}
        <div className="flex flex-col p-6 flex-grow">
          {/* MODIFIED: Title is now clickable if detailUrl exists */}
          {project.detailUrl ? (
            <Link href={project.detailUrl}>
              <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
          )}

          {/* 3. Animated Content Container */}
          <div className="relative h-28 overflow-hidden">
            <AnimatePresence>
              {!isHovered && (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <p className="text-neutral-300 text-sm">{project.problem}</p>
                </motion.div>
              )}

              {isHovered && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col justify-between"
                >
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-neutral-800 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links - MODIFIED: Added View Details button if detailUrl exists */}
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    {project.detailUrl && (
                      <Link
                        href={project.detailUrl}
                        className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        <IconArrowRight className="w-5 h-5" />
                        <span className="text-sm">View Details</span>
                      </Link>
                    )}
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                      <IconBrandGithub className="w-5 h-5" />
                      <span className="text-sm font-medium">GitHub</span>
                    </Link>
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                      <IconExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </CardSpotlight>
  )
}