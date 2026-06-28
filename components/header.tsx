"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { track } from "@vercel/analytics"
import { IconMenu2, IconX, IconDownload, IconMail } from "@tabler/icons-react"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  const navItems = useMemo(() => [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#projects" },
    { name: "Skills", link: "/#skills" },
    { name: "Education", link: "/#education" },
    { name: "Contact", link: "/#contact" },
  ], [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = navItems
      .map((item) => item.link)
      .filter((link) => link.startsWith("/#"))
      .map((link) => link.replace("/#", ""))

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: "-24% 0px -56% 0px", threshold: [0.15, 0.3, 0.55] }
    )

    sections.forEach((s) => observer.observe(s))

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && sectionIds.includes(hash)) setActiveSection(hash)
    }
    syncHash()
    window.addEventListener("hashchange", syncHash)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", syncHash)
    }
  }, [pathname, navItems])

  const isActive = (link: string) => {
    if (pathname !== "/") return false
    return link === `/#${activeSection}`
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Pranav Chikte
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                isActive(item.link)
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("nav_resume_click")}
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <IconDownload className="h-4 w-4" />
            Resume
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            onClick={() => track("cta_email_nav_click")}
            className="btn-primary inline-flex items-center gap-1.5 text-sm"
          >
            <IconMail className="h-4 w-4" />
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground rounded-md hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.link)
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { track("nav_resume_mobile_click"); setIsMobileMenuOpen(false) }}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <IconDownload className="h-5 w-5" />
              Resume
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => { track("cta_email_nav_mobile_click"); setIsMobileMenuOpen(false) }}
              className="btn-primary flex items-center justify-center gap-2 text-sm w-full"
            >
              <IconMail className="h-5 w-5" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
