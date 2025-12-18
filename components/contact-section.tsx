"use client"

import React from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { cn } from "@/lib/utils"
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import Link from "next/link"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic here (e.g., Formspree, Netlify Forms, or API endpoint)
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 px-8">
      <div className="shadow-input mx-auto w-full max-w-lg rounded-2xl bg-black p-4 md:p-8">
        <h2 className="text-xl font-bold text-neutral-200">
          Get In Touch
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-300">
          I'm open to new opportunities. Send me a message, and I'll
          get back to you.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Pranav Chikte" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Your Email Address</Label>
            <Input
              id="email"
              placeholder="example@gmail.com"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Hi Pranav, I'd like to connect..."
              required
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

          {/* Updated Social Links with correct URLs */}
          <div className="flex flex-col space-y-4">
            <Link
              href="https://github.com/Pranavchikte"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-zinc-900 px-4 font-medium text-neutral-300 shadow-[0px_0px_1px_1px_#262626] hover:bg-zinc-800 transition-colors"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-300" />
              <span className="text-sm">
                GitHub
              </span>
              <BottomGradient />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pranavchikte"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-zinc-900 px-4 font-medium text-neutral-300 shadow-[0px_0px_1px_1px_#262626] hover:bg-zinc-800 transition-colors"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
              <span className="text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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