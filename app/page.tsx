"use client"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Star, Menu } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { products } from "@/app/data/products"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0f12] font-sans">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative my-8 mx-4 md:mx-8 lg:mx-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="hero-swiper rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <div className="relative h-[80vh]">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Herbal Wellness"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="container px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
                      Balance Your Mind, Naturally.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                      Discover herbal supplements crafted for emotional well-being and mental clarity.
                    </p>
                    <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all">
                      Explore on Amazon
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[80vh]">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Natural Healing"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="container px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">Ancient Wisdom, Modern Science</h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                      Blending traditional Ayurvedic herbs with cutting-edge research for optimal wellness.
                    </p>
                    <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 text-lg rounded-full">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[80vh]">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Wellness Journey"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="container px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">Your Path to Inner Peace</h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                      Start your journey to better mental health and emotional balance today.
                    </p>
                    <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 text-lg rounded-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Pagination */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="swiper-pagination"></div>
          </div>

          <style jsx global>{`
            .hero-swiper {
              width: 100%;
              height: 100%;
              border-radius: 1rem;
            }
            .swiper-pagination-bullet {
              background: white;
              opacity: 0.5;
              width: 10px;
              height: 10px;
              border-radius: 5px;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: #fff59d;
              opacity: 1;
              width: 20px;
            }
          `}</style>
        </section>

        {/* Product Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-b from-white to-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <Link href={`/products/${product.id}`} className="flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden flex items-center justify-center bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={1000}
                        height={1000}
                        className="object-contain w-auto h-full max-h-56 transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-semibold">
                        Bestseller
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-gray-500 ml-2">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                      
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        <span className="font-medium text-gray-700">Key ingredients: </span>
                        {product.ingredients.slice(0, 3).join(", ")}
                      </p>
                      <div className="mt-auto flex flex-col gap-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-gray-900">{product.price}</span>
                          <span className="text-sm text-green-600">Free shipping</span>
                        </div>
                        <Button className="bg-amber-400 hover:bg-amber-500 text-amber-900 w-full transition-all font-medium">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-Page Banner */}
        <section className="py-12 bg-white border-y border-gray-200">
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
            <h2 className="text-xl md:text-2xl font-medium text-gray-900">
              100% Plant-Based | Backed by Ayurveda & Science
            </h2>
          </div>
        </section>

        {/* Image Banner Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/"
                alt="Ayurvedic Wellness"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                <div className="max-w-lg px-8 md:px-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Ancient Wisdom for Modern Wellness
                  </h2>
                  <p className="text-gray-100 mb-6 drop-shadow-md">
                    Our formulations blend traditional Ayurvedic herbs with modern scientific research
                    to create effective, natural solutions for today's health challenges.
                  </p>
                  <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] shadow-md hover:shadow-lg transition-all">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Seller Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Bestsellers</h2>
            <div className="grid grid-cols-1 gap-8">
              {/* First Product */}
              <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 bg-[#fff59d] text-[#0a0f12] text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        Bestseller <Star className="h-3 w-3 fill-[#0a0f12]" />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg h-64 w-64 flex items-center justify-center shadow-sm">
                        <Image
                          src="/stressease.jpg"
                          alt="Stress Ease Pro"
                          width={200}
                          height={200}
                          className="h-48 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Stress Ease Pro</h2>
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                    </div>
                    <p className="text-gray-600 mb-6">
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
                        <span className="text-gray-700">Reduces tension & anxiety</span>
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
                        <span className="text-gray-700">Balances cortisol levels</span>
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
                        <span className="text-gray-700">Supports a calm mind</span>
                      </li>
                    </ul>
                    <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 shadow-md hover:shadow-lg transition-all">
                      Buy Now on Amazon
                    </Button>
                  </div>
                </div>
              </div>

              {/* Second Product */}
              <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 bg-[#fff59d] text-[#0a0f12] text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        Popular <Star className="h-3 w-3 fill-[#0a0f12]" />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg h-64 w-64 flex items-center justify-center shadow-sm">
                        <Image
                          src="/sleepwellus.jpg"
                          alt="Sleep Well Plus"
                          width={200}
                          height={200}
                          className="h-48 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Sleep Well Plus</h2>
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                      <Star className="h-5 w-5 fill-[#fff59d]" />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our advanced sleep formula combines Valerian Root, Passionflower, and Chamomile to help you fall asleep faster, stay asleep longer, and wake up refreshed without morning grogginess.
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
                        <span className="text-gray-700">Improves sleep quality</span>
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
                        <span className="text-gray-700">Non-habit forming</span>
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
                        <span className="text-gray-700">Wake up refreshed</span>
                      </li>
                    </ul>
                    <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 shadow-md hover:shadow-lg transition-all">
                      Buy Now on Amazon
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
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
                  className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#fff59d]/50 hover:shadow-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                    <Star className="h-4 w-4 fill-[#fff59d]" />
                  </div>
                  <p className="text-gray-600 mb-4">"{review.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fff59d]/20 flex items-center justify-center text-[#fff59d] font-medium">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#fff59d]/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#fff59d]/10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Mind Deserves Peace.</h2>
            <p className="text-lg text-gray-600 mb-8">Start your wellness journey with HappyMind today.</p>
            <Button className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all">
              Shop Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
