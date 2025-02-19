"use client";
import { useEffect, useState } from "react";

function ProductDetails() {
  const [slides, setSlides] = useState([]);
  let goNext_product_detail_11, goPrev_product_detail_11;

  useEffect(() => {
    let slides2 = document.querySelectorAll(".slide-ana_product_detail_11>div");
    console.log(slides2);
    setSlides(slides2);
  }, []);

  let slideSayisi = slides.length;

  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
  }

  let loop = 0 + 1000 * slideSayisi;

  goNext_product_detail_11 = () => {
    loop++;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  };
  goPrev_product_detail_11 = () => {
    loop--;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  };
  const [num, setNum] = useState(1);

  const handleNum = (flag) => {
    if (flag === "sub" && num > 1) {
      setNum(num - 1);
    }
    if (flag === "add" && num < 10) {
      setNum(num + 1);
    }
  };

  return (
    <>
      <div className="px-2 py-12">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="flex items-center justify-center ">
            <div
              id="menu"
              className="flex justify-center w-full h-full px-1 py-12 md:px-8 xl:px-2 lg:px-2"
            >
              <div className="relative flex flex-col items-start justify-start w-full px-4 py-12 bg-white gap-x-6 md:flex-col lg:flex-row">
                <div className="w-full xl:px-8 md:px-8">
                  <div className="relative">
                    <div className="slider_product_detail_11">
                      <div className="flex flex-shrink-0 slide-ana_product_detail_11 lg:h-[500px] md:h-[700px] h-[450px] xl:h-auto fix_product_detail_11">
                        <div
                          className="flex flex-shrink-0"
                          style={{ transform: "translateX(-100%)" }}
                        >
                          <img
                            className="hidden   lg:block md:hidden  mx-auto"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sofa_pro.png"
                            alt="watch"
                          />
                          <img
                            className="hidden  lg:hidden md:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sofa_pro.png"
                            alt="watch"
                          />
                          <img
                            className="block  lg:hidden md:hidden  mx-auto"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sofa_pro.png"
                            alt="watch-pro"
                          />
                        </div>
                        <div
                          className="flex flex-shrink-0"
                          style={{ transform: "translateX(0%)" }}
                        >
                          <img
                            className="hidden   lg:block md:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blue.png"
                            alt="watch"
                          />
                          <img
                            className="block  lg:hidden md:hidden mx-auto"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blue.png"
                            alt="watch-pro"
                          />
                        </div>
                        <div
                          className="flex flex-shrink-0"
                          style={{ transform: "translateX(-200%)" }}
                        >
                          <img
                            className="hidden   lg:block md:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/orange.png"
                            alt="watch"
                          />
                          <img
                            className="block   lg:hidden md:hidden mx-auto"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/orange.png"
                            alt="watch-pro"
                          />
                        </div>
                        <div
                          className="flex flex-shrink-0"
                          style={{ transform: "translateX(-300%)" }}
                        >
                          <img
                            className="hidden  lg:block md:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mehroon.png "
                            alt="watch"
                          />
                          <img
                            className="block   lg:hidden md:hidden mx-auto"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mehroon.png"
                            alt="watch-pro"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 flex items-center justify-between w-full h-full px-4 transition duration-150">
                      <button
                        onClick={goPrev_product_detail_11}
                        aria-label="previous"
                        className="flex items-center justify-center  focus:outline-none mt-auto"
                      >
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-up.png"
                          alt="prev"
                        />
                      </button>
                      <button
                        onClick={goNext_product_detail_11}
                        aria-label="Next"
                        className="flex items-center justify-center  focus:outline-none mt-auto"
                      >
                        <img
                          className="transform rotate-180"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-up.png"
                          alt="prev"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-12 justify-evenly  gap-x-4  gap-y-6">
                    <div className="flex flex-col items-center justify-center gap-y-6">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-1.png" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-6">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/greeeeeen.png" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-6">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sofa_vedio.png" />
                    </div>
                    <div>
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/orange_vedio.png" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:max-w-[515px] bg-gray-100 px-8 py-8">
                  <p className="mb-4 text-2xl font-semibold leading-normal text-gray-800"></p>
                  <p className="lg:text-4xl md:text-3xl text-3xl font-semibold leading-9 text-gray-800">
                    Trendy Armchair
                  </p>
                  <p />
                  <p className="text-2xl font-semibold leading-normal text-gray-800 mt-6">
                    $580
                  </p>
                  <p className="text-base leading-normal text-gray-700 mt-4">
                    Check out the Corlett velvet sofa, which adds a fresh,
                    modern twist to the classic style. Rich velvet upholstery, a
                    unique tufted design of roll arms.
                  </p>
                  {/* <p className="text-base font-medium leading-none mt-4 text-gray-800">
                    Total Reviews : 14
                  </p>
                  <div className="flex mt-4 gap-2">
                    <svg
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4687 22.5007C18.3109 22.5013 18.1568 22.4521 18.0286 22.3601L12 17.9895L5.97139 22.3601C5.84259 22.4535 5.68742 22.5035 5.52832 22.503C5.36921 22.5024 5.21441 22.4512 5.08629 22.3569C4.95818 22.2625 4.86339 22.1299 4.81563 21.9781C4.76787 21.8263 4.76961 21.6633 4.82061 21.5126L7.17186 14.5484L1.07811 10.3695C0.946113 10.279 0.846491 10.1488 0.793797 9.99772C0.741103 9.84666 0.7381 9.6827 0.785225 9.5298C0.83235 9.37691 0.927135 9.24309 1.05573 9.1479C1.18432 9.05271 1.33999 9.00114 1.49998 9.00072H9.0178L11.2865 2.01868C11.3354 1.86794 11.4308 1.73656 11.559 1.64338C11.6871 1.55019 11.8415 1.5 12 1.5C12.1584 1.5 12.3128 1.55019 12.441 1.64338C12.5692 1.73656 12.6645 1.86794 12.7134 2.01868L14.9822 9.00306H22.5C22.6602 9.00298 22.8162 9.05419 22.9452 9.1492C23.0741 9.24421 23.1693 9.37802 23.2167 9.53103C23.2642 9.68404 23.2613 9.84822 23.2087 9.99952C23.1561 10.1508 23.0564 10.2813 22.9242 10.3718L16.8281 14.5484L19.178 21.5107C19.216 21.6234 19.2267 21.7436 19.2092 21.8613C19.1917 21.979 19.1464 22.0908 19.0771 22.1875C19.0078 22.2842 18.9165 22.3631 18.8107 22.4175C18.7049 22.472 18.5877 22.5005 18.4687 22.5007Z"
                        fill="#1F2937"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4687 22.5007C18.3109 22.5013 18.1568 22.4521 18.0286 22.3601L12 17.9895L5.97139 22.3601C5.84259 22.4535 5.68742 22.5035 5.52832 22.503C5.36921 22.5024 5.21441 22.4512 5.08629 22.3569C4.95818 22.2625 4.86339 22.1299 4.81563 21.9781C4.76787 21.8263 4.76961 21.6633 4.82061 21.5126L7.17186 14.5484L1.07811 10.3695C0.946113 10.279 0.846491 10.1488 0.793797 9.99772C0.741103 9.84666 0.7381 9.6827 0.785225 9.5298C0.83235 9.37691 0.927135 9.24309 1.05573 9.1479C1.18432 9.05271 1.33999 9.00114 1.49998 9.00072H9.0178L11.2865 2.01868C11.3354 1.86794 11.4308 1.73656 11.559 1.64338C11.6871 1.55019 11.8415 1.5 12 1.5C12.1584 1.5 12.3128 1.55019 12.441 1.64338C12.5692 1.73656 12.6645 1.86794 12.7134 2.01868L14.9822 9.00306H22.5C22.6602 9.00298 22.8162 9.05419 22.9452 9.1492C23.0741 9.24421 23.1693 9.37802 23.2167 9.53103C23.2642 9.68404 23.2613 9.84822 23.2087 9.99952C23.1561 10.1508 23.0564 10.2813 22.9242 10.3718L16.8281 14.5484L19.178 21.5107C19.216 21.6234 19.2267 21.7436 19.2092 21.8613C19.1917 21.979 19.1464 22.0908 19.0771 22.1875C19.0078 22.2842 18.9165 22.3631 18.8107 22.4175C18.7049 22.472 18.5877 22.5005 18.4687 22.5007Z"
                        fill="#1F2937"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4687 22.5007C18.3109 22.5013 18.1568 22.4521 18.0286 22.3601L12 17.9895L5.97139 22.3601C5.84259 22.4535 5.68742 22.5035 5.52832 22.503C5.36921 22.5024 5.21441 22.4512 5.08629 22.3569C4.95818 22.2625 4.86339 22.1299 4.81563 21.9781C4.76787 21.8263 4.76961 21.6633 4.82061 21.5126L7.17186 14.5484L1.07811 10.3695C0.946113 10.279 0.846491 10.1488 0.793797 9.99772C0.741103 9.84666 0.7381 9.6827 0.785225 9.5298C0.83235 9.37691 0.927135 9.24309 1.05573 9.1479C1.18432 9.05271 1.33999 9.00114 1.49998 9.00072H9.0178L11.2865 2.01868C11.3354 1.86794 11.4308 1.73656 11.559 1.64338C11.6871 1.55019 11.8415 1.5 12 1.5C12.1584 1.5 12.3128 1.55019 12.441 1.64338C12.5692 1.73656 12.6645 1.86794 12.7134 2.01868L14.9822 9.00306H22.5C22.6602 9.00298 22.8162 9.05419 22.9452 9.1492C23.0741 9.24421 23.1693 9.37802 23.2167 9.53103C23.2642 9.68404 23.2613 9.84822 23.2087 9.99952C23.1561 10.1508 23.0564 10.2813 22.9242 10.3718L16.8281 14.5484L19.178 21.5107C19.216 21.6234 19.2267 21.7436 19.2092 21.8613C19.1917 21.979 19.1464 22.0908 19.0771 22.1875C19.0078 22.2842 18.9165 22.3631 18.8107 22.4175C18.7049 22.472 18.5877 22.5005 18.4687 22.5007Z"
                        fill="#1F2937"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4687 22.5007C18.3109 22.5013 18.1568 22.4521 18.0286 22.3601L12 17.9895L5.97139 22.3601C5.84259 22.4535 5.68742 22.5035 5.52832 22.503C5.36921 22.5024 5.21441 22.4512 5.08629 22.3569C4.95818 22.2625 4.86339 22.1299 4.81563 21.9781C4.76787 21.8263 4.76961 21.6633 4.82061 21.5126L7.17186 14.5484L1.07811 10.3695C0.946113 10.279 0.846491 10.1488 0.793797 9.99772C0.741103 9.84666 0.7381 9.6827 0.785225 9.5298C0.83235 9.37691 0.927135 9.24309 1.05573 9.1479C1.18432 9.05271 1.33999 9.00114 1.49998 9.00072H9.0178L11.2865 2.01868C11.3354 1.86794 11.4308 1.73656 11.559 1.64338C11.6871 1.55019 11.8415 1.5 12 1.5C12.1584 1.5 12.3128 1.55019 12.441 1.64338C12.5692 1.73656 12.6645 1.86794 12.7134 2.01868L14.9822 9.00306H22.5C22.6602 9.00298 22.8162 9.05419 22.9452 9.1492C23.0741 9.24421 23.1693 9.37802 23.2167 9.53103C23.2642 9.68404 23.2613 9.84822 23.2087 9.99952C23.1561 10.1508 23.0564 10.2813 22.9242 10.3718L16.8281 14.5484L19.178 21.5107C19.216 21.6234 19.2267 21.7436 19.2092 21.8613C19.1917 21.979 19.1464 22.0908 19.0771 22.1875C19.0078 22.2842 18.9165 22.3631 18.8107 22.4175C18.7049 22.472 18.5877 22.5005 18.4687 22.5007Z"
                        fill="#1F2937"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0001 1.5C12.325 1.5 12.6129 1.70919 12.7133 2.01819L14.9824 9H22.5001C22.8287 9 23.1191 9.21402 23.2164 9.52798C23.3137 9.84193 23.1953 10.1827 22.9242 10.3685L16.8296 14.5477L19.1794 21.5102C19.2838 21.8193 19.1762 22.1605 18.9135 22.354C18.6507 22.5474 18.293 22.5488 18.0287 22.3573L12.0001 17.9887L5.97139 22.3573C5.70715 22.5488 5.34944 22.5474 5.08666 22.354C4.82388 22.1605 4.71634 21.8193 4.82069 21.5102L7.17052 14.5477L1.07591 10.3685C0.80483 10.1827 0.68637 9.84193 0.783673 9.52798C0.880976 9.21402 1.17137 9 1.50006 9H9.01769L11.2868 2.01819C11.3872 1.70919 11.6752 1.5 12.0001 1.5ZM12.0001 4.67651L10.2758 9.98181C10.1754 10.2908 9.88745 10.5 9.56256 10.5H3.92L8.4867 13.6315C8.76349 13.8213 8.8805 14.1718 8.77317 14.4898L6.99293 19.7646L11.56 16.4552C11.8225 16.2649 12.1776 16.2649 12.4401 16.4552L17.0072 19.7646L15.2269 14.4898C15.1196 14.1718 15.2366 13.8213 15.5134 13.6315L20.0801 10.5H14.4376C14.1127 10.5 13.8247 10.2908 13.7243 9.98181L12.0001 4.67651Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div> */}

                  <div className="flex gap-8">
                    <div>
                      <div className="mt-6">
                        <p className="text-base font-medium leading-none text-gray-800">
                          Size
                        </p>
                      </div>
                      <div className="flex items-center justify-start mb-5 md:space-x-4 space-x-2 mt-6">
                        <button className="w-6 h-6 focus::w-5 focus::w-5 focus:h-5   font-bold   focus:ring-offset-2 focus:ring-1 focus:ring-gray-800">
                          S
                        </button>
                        <button className="w-6 h-6 focus::w-5 focus::w-5 focus:h-5   font-bold   focus:ring-offset-2 focus:ring-1 focus:ring-gray-800">
                          M
                        </button>
                        <button className="w-6 h-6 focus::w-5 focus::w-5 focus:h-5   font-bold   focus:ring-offset-2 focus:ring-1 focus:ring-gray-800">
                          L
                        </button>
                        <button className="w-6 h-6 focus::w-5 focus::w-5 focus:h-5   font-bold   focus:ring-offset-2 focus:ring-1 focus:ring-gray-800">
                          XL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <div className="mt-6">
                        <p className="text-base font-medium leading-none text-gray-800">
                          Fabric color
                        </p>
                      </div>
                      <div className="flex items-center justify-start mb-5 md:space-x-4 space-x-2 mt-6">
                        <button className="w-6 h-6 focus::w-5 focus::w-5 focus:h-5 bg-[#D0A03C] focus:ring-offset-2 focus:ring-1 focus:ring-gray-800" />
                        <button className="w-6 h-6 focus::w-5 focus:h-5 bg-[#4D101D] focus:ring-offset-2 focus:ring-1  focus:ring-gray-800" />
                        <button className="w-6 h-6 focus::w-5 focus:h-5 bg-[#0369A1] focus:ring-offset-2 focus:ring-1  focus:ring-gray-800" />
                        <button className="w-6 h-6 focus::w-5 focus:h-5 bg-[#EC7E2E] focus:ring-offset-2 focus:ring-1  focus:ring-gray-800" />
                      </div>
                    </div>
                  </div>
                  <div className=" mt-6 border border-gray-200 bg-[#fff] w-full flex justify-between items-center h-11">
                    <button
                      onClick={() => handleNum("sub")}
                      className="w-11 xl:w-16 border-r flex justify-center items-center h-full broder-gray-200"
                    >
                      <img
                        className="w-6"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg1.svg"
                        alt="subtract"
                      />
                    </button>
                    <p id="num" className="text-xl leading-tight text-gray-600">
                      {num}
                    </p>
                    <button
                      onClick={() => handleNum("add")}
                      className="w-11 xl:w-16 border-l flex justify-center items-center h-full broder-gray-200"
                    >
                      <img
                        className="w-6"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                        alt="add"
                      />
                    </button>
                  </div>
                  <div className="flex gap-4 items-center mt-6">
                    <button className=" bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded  lg:max-w-[411px] w-full  py-3">
                      Add To Cart
                    </button>
                    <button className=" bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded  lg:max-w-[411px] w-full  py-3">
                      Buy it Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 bg-gray-50 mt-6 lg:px-10 md:px-6 px-4 py-12">
            <div className="md:flex justify-between">
              <div>
                <p className="text-xl font-medium leading-tight text-gray-800">
                  Product Detail
                </p>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Fine stitching
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Signature design
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Grab handle
                  </li>
                </div>
              </div>
              <div className="md:mt-0 mt-4">
                <p className="text-xl font-medium leading-tight text-gray-800">
                  Brand
                </p>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Alpha supply Co.
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Produces quality
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    GBuilt backpacks
                  </li>
                </div>
              </div>
              <div className="md:mt-0 mt-4">
                <p className="text-xl font-medium leading-tight text-gray-800">
                  Material
                </p>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    100% Leather
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Stainless steel zips
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Pollster padding
                  </li>
                </div>
              </div>
              <div className="lg:block md:hidden block md:mt-0 mt-4">
                <p className="text-xl font-medium leading-tight text-gray-800">
                  Return Policy
                </p>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Return within 30 days
                  </li>
                </div>
                <div className="list-disc">
                  <li className="text-base leading-none text-gray-600 mt-4">
                    Free returns
                  </li>
                </div>
              </div>
            </div>
            <div className="lg:hidden md:block hidden mt-6">
              <p className="text-xl font-medium leading-tight text-gray-800">
                Return Policy
              </p>
              <div className="list-disc">
                <li className="text-base leading-none text-gray-600 mt-4">
                  Return within 30 days
                </li>
              </div>
              <div className="list-disc">
                <li className="text-base leading-none text-gray-600 mt-4">
                  Free returns
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .slider_product_detail_11 {
          width: 100%;
          position: relative;
          overflow: hidden;
      }
  
      @media (min-width: 1280px) {  
          .slide-ana_product_detail_11 {
          height: 539px;
      } }
       
  
      .slide-ana_product_detail_11 > div {
          width: 100%;
          height: 100%;
          position: absolute;
          transition: all 1s;
      }
  

      @media (max-width:400px) {
          .fix_product_detail_11{
              height: 210px;
          }
          .sett_product_detail_11{
              left: 30%;
          }
      }
        `}
      </style>
    </>
  );
}

export default ProductDetails;
