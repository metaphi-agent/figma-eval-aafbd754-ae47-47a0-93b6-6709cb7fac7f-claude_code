import React from 'react';

export default function AppDownloadSection() {
  return (
    <section className="bg-[#F4F6F5] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-gray-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 right-40 w-40 h-40 bg-[#E6C744] rounded-full opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight max-w-lg">
              DOWNLOAD APP &
              <br />
              GET THE VOUCHER!
            </h2>

            <p className="text-lg text-gray-600 max-w-md">
              Get 30% off for first transaction using
              <br />
              Rondovision mobile app for now.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[560px] bg-[#C2C8DA] rounded-[40px] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                <div className="p-4 space-y-4">
                  {/* Mock app content */}
                  <div className="text-center py-6">
                    <h3 className="text-2xl font-bold mb-2">Match your style</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg"
                        style={{
                          backgroundColor: ['#FDB022', '#F7C8CB', '#7DD3FC', '#A78BFA'][i - 1]
                        }}
                      ></div>
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
