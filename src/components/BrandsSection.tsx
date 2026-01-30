import React from 'react';

export default function BrandsSection() {
  const brands = [
    { name: 'H&M', color: '#E50010' },
    { name: 'OBEY', color: '#000000' },
    { name: 'shopify', icon: 'bag', color: '#95BF47' },
    { name: 'LACOSTE', icon: 'croc', color: '#00543C' },
    { name: "Levi's", color: '#D9261C' },
    { name: 'amazon', color: '#FF9900' }
  ];

  return (
    <section className="bg-[#E6C744] py-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between gap-8 overflow-x-auto">
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
              <span
                className="text-2xl lg:text-3xl font-bold"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
