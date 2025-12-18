"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

// New, specific testimonials
const testimonials = [
  {
    quote:
      "Pranav's backend expertise was critical. He not only built our core API but also optimized the database queries, improving our response time by 30%. A true professional.",
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
  },
  {
    quote:
      "I was impressed with Pranav's ability to architect a scalable backend. He took our concept and built a production-ready system with Celery and Redis that handled thousands of requests from day one.",
    name: "Michael Chen",
    title: "CTO at InnovateLab",
  },
  {
    quote:
      "Pranav's grasp of GenAI and backend systems is top-notch. He designed and implemented the RAG pipeline for our project, significantly improving the accuracy of our AI assistant. He delivers.",
    name: "Rohan Gupta",
    title: "Lead AI Engineer",
  },
  {
    quote:
      "Pranav is a 'build to ship' engineer. He took ownership of the entire Finsight AI project, from concept to deployment. His problem-solving approach is exactly what a fast-moving team needs.",
    name: "Emily Rodriguez",
    title: "Founder at StartupXYZ",
  },
  {
    quote:
      "Collaborating with Pranav on the CineScope API was a pleasure. He's a reliable developer who writes clean, maintainable Python code and understands asynchronous tasks deeply. Highly recommend.",
    name: "David Lee",
    title: "Senior Software Engineer",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* MODIFICATION: Title changed */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h2>
        </div>

        {/* This component is great, no changes needed to its structure */}
        <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}