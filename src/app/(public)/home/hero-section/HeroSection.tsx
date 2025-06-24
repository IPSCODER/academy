import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between">

        {/* Left Side: Text */}
        <div className="max-w-2xl mx-auto text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Unlock Your Potential<br />
            with <span className="text-indigo-600">Expert Coaching</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join our coaching institute to excel in academics, competitive exams, and life. Learn from experienced mentors, get personal guidance, and boost your confidence.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <Link
              href="/join"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Join Now
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-lg border hover:border-indigo-600 transition"
            >
              View Courses
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/18069697/pexels-photo-18069697.png" // Replace with your actual image
            alt="Coaching students"
            width={800}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
