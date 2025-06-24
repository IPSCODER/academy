// app/disclaimer/page.tsx
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Disclaimer</h1>

      <p className="text-gray-700 mb-4">
        The information provided by <strong>Your Coaching Institute</strong> (“we,” “us” or “our”)
        on this website is for **general educational purposes only**. All information on the site
        is provided in good faith; however, we make no representation or warranty of any kind,
        express or implied, regarding the accuracy, adequacy, validity, reliability, or
        completeness of any information on the site.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Educational Purpose Only</h2>
      <p className="text-gray-700 mb-4">
        The content, blogs, courses, and project demos are provided for **learning and training
        purposes** only. They are not guaranteed to result in job placement, business success,
        or financial gain.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. No Professional Advice</h2>
      <p className="text-gray-700 mb-4">
        Nothing contained on this site shall be construed as professional advice. For any specific
        technical or legal issues, we recommend consulting a qualified expert in that field.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Third-Party Tools & Platforms</h2>
      <p className="text-gray-700 mb-4">
        We may use or reference third-party services (e.g., AWS, GitHub, Firebase, OpenAI, etc.).
        We are not affiliated with these services and are not responsible for their performance,
        terms, or policies. Their names/logos may appear for educational purposes only.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">4. External Links</h2>
      <p className="text-gray-700 mb-4">
        This site may contain links to external websites that are not provided or maintained by us.
        We do not guarantee the accuracy, relevance, or security of any external websites.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">5. Course Outcomes</h2>
      <p className="text-gray-700 mb-4">
        While we aim to help students build strong technical foundations, we do not guarantee job
        placements or certifications unless explicitly stated under a particular course/program.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">6. User Responsibility</h2>
      <p className="text-gray-700 mb-4">
        You are solely responsible for your use of the content and for ensuring it meets your
        learning needs or project requirements.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        Under no circumstances shall <strong>Your Coaching Institute</strong> be liable for any loss
        or damage (including indirect or consequential loss) arising out of or in connection with
        your use of this website or its content.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">8. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have questions or concerns about this disclaimer, contact us at{" "}
        <a href="mailto:support@yourinstitute.com" className="text-blue-600 underline">
          support@yourinstitute.com
        </a>
        .
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Disclaimer last updated: June 24, 2025
      </p>
    </div>
  );
}
