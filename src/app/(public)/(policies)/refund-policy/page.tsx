import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | The Code Academy",
  description:
    "Read The Code Academy's refund policy to understand eligibility, timelines, and conditions for course and product refunds.",
  keywords: [
    "refund policy",
    "course refund",
    "The Code Academy return policy",
    "edtech refund terms",
    "online course refund",
    "student refund eligibility",
    "thecodeacademy refund process",
  ],
  openGraph: {
    title: "Refund Policy | The Code Academy",
    description:
      "Find out how The Code Academy handles course refunds, eligibility timelines, non-refundable services, and support process.",
    url: "https://thecodeacademy.in/refund-policy",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-refund.jpg", // ✅ Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: "The Code Academy Refund Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | The Code Academy",
    description:
      "Learn about refund eligibility, timelines, and non-refundable products at The Code Academy.",
    images: ["https://thecodeacademy.in/og-refund.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Refund Policy</h1>

      <p className="text-gray-700 mb-4">
        At <strong>The Code Academy</strong>, we strive to deliver high-quality training
        and learning resources. We value our students and want to ensure clarity around our
        refund policies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Refund Eligibility</h2>
      <p className="text-gray-700 mb-4">
        Refunds are considered under the following conditions:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>You request a refund within <strong>3 days</strong> of purchase</li>
        <li>You have accessed <strong>less than 20%</strong> of the course content</li>
        <li>The product/service does not match the description</li>
        <li>Technical issues from our side prevent course access and remain unresolved</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Non-Refundable Items</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Digital downloads (PDFs, source code, eBooks)</li>
        <li>Live project demo access once granted</li>
        <li>Courses purchased on discounts/offers</li>
        <li>Failure to use services due to user’s device/internet limitations</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Refund Process</h2>
      <p className="text-gray-700 mb-4">
        If eligible, your refund will be processed within <strong>7–10 working days</strong> to
        the original payment method. Refunds may be subject to a small processing fee depending on the payment gateway used.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. How to Request a Refund</h2>
      <p className="text-gray-700 mb-4">
        To request a refund, please email us at{" "}
        <a href="mailto:support@thecodeacademy.in" className="text-blue-600 underline">
          support@thecodeacademy.in
        </a>{" "}
        within the applicable refund window. Include your:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Full Name</li>
        <li>Order ID / Payment Reference</li>
        <li>Course or product name</li>
        <li>Reason for refund request</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">5. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions regarding refunds, feel free to contact our support team at{" "}
        <a href="mailto:support@thecodeacademy.in" className="text-blue-600 underline">
          support@thecodeacademy.in
        </a>{" "}
        or call us at +91-7030005100.
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Policy last updated: June 24, 2025
      </p>
    </div>
  );
}
