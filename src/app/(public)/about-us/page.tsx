'use client';

import Image from 'next/image';



export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            About <span className="text-indigo-600">The Code Academy</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A place where <strong>academic excellence</strong> meets <strong>personal mentorship</strong>. Were empowering students across India to achieve their dreams in tech.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide high-quality, result-oriented education through expert faculty, innovative methods, and a supportive learning environment.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">🌟 Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To become India’s most trusted coding institute, nurturing the personal and academic growth of every student.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">🚀 Why Students Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Expert Faculty',
              'Structured Curriculum',
              'Doubt Support',
              'Online + Offline Classes',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-200 dark:border-gray-700"
              >
                <p className="text-lg font-medium text-indigo-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">👨‍🏫 Mr. Pravin Sawant</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">Founder & Academic Director</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 4 years of experience in tech education, Mr. Sawant is committed to building a future where quality education is accessible to all. His focus on clarity, mentorship, and career-building sets the tone for The Code Academy.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/profile.png"
              alt="Founder"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
