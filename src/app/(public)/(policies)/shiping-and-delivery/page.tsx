import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Walmikee",
  description:
    "Learn about Walmikee's shipping and delivery policies for digital and physical products. Instant course access and global shipping available.",
  keywords: [
    "Walmikee shipping policy",
    "delivery terms",
    "instant course access",
    "shipping time",
    "order tracking",
    "digital product delivery",
    "online learning delivery",
    "Walmikee India shipping",
  ],
  openGraph: {
    title: "Shipping & Delivery Policy | Walmikee",
    description:
      "Understand Walmikee's shipping methods, delivery timeframes, and order tracking for your purchases.",
    url: "https://walmikee.com/shipping-delivery",
    siteName: "Walmikee",
    images: [
      {
        url: "https://walmikee.com/og-shipping.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Walmikee Shipping & Delivery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Policy | Walmikee",
    description:
      "Explore Walmikee's delivery process, timelines, and support for digital and physical orders.",
    images: ["https://walmikee.com/og-shipping.jpg"], // Replace with your image
  },
  metadataBase: new URL("https://walmikee.com"),
};

export default function ShippingDelivery() {
  return (
    <div className="py-16 bg-white text-gray-800 p-2">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Shipping & Delivery</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Shipping Policy</h2>
          <p className="text-gray-600">
            At <strong>Walmikee</strong>, we are committed to delivering your learning materials and digital products efficiently. Below are the details regarding our shipping and delivery processes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Delivery Methods & Timeframes</h2>
          <h3 className="text-lg font-medium text-gray-800">Digital Products & Courses</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Immediate access after purchase.</li>
            <li>A confirmation email with access details will be sent.</li>
            <li>If access is not received within 30 minutes, check your spam folder or contact support.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">Physical Products (If Applicable)</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Processing Time: Orders processed within 1–2 business days.</li>
            <li>Standard Shipping: 5–7 business days.</li>
            <li>Express Shipping: 2–3 business days.</li>
            <li>International Shipping: 7–14 business days (varies by location).</li>
            <li>Tracking number provided once shipped.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Shipping Fees</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Digital Products: No shipping fees.</li>
            <li>
              Physical Products:
              <ul className="list-disc pl-5">
                <li>Free standard shipping for orders over ₹4,000 / $50.</li>
                <li>Express & International shipping: Calculated at checkout.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Order Tracking</h2>
          <p className="text-gray-600">
            For physical products, track your order using the link provided in your confirmation email. If you encounter issues, contact our support team at <strong>contact@walmikee.com</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Issues with Delivery</h2>
          <p className="text-gray-600">
            If you experience delays, missing items, or damaged products, contact our support team within <strong>7 days</strong> of the expected delivery date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            For any queries regarding shipping and delivery, reach out to:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Email: <strong>contact@walmikee.com</strong></li>
            <li>Phone: <strong>+91 7030005100</strong></li>
          </ul>
        </section>

        <p className="text-gray-600 font-medium mt-6">
          Thank you for choosing <strong>Walmikee</strong>—your trusted platform for learning and growth! 🚀
        </p>
      </div>
    </div>
  );
}
