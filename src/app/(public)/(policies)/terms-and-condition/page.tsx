import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Your Coaching Institute",
  description:
    "Review the terms and conditions for using courses, services, and content offered by Your Coaching Institute. Understand user responsibilities, payments, IP, and legal compliance.",
  keywords: [
    "Terms and Conditions",
    "Coaching Institute policies",
    "course access terms",
    "intellectual property terms",
    "user responsibility",
    "payment terms",
    "refund eligibility",
    "digital product rules",
  ],
  openGraph: {
    title: "Terms & Conditions | Your Coaching Institute",
    description:
      "These terms govern your access to courses and services from Your Coaching Institute. Please read before enrolling.",
    url: "https://yourdomain.com/terms-and-conditions", // Replace with your real domain
    siteName: "Your Coaching Institute",
    images: [
      {
        url: "https://yourdomain.com/og-terms.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Terms and Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Your Coaching Institute",
    description:
      "Understand the terms governing your use of the coaching platform and its services.",
    images: ["https://yourdomain.com/og-terms.jpg"], // Replace if needed
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Terms & Conditions</h1>

      <p className="text-gray-700 mb-4">
        Welcome to <strong>Your Coaching Institute</strong>. By accessing or using our website and
        services, you agree to comply with and be bound by the following Terms and Conditions. Please
        read them carefully before enrolling or using any part of the site.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By using our platform, enrolling in any course, accessing project demos, or downloading
        content, you acknowledge that you have read, understood, and agreed to these terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Course Access</h2>
      <p className="text-gray-700 mb-4">
        Course access is granted upon successful payment. Access is limited to the user who made the
        purchase and must not be shared. Unauthorized sharing may result in access termination.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Payment & Refunds</h2>
      <p className="text-gray-700 mb-4">
        All fees are clearly mentioned before enrollment. Refunds are governed by our{" "}
        <a href="/refund-policy" className="text-blue-600 underline">
          Refund Policy
        </a>
        . No refunds will be processed beyond the eligible period or under non-refundable categories
        like digital downloads or live demo access.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content, including videos, blogs, code, and projects, is the intellectual property of{" "}
        <strong>Your Coaching Institute</strong>. You may not reproduce, distribute, or sell any
        content without prior written permission.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">5. User Responsibilities</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Provide accurate information during registration</li>
        <li>Use the platform respectfully and legally</li>
        <li>Do not share credentials with others</li>
        <li>Do not attempt to hack, manipulate, or misuse the platform</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">6. Course Modifications</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify course content, pricing, or structure at any time to improve
        quality. Enrolled students will receive continued access to their purchased version unless
        otherwise stated.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        We are not liable for any direct, indirect, or consequential damages arising from the use of
        our site, services, or any third-party integrations/tools. Use at your own discretion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">8. External Services</h2>
      <p className="text-gray-700 mb-4">
        Our platform may use third-party services like Razorpay, Stripe, AWS, or GitHub. We are not
        responsible for their terms, privacy, or performance.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">9. Termination</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to suspend or terminate any user account that violates these terms
        without prior notice.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">10. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These terms shall be governed by and interpreted in accordance with the laws of India. Any
        disputes will be subject to jurisdiction in Mumbai, Maharashtra (or your local region).
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">11. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        For any questions regarding these terms, please contact us at{" "}
        <a href="mailto:support@yourinstitute.com" className="text-blue-600 underline">
          support@yourinstitute.com
        </a>
        .
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Last updated: June 24, 2025
      </p>
    </div>
  );
}
