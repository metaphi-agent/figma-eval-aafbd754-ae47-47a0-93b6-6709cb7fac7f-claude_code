export default function Brands() {
  const brands = [
    { name: 'H&M', image: './assets/images/brand-hm.png' },
    { name: 'OBEY', image: './assets/images/brand-obey.png' },
    { name: 'Shopify', image: './assets/images/brand-shopify.png' },
    { name: 'Lacoste', image: './assets/images/brand-lacoste.png' },
    { name: 'Levis', image: './assets/images/brand-levis.png' },
    { name: 'Amazon', image: './assets/images/brand-amazon.png' },
  ];

  return (
    <section className="bg-[#EBD96B] py-14 px-[100px]">
      <div className="flex items-center justify-between gap-20">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.image}
            alt={brand.name}
            className="h-12 object-contain mix-blend-multiply grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
