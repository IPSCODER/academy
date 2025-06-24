import { GraduationCap, ClipboardList, Headset, MonitorPlay } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    title: 'Competitive Exam Coaching',
    description: 'Prepare for JEE, NEET, SSC, Banking & more with structured curriculum and mock tests.',
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-indigo-600" />,
    title: 'Live & Recorded Classes',
    description: 'Attend live online classes or watch recorded sessions at your convenience.',
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-indigo-600" />,
    title: 'Regular Assessments',
    description: 'Track your progress with weekly tests, performance reports, and detailed analysis.',
  },
  {
    icon: <Headset className="w-8 h-8 text-indigo-600" />,
    title: '1:1 Doubt Clearing',
    description: 'Get personalized doubt-solving support from expert mentors to strengthen your concepts.',
  },
];

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          We offer a range of educational services designed to meet the needs of every student.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
