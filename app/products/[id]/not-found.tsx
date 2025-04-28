import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/" className="bg-[#fff59d] text-[#0a0f12] hover:bg-[#fff176]">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
} 