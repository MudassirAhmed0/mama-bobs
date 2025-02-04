import React from "react";
function Hero() {
  return (
    <div className="pb-32 lg:pb-12 overflow-y-hidden min-h-[100vh] flex items-end justify-center relative">
      <div className="size-full absolute inset-0">
        <span className="bg-black size-full absolute inset-0 mix-blend-color"></span>
        <video
          muted
          loop
          autoPlay
          playsInline
          className="size-full absolute inset-0 object-cover z-[-1]"
          preload="auto"
          loading="lazy"
          src="/videos/home-hero.mp4"
        ></video>
      </div>
      <div className="relative z-[2]">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-[16.6666666667vh]">
          <div className="w-11/12 lg:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-3xl md:text-5xl xl:text-6xl text-center text-black font-black sm:leading-7"
            >
              Bringing Good {""}
              <span className="text-[#a16207]">Old-Fashioned</span>
              {""} Bad Taste Back to the Masses!
            </h1>
            {/* <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p> */}
          </div>
          <div data-aos="fade" className="flex justify-center items-center">
            <button className="bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
