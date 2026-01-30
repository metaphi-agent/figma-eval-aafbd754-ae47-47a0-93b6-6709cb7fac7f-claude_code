import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#F4F6F5] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                LET'S
                <br />
                EXPLORE
                <br />
                <span className="bg-[#E6C744] inline-block px-4 py-2">UNIQUE</span>
                <br />
                CLOTHES.
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 max-w-md">
                Live for influential and innovative fashion!
              </p>
            </div>
            <button className="bg-black text-white px-12 py-4 rounded hover:bg-gray-800 transition-colors font-medium text-lg">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute top-8 right-8 w-24 h-24 bg-[#E6C744]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#E6C744]/20 rounded-full blur-3xl"></div>
            {/* Hero Image Placeholder */}
            <div className="relative z-10 aspect-[3/4] bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                Hero Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
