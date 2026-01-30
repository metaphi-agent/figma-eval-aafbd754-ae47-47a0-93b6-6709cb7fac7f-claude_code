import React from 'react';

export default function PaydayBanner() {
  return (
    <section className="bg-[#E6C744] py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 right-1/4 text-white text-6xl opacity-50">✦</div>
      <div className="absolute bottom-12 left-1/4 text-white text-6xl opacity-50">✦</div>
      <div className="absolute top-1/2 left-12 text-white text-4xl opacity-30">✦</div>
      <div className="absolute top-1/3 right-12 text-white text-4xl opacity-30">✦</div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                Model Image
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 lg:pl-8">
            <div className="inline-block bg-white px-8 py-4 rounded">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                PAYDAY
                <br />
                SALE NOW
              </h2>
            </div>

            <p className="text-xl lg:text-2xl">
              Spend minimal $100 get 30% off
              <br />
              voucher code for your next purchase
            </p>

            <div className="space-y-2">
              <p className="text-xl lg:text-2xl font-bold">1 June - 10 June 2021</p>
              <p className="text-base lg:text-lg">*Terms & Conditions apply</p>
            </div>

            <button className="bg-black text-white px-12 py-4 rounded hover:bg-gray-800 transition-colors font-bold text-lg">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
