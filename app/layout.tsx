import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chaitanya Saagar",
  description:
    "Portfolio of Chaitanya Saagar - Competitive Programmer , LeetCoder and Full-Stack Developer specializing in React, Three.js, and modern web development. Creating immersive digital experiences with cutting-edge technologies.",
  keywords: "full-stack developer, react developer, three.js, typescript, web development, portfolio",
  authors: [{ name: "Chaitanya Saagar" }],
  openGraph: {
    title: "Chaitanya Saagar - Full-Stack Developer Portfolio",
    description: "Crafting immersive digital experiences with cutting-edge technologies",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
