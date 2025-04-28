"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="HappyMind Botanicals Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
            Contact
          </Link>
          <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] shadow-sm hover:shadow-md transition-all">
            Shop on Amazon
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-gray-300 hover:border-[#fff59d]">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-gray-200">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Navigation links for HappyMind Botanicals
            </SheetDescription>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
                About
              </Link>
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-[#fff59d] transition-colors">
                Contact
              </Link>
              <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] w-full mt-2 shadow-sm hover:shadow-md transition-all">
                Shop on Amazon
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
} 