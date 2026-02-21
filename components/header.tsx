"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { track } from "@vercel/analytics"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { IconDownload, IconCode, IconMail } from "@tabler/icons-react"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const pathname = usePathname()

  const navItems = useMemo(() => [
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Process", link: "/#process" },
    { name: "Skills", link: "/#skills" },
    { name: "Achievements", link: "/#achievements" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/#contact" },
  ], [])

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

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: "-24% 0px -56% 0px",
        threshold: [0.15, 0.3, 0.55],
      }
    )

    sections.forEach((section) => observer.observe(section))
    syncHash()
    window.addEventListener("hashchange", syncHash)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", syncHash)
    }
  }, [pathname, navItems])

  const isActiveItem = (link: string) => {
    if (link === "/resume") {
      return pathname === "/resume"
    }

    if (pathname !== "/") {
      return false
    }

    return link === `/#${activeSection}`
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/" className="hover:scale-105">
          <Avatar className="h-12 w-12 ring-2 ring-cyan-500/25">
            <AvatarImage src="/professional-software-engineer-avatar.jpg" alt="Pranav" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">P</AvatarFallback>
          </Avatar>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold",
                isActiveItem(item.link)
                  ? "bg-cyan-500/12 text-cyan-400 ring-1 ring-cyan-500/30"
                  : "text-foreground/75 hover:bg-accent hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* LeetCode Link */}
          <a
            href={siteConfig.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("nav_leetcode_click")}
            className="ml-1 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-foreground/75 hover:bg-accent hover:text-foreground"
          >
            <IconCode className="w-4 h-4" />
            LeetCode
          </a>

          <ThemeToggle />

          <Button asChild className="btn-primary" size="sm">
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => track("cta_email_nav_click")}
              className="inline-flex items-center gap-2"
            >
              <IconMail className="w-4 h-4" />
              Hire Me
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <Link href="/resume" className="inline-flex items-center gap-2" onClick={() => track("nav_resume_click")}>
              <IconDownload className="w-4 h-4" />
              Resume
            </Link>
          </Button>
        </nav>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Avatar className="w-12 h-12">
              <AvatarImage src="/professional-software-engineer-avatar.jpg" alt="Pranav" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">P</AvatarFallback>
            </Avatar>
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "w-full rounded-md px-2 py-1 text-lg font-medium",
                isActiveItem(item.link)
                  ? "bg-cyan-500/12 text-cyan-400"
                  : "text-foreground/80 hover:bg-accent hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* LeetCode Link - Mobile */}
          <a
            href={siteConfig.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-lg font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
          >
            <IconCode className="w-5 h-5" />
            LeetCode
          </a>

          <div className="pt-2">
            <ThemeToggle />
          </div>

          <Button asChild className="btn-primary w-full" size="lg">
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => {
                track("cta_email_nav_mobile_click")
                setIsMobileMenuOpen(false)
              }}
              className="inline-flex items-center justify-center gap-2"
            >
              <IconMail className="w-5 h-5" />
              Hire Me
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full mt-4" size="lg">
            <Link
              href="/resume"
              onClick={() => {
                track("nav_resume_mobile_click")
                setIsMobileMenuOpen(false)
              }}
              className="inline-flex items-center justify-center gap-2"
            >
              <IconDownload className="w-5 h-5" />
              Open Resume
            </Link>
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
