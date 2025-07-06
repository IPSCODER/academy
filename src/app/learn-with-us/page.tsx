import React from "react";

export default function MarketingPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Digital Career in 10 Weeks
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Build Real Projects, Earn Certifications, and Get Career Support
          </p>
          <div className="space-x-4">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
              Enroll Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600">
              Download Course Kit
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You will Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Web Development",
                desc: "HTML5, CSS3, JavaScript, React, Node.js."
              },
              {
                title: "App Development",
                desc: "Android with Kotlin, iOS with Swift."
              },
              {
                title: "Digital Marketing",
                desc: "SEO, Google Ads, Social Media Marketing, Analytics."
              }
            ].map(({ title, desc }, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ul className="space-y-4">
              <li>✅ Hands-On Projects for Portfolio</li>
              <li>✅ Certified Industry Instructors</li>
              <li>✅ Google & Meta Certifications</li>
              <li>✅ Job Support & Placement Assistance</li>
              <li>✅ Live + Self-Paced Learning Options</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Affordable Pricing with EMI</li>
              <li>✅ Resume Building & Interview Prep</li>
              <li>✅ Student Community Access</li>
              <li>✅ Free Workshops & Webinars</li>
              <li>✅ Career Path Guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic">“I landed a front-end dev job within 2 months!”</p>
              <p className="mt-2 font-semibold">— Arjun, Pune</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic">“The marketing module helped me land freelance clients fast.”</p>
              <p className="mt-2 font-semibold">— Sneha, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="mb-6">Book your seat now or download our detailed course brochure</p>
        <div className="space-x-4">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
            Enroll Now
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600">
            Download Course Kit
          </button>
        </div>
      </section>
    </div>
  );
}
