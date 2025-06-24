import Image from 'next/image';

const testimonials = [
  {
    name: 'Riya Sharma',
    course: 'NEET Batch 2024',
    image: '/images/students/riya.jpg', // Put actual image in public/images/students
    quote:
      'Joining this institute was the best decision. The personal attention and doubt-clearing sessions helped me crack NEET with confidence.',
  },
  {
    name: 'Aditya Verma',
    course: 'JEE Advanced 2024',
    image: '/images/students/aditya.jpg',
    quote:
      'The mock tests and concept clarity made all the difference. Thank you for the constant motivation and expert mentorship!',
  },
  {
    name: 'Priya Patel',
    course: 'Foundation 9th & 10th',
    image: '/images/students/priya.jpg',
    quote:
      'I improved a lot in Math and Science after joining. The teachers explain concepts so clearly, and I love the practice material!',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What Our Students Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Hear from our successful students who turned their dreams into reality.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.course}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">&ldquo;{t.quote}&ldquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
