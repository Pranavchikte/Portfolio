"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const recentBlogPosts = [
  {
    title: "Advanced CSS Techniques for Modern Web Development",
    date: "Thursday, Feb 15, 2024",
  },
  {
    title: "Introduction to Next.js",
    date: "Friday, Sep 15, 2023",
  },
  {
    title: "Mastering React Hooks",
    date: "Monday, Jan 15, 2024",
  },
]

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-8 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I'm a software engineer with a passion for building scalable and efficient systems. I'm currently working as
            a software engineer at Google.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {recentBlogPosts.map((post, index) => (
            <article
              key={post.title}
              className="border-b border-border pb-6 last:border-b-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </div>
                <div className="text-muted-foreground text-sm md:text-base whitespace-nowrap md:ml-8">{post.date}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary">Read All Posts</Button>
        </div>
      </div>
    </section>
  )
}
