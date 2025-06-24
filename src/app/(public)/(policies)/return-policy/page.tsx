// app/return-policy/page.tsx
export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Return & Refund Policy</h1>

      <p className="text-gray-700 mb-4">
        At <strong>Your Coaching Institute</strong>, we are committed to providing high-quality
        education and training. However, due to the nature of digital products and services,
        our refund policy is outlined below to ensure transparency.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Course Enrollment</h2>
      <p className="text-gray-700 mb-4">
        Once enrolled in a paid course (online or offline), the fees are <strong>non-refundable</strong> after 3 days of
        purchase. A partial refund may be considered within 3 days if:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>The student hasn’t accessed more than 20% of the course content</li>
        <li>A genuine reason is provided with proper proof</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Live Project Demos</h2>
      <p className="text-gray-700 mb-4">
        Live industrial project access (eCommerce, AI, Full Stack, etc.) is a digital
        service. Once access is granted, <strong>no refunds will be issued</strong> unless:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>The project is not delivered as described</li>
        <li>There is a technical issue from our side that cannot be resolved</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Digital Products</h2>
      <p className="text-gray-700 mb-4">
        No refunds will be processed for downloadable materials (eBooks, PDFs, source codes).
        Please read descriptions carefully before purchasing.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. How to Request a Refund</h2>
      <p className="text-gray-700 mb-4">
        To request a refund, contact us at{" "}
        <a href="mailto:support@yourinstitute.com" className="text-blue-600 underline">
          support@yourinstitute.com
        </a>{" "}
        within the applicable window. Include your full name, payment details, and reason
        for the request.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">5. Exceptions</h2>
      <p className="text-gray-700 mb-4">
        Refunds will not be granted for:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Change of mind after accessing the course content</li>
        <li>Failure to use the platform due to technical limitations on the user’s end</li>
        <li>Courses purchased under discount/offers</li>
      </ul>

      <p className="text-gray-600 text-sm mt-8">
        Policy last updated: June 24, 2025
      </p>
    </div>
  );
}
