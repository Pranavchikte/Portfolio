export const siteConfig = {
  name: "Pranav Chikte",
  role: "Software Engineer · AI Systems",
  email: "chiktepranav1378@gmail.com",
  location: "Pune, Maharashtra, India",
  siteUrl: "https://pranavchikte.tech",
  fallbackUrl: "https://github.com/Pranavchikte",
  description:
    "Software Engineer at TCS building Python backends and agentic AI systems — LLM APIs, async pipelines, and scalable backend architecture.",
  social: {
    github: "https://github.com/Pranavchikte",
    linkedin: "https://www.linkedin.com/in/pranavchikte",
    leetcode: "https://leetcode.com/u/chiktepranav1378/",
  },
  resumePdf: "/Pranav Chikte.pdf",
} as const

export const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""
