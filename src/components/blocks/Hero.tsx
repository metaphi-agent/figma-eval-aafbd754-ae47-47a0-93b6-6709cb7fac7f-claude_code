export default function Hero() {
  return (
    <section className="relative px-[100px] py-10">
      <div className="relative bg-[#F5F7F5] rounded-[59px] px-[119px] py-16 overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute top-12 right-[calc(50%-200px)] w-12 h-12">
          <StarIcon className="text-[#E7E7E7]" />
        </div>
        <div className="absolute top-24 right-24 w-12 h-12">
          <StarIcon className="text-[#E7E7E7]" />
        </div>
        <div className="absolute bottom-32 left-[calc(50%-200px)] w-12 h-12">
          <StarIcon className="text-[#E7E7E7]" />
        </div>
        <div className="absolute bottom-24 right-32 w-12 h-12">
          <StarIcon className="text-[#E7E7E7]" />
        </div>

        <div className="flex items-center justify-between">
          {/* Left content */}
          <div className="max-w-[500px] z-10">
            {/* White highlight box behind text */}
            <div className="relative">
              <h1 className="text-[96px] font-black leading-[120px] text-black">
                LET'S
                <br />
                EXPLORE
                <br />
                <span className="relative">
                  <span className="absolute -left-4 top-2 bg-[#E6C744] w-[calc(100%+32px)] h-[100px] -rotate-1"></span>
                  <span className="relative">UNIQUE</span>
                </span>
                <br />
                CLOTHES.
              </h1>
            </div>
            <p className="text-[32px] text-[#191818] mt-6 tracking-[-1.6px]">
              Live for Influential and Innovative fashion!
            </p>
            <button className="mt-10 bg-black text-white font-medium px-10 py-5 text-xl hover:bg-gray-800 transition-colors flex items-center gap-4">
              SHOP NOW
            </button>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <img
              src="./assets/images/hero-model.png"
              alt="Woman in pink fur coat"
              className="w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 58 56"
      fill="currentColor"
      className={className}
    >
      <path d="M29 0L33.5 22.5L58 28L33.5 33.5L29 56L24.5 33.5L0 28L24.5 22.5L29 0Z" />
    </svg>
  );
}
