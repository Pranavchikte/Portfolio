"use client"

import React from "react"
import { toast } from "sonner"
import { track } from "@vercel/analytics"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { cn } from "@/lib/utils"
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import Link from "next/link"
import { formspreeEndpoint, siteConfig } from "@/lib/site"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    if (!name || !email || !message) {
      toast.error("Please complete all fields before sending.")
      return
    }

    if (!formspreeEndpoint) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
      track("contact_mailto_fallback")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Inquiry from ${name}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I will get back to you soon.",
        duration: 4000,
      })
      track("contact_form_submit_success")
      form.reset()
    } catch {
      toast.error("Could not send message right now.", {
        description: `Please email me directly at ${siteConfig.email}.`,
      })
      track("contact_form_submit_error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell scroll-mt-16">
      <div className="mx-auto w-full max-w-3xl section-wrap section-frame">
        <div className="section-intro">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s Build Together</h2>
        </div>

        <div className="shadow-input mx-auto w-full max-w-xl rounded-2xl surface-card p-4 md:p-8">
        <h2 className="text-xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          I&apos;m open to new opportunities. Send me a message, and I&apos;ll
          get back to you.
        </p>
        <p className="mt-1 text-sm text-cyan-400">{siteConfig.email}</p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="Your name" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Your Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hi Pranav, I'd like to connect..."
              required
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="flex flex-col space-y-4">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("contact_github_click")}
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-secondary px-4 font-medium text-secondary-foreground border border-border hover:bg-secondary/80 transition-colors"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span className="text-sm">
                GitHub
              </span>
              <BottomGradient />
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("contact_linkedin_click")}
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-secondary px-4 font-medium text-secondary-foreground border border-border hover:bg-secondary/80 transition-colors"
            >
              <IconBrandLinkedin className="h-4 w-4" />
              <span className="text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </Link>
          </div>
        </form>
        </div>
      </div>
    </section>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 blur-sm transition duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  )
}
