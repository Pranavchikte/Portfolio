import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Backend Engineer",
    "AI Systems",
    "FastAPI",
    "Flask",
    "Redis",
    "Gemini API",
    "Portfolio",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
}

const themeInitScript = `
(() => {
  document.documentElement.classList.remove("dark")
  document.documentElement.setAttribute("data-theme", "light")
  try { localStorage.removeItem("theme") } catch {}
})()
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster position="bottom-right" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
