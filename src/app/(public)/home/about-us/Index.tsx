import React from 'react'

export function AboutUs() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center p-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg mb-4">
          At <span className="font-semibold">EduLearn</span>, we believe that knowledge should be accessible to everyone. 
          Our mission is to empower learners worldwide with high-quality, industry-relevant courses designed by 
          experts and professionals.
        </p>
        <p className="text-lg mb-4">
          Whether you’re looking to upskill, switch careers, or explore new domains, we provide structured learning paths 
          and hands-on projects to help you succeed in today’s competitive world.
        </p>
        <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">Learn More</button>
      </div>
    </section>
  );
}

export default AboutUs