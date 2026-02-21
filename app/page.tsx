import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CredibilitySection } from "@/components/credibility-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingEmailCta } from "@/components/floating-email-cta"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-clip">
      <div className="no-mobile-effects pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[32rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-24 h-72 w-72 rounded-full bg-amber-400/8 blur-3xl" />
      </div>

      <Header />
      <HeroSection />
      <CredibilitySection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <SkillsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
      <FloatingEmailCta />
    </main>
  )
}
