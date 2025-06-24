import React from "react";

const ShippingDelivery = () => {
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
          <li>Processing Time: Orders processed within 1-2 business days.</li>
          <li>Standard Shipping: 5-7 business days.</li>
          <li>Express Shipping: 2-3 business days.</li>
          <li>International Shipping: 7-14 business days (varies by location).</li>
          <li>Tracking number provided once shipped.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Shipping Fees</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Digital Products: No shipping fees.</li>
          <li>Physical Products:
            <ul className="list-disc pl-5">
              <li>Free standard shipping for orders over $50.</li>
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
          <li>Phone: <strong>+917030005100</strong></li>
        </ul>
      </section>

      <p className="text-gray-600 font-medium">Thank you for choosing <strong>Walmikee</strong>—your trusted platform for learning and growth! 🚀</p>
      </div>

    </div>
  );
};

export default ShippingDelivery;