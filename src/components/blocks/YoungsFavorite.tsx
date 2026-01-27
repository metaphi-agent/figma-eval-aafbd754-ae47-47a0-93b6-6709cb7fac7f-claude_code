import PromoCard from '../ui/PromoCard';

export default function YoungsFavorite() {
  const promos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
      title: 'Trending on instagram',
      subtitle: 'Explore Now!',
      bgColor: '#EED5C5',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
      title: 'All Under $40',
      subtitle: 'Explore Now!',
      bgColor: '#F4C8D0',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-12">Young's Favourite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((promo) => (
            <PromoCard key={promo.id} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
}