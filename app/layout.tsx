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
  metadataBase: new URL("https://md-rahman-cyber-portfolio.rumi56.chatgpt.site"),
  title: "MD Rahman | Digital Marketing, Creative Technology & Leadership",
  description:
    "Explore MD 'Rumi' Rahman's portfolio: digital marketing, content creation, product optimisation, AI integration, community leadership and creative technology in London.",
  keywords: [
    "MD Rahman",
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
  authors: [{ name: "Md Rahman", url: "https://www.linkedin.com/in/mdrahman56" }],
  creator: "Md Rahman",
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
    siteName: "MD Rahman Portfolio",
    title: "MD Rahman — Ideas into Digital Momentum",
    description:
      "Digital marketing, creative technology, community leadership and AI-assisted innovation—built in London by MD 'Rumi' Rahman.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "MD Rahman — Ideas into Digital Momentum. Creative, Leadership and Technology.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Rahman — Ideas into Digital Momentum",
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
