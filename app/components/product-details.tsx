'use client'

import Image from "next/image"
import { Star, Truck, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductDetailsProps {
  product: {
    id: string
    name: string
    title: string
    description: string
    price: string
    discount?: string
    originalPrice?: string
    image: string
    benefits: string[]
    ingredients: string[]
    rating: number
    reviews: number
    amazonLink: string
    specifications?: {
      quantity: string
      dosage: string
      suitableFor: string
      form: string
      shelfLife: string
      storage: string
      manufacturing: string
      certifications: string[]
      freeFrom: string[]
    }
    usage?: {
      instructions: string
      duration: string
      timing: string
      caution: string
    }
    faq?: Array<{
      question: string
      answer: string
    }>
    testimonials?: Array<{
      name: string
      rating: number
      text: string
    }>
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-1">{product.title}</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">{product.price}</div>
            {product.originalPrice && (
              <div className="ml-3 text-gray-500 line-through text-lg">{product.originalPrice}</div>
            )}
            {product.discount && (
              <div className="ml-3 text-green-600 font-medium">{product.discount}</div>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Key Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#fff59d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Key Ingredients</h2>
            <ul className="space-y-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-[#fff59d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {product.specifications && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Quantity</span>
                  <span className="text-gray-700">{product.specifications.quantity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Dosage</span>
                  <span className="text-gray-700">{product.specifications.dosage}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Suitable For</span>
                  <span className="text-gray-700">{product.specifications.suitableFor}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Form</span>
                  <span className="text-gray-700">{product.specifications.form}</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-500">
                <Truck className="h-5 w-5 mr-2" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Shield className="h-5 w-5 mr-2" />
                <span>100% Authentic</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button
              className="flex-1 bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176] py-6 text-lg"
              onClick={() => window.open(product.amazonLink, '_blank')}
            >
              Buy on Amazon
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center px-4"
              onClick={() => {/* Add to wishlist functionality */}}
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 