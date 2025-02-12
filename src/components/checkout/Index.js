"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [dropdowns, setDropdowns] = useState({
    city: false,
    region: false,
    country: false,
  });

  const [selectedValues, setSelectedValues] = useState({
    city: "City",
    region: "Region (optional)",
    country: "Country",
  });

  const dropdownOptions = {
    city: ["London", "New York", "Dubai"],
    region: ["California", "Ontario", "Queensland"],
    country: ["USA", "UK", "Russia"],
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDropdownSelect = (key, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    setDropdowns((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <section className="overflow-y-hidden py1 py-[220px]">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full flex-col justify-start items-start">
            <Link
              href={"/cart"}
              className="flex flex-row items-center text-gray-600 hover:text-gray-500 hover:underline space-x-1 mb-6"
            >
              <svg
                className="fill-stroke size-[30px]"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl leading-none">Back</p>
            </Link>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Check out
            </p>

            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>
            </div>

            {/* Input Fields */}
            <div className="mt-8 flex flex-wrap gap-[0.9375vw] justify-start items-start w-full space-y-8">
              {["First Name", "Last Name", "Address", "Address (line 02)"].map(
                (placeholder, index) => (
                  <input
                    key={index}
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text"
                    placeholder={placeholder}
                  />
                )
              )}

              {Object.keys(dropdownOptions).map((key) => (
                <div
                  key={key}
                  onClick={() => toggleDropdown(key)}
                  className="relative lg:w-[47%] w-full group"
                >
                  <p className="px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                    {selectedValues[key]}
                  </p>
                  <button className="rounded-full cursor-pointer absolute bottom-4 right-0">
                    <svg
                      className={`transform transition-transform duration-200 ${
                        dropdowns[key] ? "rotate-180" : ""
                      }`}
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdowns[key] && (
                    <div className="shadow absolute z-10 bg-white top-10 w-full mt-3">
                      <div className="flex flex-col w-full">
                        {dropdownOptions[key].map((option) => (
                          <p
                            key={option}
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing on click
                              handleDropdownSelect(key, option);
                            }}
                            className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                          >
                            {option}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 lg:w-[47%] w-full"
                type="text"
                placeholder="Zip Code"
              />
              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            {/* Proceed to Payment */}
            <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 mt-8 text-base font-medium leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
              Proceed to payment
            </button>

            {/* Back to Bag */}
            <div className="mt-4 flex justify-start items-center w-full">
              <a
                href="#"
                className="text-base leading-4 underline hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a>
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <h1 className="text-2xl font-semibold leading-6 text-gray-800">
              Order Summary
            </h1>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              {[
                { label: "Total items", value: 20 },
                { label: "Total Charges", value: "$2790" },
                { label: "Shipping charges", value: "$90" },
                { label: "Sub total", value: "$3520" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between w-full items-center"
                >
                  <p className="text-lg leading-4 text-gray-600">{label}</p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
