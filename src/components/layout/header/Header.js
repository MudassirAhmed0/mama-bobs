"use client";
import useAos from "@/hooks/useAos";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const navLinks = [
  {
    title: "Feature Products",
    link: "/shop",
  },
  {
    title: "Design your Tee",
    link: "/design-your-tee",
  },
  {
    title: "Faqs",
    link: "/faqs",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];
const Header = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,

      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true, // Ensure touchpad support
      gestureOrientation: "both", // Supports both vertical & horizontal gestures
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useAos();
  const [show, setShow] = useState(false);
  return (
    <header className="absolute z-10 top-0 left-0 w-full">
      <nav className="w-full border-b border-black lg:py-[1.66666666667vh] py-[20px]">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href={"/"}
            aria-label="Home. logo"
            role="img"
            className="relative lg:size-[13.8888888889vh] sm:size-[150px] size-[70px]"
          >
            <Image fill src="/images/icons/logo.png" alt="logo" />
          </Link>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden icon icon-tabler icon-tabler-menu"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${show ? "" : "hidden"} md:block lg:block `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6 right-6`}
              >
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className="flex text-3xl md:text-base lg:text-[1.25vw] items-center p-10 lg:p-0 md:flex gap-6 flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                {navLinks.map((navLink, index) => (
                  <li
                    key={index}
                    className="text-black hover:text-[#ca8a04] cursor-pointer capitalize font-medium"
                  >
                    <Link href={navLink.link}>{navLink.title}</Link>
                  </li>
                ))}
                <Link
                  href={"/shop"}
                  className="w-full text-center lg:font-bold md:hidden block bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded px-4 py-3 text-2xl"
                >
                  Shop now
                </Link>
              </ul>
            </div>
          </div>
          {/* <Link
            href={"/shop"}
            className="lg:text-lg lg:font-bold hidden md:block bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded px-4 sm:px-4 lg:py-[0.625vw] py-1 sm:py-3 sm:text-sm"
          >
            Shop now
          </Link> */}

          <div className="flex gap-x-4 items-center">
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Search size={20} /> Search
            </Link>
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <ShoppingCart size={20} /> Cart
              {/* items in cart  number with red dot as usual in ecommerce */}
              <span className="bg-red-500 text-white text-xs px-1 rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
