import React from "react";
function Hero() {
  return (
    <div className="pb-12 overflow-y-hidden min-h-[100vh] flex items-end relative">
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
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-black leading-7 md:leading-10">
              Bringing Good {""}
              <span className="text-yellow-700">Old-Fashioned</span>
              {""} Bad Taste Back to the Masses!
            </h1>
            {/* <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p> */}
          </div>
          <div className="flex justify-center items-center">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 bg-yellow-700 transition duration-150 ease-in-out hover:bg-yellow-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-yellow-700 py-2 sm:py-4 text-sm">
              Explore Collection
            </button>
            {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 bg-transparent transition duration-150 ease-in-out hover:border-yellow-600 lg:text-xl lg:font-bold  hover:text-yellow-600 rounded border border-yellow-700 text-yellow-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Live Demo
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
