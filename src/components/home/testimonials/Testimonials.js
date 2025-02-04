"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import the Navigation module
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center flex-col py-12">
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-black">
          <span className="font-bold">Testimonials</span>
        </h1>
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={"auto"}
          spaceBetween={"20"}
          className="mt-12 md:mt-10 2xl:mt-20 swiper mySwiper"
        >
          {[1, 2, 3, 4].map((v, index) => (
            <SwiperSlide key={index} className="swiper-slide !w-1/2">
              <div className="flex justify-center items-center flex-col">
                <div className="w-12 relative z-20">
                  <img src="/images/home/testimonials/slide.svg" alt="apple" />
                </div>
                <div className="-mt-6 flex border h-18 rounded text-left text-black border-black bg-white justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal ">
                    {index} It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6">
                      <img
                        src="/images/home/testimonials/quote.svg"
                        alt="quotes"
                      />
                    </div>
                    <div className="w-full flex justify-start items-center space-x-2">
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20113.png"
                          alt="woman avatar"
                        />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none">
                          Casy Camilari
                        </p>
                        <p className="text-sm leading-none">
                          Digital Marketing Director
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-20 items-center space-x-6 w-full">
          <button className="rounded-full p-1.5 flex justify-center items-center bg-black swiper-button-prev w-1.5 h-2.5">
            <img
              className="w-6 h-6 scale-x-[-1]"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="prev"
            />
          </button>
          <button className="rounded-full p-1.5 flex justify-center items-center bg-black swiper-button-next w-1.5 h-2.5">
            <img
              className="w-6 h-6"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="next"
            />
          </button>
        </div>
      </div>

      <style>
        {`
        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: relative;
            right: 0;
            height: 30px;
            width: 30px;
        }
            .swiper-button-next, .swiper-button-prev {
  z-index: 10;  
}
  .swiper-button-lock{
  display:block
  }
        `}
      </style>
    </div>
  );
}
