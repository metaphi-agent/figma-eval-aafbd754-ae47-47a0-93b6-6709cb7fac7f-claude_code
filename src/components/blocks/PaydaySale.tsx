export default function PaydaySale() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex">
        {/* Left - Image with dotted overlay */}
        <div className="relative w-1/2">
          <img
            src="./assets/images/sale-model.png"
            alt="Model for payday sale"
            className="w-full h-[968px] object-cover"
          />
          {/* Decorative stars */}
          <div className="absolute top-[150px] left-[130px]">
            <StarIcon className="w-16 h-16 text-white/50" />
          </div>
          <div className="absolute top-[100px] right-[150px]">
            <StarIcon className="w-16 h-16 text-white/50" />
          </div>
          <div className="absolute bottom-[350px] left-[180px]">
            <StarIcon className="w-16 h-16 text-white/50" />
          </div>
          <div className="absolute bottom-[200px] right-[100px]">
            <StarIcon className="w-16 h-16 text-white/50" />
          </div>
        </div>

        {/* Right - Yellow gradient with content */}
        <div className="w-1/2 bg-gradient-to-b from-[#E0C340] to-[#F9DF56] relative dotted-pattern">
          <div className="absolute inset-0 dotted-pattern opacity-20"></div>
          <div className="relative p-20 pt-32">
            <h2 className="text-[96px] font-black text-black leading-[1.1]">
              PAYDAY
              <br />
              SALE NOW
            </h2>
            <p className="text-[36px] font-medium text-[#231300] mt-8 leading-[1.4] tracking-[-0.72px]">
              Spend minimal $100 get 30% off
              <br />
              voucher code for your next purchase
            </p>
            <div className="mt-8">
              <p className="text-xl font-medium text-[#231300]">1 June - 10 June 2021</p>
              <p className="text-xl font-medium text-[#231300] mt-2">*Terms & Conditions apply</p>
            </div>
            <button className="mt-10 border-2 border-black text-black font-medium px-10 py-4 text-xl hover:bg-black hover:text-white transition-colors">
              SHOP NOW
            </button>
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
