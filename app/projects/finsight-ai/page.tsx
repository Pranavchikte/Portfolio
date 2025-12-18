"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  IconBrandGithub, 
  IconExternalLink,
  IconCpu,
  IconDatabase,
  IconServer,
  IconBolt
} from "@tabler/icons-react"

export default function FinsightAIProject() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          {/* Project title and links */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Finsight AI
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              AI-Powered Expense Manager That Automates Your Financial Tracking
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a 
                  href="https://finsight-ai-frontend-2grh.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/Pranavchikte/finsight_ai_backend" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-2xl mb-16">
            <Image
              src="/f1.jpg"
              alt="Finsight AI Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Problem Statement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Manual expense tracking is tedious and time-consuming. Most people abandon it after a few days because 
              categorizing expenses, analyzing spending patterns, and generating insights requires constant effort. 
              There was a need for an intelligent system that could automate the entire process while providing 
              actionable financial insights.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Finsight AI eliminates manual work by leveraging Google Gemini AI to automatically categorize expenses 
              and generate spending insights. Users simply type their expense (e.g., "Bought groceries for ₹500"), 
              and the AI instantly detects the category as "Food & Dining". The system then analyzes spending patterns 
              and provides monthly insights with visual charts and AI-generated summaries.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconCpu className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">AI-Powered Categorization</h3>
                </div>
                <p className="text-muted-foreground">
                  Gemini AI automatically detects and categorizes expenses from natural language input—no manual selection needed.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconBolt className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Spending Insights</h3>
                </div>
                <p className="text-muted-foreground">
                  AI generates personalized spending summaries and insights, helping users understand their financial habits.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconDatabase className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Visual Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  Monthly spending breakdown with interactive pie charts showing category-wise expense distribution.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconServer className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Smart Search</h3>
                </div>
                <p className="text-muted-foreground">
                  Quickly find past expenses with intelligent search functionality across all your transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Flask", "Celery", "Redis", "Gemini API", "MongoDB", "Railway", "React", "Next.js", "Vercel"].map((tech) => (
                <div 
                  key={tech}
                  className="bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-lg text-center font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg">
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    React Frontend
                  </div>
                  <span>→</span>
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Flask REST API
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Celery Task Queue
                  </div>
                  <span>→</span>
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Redis (Caching)
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Gemini API (AI Processing)
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    MongoDB (Data Storage)
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Response to Frontend
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Deployment:</span> Backend hosted on Railway | Frontend deployed on Vercel
                </p>
              </div>
            </div>
          </div>

          {/* My Role */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">My Role & Contributions</h2>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Architected and built the entire <span className="text-foreground font-medium">Flask REST API backend</span> from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Designed <span className="text-foreground font-medium">MongoDB schema</span> for efficient expense data storage and retrieval</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Integrated <span className="text-foreground font-medium">Google Gemini API</span> for AI-powered expense categorization and insights generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Implemented <span className="text-foreground font-medium">Celery + Redis</span> for asynchronous task processing to ensure seamless user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Deployed and maintained production application on <span className="text-foreground font-medium">Railway</span> with proper environment configuration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Challenge Solved</h2>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Problem: Slow API Response Times</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Initial implementation had significant delays when making Gemini API calls directly from the Flask routes. 
                Users experienced 2-3 second wait times after adding expenses, which severely impacted the user experience.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Solution: Async Processing with Celery & Redis</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Implemented a task queue system using Celery and Redis to process AI categorization asynchronously in the background. 
                When a user adds an expense:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4 pl-4">
                <li>The API immediately returns a success response to the frontend</li>
                <li>A Celery task is queued to process the AI categorization</li>
                <li>Redis caches frequently used categories to avoid redundant API calls</li>
                <li>The frontend polls for updates or uses WebSocket to display the categorized expense</li>
              </ol>
              
              <p className="text-lg font-semibold text-foreground">
                Result: API response time reduced from 2-3 seconds to under 300ms, providing a seamless user experience.
              </p>
            </div>
          </div>

          {/* What I Learned */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Real-World API Handling</h3>
                <p className="text-muted-foreground">
                  Learned how to handle external API rate limits, timeouts, and failures gracefully in production environments.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">System Integration</h3>
                <p className="text-muted-foreground">
                  Gained experience combining multiple components: Backend + AI API + Database + Frontend into a cohesive product.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Async Processing</h3>
                <p className="text-muted-foreground">
                  Mastered Redis and Celery for task queue management, significantly improving application performance and UX.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold mb-4">Want to see it in action?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The application is live and deployed. Check out the demo or view the source code.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a 
                  href="https://finsight-ai-frontend-2grh.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconExternalLink className="w-5 h-5" />
                  Try Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/Pranavchikte/finsight_ai_backend" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}