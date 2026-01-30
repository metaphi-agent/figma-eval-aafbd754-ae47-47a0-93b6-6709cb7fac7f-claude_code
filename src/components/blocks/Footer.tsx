export default function Footer() {
  const companyLinks = ['About', 'Contact us', 'Support', 'Careers'];
  const quickLinks = ['Share Location', 'Orders Tracking', 'Size Guide', 'FAQs'];
  const legalLinks = ['Terms & conditions', 'Privacy Policy', 'Cookie Policy'];

  return (
    <footer className="bg-black text-white py-20 px-[100px]">
      <div className="flex justify-between">
        {/* Logo and Social */}
        <div className="max-w-[415px]">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-7" viewBox="0 0 32 29" fill="white">
              <path d="M16 0L19 10H32L21.5 16.5L25 29L16 21L7 29L10.5 16.5L0 10H13L16 0Z" />
            </svg>
            <span className="text-[40px] font-black tracking-[1.2px]">FASHION</span>
          </div>
          <p className="text-[#797979] text-lg leading-relaxed">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex gap-4 mt-8">
            <SocialIcon platform="facebook" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="twitter" />
            <SocialIcon platform="linkedin" />
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex gap-40">
          <div>
            <h3 className="font-medium text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#797979] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xl mb-6">Quick Link</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#797979] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xl mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#797979] hover:text-white transition-colors"
                  >
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

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };

  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-[#E6C744] text-black flex items-center justify-center hover:bg-[#E0C340] transition-colors"
    >
      {icons[platform]}
    </a>
  );
}
