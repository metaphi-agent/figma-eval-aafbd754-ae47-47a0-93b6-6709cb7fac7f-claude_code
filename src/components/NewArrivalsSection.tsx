import React from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
}

function ProductCard({ title, subtitle, bgColor }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
          Product Image
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
      <button className="mt-3 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
        Explore Now!
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default function NewArrivalsSection() {
  const products = [
    {
      title: 'Hoodies & Sweetshirt',
      subtitle: 'Explore Now!',
      bgColor: '#9CA3AF'
    },
    {
      title: 'Coats & Parkas',
      subtitle: 'Explore Now!',
      bgColor: '#A78BFA'
    },
    {
      title: 'Tees & T-Shirt',
      subtitle: 'Explore Now!',
      bgColor: '#7DD3FC'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-black mb-12">NEW ARRIVALS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
