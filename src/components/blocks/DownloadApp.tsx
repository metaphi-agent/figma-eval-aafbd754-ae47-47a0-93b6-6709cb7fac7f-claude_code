export default function DownloadApp() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              DOWNLOAD APP &<br />
              GET THE VOUCHER!
            </h2>
            <p className="text-lg">
              Get 30% off for first transaction using
              <br />
              Rondovision mobile app for now.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* App Store Badge */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-50"></div>

            {/* Phone mockup */}
            <div className="relative bg-white rounded-[40px] shadow-2xl p-4 w-64">
              <div className="bg-gray-100 rounded-[32px] aspect-[9/19] overflow-hidden">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold">Match your style</div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <div className="text-xs text-gray-500 mb-2">Search</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-primary rounded-full text-xs font-medium">Trending Now</div>
                    <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">All</div>
                    <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">New</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}