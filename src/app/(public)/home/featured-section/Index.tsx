import { BookOpen, Users, ShieldCheck, Laptop } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    title: 'Expert Faculty',
    description: 'Learn from highly experienced educators who guide students with personal attention and proven strategies.',
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: 'Small Batch Sizes',
    description: 'We keep class sizes small to ensure every student gets enough individual focus and mentoring.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: 'Guaranteed Results',
    description: 'Our success rate speaks for itself. We work hard to deliver the best outcomes for every student.',
  },
  {
    icon: <Laptop className="w-8 h-8 text-indigo-600" />,
    title: 'Online + Offline Classes',
    description: 'Attend classes in-person or online with the same high-quality curriculum and support.',
  },
];

export default function Featured() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Why Choose Our Coaching Institute?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover how we stand out and why hundreds of students trust us every year.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
