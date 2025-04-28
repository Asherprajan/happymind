"use client"

import { products } from "@/app/data/products"
import Image from "next/image"
import Link from "next/link"
import { Star, Check, ShoppingCart, Heart, ArrowLeft, ChevronDown, ChevronUp, Share2, Lock, Clock } from "lucide-react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { use } from "react"

// Define interface for params structure
interface PageParams {
  id: string;
}

export default function ProductDetail({ params }: { params: PageParams }) {
  // Properly unwrap params using React.use()
  const unwrappedParams = use(params as any) as PageParams
  const id = unwrappedParams.id
  const product = products.find(p => p.id === id)
  const [expandedSection, setExpandedSection] = useState<string | null>("benefits")
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 15 })

  // Countdown timer for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-[#0a0f12] font-sans">
        <Header />
        <div className="container mx-auto py-8 px-4">
          <Link href="/" className="flex items-center text-[#0066c0] mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Return to home
          </Link>
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  // Calculate discount percentage
  const originalPrice = 899
  const discountPercentage = Math.round(((originalPrice - parseInt(product.price.replace('₹', '').trim())) / originalPrice) * 100)

  // Add a flash banner for mobile users
  const MobileFlashBanner = () => (
    <div className="md:hidden bg-[#fffbe6] border border-[#ffe58f] p-2 rounded-md mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <Clock className="h-4 w-4 text-[#fa8c16] mr-2" />
        <span className="text-xs font-medium">Deal ends in:</span>
      </div>
      <div className="text-xs font-bold text-[#fa8c16]">
        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-[#0a0f12] font-sans">
      <Header />
      
      {/* Mobile Back Button - Only visible on mobile */}
      <div className="md:hidden px-4 py-2 border-b border-gray-200">
        <Link href="/" className="flex items-center text-[#0066c0]">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Link>
      </div>
      
      {/* Breadcrumb Navigation - Hidden on mobile */}
      <div className="hidden md:block container mx-auto px-4 py-3 text-sm">
        <div className="flex items-center text-gray-500">
          <Link href="/" className="hover:text-[#0066c0] transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/" className="hover:text-[#0066c0] transition-colors">Health & Personal Care</Link>
          <span className="mx-2">›</span>
          <Link href="/" className="hover:text-[#0066c0] transition-colors">Ayurveda</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Product title - Visible on mobile */}
        <div className="md:hidden mb-4">
          <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
          <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline text-sm mt-1 inline-block">
            Visit the HAPPYMIND Store
          </Link>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-[#fff59d] text-[#fff59d]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <Link href="#reviews" className="text-sm text-[#0066c0]">
              {product.reviews} ratings
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Product Image - Full width on mobile, 4 columns on desktop */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="bg-white md:border md:border-gray-200 md:rounded-lg md:p-4 mb-4">
                <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnail Images - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border border-gray-200 rounded-md overflow-hidden hover:border-[#fff59d] cursor-pointer">
                    <div className="relative h-16 w-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} view ${i+1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Share button - Mobile only */}
              <div className="flex justify-center mt-2 md:hidden">
                <button className="flex items-center text-[#0066c0] text-sm">
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </button>
              </div>
            </div>
          </div>

          {/* Product Info - Hidden on mobile, 5 columns on desktop */}
          <div className="hidden md:block md:col-span-5">
            <h1 className="text-2xl font-medium mb-2 text-gray-900">{product.name} | Natural Memory Supplement | Clarity & Sharp Thinking | With {product.ingredients[0]}, {product.ingredients[1]} & {product.ingredients[2]} | 60 Veg Tablets</h1>
            
            <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline text-sm mb-3 inline-block">
              Visit the HAPPYMIND Store
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#fff59d] text-[#fff59d]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Link href="#reviews" className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline">
                {product.rating} ({product.reviews} ratings)
              </Link>
            </div>
            
            <div className="h-px w-full bg-gray-200 my-4"></div>
            
            {/* Price Section */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="text-red-600 text-lg font-bold">-{discountPercentage}%</div>
                <div className="flex items-baseline">
                  <span className="text-gray-500 text-sm">₹</span>
                  <span className="text-3xl font-medium text-gray-900">{product.price.replace('₹', '')}</span>
                </div>
              </div>
              <div className="flex items-center text-sm mt-1">
                <span className="text-gray-600">M.R.P.: </span>
                <span className="text-gray-500 line-through ml-1">₹{originalPrice}</span>
              </div>
              <div className="bg-[#f0f2f2] inline-block px-2 py-1 rounded text-xs font-semibold mt-2">
                Inclusive of all taxes
              </div>
            </div>
            
            <div className="h-px w-full bg-gray-200 my-4"></div>
            
            {/* Benefits Summary */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-3">About this item</h2>
              <ul className="space-y-2">
                {product.benefits.slice(0, 5).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#007600] mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Buy Box - Full width on mobile, 3 columns on desktop */}
          <div className="md:col-span-3">
            <div className="bg-white md:border md:border-gray-200 md:rounded-lg p-4 md:sticky md:top-24">
              {/* Price section - Mobile only */}
              <div className="md:hidden mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-gray-500 text-sm">₹</span>
                    <span className="text-2xl font-medium text-gray-900">{product.price.replace('₹', '')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 text-base font-bold mr-1">-{discountPercentage}%</span>
                    <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
                  </div>
                </div>
                <div className="bg-[#f0f2f2] inline-block px-2 py-1 rounded text-xs font-semibold mt-1">
                  Inclusive of all taxes
                </div>
                
                {/* Add stock countdown - Mobile only */}
                <div className="mt-2 text-xs text-[#c45500] font-medium">
                  <span className="inline-block w-2 h-2 bg-[#c45500] rounded-full mr-1"></span>
                  Only 7 left in stock - order soon
                </div>
              </div>
              
              {/* Desktop price section */}
              <div className="hidden md:block">
                <div className="flex items-baseline mb-2">
                  <span className="text-gray-500 text-sm">₹</span>
                  <span className="text-2xl font-medium text-gray-900">{product.price.replace('₹', '')}</span>
                </div>
                
                <div className="text-sm mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-600">M.R.P.: </span>
                    <span className="text-gray-500 line-through ml-1">₹{originalPrice}</span>
                  </div>
                </div>
              </div>
              
              {/* Common elements for both mobile and desktop */}
              <div className="text-[#007600] mt-1 text-sm">FREE delivery Sunday, 4 May</div>
              <div className="text-[#007600] font-medium mt-2 mb-4 flex items-center">
                <Check className="h-4 w-4 mr-1" /> In Stock
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-700 text-sm">Quantity:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              
              <div className="space-y-3 mb-4">
                <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-12 bg-[#ffd814] hover:bg-[#f7ca00] text-[#0a0f12] border border-[#FCD200] rounded-full flex items-center justify-center text-base">
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                </Link>
                
                <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-12 bg-[#ffa41c] hover:bg-[#fa8900] text-[#0a0f12] border border-[#FF8F00] rounded-full font-medium flex items-center justify-center text-base">
                    Buy Now
                  </Button>
                </Link>
                
                {/* Security badge - Mobile only */}
                <div className="md:hidden flex justify-center mt-2">
                  <div className="inline-flex items-center bg-[#f0f2f2] px-3 py-1 rounded-full text-xs text-gray-600">
                    <Lock className="h-3 w-3 mr-1" />
                    Secure transaction
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <span className="font-medium">Ships from</span>
                  <span>Amazon</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Sold by</span>
                  <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">TrueSwiss International</Link>
                </div>
              </div>
              
              <div className="h-px w-full bg-gray-200 my-4"></div>
              
              <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="text-[#0066c0] hover:text-[#c45500] hover:underline text-sm flex items-center justify-center">
                <Heart className="h-4 w-4 mr-1" /> Add to Wish List
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Expandable Sections */}
        <div className="mt-6 space-y-2 md:hidden">
          {/* Trust signal banner - Mobile only */}
          <div className="bg-[#fff9c4] p-4 rounded-lg mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#007600] mr-2" />
              <span className="text-sm font-medium">In high demand!</span>
            </div>
            <div className="text-xs text-red-600 font-bold">-{discountPercentage}% today</div>
          </div>
          
          {/* About this item section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleSection('benefits')}
            >
              <h2 className="text-lg font-medium">About this item</h2>
              {expandedSection === 'benefits' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSection === 'benefits' && (
              <div className="p-4">
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#007600] mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Trusted by 10,000+ customers
                </div>
              </div>
            )}
          </div>
          
          {/* Ingredients section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleSection('ingredients')}
            >
              <h2 className="text-lg font-medium">Key Ingredients</h2>
              {expandedSection === 'ingredients' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSection === 'ingredients' && (
              <div className="p-4">
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#007600] mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Product details section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleSection('details')}
            >
              <h2 className="text-lg font-medium">Product Details</h2>
              {expandedSection === 'details' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSection === 'details' && (
              <div className="p-4">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        <td className="py-2 text-gray-600 text-right">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-700">Brand</td>
                      <td className="py-2 text-gray-600 text-right">HAPPYMIND</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium text-gray-700">Item Form</td>
                      <td className="py-2 text-gray-600 text-right">Tablet</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Manufacturer</td>
                      <td className="py-2 text-gray-600 text-right">Essenzaa Nutrition Pvt. Ltd</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          {/* Customer Q&A section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleSection('faq')}
            >
              <h2 className="text-lg font-medium">Customer Questions</h2>
              {expandedSection === 'faq' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSection === 'faq' && (
              <div className="p-4">
                <div className="space-y-4">
                  {product.faq.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium mb-1 text-gray-900">{item.question}</h3>
                      <p className="text-sm text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Reviews section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden" id="mobile-reviews">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleSection('reviews')}
            >
              <h2 className="text-lg font-medium">Customer Reviews</h2>
              {expandedSection === 'reviews' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSection === 'reviews' && (
              <div className="p-4">
                <div className="space-y-4">
                  {product.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "fill-[#fff59d] text-[#fff59d]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.text}</p>
                      <div className="text-xs font-medium text-gray-700">{testimonial.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Desktop Additional Product Details */}
        <div className="hidden md:block mt-16 space-y-12">
          {/* Description with Trust Signals */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Description</h2>
            <div className="bg-[#f8f9fa] p-5 rounded-lg border-l-4 border-[#fff59d] mb-6">
              <p className="text-gray-700 italic">"{product.description}"</p>
              <div className="mt-3 text-sm text-gray-500">Trusted by over 10,000+ customers</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="bg-[#fff59d] w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[#0a0f12]">✓</span>
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#007600] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                  <span className="bg-[#fff59d] w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[#0a0f12]">✓</span>
                  Premium Ingredients
                </h3>
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#007600] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Social Proof Banner */}
          <div className="bg-gradient-to-r from-[#f0f2f2] to-white p-6 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900 mr-3">{product.rating}</div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#fff59d] text-[#fff59d]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{product.reviews} verified reviews</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-medium text-gray-900 mb-1">Limited Time Offer</div>
              <div className="text-red-600 font-bold">Save {discountPercentage}% Today!</div>
            </div>
          </div>
          
          {/* Specifications with Visual Hierarchy */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Information</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={key} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#fafafa]`}>
                      <td className="py-3 px-4 font-medium text-gray-700 w-1/3 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </td>
                    </tr>
                  ))}
                  <tr className={`${Object.keys(product.specifications).length % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#fafafa]`}>
                    <td className="py-3 px-4 font-medium text-gray-700 w-1/3">Brand</td>
                    <td className="py-3 px-4 text-gray-600">HAPPYMIND</td>
                  </tr>
                  <tr className={`${(Object.keys(product.specifications).length + 1) % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#fafafa]`}>
                    <td className="py-3 px-4 font-medium text-gray-700 w-1/3">Item Form</td>
                    <td className="py-3 px-4 text-gray-600">Tablet</td>
                  </tr>
                  <tr className={`${(Object.keys(product.specifications).length + 2) % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#fafafa]`}>
                    <td className="py-3 px-4 font-medium text-gray-700 w-1/3">Manufacturer</td>
                    <td className="py-3 px-4 text-gray-600">Essenzaa Nutrition Pvt. Ltd</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* FAQ with Authority Signals */}
          <div id="reviews">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Customer Questions & Answers</h2>
              <div className="text-sm text-gray-500">Answered by experts</div>
            </div>
            <div className="space-y-4">
              {product.faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-[#fff59d] transition-colors">
                  <h3 className="font-medium mb-2 text-gray-900 flex items-start">
                    <span className="text-[#0066c0] mr-2">Q:</span>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 pl-5">
                    <span className="text-[#007600] font-medium mr-2">A:</span>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials with Social Proof */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
              <Button className="bg-[#fff59d] hover:bg-[#fff176] text-[#0a0f12] border border-[#FCD200]">
                Write a Review
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-[#fff59d] text-[#fff59d]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">Verified Purchase</div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">2 days ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 