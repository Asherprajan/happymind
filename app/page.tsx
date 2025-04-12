import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Star, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f12] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0a0f12]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0f12]/80">
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
            <Link href="#" className="text-sm font-medium hover:text-[#fff59d] transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#fff59d] transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#fff59d] transition-colors">
              Contact
            </Link>
            <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-white">Shop on Amazon</Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-gray-700">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a0f12] border-gray-800">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg font-medium hover:text-[#fff59d] transition-colors">
                  Home
                </Link>
                <Link href="#" className="text-lg font-medium hover:text-[#fff59d] transition-colors">
                  About
                </Link>
                <Link href="#" className="text-lg font-medium hover:text-[#fff59d] transition-colors">
                  Contact
                </Link>
                <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-white w-full mt-2">Shop on Amazon</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0f12] to-[#1b1e22]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#fff59d]/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#fff59d]/10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Balance Your Mind, Naturally.</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Discover herbal supplements crafted for emotional well-being.
            </p>
            <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-white px-8 py-6 text-lg rounded-full">
              Explore on Amazon
            </Button>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="py-16 md:py-24 bg-[#0a0f12]">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Stress Ease Pro",
                  benefit: "Reduces tension & anxiety",
                  ingredients: "Ashwagandha, Holy Basil, Lemon Balm",
                },
                {
                  name: "Positive Vibes Only",
                  benefit: "Enhances mood & outlook",
                  ingredients: "St. John's Wort, Saffron, B Vitamins",
                },
                {
                  name: "Anger & Calm Ultra",
                  benefit: "Promotes emotional balance",
                  ingredients: "Passionflower, Chamomile, Magnesium",
                },
                {
                  name: "Memory & Focus Max",
                  benefit: "Sharpens mental clarity",
                  ingredients: "Bacopa, Ginkgo, Lion's Mane",
                },
                {
                  name: "Sleep Well Plus",
                  benefit: "Supports restful sleep",
                  ingredients: "Valerian, Melatonin, L-Theanine",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-[#1b1e22] border border-gray-800 rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:border-[#fff59d]/50 hover:shadow-[0_0_15px_rgba(255,245,157,0.15)]"
                >
                  <div className="bg-[#0a0f12] border border-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=438&width=438"
                      alt={product.name}
                      width={438}
                      height={438}
                      className="h-48 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-[#fff59d] mb-2">{product.benefit}</p>
                  <p className="text-sm text-gray-400 mb-4 flex-grow">{product.ingredients}</p>
                  <Button className="bg-transparent border border-[#fff59d] text-[#fff59d] hover:bg-[#fff59d] hover:text-[#0a0f12] w-full mt-auto">
                    Buy on Amazon
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-Page Banner */}
        <section className="py-12 bg-black">
          <div className="container px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#fff59d]/50"></div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#fff59d]"
              >
                <path
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8L12 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12L16 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="h-px w-12 bg-[#fff59d]/50"></div>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-[#fff59d]">
              100% Plant-Based | Backed by Ayurveda & Science
            </h2>
          </div>
        </section>

        {/* Image Banner Section */}
        <section className="py-16 bg-[#0a0f12]">
          <div className="container px-4">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Ayurvedic Wellness"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="max-w-lg px-8 md:px-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ancient Wisdom for Modern Wellness
                  </h2>
                  <p className="text-gray-200 mb-6">
                    Our formulations blend traditional Ayurvedic herbs with modern scientific research
                    to create effective, natural solutions for today's health challenges.
                  </p>
                  <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176]">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Seller Section */}
        <section className="py-16 md:py-24 bg-[#0a0f12]">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1b1e22] to-[#0a0f12] border border-gray-800 rounded-2xl p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 bg-[#fff59d] text-[#0a0f12] text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      Bestseller <Star className="h-3 w-3 fill-[#0a0f12]" />
                    </div>
                    <div className="bg-[#0a0f12] border border-gray-700 rounded-lg h-64 w-64 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Stress Ease Pro"
                        width={200}
                        height={200}
                        className="h-48 w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-2">Stress Ease Pro</h2>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-[#fff59d]" />
                    <Star className="h-5 w-5 fill-[#fff59d]" />
                    <Star className="h-5 w-5 fill-[#fff59d]" />
                    <Star className="h-5 w-5 fill-[#fff59d]" />
                    <Star className="h-5 w-5 fill-[#fff59d]" />
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our flagship formula designed to help your body adapt to stress naturally. Stress Ease Pro combines
                    premium Ashwagandha, Holy Basil, and Lemon Balm to reduce tension, balance cortisol levels, and
                    support a calm mind.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#fff59d]/20 p-1 mt-0.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#fff59d]"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Reduces tension & anxiety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#fff59d]/20 p-1 mt-0.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#fff59d]"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Balances cortisol levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-[#fff59d]/20 p-1 mt-0.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#fff59d]"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Supports a calm mind</span>
                    </li>
                  </ul>
                  <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-white px-8 py-6">Buy Now on Amazon</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 bg-[#0a0f12]">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Sarah M.",
                  review:
                    "Stress Ease Pro has been a game-changer for my anxiety. I feel more balanced and in control of my emotions.",
                },
                {
                  name: "Michael T.",
                  review:
                    "I've tried many supplements, but HappyMind's products are truly different. The quality is exceptional.",
                },
                {
                  name: "Jennifer K.",
                  review:
                    "Sleep Well Plus helped me establish a healthy sleep routine after years of insomnia. I wake up feeling refreshed.",
                },
                {
                  name: "David R.",
                  review:
                    "The Memory & Focus Max has significantly improved my productivity at work. I can concentrate for hours now.",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-[#1b1e22] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-[#fff59d]/50"
                >
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                  </div>
                  <p className="text-gray-300 mb-4">"{review.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fff59d]/20 flex items-center justify-center text-[#fff59d] font-medium">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-medium">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a0f12]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#fff59d]/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#fff59d]/10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Mind Deserves Peace.</h2>
            <p className="text-lg text-gray-300 mb-8">Start your wellness journey with HappyMind today.</p>
            <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-white px-8 py-6 text-lg rounded-full">
              Shop Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1b1e22] border-t border-gray-800 py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image
                src="/placeholder.svg?height=30&width=140"
                alt="HappyMind Botanicals Logo"
                width={140}
                height={30}
                className="h-8 w-auto"
              />
              <p className="text-sm text-gray-400">© 2025 HappyMind Botanicals. All rights reserved.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-300 hover:text-[#fff59d]">
                  About
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-[#fff59d]">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-[#fff59d]">
                  Contact
                </Link>
              </div>
              <p className="text-sm text-gray-400">contact@happymindbotanicals.com</p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#fff59d] hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-[#fff59d] hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
