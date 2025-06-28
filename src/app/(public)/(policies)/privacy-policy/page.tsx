import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Code Academy",
  description:
    "Learn how The Code Academy collects, uses, stores, and protects your personal information. We value your privacy and ensure transparency.",
  keywords: [
    "Privacy Policy",
    "student data protection",
    "data collection",
    "The Code Academy privacy",
    "how we use data",
    "cookies usage",
    "third-party sharing",
    "student account safety",
    "Razorpay Stripe data policy",
  ],
  openGraph: {
    title: "Privacy Policy | The Code Academy",
    description:
      "The Code Academy outlines its commitment to protecting your privacy, handling student and payment data responsibly, and complying with data laws.",
    url: "https://thecodeacademy.in/privacy-policy",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-privacy.jpg", // ✅ Replace with your own hosted image
        width: 1200,
        height: 630,
        alt: "The Code Academy Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The Code Academy",
    description:
      "We explain our practices for collecting, storing, and using student data at The Code Academy, including your rights and cookie usage.",
    images: ["https://thecodeacademy.in/og-privacy.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        At <strong>The Code Academy</strong>, we respect your privacy and are committed to
        protecting the personal information you share with us. This Privacy Policy explains how we
        collect, use, and safeguard your data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Personal Info:</strong> Name, email, phone number, address</li>
        <li><strong>Payment Info:</strong> Payment gateway data (we don’t store card details)</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, browser, and device info</li>
        <li><strong>Course Activity:</strong> Enrolled courses, progress, downloads</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To create and manage your student account</li>
        <li>To provide course access and track learning progress</li>
        <li>To process payments securely</li>
        <li>To respond to support or refund requests</li>
        <li>To improve our content, UI/UX, and marketing campaigns</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Sharing Your Data</h2>
      <p className="text-gray-700 mb-4">
        We do not sell or rent your personal data. We may share it with:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Trusted third-party payment processors (e.g., Razorpay, Stripe)</li>
        <li>Course delivery platforms or cloud storage services (e.g., AWS, Vercel)</li>
        <li>Legal authorities, only if required by law</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. Data Protection</h2>
      <p className="text-gray-700 mb-4">
        We implement appropriate technical and organizational measures to protect your data against
        unauthorized access, loss, misuse, or alteration.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Request access to your personal data</li>
        <li>Update or correct your profile information</li>
        <li>Request deletion of your data (except for legally required records)</li>
        <li>Opt-out of promotional communications anytime</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">6. Cookies</h2>
      <p className="text-gray-700 mb-4">
        We use cookies and tracking technologies to enhance user experience. You may disable cookies
        in your browser settings, though it may affect site functionality.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">7. Children’s Privacy</h2>
      <p className="text-gray-700 mb-4">
        Our services are not intended for children under 13. We do not knowingly collect data from
        minors without parental consent.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">8. Updates to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. The revised version will be posted on
        this page with an updated date.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">9. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
        <a href="mailto:support@thecodeacademy.in" className="text-blue-600 underline">
          support@thecodeacademy.in
        </a>
        .
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Policy last updated: June 24, 2025
      </p>
    </div>
  );
}
