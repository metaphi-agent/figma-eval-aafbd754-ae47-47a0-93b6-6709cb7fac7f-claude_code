import ProductCard from '../ui/ProductCard';

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      title: 'Hoodies & Sweatshirt',
      subtitle: 'Explore Now!',
      bgColor: '#C0C0C0',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400',
      title: 'Coats & Parkas',
      subtitle: 'Explore Now!',
      bgColor: '#B8A7D4',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      title: 'Tees & T-Shirt',
      subtitle: 'Explore Now!',
      bgColor: '#7FD1DA',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-12">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}