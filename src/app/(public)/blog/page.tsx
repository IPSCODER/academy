import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Blogs | The Code Academy",
  description:
    "Explore tech blogs for IT students and aspiring developers. Learn about web development, DevOps, Git, interviews, and trending technologies.",
  keywords: [
    "Tech blogs",
    "Coding articles",
    "Web development blog",
    "Frontend vs backend",
    "Git and GitHub guide",
    "DevOps tools",
    "Interview questions for developers",
    "API explained",
    "Kotlin tutorial",
    "AWS deployment",
    "The Code Academy blogs",
  ],
  openGraph: {
    title: "Tech Blogs | The Code Academy",
    description:
      "Discover insightful articles on web development, version control, DevOps, testing, and more — tailored for IT students.",
    url: "https://thecodeacademy.in/blogs",
    siteName: "The Code Academy",
    images: [
      {
        url: "https://thecodeacademy.in/og-blogs.jpg", // ✅ Replace with an actual OG image
        width: 1200,
        height: 630,
        alt: "Tech Blogs - The Code Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blogs | The Code Academy",
    description:
      "Read curated blogs on software careers, coding tutorials, and tools every developer must know.",
    images: ["https://thecodeacademy.in/og-blogs.jpg"],
  },
  metadataBase: new URL("https://thecodeacademy.in"),
};

const blogs = [
  {
    title: "How to Start Your Career in IT in 2025",
    description: "A step-by-step guide for freshers to build a career in the software industry.",
  },
  {
    title: "Frontend vs Backend vs Full Stack – What to Choose?",
    description: "A breakdown of the three main developer roles with pros and cons.",
  },
  {
    title: "Mastering Git & GitHub for Beginners",
    description: "Essential guide to version control for every developer.",
  },
  {
    title: "Top 10 Most Asked Interview Questions in Web Development",
    description: "Real-world questions asked in tech interviews with sample answers.",
  },
  {
    title: "Understanding APIs with Real-Life Examples",
    description: "Explains RESTful APIs with simple examples like Zomato, YouTube, etc.",
  },
  {
    title: "DevOps Simplified: Tools Every Developer Must Know",
    description: "An overview of Jenkins, Docker, GitHub Actions, and CI/CD.",
  },
  {
    title: "Building Your First Android App Using Kotlin",
    description: "A beginner-friendly article to build a note-taking app in Kotlin.",
  },
  {
    title: "AI vs ML vs Data Science – Explained Simply",
    description: "Clear comparison of the three hottest tech fields in 2025.",
  },
  {
    title: "How to Deploy Your Project on AWS in 10 Minutes",
    description: "A quick-start guide to launch a React or Node.js app on AWS EC2.",
  },
  {
    title: "Manual vs Automation Testing – Which One is Better?",
    description: "A complete breakdown for those entering the QA/testing field.",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Tech Blogs for IT Students
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link
              href={`/blogs/${idx + 1}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
