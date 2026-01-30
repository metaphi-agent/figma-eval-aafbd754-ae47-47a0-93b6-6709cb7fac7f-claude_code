export default function DownloadApp() {
  return (
    <section className="px-[100px] py-20">
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-[507px]">
          <h2 className="text-[48px] font-black text-black leading-[1.2]">
            DOWNLOAD APP &<br />
            GET THE VOUCHER!
          </h2>
          <p className="text-xl text-[#797979] mt-10 leading-relaxed">
            Get 30% off for first transaction using
            <br />
            Rendovision mobile app for now.
          </p>
          <div className="flex gap-5 mt-16">
            <a href="#" className="block">
              <img
                src="./assets/images/app-store.png"
                alt="Download on App Store"
                className="h-[71px] rounded-[10px]"
              />
            </a>
            <a href="#" className="block">
              <img
                src="./assets/images/google-play.png"
                alt="Get it on Google Play"
                className="h-[71px] rounded-[10px]"
              />
            </a>
          </div>
        </div>

        {/* Right - Phone Mockup */}
        <div className="relative">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-[637px] h-[629px] rounded-full border-2 border-[#EFECEB] bg-white"></div>
          <div className="absolute -top-10 -right-10 w-[537px] h-[530px] rounded-full border-2 border-[#EFECEB] bg-white"></div>
          <div className="absolute top-0 right-0 w-[440px] h-[434px] rounded-full border-2 border-[#EFECEB] bg-white"></div>

          {/* Decorative dots */}
          <div className="absolute -top-16 right-16 w-[50px] h-[50px] rounded-full bg-[#EBD96B]"></div>
          <div className="absolute bottom-0 -left-20 w-[34px] h-[34px] rounded-full bg-[#EBD96B]"></div>
          <div className="absolute -bottom-10 right-20 w-[17px] h-[17px] rounded-full bg-[#898078]"></div>
          <div className="absolute top-10 left-0 w-[22px] h-[24px] rounded-full bg-[#898078]"></div>

          {/* Phone */}
          <div className="relative z-10">
            <img
              src="./assets/images/phone-mockup.png"
              alt="Fashion app on mobile phone"
              loading="lazy"
              className="w-[450px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
