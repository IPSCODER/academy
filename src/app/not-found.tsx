// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you are looking for doesn’t exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
