export type ProjectFeature = {
  icon: "cpu" | "bolt" | "database" | "server" | "search"
  title: string
  description: string
}

export type Project = {
  slug: string
  order: number
  title: string
  cardSummary: string
  cardProblem: string
  cardSolution: string
  cardOutcome: string
  detailSubtitle: string
  stack: string[]
  links: {
    demo: string
    backend: string
    frontend: string
  }
  problem: string
  solution: string
  features: ProjectFeature[]
  architectureSteps: string[]
  deploymentNote: string
  contributions: Array<{
    bold: string
    rest: string
  }>
  challenge: {
    challengeTitle: string
    challengeBody: string
    solutionTitle: string
    solutionSteps: string[]
    result: string
  }
}

export const projects: Project[] = [
  {
    slug: "cinescope",
    order: 1,
    title: "CineScope",
    cardSummary:
      "Full-stack movie platform with conversational recommendations, Redis caching, and secure token rotation.",
    cardProblem:
      "Movie discovery and watchlist workflows are fragmented across multiple tools and weak recommendation systems.",
    cardSolution:
      "Built a backend-first platform with Gemini recommendations, Redis caching, and secure session controls.",
    cardOutcome:
      "Faster repeated lookups, cleaner user journeys, and production-ready movie exploration.",
    detailSubtitle:
      "Full-stack movie platform with Gemini-powered recommendations, Redis caching, and versioned FastAPI services.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy 2.0",
      "Gemini Pro",
      "Docker Compose",
      "Next.js",
      "Alembic",
      "PyJWT",
    ],
    links: {
      demo: "https://www.cinescopes.app/",
      backend: "https://github.com/Pranavchikte/cinescope-backend",
      frontend: "https://github.com/Pranavchikte/cinescope-frontend",
    },
    problem:
      "Movie discovery is fragmented across search, reviews, and watchlists. Most experiences are either generic or limited to keyword matching.",
    solution:
      "CineScope combines catalog discovery, semantic recommendations, watchlist workflows, and session security in one backend-first platform.",
    features: [
      {
        icon: "search",
        title: "Conversational Discovery",
        description:
          "Gemini Pro powers conversational recommendations with semantic matching across the catalog.",
      },
      {
        icon: "bolt",
        title: "Caching First",
        description:
          "Redis reduces repeated TMDB requests and improves responsiveness for high-frequency queries.",
      },
      {
        icon: "database",
        title: "Versioned Data Layer",
        description:
          "SQLAlchemy 2.0 models + Alembic migrations keep schema changes explicit and production-safe.",
      },
      {
        icon: "server",
        title: "Secure Sessions",
        description:
          "JWT refresh token rotation via Redis enables revocable, safer long-lived sessions.",
      },
    ],
    architectureSteps: [
      "Next.js frontend",
      "FastAPI backend (versioned routes + OpenAPI)",
      "Redis cache layer",
      "TMDB fetch pipeline on cache miss",
      "Gemini recommendation layer",
      "PostgreSQL persistence (SQLAlchemy + Alembic)",
    ],
    deploymentNote:
      "Backend deployed with Docker Compose on DigitalOcean, frontend on Vercel, API docs exposed through Swagger.",
    contributions: [
      {
        bold: "Designed and built the backend architecture",
        rest: "with clean service boundaries, versioned APIs, and migration-first database changes.",
      },
      {
        bold: "Integrated conversational recommendations",
        rest: "using Gemini Pro and semantic search primitives over the movie catalog.",
      },
      {
        bold: "Implemented Redis caching strategy",
        rest: "to reduce external dependency pressure and improve repeat-query performance.",
      },
      {
        bold: "Built secure auth flows",
        rest: "using JWT refresh token rotation and Redis-managed session controls.",
      },
      {
        bold: "Containerized deployment workflow",
        rest: "to keep local and production environments reproducible and predictable.",
      },
    ],
    challenge: {
      challengeTitle: "Challenge: External API limits and repeated calls",
      challengeBody:
        "Without caching, popular queries repeatedly hit upstream APIs, increasing latency and operational risk during traffic spikes.",
      solutionTitle: "Solution: Read-through Redis caching",
      solutionSteps: [
        "Check Redis before every catalog lookup",
        "Serve cache hits immediately",
        "On miss, fetch from TMDB and write back with TTL",
        "Reuse cached payloads for repeated queries",
      ],
      result:
        "Lower external dependency load, more stable response behavior, and better user-perceived speed.",
    },
  },
  {
    slug: "finsight-ai",
    order: 2,
    title: "Finsight AI",
    cardSummary:
      "AI-powered expense manager with async processing, robust auth, and production-ready full-stack deployment.",
    cardProblem:
      "Manual expense tracking creates friction, and synchronous AI calls make finance workflows feel slow.",
    cardSolution:
      "Implemented queue-backed AI processing with Flask, Celery, and Redis plus secure auth controls.",
    cardOutcome:
      "Responsive user experience with resilient async backend behavior under concurrent usage.",
    detailSubtitle:
      "AI expense manager that automates transaction handling and budget guidance with async backend orchestration.",
    stack: [
      "Flask",
      "Celery",
      "Redis",
      "Gemini API",
      "MongoDB",
      "Docker",
      "Next.js",
      "DigitalOcean",
      "Vercel",
    ],
    links: {
      demo: "https://www.finsightfinance.me/",
      backend: "https://github.com/Pranavchikte/finsight_ai_backend",
      frontend: "https://github.com/Pranavchikte/finsight_ai_frontend",
    },
    problem:
      "Manual expense tracking is high-friction. Users abandon workflows when categorization and analysis require too much repeated effort.",
    solution:
      "Finsight AI combines natural-language transaction capture with async processing so users get instant feedback while AI tasks run in the background.",
    features: [
      {
        icon: "cpu",
        title: "AI Transaction Parsing",
        description:
          "Gemini converts natural language expense input into structured transaction data.",
      },
      {
        icon: "bolt",
        title: "Async Processing Pipeline",
        description:
          "Celery + Redis move AI operations off request paths to keep APIs responsive under load.",
      },
      {
        icon: "database",
        title: "Financial Data Model",
        description:
          "MongoDB persistence for users, transactions, budgets, and derived analytics workflows.",
      },
      {
        icon: "server",
        title: "Revocable Auth",
        description:
          "JWT auth with Redis-based token controls for safer session lifecycle management.",
      },
    ],
    architectureSteps: [
      "Next.js frontend",
      "Flask API layer",
      "Celery queue + Redis broker",
      "Gemini processing workers",
      "MongoDB persistence",
    ],
    deploymentNote:
      "Backend and workers deployed on DigitalOcean, frontend on Vercel, APIs documented with Swagger/OpenAPI.",
    contributions: [
      {
        bold: "Built async AI request handling",
        rest: "with Celery workers and Redis queueing around Flask service endpoints.",
      },
      {
        bold: "Integrated Gemini-powered automation",
        rest: "to reduce manual expense categorization and enable intelligent suggestions.",
      },
      {
        bold: "Implemented secure API authentication",
        rest: "with JWT and token invalidation strategy.",
      },
      {
        bold: "Shipped full-stack architecture",
        rest: "from backend APIs and workers to frontend UX and production deployment.",
      },
      {
        bold: "Documented and tested core flows",
        rest: "with OpenAPI specs and repeatable development workflows.",
      },
    ],
    challenge: {
      challengeTitle: "Challenge: AI latency blocking request flow",
      challengeBody:
        "Running AI calls synchronously in request handlers caused avoidable wait times and degraded UX during concurrent usage.",
      solutionTitle: "Solution: Queue-backed async orchestration",
      solutionSteps: [
        "Accept and validate request in Flask",
        "Queue AI tasks via Celery + Redis",
        "Process AI jobs asynchronously in workers",
        "Persist results and surface updates in UI",
      ],
      result:
        "Faster perceived interactions and a more resilient backend under concurrent real-world usage.",
    },
  },
]

export function getFeaturedProjects() {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
