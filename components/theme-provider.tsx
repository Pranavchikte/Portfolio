"use client"

import { createContext, useContext, useEffect } from "react"

type ThemeContextValue = {
  theme: "light"
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "light" })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.remove("dark")
    document.documentElement.setAttribute("data-theme", "light")
    try { localStorage.removeItem("theme") } catch {}
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
