import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import WhatsAppButton from "@/components/layout/WhatsApp/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Code Academy | Learn Programming the Right Way",
  description:
    "Join The Code Academy (thecodeacademy.in) to master coding with expert-led classes in web development, data structures, and more. Learn online with hands-on projects and real-world mentorship.",
  keywords: [
    "The Code Academy",
    "Coding classes India",
    "Learn programming",
    "Web development course",
    "Best coding institute",
    "JavaScript training",
    "Next.js tutorials",
    "Frontend development",
    "Backend development",
    "thecodeacademy.in",
  ],
  openGraph: {
    title: "The Code Academy | Learn Programming the Right Way",
    description:
      "Expert-led coding classes in web development, data structures, and more at thecodeacademy.in.",
    url: "https://thecodeacademy.in",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-image.jpg", // ✅ Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "The Code Academy Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Code Academy | Learn Programming the Right Way",
    description:
      "Join expert-led coding classes at The Code Academy — your path to a tech career begins here.",
    images: ["https://thecodeacademy.in/og-image.jpg"], // ✅ Replace with your image path
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
    <WhatsAppButton/>

      </body>
    </html>
  );
}
