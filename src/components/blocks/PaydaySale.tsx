import Button from '../ui/Button';

export default function PaydaySale() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Decorative stars */}
            <div className="absolute top-5 left-5 w-12 h-12 opacity-30">
              <svg viewBox="0 0 100 100" fill="white">
                <polygon points="50,10 61,35 89,35 67,52 78,77 50,60 22,77 33,52 11,35 39,35" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-10 h-10 opacity-30">
              <svg viewBox="0 0 100 100" fill="white">
                <polygon points="50,10 61,35 89,35 67,52 78,77 50,60 22,77 33,52 11,35 39,35" />
              </svg>
            </div>

            {/* Model Image Placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-700">
                <p className="text-sm">Payday Sale Image</p>
                <p className="text-xs">(Fashion Model)</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              PAYDAY
              <br />
              SALE NOW
            </h2>
            <p className="text-lg lg:text-xl">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl font-bold">1 June - 10 June 2021</p>
              <p className="text-sm">*Terms & Conditions apply</p>
            </div>
            <Button size="lg">SHOP NOW</Button>
          </div>
        </div>
      </div>
    </section>
  );
}