"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site"

const SERIF = "var(--font-playfair), Georgia, serif"
const BORDER = "0.5px solid #E8E5DF"

const navItems = [
  { name: "Work", link: "/#projects" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
  { name: "Resume", link: "/resume" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (link: string) =>
    link === "/resume" ? pathname === "/resume" : false

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ borderBottom: BORDER, background: "rgba(248,247,243,0.92)", backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center justify-between px-8 md:px-16 h-14">
        <Link
          href="/"
          className="text-[15px] font-bold tracking-tight transition-opacity hover:opacity-60"
          style={{ fontFamily: SERIF, color: "#1A1918" }}
        >
          PC
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-[11px] font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              style={{ color: isActive(item.link) ? "#BF5C1A" : "#9A9690" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[11px] font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
          style={{ color: "#9A9690" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: BORDER, background: "#F8F7F3" }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              style={{ color: isActive(item.link) ? "#BF5C1A" : "#9A9690", borderBottom: BORDER }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
