import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"
import { favicon } from "./favicon"

const archivo = Archivo({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-archivo',
})

// We'll add Clash Display later when we have the font file
// const clashDisplay = localFont({
//   src: '../public/fonts/ClashDisplay-Semibold.woff2',
//   variable: '--font-clash-display',
// })

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
    <html lang="en" className={`${archivo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fff59d" />
      </head>
      <body className={`${archivo.className} font-archivo`}>{children}</body>
    </html>
  )
}


import './globals.css'