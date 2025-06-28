import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Courses | The Code Academy",
  description:
    "Explore job-ready IT courses offered by The Code Academy. From full stack development to DevOps, testing, and app development — learn with hands-on projects and expert guidance.",
  keywords: [
    "IT courses India",
    "Software development training",
    "Full stack development course",
    "DevOps course",
    "Application development",
    "QA testing course",
    "Learn React Node MongoDB",
    "Docker and AWS training",
    "Code Academy Majalgaon",
    "thecodeacademy.in courses",
  ],
  openGraph: {
    title: "IT Courses | The Code Academy",
    description:
      "Choose from our top-rated IT courses — software dev, app dev, full stack, DevOps, testing and more. Practical and beginner-friendly.",
    url: "https://thecodeacademy.in/courses",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-courses.jpg", // ✅ Replace with your course banner image
        width: 1200,
        height: 630,
        alt: "IT Courses by The Code Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Courses | The Code Academy",
    description:
      "Get career-ready with The Code Academy's IT courses in software development, DevOps, testing, and full stack web development.",
    images: ["https://thecodeacademy.in/og-courses.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Software Development",
      description:
        "Learn core programming, problem-solving, object-oriented principles, and project architecture to become a job-ready software developer.",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      technologies: ["C++", "Java", "DSA", "OOP", "Agile"],
    },
    {
      title: "Application Development",
      description:
        "Master mobile and desktop application development, covering Android (Kotlin), desktop tools, and deployment practices.",
      duration: "2.5 Months",
      level: "Intermediate",
      technologies: ["Kotlin", "JavaFX", "Firebase", "SQLite"],
    },
    {
      title: "Full Stack Development",
      description:
        "Learn frontend + backend + database + deployment. Build complete web apps with modern stacks and real projects.",
      duration: "4 Months",
      level: "Advanced",
      technologies: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind CSS"],
    },
    {
      title: "DevOps & Cloud Deployment",
      description:
        "Master CI/CD, Docker, GitHub Actions, AWS deployment, containerization, and production-grade DevOps workflows.",
      duration: "2 Months",
      level: "Advanced",
      technologies: ["Docker", "GitHub Actions", "AWS EC2", "Nginx", "Kubernetes"],
    },
    {
      title: "Software Testing & QA",
      description:
        "Manual + Automation testing course with live scenarios, Selenium, Cypress, writing test cases, and real-time QA practices.",
      duration: "2 Months",
      level: "Beginner to Intermediate",
      technologies: ["Selenium", "Cypress", "Jest", "Mocha", "Postman"],
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Our IT Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-3">{course.description}</p>

            <p className="text-sm text-gray-600 mb-1">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Level:</strong> {course.level}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {course.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
