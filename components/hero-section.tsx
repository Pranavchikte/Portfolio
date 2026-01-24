"use client"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-8"
    >
      <BackgroundRippleEffect />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="text-6xl font-bold text-balance mb-4 md:text-8xl">
          <TextHoverEffect text="Pranav" />
        </div>

        <h2 className="text-2xl font-semibold text-primary mb-8 md:text-3xl">
          Software Engineer — Backend Focus
        </h2>

        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty md:text-xl">
          I build production-ready backend systems that handle real traffic. 
          Specialized in <span className="text-foreground font-medium">scalable REST APIs with FastAPI and Flask</span>, 
          <span className="text-foreground font-medium"> async task processing using Celery + Redis</span>, 
          and <span className="text-foreground font-medium">AI integrations with LangChain and Gemini</span>. 
          I ship complete products—from system design to deployment on Digital Ocean and Vercel—that solve actual problems.
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