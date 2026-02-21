"use client"

import { IconMail } from "@tabler/icons-react"
import { track } from "@vercel/analytics"
import { siteConfig } from "@/lib/site"

export function FloatingEmailCta() {
  return (
    <a
      href={`mailto:${siteConfig.email}`}
      onClick={() => track("cta_email_floating_click")}
      className="hidden sm:inline-flex fixed right-5 bottom-5 z-40 items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_30px_-16px_rgba(6,182,212,0.75)] hover:-translate-y-0.5"
    >
      <IconMail className="h-4 w-4" />
      Email Me
    </a>
  )
}
