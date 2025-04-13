import { Metadata } from 'next'
import { favicon } from './favicon'

export const metadata: Metadata = {
  title: 'HappyMind | Herbal Wellness Supplements | Natural Ayurvedic Solutions',
  description: 'Discover premium herbal supplements from HappyMind crafted with ancient Ayurvedic wisdom and modern science. Natural solutions for mental clarity, emotional balance, and overall wellness.',
  keywords: 'HappyMind, herbal supplements, ayurvedic medicine, natural wellness, mental clarity, emotional balance, ayurveda, wellness products',
  
  ...favicon,
  
  openGraph: {
    title: 'HappyMind | Herbal Wellness Supplements | Natural Ayurvedic Solutions',
    description: 'Discover premium herbal supplements from HappyMind crafted with ancient Ayurvedic wisdom and modern science. Natural solutions for mental clarity, emotional balance, and overall wellness.',
    url: 'https://thehappymind.in',
    siteName: 'HappyMind',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HappyMind Herbal Wellness Supplements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'HappyMind | Herbal Wellness Supplements | Natural Ayurvedic Solutions',
    description: 'Discover premium herbal supplements from HappyMind crafted with ancient Ayurvedic wisdom and modern science.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
      google: 'your-google-verification-code',
  },
  
  alternates: {
    canonical: 'https://thehappymind.in',
  },
} 