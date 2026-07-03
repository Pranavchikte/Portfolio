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
import { useInView } from "@/hooks/use-in-view"

export function ContactSection() {
  const sectionRef = useInView()
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

      if (!response.ok) throw new Error("Form submission failed")

      toast.success("Message sent!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 4000,
      })
      track("contact_form_submit_success")
      form.reset()
    } catch {
      toast.error("Could not send message.", {
        description: `Email me directly at ${siteConfig.email}.`,
      })
      track("contact_form_submit_error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-shell animate-on-scroll scroll-mt-16"
    >
      <div className="mx-auto max-w-lg">
        <div className="section-intro">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to conversations about backend systems, AI integration, and new opportunities.
          </p>
        </div>

        <div className="surface-card rounded-xl p-6 md:p-8">
          <p className="text-sm text-primary font-medium mb-6">{siteConfig.email}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="you@example.com" type="email" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Hi Pranav, I'd like to connect..." required />
            </LabelInputContainer>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-center disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border flex gap-3">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("contact_github_click")}
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-border transition-colors"
            >
              <IconBrandGithub className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("contact_linkedin_click")}
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-border transition-colors"
            >
              <IconBrandLinkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn("flex w-full flex-col gap-1.5", className)}>
    {children}
  </div>
)
