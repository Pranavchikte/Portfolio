"use client"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home" // CHANGED from "about" to "home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-8"
    >
      <BackgroundRippleEffect />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="text-6xl font-bold text-balance mb-4 md:text-8xl">
          <TextHoverEffect text="Pranav" />
        </div>

        <h2 className="text-2xl font-semibold text-primary mb-8 md:text-3xl">
          Backend Developer & AI Engineer
        </h2>

        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty md:text-xl">
          Final-year AI & Data Science student building production-ready backend systems with Python, Flask, and FastAPI. 
          I specialize in <span className="text-foreground font-medium">scalable APIs, async task processing with Celery</span>, 
          and <span className="text-foreground font-medium">AI-powered applications using LangChain and RAG</span>. 
          From architecting the solution to deploying on Railway or Vercel—I ship complete products that solve real problems.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button asChild className="btn-primary" size="lg">
            <Link href="#projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}