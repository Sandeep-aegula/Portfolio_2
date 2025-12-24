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
  title: "Aegula Sandeep - Full-Stack Developer & UI/UX Designer",
  description: "Professional portfolio showcasing modern web applications, clean code, and beautiful design. Full-stack developer with 3+ years of experience in React, Next.js, and Node.js.",
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
