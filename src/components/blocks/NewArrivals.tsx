export default function NewArrivals() {
  const products = [
    {
      image: './assets/images/product-hoodie.png',
      title: 'Hoodies & Sweatshirt',
      subtitle: 'Explore Now!',
    },
    {
      image: './assets/images/product-coat.png',
      title: 'Coats & Parkas',
      subtitle: 'Explore Now!',
    },
    {
      image: './assets/images/product-tshirt.png',
      title: 'Tees & T-Shirt',
      subtitle: 'Explore Now!',
    },
  ];

  return (
    <section className="px-[100px] py-20">
      {/* Section Title */}
      <div className="mb-12">
        <div className="relative inline-block">
          <h2 className="text-[48px] font-black tracking-[2.88px] text-black">
            NEW ARRIVALS
          </h2>
          <svg
            className="absolute -bottom-2 left-[55%] w-48 h-9"
            viewBox="0 0 186 35"
            fill="none"
          >
            <path
              d="M2 25C60 5 120 10 184 32"
              stroke="#EBD96B"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex gap-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-[484px] h-[704px] rounded-[20px] overflow-hidden mb-7">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-black">{product.title}</h3>
                <p className="text-base text-[#797979] mt-1">{product.subtitle}</p>
              </div>
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      className="text-[#797979]"
    >
      <path
        d="M0 11H30M30 11L20 1M30 11L20 21"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
