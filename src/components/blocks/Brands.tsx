export default function Brands() {
  const brands = [
    { name: 'H&M', style: { fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold' } },
    { name: 'OBEY', style: { fontWeight: '900', letterSpacing: '2px' } },
    { name: 'shopify', style: { fontWeight: '500' } },
    { name: 'LACOSTE', style: { fontWeight: '700', letterSpacing: '1px' } },
    { name: "Levi's", style: { fontWeight: '700', color: '#E60000' } },
    { name: 'amazon', style: { fontWeight: '700' } },
  ];

  return (
    <section className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <div
                className="text-2xl lg:text-3xl"
                style={brand.style}
              >
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}