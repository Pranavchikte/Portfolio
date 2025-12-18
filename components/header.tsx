"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"
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

  // Navigation links
  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Skills", link: "/#skills" },
    { name: "Contact", link: "/#contact" },
  ]

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo/Avatar */}
        <Link href="/" className="hover:scale-105 transition-transform duration-200">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20">
            <AvatarImage src="/professional-software-engineer-avatar.jpg" alt="Pranav" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">P</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Nav Links + Resume Button */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Resume Download Button - Desktop */}
          <Button asChild className="btn-primary" size="sm">
            <a 
              href="/Pranav Chikte.pdf" 
              download="Pranav_Chikte_Resume.pdf"
              className="inline-flex items-center gap-2"
            >
              <IconDownload className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </nav>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo/Avatar */}
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

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Resume Download Button - Mobile */}
          <Button asChild className="btn-primary w-full mt-4" size="lg">
            <a 
              href="/Pranav Chikte.pdf" 
              download="Pranav_Chikte_Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2"
            >
              <IconDownload className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}