import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              LET'S
              <br />
              EXPLORE
              <br />
              <span className="bg-primary inline-block px-4">UNIQUE</span>
              <br />
              CLOTHES.
            </h1>
            <p className="text-lg text-gray-700">
              Live for Influential and Innovative fashion!
            </p>
            <Button size="lg">Shop Now</Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative stars */}
            <div className="absolute top-10 right-10 w-16 h-16 opacity-20">
              <svg viewBox="0 0 100 100" fill="white">
                <polygon points="50,10 61,35 89,35 67,52 78,77 50,60 22,77 33,52 11,35 39,35" />
              </svg>
            </div>
            <div className="absolute bottom-20 left-10 w-12 h-12 opacity-20">
              <svg viewBox="0 0 100 100" fill="white">
                <polygon points="50,10 61,35 89,35 67,52 78,77 50,60 22,77 33,52 11,35 39,35" />
              </svg>
            </div>

            {/* Hero Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-sm">Hero Image</p>
                <p className="text-xs">(Fashion Model)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}