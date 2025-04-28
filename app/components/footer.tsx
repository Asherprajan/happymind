"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="HappyMind Botanicals Logo"
              width={140}
              height={30}
              className="h-8 w-auto"
            />
            <p className="text-sm text-gray-500">© 2025 HappyMind Botanicals. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-[#fff59d] transition-colors">
                About
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#fff59d] transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#fff59d] transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-gray-500">contact@happymindbotanicals.com</p>
            <div className="flex gap-4">
              <Link href="#" className="text-[#fff59d] hover:text-[#fff176] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#fff59d] hover:text-[#fff176] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 