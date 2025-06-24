import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-white">The Code Academy</h3>
            <p className="mt-2 text-sm"></p>
                    {/* Social Media */}
          <div>
            {/* <h4 className="text-sm font-semibold text-white mb-4">Connect with me</h4> */}
            <div className="flex space-x-4 ,t-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Service Links</h4>
            <ul className="space-y-2">
              <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
              <li><Link href="/terms-and-condition" className="hover:text-white">Terms And Condition</Link></li>
            </ul>
          </div>

  
        </div>

        {/* Footer bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} The Code Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
