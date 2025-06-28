import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Projects | The Code Academy",
  description:
    "Explore real-world industrial and academic projects built by students of The Code Academy — from full stack apps to DevOps pipelines and automation tools.",
  keywords: [
    "Student projects",
    "Industrial projects",
    "Full stack web apps",
    "DevOps projects",
    "AI chatbot app",
    "AWS pipeline project",
    "Android notes app",
    "Automation testing suite",
    "Retail billing software",
    "thecodeacademy.in projects",
  ],
  openGraph: {
    title: "Industrial Projects | The Code Academy",
    description:
      "Browse live demos of real projects built using modern stacks like React, Next.js, AWS, Docker, OpenAI, Electron.js, and more.",
    url: "https://thecodeacademy.in/projects",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-projects.jpg", // ✅ Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Projects by The Code Academy Students",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Projects | The Code Academy",
    description:
      "See live demos of student-built applications: full stack, DevOps, Android, automation, and more.",
    images: ["https://thecodeacademy.in/og-projects.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full-featured e-commerce platform with cart, checkout, and admin dashboard.",
    demoLink: "https://demo-ecommerce.vercel.app",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "AI Chatbot App",
    description: "An AI-powered chatbot using OpenAI API, real-time answers with chat history.",
    demoLink: "https://demo-aibot.vercel.app",
    tech: ["React", "Node.js", "OpenAI API"],
  },
  {
    title: "Full Stack Social Media App",
    description: "Social media app with authentication, posts, likes, and comments.",
    demoLink: "https://demo-social.vercel.app",
    tech: ["MERN Stack", "JWT", "Tailwind"],
  },
  {
    title: "Android Notes App",
    description: "Offline-first note-taking app with sync and reminder notifications.",
    demoLink: "#",
    tech: ["Kotlin", "Room DB", "Firebase"],
  },
  {
    title: "Desktop Billing Software",
    description: "Inventory & billing software for retail shops with PDF invoice export.",
    demoLink: "#",
    tech: ["Electron.js", "SQLite"],
  },
  {
    title: "AWS Deployment Pipeline",
    description: "CI/CD setup using GitHub Actions, Docker, and AWS EC2 + S3 deployment.",
    demoLink: "#",
    tech: ["Docker", "AWS", "GitHub Actions"],
  },
  {
    title: "DevOps Monitoring App",
    description: "A dashboard to monitor app health using Prometheus, Grafana, and alerts.",
    demoLink: "#",
    tech: ["Prometheus", "Grafana", "Node Exporter"],
  },
  {
    title: "Automation Testing Suite",
    description: "Selenium-based UI test suite with Cypress and Jest integration.",
    demoLink: "#",
    tech: ["Selenium", "Cypress", "Jest"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Industrial Projects Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.demoLink !== "#" && (
              <Link
                href={project.demoLink}
                target="_blank"
                className="mt-2 text-white bg-blue-600 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700"
              >
                Live Demo
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
