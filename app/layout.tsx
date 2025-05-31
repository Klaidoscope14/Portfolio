import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chaitanya Saagar",
  description:
    "Portfolio of Chaitanya Saagar - Competitive Programmer , LeetCoder and Full-Stack Developer specializing in React, Three.js, and modern web development. Creating immersive digital experiences with cutting-edge technologies.",
  keywords: "full-stack developer, react developer, three.js, typescript, web development, portfolio",
  authors: [{ name: "Chaitanya Saagar" }],
  openGraph: {
    title: "Chaitanya Saagar",
    description: "Check out this Website!",
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
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
