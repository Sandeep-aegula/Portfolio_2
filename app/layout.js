import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // 1. Basic Metadata
  metadataBase: new URL('https://sandeepaegula.vercel.app'),
  title: {
    default: 'Aegula Sandeep | Full-Stack Developer & UI/UX Designer',
    template: '%s | Aegula Sandeep'
  },
  description: 'Full-stack developer and UI/UX designer specializing in React, Next.js, and n8n automation. Building scalable web applications with a focus on clean code and user-centric design.',
  keywords: [
    'Aegula Sandeep', 
    'Full-Stack Developer Hyderabad', 
    'UI/UX Designer', 
    'n8n Automation', 
    'Next.js Portfolio', 
    'React Developer India',
    'Automation Engineer'
  ],
  authors: [{ name: 'Aegula Sandeep' }],
  creator: 'Aegula Sandeep',

  // 2. OpenGraph (Social Media - LinkedIn, WhatsApp, Facebook)
  openGraph: {
    title: 'Aegula Sandeep | Full-Stack Developer & UI/UX Designer',
    description: 'Transforming ideas into high-performance web applications and automated workflows.',
    url: 'https://sandeepaegula.vercel.app',
    siteName: 'Aegula Sandeep Portfolio',
    images: [
      {
        url: '/og-image.png', // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: 'Aegula Sandeep Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 3. Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Aegula Sandeep | Developer & Designer',
    description: 'Specializing in Next.js, UI Design, and n8n Automation.',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle', // Optional: Add your handle
  },

  // 4. Icons (Next.js automatically links these if files exist in /app)
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: [
      { url: '/icon.svg' },
    ],
  },

  // 5. Robots (Instructions for Search Engines)
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
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060010] text-slate-50`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
