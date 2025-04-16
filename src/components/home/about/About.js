import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py1 lg:pb-[6.25vw] bg-[#121313] relative overflow-hidden"
    >
      <img
        src="/images/home/about/surfboard.png"
        alt="surfboard"
        className="absolute bottom-0 right-0 w-[40vw] sm:w-[30vw] lg:w-[20vw] scale-x-[-1]"
      />
      <div className="border20 relative z-[2] myContainer bg-black bg-opacity-[0.7] lg:p-[4.16666666667vw] sm:p-[40px] sm:py-[60px] py-[50px] p-[30px] flex flex-wrap lg:gap-[2.5vw] sm:gap-[30px] gap-[20px]">
        <div
          data-aos="fade"
          className="border20 overflow-hidden lg:w-[36.4583333333vw] lg:h-[80vh] sm:h-[400px] h-[300px] lg:mt-[-11vw]"
        >
          <img
            src="/images/home/about/about.jpg"
            alt="about"
            className="object-cover w-full h-full object-top"
          />
        </div>
        <div className="text-white lg:w-[39.5833333333vw]">
          <h2 data-aos="fade-up" className="text64">
            Born from the School of Hard Knocks.
          </h2>
          <p data-aos="fade-up" className="lg:text24 mtext18 mt30">
            Exploding Woke Culture Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Neque dolore est beatae corporis? Explicabo nam, a
            est saepe omnis tempora quam sit.
          </p>
        </div>
      </div>
    </section>
  );
}
