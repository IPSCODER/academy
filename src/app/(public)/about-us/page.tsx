import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | The Code Academy",
  description:
    "Learn about The Code Academy, our mission, teaching approach, and the passionate team behind India’s fastest-growing coding institute.",
  keywords: [
    "About The Code Academy",
    "Coding classes India",
    "The Code Academy team",
    "Best coding institute",
    "Programming mentors",
    "Web development teachers",
    "Next.js training",
    "Coding school India",
  ],
  openGraph: {
    title: "About Us | The Code Academy",
    description:
      "Get to know the team, values, and mission behind The Code Academy. We're dedicated to helping you succeed in tech.",
    url: "https://thecodeacademy.in/about-us",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-about.jpg", // ✅ Replace with a relevant team or company image
        width: 1200,
        height: 630,
        alt: "The Code Academy - About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | The Code Academy",
    description:
      "Explore The Code Academy’s mission and meet the team behind India’s fastest-growing coding platform.",
    images: ["https://thecodeacademy.in/og-about.jpg"], // ✅ Same image as OG, or a Twitter-specific one
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Intro */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to <span className="text-indigo-600 font-semibold">The Code Academy</span> — a place where academic excellence meets personal mentoring. We empower students to succeed in competitive exams and life.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To provide high-quality, result-oriented education to students through expert faculty, innovative teaching methods, and a supportive learning environment.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To become India’s most trusted coaching institute, nurturing the academic and personal growth of every student.
            </p>
          </div>
        </section>

        {/* Highlights / Values */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Why Students Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Expert Faculty',
              'Structured Curriculum',
              'Doubt Support',
              'Online + Offline Classes',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="font-medium text-indigo-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/profile.png"
            alt="Founder"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Mr. Pravin Sawant</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Founder & Academic Director
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
              With over 4 years of experience in the education field, Mr. Sawant is dedicated to providing quality learning. His vision is to make quality education accessible to all aspiring students across India.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
