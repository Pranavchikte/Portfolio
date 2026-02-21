export const siteConfig = {
  name: "Pranav Chikte",
  role: "Backend Engineer (AI Systems)",
  email: "chiktepranav1378@gmail.com",
  location: "Amravati, Maharashtra",
  siteUrl: "https://pranavchikte.tech",
  fallbackUrl: "https://github.com/Pranavchikte",
  description:
    "Backend Engineer focused on production AI systems, async APIs, and reliable deployments.",
  social: {
    github: "https://github.com/Pranavchikte",
    linkedin: "https://www.linkedin.com/in/pranavchikte",
    leetcode: "https://leetcode.com/u/chiktepranav1378/",
  },
  resumePdf: "/Pranav Chikte.pdf",
} as const

export const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""
