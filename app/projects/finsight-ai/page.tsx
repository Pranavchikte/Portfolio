"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandGithub,
  IconExternalLink,
  IconCpu,
  IconDatabase,
  IconServer,
  IconBolt,
} from "@tabler/icons-react";

const techStack = [
  "Flask",
  "Celery",
  "Redis",
  "Gemini 2.5-flash",
  "MongoDB",
  "Docker",
  "Next.js 16",
  "React 19",
  "DigitalOcean",
  "Vercel",
];

const stats = [
  { value: "85–417ms", label: "API Response Time (prod)" },
  { value: "95+", label: "Lighthouse Score" },
  { value: "Gemini 2.5", label: "AI Model" },
  { value: "CI/CD", label: "DigitalOcean + Vercel" },
];

const contributions = [
  {
    bold: "Engineered async AI pipeline",
    rest: "using Celery workers and Redis to offload Gemini 2.5-flash API calls from the main Flask request cycle — achieving 85–417ms API response times in production.",
  },
  {
    bold: "Integrated Google Gemini API",
    rest: "for natural language transaction parsing, auto-categorization, and personalized budget recommendations — eliminating manual data entry entirely.",
  },
  {
    bold: "Implemented JWT authentication",
    rest: "with Redis-based token blacklisting, securing all endpoints with stateless, revocable session management.",
  },
  {
    bold: "Built full-stack analytics dashboard",
    rest: "in Next.js 16 + React 19 with Recharts — achieved 95+ Lighthouse performance score on the live frontend.",
  },
  {
    bold: "Deployed end-to-end with CI/CD",
    rest: "— backend on DigitalOcean, frontend on Vercel. Documented all endpoints via Swagger/OpenAPI. Core flows covered with Pytest unit and integration tests.",
  },
];

const features = [
  {
    icon: <IconCpu className="w-6 h-6 text-cyan-400" />,
    title: "AI Categorization",
    description:
      "Gemini 2.5-flash parses natural language input — type \"coffee for ₹150\" and it auto-categorizes, logs, and updates your budget instantly.",
  },
  {
    icon: <IconBolt className="w-6 h-6 text-cyan-400" />,
    title: "Async AI Pipeline",
    description:
      "Celery + Redis offloads all Gemini API calls from the main Flask request cycle — achieving 85–417ms response times in production.",
  },
  {
    icon: <IconDatabase className="w-6 h-6 text-cyan-400" />,
    title: "Analytics Dashboard",
    description:
      "Next.js 16 + React 19 frontend with Recharts for monthly spending breakdowns. Scored 95+ on Lighthouse performance.",
  },
  {
    icon: <IconServer className="w-6 h-6 text-cyan-400" />,
    title: "Secure Auth",
    description:
      "JWT authentication with Redis-based token blacklisting — stateless, revocable session management across all endpoints.",
  },
];

const architectureSteps = [
  "Next.js 16 Frontend (React 19 + Recharts)",
  "Flask REST API (versioned routes, Swagger/OpenAPI docs)",
  "Celery Task Queue + Redis Broker",
  "Gemini 2.5-flash (AI categorization + budget insights)",
  "MongoDB (users, transactions, budgets, analytics)",
];

export default function FinsightAIProject() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Finsight AI</h1>
            <p className="text-xl text-muted-foreground mb-6">
              AI-Powered Expense Manager — automates transaction logging and delivers
              personalized budget insights using Gemini 2.5-flash.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a
                  href="https://www.finsightfinance.me/"
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
                  Backend
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/Pranavchikte/finsight_ai_frontend"
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
              src="/f1.jpg"
              alt="Finsight AI Dashboard"
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
              Manual expense tracking is tedious — most people abandon it within days.
              Categorizing transactions, analyzing spending patterns, and generating
              actionable insights requires constant effort. The goal was to eliminate
              manual data entry entirely using AI, while keeping the backend fast enough
              for real-world production use.
            </p>
          </div>

          {/* Solution + Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Finsight AI uses Gemini 2.5-flash to parse natural language transactions,
              auto-categorize them, and generate personalized budget recommendations.
              AI calls run asynchronously via Celery workers so users get instant
              feedback while heavy processing happens in the background.
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
                  Backend on DigitalOcean with CI/CD | Frontend on Vercel | Swagger/OpenAPI docs | Pytest unit + integration tests
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
                Challenge: Gemini API Latency Blocking Flask Routes
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Calling Gemini API synchronously inside Flask routes blocked the entire
                request until AI processing completed — sometimes 2–4 seconds. With
                multiple concurrent users this became a bottleneck immediately.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Solution: Celery + Redis Async Pipeline
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 pl-4">
                <li>User submits expense — Flask immediately returns success and logs the transaction</li>
                <li>Celery worker picks up the AI categorization task from the Redis queue</li>
                <li>Gemini 2.5-flash processes the description asynchronously in the background</li>
                <li>Results stored in MongoDB — frontend updates when categorization completes</li>
              </ol>
              <p className="text-lg font-semibold text-foreground">
                Result: 85–417ms API response times in production. Users get instant feedback
                while AI processing happens transparently in the background.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold mb-4">Explore Finsight AI</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Live in production. Try the demo or read the source code.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="btn-primary" size="lg">
                <a
                  href="https://www.finsightfinance.me/"
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
  );
}