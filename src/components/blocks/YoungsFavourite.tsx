export default function YoungsFavourite() {
  const categories = [
    {
      image: './assets/images/favourite-trending.png',
      title: 'Trending on Instagram',
      subtitle: 'Explore Now!',
    },
    {
      image: './assets/images/favourite-under40.png',
      title: 'All Under $40',
      subtitle: 'Explore Now!',
    },
  ];

  return (
    <section className="relative px-[100px] py-20">
      {/* Large YOUNG text on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="text-[180px] font-black text-[#E6C744] leading-[0.85] writing-mode-vertical-lr transform -rotate-180">
          <span className="block">Y</span>
          <span className="block">O</span>
          <span className="block">U</span>
          <span className="block">N</span>
          <span className="block">G</span>
        </div>
      </div>

      <div className="ml-20">
        {/* Section Title */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h2 className="text-[48px] font-black tracking-[2.88px] text-black">
              Young's Favourite
            </h2>
            <svg
              className="absolute -bottom-2 left-[75%] w-48 h-8"
              viewBox="0 0 190 32"
              fill="none"
            >
              <path
                d="M2 25C60 5 120 10 188 30"
                stroke="#EBD96B"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Category Cards */}
        <div className="flex gap-12">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-[835px] h-[575px] rounded-[20px] overflow-hidden mb-7">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-black">{category.title}</h3>
                  <p className="text-base text-[#797979] mt-1">{category.subtitle}</p>
                </div>
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
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
