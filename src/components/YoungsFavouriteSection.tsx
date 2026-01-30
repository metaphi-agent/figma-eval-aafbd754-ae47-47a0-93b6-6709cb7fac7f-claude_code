import React from 'react';

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
}

function FeaturedCard({ title, subtitle, bgColor }: FeaturedCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
          Featured Image
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <button className="mt-3 flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
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

export default function YoungsFavouriteSection() {
  const featured = [
    {
      title: 'Trending on instagram',
      subtitle: 'Explore Now!',
      bgColor: '#EDD5C8'
    },
    {
      title: 'All Under $40',
      subtitle: 'Explore Now!',
      bgColor: '#F7C8CB'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-black mb-12">
          Young's Favourite
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((item, index) => (
            <FeaturedCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
