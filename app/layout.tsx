import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full-Stack Developer & Creative Technologist",
  description:
    "Portfolio of John Doe - Full-Stack Developer specializing in React, Three.js, and modern web development. Creating immersive digital experiences with cutting-edge technologies.",
  keywords: "full-stack developer, react developer, three.js, typescript, web development, portfolio",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full-Stack Developer Portfolio",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
