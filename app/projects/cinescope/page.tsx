"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandGithub,
  IconExternalLink,
  IconSearch,
  IconDatabase,
  IconServer,
  IconBolt,
} from "@tabler/icons-react";

const techStack = [
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "SQLAlchemy 2.0",
  "Gemini Pro",
  "Digital Ocean",
  "Docker Compose",
  "Next.js",
  "Alembic",
  "PyJWT",
];

const stats = [
  { value: "FastAPI", label: "Versioned REST API" },
  { value: "Gemini Pro", label: "AI Recommendations" },
  { value: "sub-ms", label: "Cached Response Time" },
  { value: "Docker", label: "Containerized Stack" },
];

const features = [
  {
    icon: <IconSearch className="w-6 h-6 text-cyan-400" />,
    title: "Conversational Recommendation Engine",
    description:
      "Gemini Pro powers a conversational movie recommendation engine with in-memory vector embeddings for semantic search across the entire catalog.",
  },
  {
    icon: <IconBolt className="w-6 h-6 text-cyan-400" />,
    title: "Redis Caching",
    description:
      "Redis caching layer reduces redundant TMDB API calls, cutting repeated external request overhead and delivering sub-millisecond responses for cached queries.",
  },
  {
    icon: <IconDatabase className="w-6 h-6 text-cyan-400" />,
    title: "PostgreSQL + Alembic",
    description:
      "Relational data modelled with SQLAlchemy 2.0 and managed via Alembic migrations — clean, versioned schema evolution from day one.",
  },
  {
    icon: <IconServer className="w-6 h-6 text-cyan-400" />,
    title: "JWT Refresh Token Rotation",
    description:
      "Refresh token rotation stored in Redis enables seamless session management without long-lived access tokens — no stale sessions.",
  },
];

const contributions = [
  {
    bold: "Designed a RESTful backend with FastAPI and SQLAlchemy 2.0",
    rest: "using versioned API routes, clean service layers, and Alembic-managed PostgreSQL migrations.",
  },
  {
    bold: "Integrated Google Gemini Pro",
    rest: "to power a conversational movie recommendation engine with in-memory vector embeddings for semantic search across the catalog.",
  },
  {
    bold: "Reduced redundant TMDB API calls via Redis caching",
    rest: "— cutting repeated external request overhead and delivering sub-millisecond responses for cached queries.",
  },
  {
    bold: "Secured the platform with JWT refresh token rotation in Redis",
    rest: "enabling seamless session management without long-lived access tokens.",
  },
  {
    bold: "Containerized the full stack with Digital Ocean and Docker Compose",
    rest: "for reproducible local development and consistent production deployments.",
  },
];

const architectureSteps = [
  "Next.js Frontend",
  "FastAPI Backend (versioned routes, Swagger/OpenAPI docs)",
  "Redis Cache — check first (sub-ms for cache hits)",
  "TMDB API — fetch on cache miss, store result in Redis",
  "Gemini Pro — conversational recommendations via vector embeddings",
  "PostgreSQL + SQLAlchemy 2.0 + Alembic (users, watchlists, ratings)",
];

export default function CineScopeProject() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">

          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          {/* Title + Links */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">CineScope</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Full-stack movie platform — Gemini Pro recommendation engine, Redis caching,
              JWT refresh token rotation, and a versioned FastAPI backend with Alembic-managed
              PostgreSQL migrations.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a
                  href="https://www.cinescopes.app/"
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
                  href="https://github.com/Pranavchikte/cinescope-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  Backend
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/Pranavchikte/cinescope-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-5 h-5" />
                  Frontend
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-2xl mb-16">
            <Image
              src="/m1.png"
              alt="CineScope Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Movie discovery is fragmented — users jump between platforms to find trending
              content, read reviews, manage watchlists, and get recommendations. Existing
              solutions either lack personalization or rely on basic keyword search with no
              semantic understanding of what a user actually wants to watch.
            </p>
          </div>

          {/* Solution + Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CineScope unifies movie discovery in one platform — TMDB API powers the catalog,
              Gemini Pro handles conversational recommendations via vector embeddings, Redis
              caches repeated queries for sub-millisecond responses, and a clean FastAPI
              backend with versioned routes and Alembic-managed schema keeps everything
              production-ready.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techStack.map((tech) => (
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
              <div className="space-y-3">
                {architectureSteps.map((step, i) => (
                  <div key={step}>
                    <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md font-mono text-sm inline-block">
                      {step}
                    </div>
                    {i < architectureSteps.length - 1 && (
                      <div className="pl-4 text-muted-foreground mt-1">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Deployment:</span>{" "}
                  Backend containerized with Digital Ocean + Docker Compose | Frontend on Vercel | Swagger UI at /docs
                </p>
              </div>
            </div>
          </div>

          {/* Contributions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">My Role & Contributions</h2>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg">
              <ul className="space-y-4 text-lg text-muted-foreground">
                {contributions.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>
                      <span className="text-foreground font-medium">{item.bold}</span>{" "}
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Challenge Solved</h2>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Challenge: TMDB API Rate Limits + Redundant External Calls
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                TMDB API enforces rate limits. Without caching, every search for a popular
                movie hit the external API — wasting quota, adding latency, and creating a
                hard ceiling on concurrent users.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Solution: Redis Caching Layer
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 pl-4">
                <li>Every TMDB request checks Redis first</li>
                <li>Cache hit — return immediately, sub-millisecond, no external call</li>
                <li>Cache miss — fetch from TMDB, store result in Redis with TTL</li>
                <li>Popular content stays cached, drastically reducing API quota usage</li>
              </ol>
              <p className="text-lg font-semibold text-foreground">
                Result: Sub-millisecond responses for cached queries. Redundant external
                API calls eliminated for repeated content.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold mb-4">Explore CineScope</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Live in production. Try the demo or read the source code.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a
                  href="https://www.cinescopes.app/"
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
                  href="https://github.com/Pranavchikte/cinescope-backend"
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
  );
}