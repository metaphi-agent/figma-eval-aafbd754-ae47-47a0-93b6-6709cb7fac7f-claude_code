import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const companyLinks = ['About', 'Features', 'Works', 'Career'];
  const helpLinks = ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'];
  const faqLinks = ['Account', 'Manage Deliveries', 'Orders', 'Payment'];
  const resourceLinks = ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-black">FASHION</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-bold text-lg mb-4">FAQ</h3>
            <ul className="space-y-2">
              {faqLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}