import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { favicon } from "./favicon"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HappyMind Botanicals - Balance Your Mind, Naturally",
  description: "Discover herbal supplements crafted for emotional well-being.",
  generator: 'acmeflare',
  ...favicon,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fff59d" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'