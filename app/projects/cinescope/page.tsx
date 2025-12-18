"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  IconBrandGithub, 
  IconExternalLink,
  IconSearch,
  IconTrendingUp,
  IconMovie,
  IconBolt
} from "@tabler/icons-react"

export default function CineScopeProject() {
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
              CineScope
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your Gateway to Discovering Movies and Series—Trending, Latest Releases, and Everything Cinema
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a 
                  href="https://cinescope-client.vercel.app/" 
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
                  href="https://github.com/Pranavchikte/cinescope-api" 
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
              src="/m1.png"
              alt="CineScope Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Problem Statement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Movie enthusiasts often struggle to find comprehensive information about films and series in one place. 
              They have to jump between multiple platforms to discover trending content, check new releases, view cast 
              details, and read plot summaries. There was a need for a unified platform that brings all essential movie 
              information together with a fast, user-friendly experience.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CineScope is a modern movie discovery platform that aggregates data from The Movie Database (TMDB) API 
              to provide cinema lovers with everything they need—trending movies, latest releases, detailed cast information, 
              plot summaries, and ratings—all in one clean interface. Built for speed and simplicity, it's like IMDb 
              reimagined for the modern web.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconSearch className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Smart Movie Search</h3>
                </div>
                <p className="text-muted-foreground">
                  Instantly search and discover movies by title, genre, or keywords with lightning-fast results.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconTrendingUp className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Trending Content</h3>
                </div>
                <p className="text-muted-foreground">
                  Stay updated with the latest trending movies and series, refreshed daily to show what's popular.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconMovie className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Detailed Movie Info</h3>
                </div>
                <p className="text-muted-foreground">
                  Access comprehensive details including plot summaries, cast information, ratings, and release dates.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <IconBolt className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold">Lightning Fast Performance</h3>
                </div>
                <p className="text-muted-foreground">
                  Smart caching with Redis ensures repeated queries load instantly without hitting API rate limits.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Flask", "React", "TMDB API", "Celery", "Redis", "DigitalOcean", "Vercel"].map((tech) => (
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
                    Check Redis Cache
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                  <span className="text-sm">(Cache Miss)</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Celery Task Queue
                  </div>
                  <span>→</span>
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    TMDB API
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Store in Redis Cache
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <span>↓</span>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm">
                    Return to Frontend
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Cache Strategy:</span> Popular movies cached for 24 hours, reducing API calls by 80%
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Deployment:</span> Backend hosted on DigitalOcean | Frontend deployed on Vercel
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
                  <span>Designed and built the entire <span className="text-foreground font-medium">Flask REST API backend</span> from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Integrated <span className="text-foreground font-medium">TMDB API</span> for fetching movie data, trending lists, and cast information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Implemented <span className="text-foreground font-medium">Redis caching strategy</span> to temporarily store frequently accessed movie data in memory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Set up <span className="text-foreground font-medium">Celery task queue</span> for asynchronous API calls to prevent blocking requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Deployed backend to <span className="text-foreground font-medium">DigitalOcean</span> and managed production environment configuration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Challenge Solved</h2>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Problem: TMDB API Rate Limits</h3>
              <p className="text-lg text-muted-foreground mb-6">
                The Movie Database (TMDB) API has strict rate limits that restrict the number of requests per second. 
                When multiple users searched for the same popular movie (like "Avengers" or "Inception"), the application 
                would hit rate limits and fail to return data. Additionally, every API call took 1-2 seconds, making 
                repeated searches for the same content painfully slow.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Solution: Smart Caching with Redis & Celery</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Implemented an intelligent caching layer using Redis to store frequently accessed movie data temporarily in memory:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4 pl-4">
                <li>When a user searches for a movie, the system first checks if the data exists in Redis cache</li>
                <li>If found (cache hit), data is returned instantly without making an API call</li>
                <li>If not found (cache miss), Celery queues a background task to fetch from TMDB API</li>
                <li>The fetched data is stored in Redis with a 24-hour expiration time</li>
                <li>Popular movies remain cached, eliminating redundant API calls</li>
              </ol>
              
              <p className="text-lg font-semibold text-foreground">
                Result: Reduced API calls by 80% for popular content and improved response time from 1-2 seconds to under 100ms for cached data.
              </p>
            </div>
          </div>

          {/* What I Learned */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Handling External APIs</h3>
                <p className="text-muted-foreground">
                  Learned to work with third-party API rate limits, authentication, and error handling in production environments.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Redis & Celery Mastery</h3>
                <p className="text-muted-foreground">
                  Gained hands-on experience implementing Redis for caching and Celery for async task processing to optimize performance.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Production Deployment</h3>
                <p className="text-muted-foreground">
                  Deployed and maintained a production Flask application on DigitalOcean with proper environment configuration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold mb-4">Explore CineScope</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The platform is live and ready to help you discover your next favorite movie.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a 
                  href="https://cinescope-client.vercel.app/" 
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
                  href="https://github.com/Pranavchikte/cinescope-api" 
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