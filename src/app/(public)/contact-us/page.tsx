import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Code Academy",
  description:
    "Get in touch with The Code Academy for course queries, support, and partnership opportunities. We're here to help you on your coding journey.",
  keywords: [
    "Contact The Code Academy",
    "Coding course support",
    "Learn programming India",
    "IT training help",
    "Code academy contact number",
    "Majalgaon coding classes",
    "Talk to mentors",
    "Code Academy Beed",
    "7030005100",
    "contact@thecodeacademy.in",
  ],
  openGraph: {
    title: "Contact Us | The Code Academy",
    description:
      "Have questions about our programs? Reach out to The Code Academy team for answers and guidance.",
    url: "https://thecodeacademy.in/contact",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-contact.jpg", // ✅ Replace with your actual contact OG image
        width: 1200,
        height: 630,
        alt: "Contact The Code Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Code Academy",
    description:
      "Get support and guidance from The Code Academy team. Call us, email us, or send us a message.",
    images: ["https://thecodeacademy.in/og-contact.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Got questions? Need help choosing a course? Get in touch with our team — we are here to help.
          </p>
        </section>

        {/* Main Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-indigo-600">Our Address</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Behind Moreshwar School,<br />
                Shahu Nagar, Majalgaon Dist Beed, 431131
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-indigo-600">Phone</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">+7030005100</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-indigo-600">Email</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">contact@thecodeacademy.in</p>
            </div>
            <iframe
              className="rounded-lg w-full h-64 mt-6"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // ✅ Replace with actual embed URL
              allowFullScreen
            />
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
