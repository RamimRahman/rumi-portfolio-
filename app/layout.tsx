import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rumi-portfolio-tau.vercel.app"),
  title: "Rumi | Digital Marketing, Creative Technology & Leadership",
  description:
    "Meet Md Shah Habibur Rahman, known as Rumi: a London-based Computer Science undergraduate building useful work across digital marketing, creative technology and community leadership.",
  keywords: [
    "MD Rahman",
    "Md Shah Habibur Rahman",
    "Rumi",
    "Rumi Rahman",
    "digital marketing London",
    "social media marketing",
    "content creator",
    "creative technology",
    "AI integration",
    "product optimisation",
    "community leadership",
    "London South Bank University",
  ],
  authors: [{ name: "Md Shah Habibur Rahman", url: "https://www.linkedin.com/in/mdrahman56" }],
  creator: "Md Shah Habibur Rahman",
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_GB",
    url: "/",
    siteName: "Rumi Portfolio",
    title: "Rumi — Ideas into Digital Momentum",
    description:
      "Digital marketing, creative technology and people-first leadership—built in London by Md Shah Habibur Rahman, known as Rumi.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Rumi — Ideas into Digital Momentum. Creative, Leadership and Technology.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumi — Ideas into Digital Momentum",
    description:
      "Digital marketing, creative technology, community leadership and AI-assisted innovation.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
