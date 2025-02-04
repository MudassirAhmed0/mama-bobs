import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="bg-black">
        <div className="myContainer lg:py-[6.25vw] py-12 flex flex-col items-start justify-start xl:justify-between xl:space-x-8 xl:flex-row">
          <Link
            href={"/"}
            aria-label="Home. logo"
            role="img"
            className="relative lg:size-[22.2222222222vh] sm:size-[150px] size-[100px]"
          >
            <Image fill src="/images/icons/logo.png" alt="logo" />
          </Link>
          <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                Community
              </h2>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                About Us
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Guidelines and how to
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                How to start a blog
              </button>
            </div>
            <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                Getting Started
              </h2>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                About Us
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Guidelines and how to
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                How to start a blog
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Quote from the best
              </button>
              <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                Guidelines and how to
              </button>
            </div>
            <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
              <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                Resources
              </h2>
              <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                Accessibility
              </button>
              <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                Usability
              </button>
              <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                Marketplace
              </button>
              <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                Design &amp; Dev
              </button>
              <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto container my-16 xl:px-20 lg:px-12 sm:px-6 px-4 bg-white relative z-[2]">
        <div className="md:flex items-center justify-between">
          <div className="flex items-center">
            <div className="border-l border-gray-800 ml-2 pl-2">
              <p className="text-base leading-4 text-gray-800">
                <span className="font-black">Mama-Bobs</span> - All rights
                reserved
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-10 md:mt-0 mt-6">
            <div className="cursor-pointer">
              <svg
                className="fill-current text-gray-800 hover:text-gray-500"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.7527 6.2998C8.84957 6.2998 8.72457 7.1998 8.72457 7.1998H10.6433C10.6433 7.1998 10.6558 6.2998 9.7527 6.2998ZM5.39958 7.1998H3.69958V8.7623H5.31521C5.55896 8.75605 6.01521 8.6873 6.01521 8.00293C6.01521 7.19043 5.39958 7.1998 5.39958 7.1998Z"
                  fill="#1F2937"
                />
                <path
                  d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM8.475 4.3H10.8844V5.01875H8.475V4.3ZM7.25625 8.075C7.25625 9.85625 5.4 9.8 5.4 9.8H2.3625V3.95625H5.4C6.325 3.95625 7.05313 4.46562 7.05313 5.5125C7.05313 6.55937 6.1625 6.625 6.1625 6.625C7.3375 6.625 7.25625 8.075 7.25625 8.075ZM11.7625 7.97812H8.73438C8.73438 9.0625 9.7625 8.99375 9.7625 8.99375C10.7344 8.99375 10.7 8.36563 10.7 8.36563H11.7281C11.7281 10.0344 9.72812 9.91875 9.72812 9.91875C7.33125 9.91875 7.48438 7.68437 7.48438 7.68437C7.48438 7.68437 7.48125 5.44063 9.72812 5.44063C12.0937 5.44375 11.7625 7.97812 11.7625 7.97812Z"
                  fill="currentColor"
                />
                <path
                  d="M5.81209 5.60332C5.81209 4.99707 5.39959 4.99707 5.39959 4.99707H3.69958V6.3002H5.29333C5.56833 6.3002 5.81209 6.20957 5.81209 5.60332Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="fill-current hover:text-gray-500 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00178 0C3.58294 0 0 3.58134 0 7.99821C0 11.2725 1.97187 14.0861 4.79035 15.3252C4.76892 14.7681 4.78678 14.0969 4.92967 13.4898C5.08328 12.84 5.95847 9.13011 5.95847 9.13011C5.95847 9.13011 5.70127 8.6195 5.70127 7.8661C5.70127 6.68065 6.38714 5.79514 7.24447 5.79514C7.97321 5.79514 8.32329 6.34144 8.32329 6.99487C8.32329 7.72685 7.85532 8.81946 7.61598 9.83352C7.41594 10.6833 8.04108 11.3725 8.88055 11.3725C10.3952 11.3725 11.4168 9.42647 11.4168 7.11984C11.4168 5.36666 10.2344 4.05624 8.08752 4.05624C5.66198 4.05624 4.14735 5.86655 4.14735 7.88752C4.14735 8.5838 4.35454 9.07654 4.67604 9.45503C4.8225 9.62999 4.84394 9.70141 4.79035 9.90136C4.75106 10.0478 4.66533 10.4012 4.62603 10.5441C4.57245 10.7476 4.40813 10.819 4.22594 10.744C3.10784 10.287 2.58629 9.06583 2.58629 7.68757C2.58629 5.41665 4.50458 2.69226 8.30542 2.69226C11.3597 2.69226 13.3708 4.90248 13.3708 7.27338C13.3708 10.412 11.624 12.7543 9.05202 12.7543C8.18754 12.7543 7.37665 12.2865 7.09801 11.7581C7.09801 11.7581 6.63362 13.6005 6.5336 13.9576C6.36571 14.5753 6.03349 15.1895 5.72985 15.6715C6.4664 15.8887 7.23028 15.9993 7.99821 16C12.4171 16 16 12.4187 16 8.00179C16 3.58491 12.4206 0 8.00178 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="fill-current text-gray-800 hover:text-gray-500"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7.04199C14 3.17637 10.8656 0.0419922 7 0.0419922C3.13438 0.0419922 0 3.17637 0 7.04199C0 10.5357 2.55938 13.4317 5.90625 13.9573V9.06605H4.12844V7.04199H5.90625V5.4998C5.90625 3.74574 6.95156 2.77605 8.55031 2.77605C9.31625 2.77605 10.1175 2.91293 10.1175 2.91293V4.63574H9.23438C8.36531 4.63574 8.09344 5.17512 8.09344 5.72949V7.04199H10.0347L9.72469 9.06605H8.09375V13.9579C11.4406 13.4326 14 10.5367 14 7.04199Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="fill-current text-gray-800 hover:text-gray-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.53125 8C9.53125 8.8457 8.8457 9.53125 8 9.53125C7.1543 9.53125 6.46875 8.8457 6.46875 8C6.46875 7.1543 7.1543 6.46875 8 6.46875C8.8457 6.46875 9.53125 7.1543 9.53125 8Z"
                  fill="currentColor"
                />
                <path
                  d="M11.5811 5.29065C11.5074 5.09119 11.39 4.91064 11.2374 4.76245C11.0892 4.60986 10.9088 4.49243 10.7092 4.41882C10.5474 4.35596 10.3042 4.28113 9.85632 4.26074C9.37183 4.23865 9.22656 4.23389 8 4.23389C6.77332 4.23389 6.62805 4.23853 6.14368 4.26062C5.6958 4.28113 5.45251 4.35596 5.29077 4.41882C5.09119 4.49243 4.91064 4.60986 4.76257 4.76245C4.60999 4.91064 4.49255 5.09106 4.41882 5.29065C4.35596 5.45251 4.28113 5.6958 4.26074 6.14368C4.23865 6.62805 4.23389 6.77332 4.23389 8C4.23389 9.22656 4.23865 9.37183 4.26074 9.85632C4.28113 10.3042 4.35596 10.5474 4.41882 10.7092C4.49255 10.9088 4.60986 11.0892 4.76245 11.2374C4.91064 11.39 5.09106 11.5074 5.29065 11.5811C5.45251 11.644 5.6958 11.7189 6.14368 11.7393C6.62805 11.7614 6.77319 11.766 7.99988 11.766C9.22668 11.766 9.37195 11.7614 9.8562 11.7393C10.3041 11.7189 10.5474 11.644 10.7092 11.5811C11.1099 11.4265 11.4265 11.1099 11.5811 10.7092C11.6439 10.5474 11.7188 10.3042 11.7393 9.85632C11.7614 9.37183 11.766 9.22656 11.766 8C11.766 6.77332 11.7614 6.62805 11.7393 6.14368C11.7189 5.6958 11.644 5.45251 11.5811 5.29065ZM8 10.3588C6.69714 10.3588 5.64099 9.30273 5.64099 7.99988C5.64099 6.69702 6.69714 5.64099 8 5.64099C9.30273 5.64099 10.3589 6.69702 10.3589 7.99988C10.3589 9.30273 9.30273 10.3588 8 10.3588ZM10.4521 6.099C10.1477 6.099 9.90088 5.85217 9.90088 5.54773C9.90088 5.24329 10.1477 4.99646 10.4521 4.99646C10.7566 4.99646 11.0034 5.24329 11.0034 5.54773C11.0033 5.85217 10.7566 6.099 10.4521 6.099Z"
                  fill="currentColor"
                />
                <path
                  d="M8 0C3.5824 0 0 3.5824 0 8C0 12.4176 3.5824 16 8 16C12.4176 16 16 12.4176 16 8C16 3.5824 12.4176 0 8 0ZM12.566 9.89392C12.5438 10.3829 12.4661 10.7168 12.3525 11.009C12.1139 11.6261 11.6261 12.1139 11.009 12.3525C10.7169 12.4661 10.3829 12.5437 9.89404 12.566C9.40417 12.5884 9.24768 12.5938 8.00012 12.5938C6.75244 12.5938 6.59607 12.5884 6.10608 12.566C5.61719 12.5437 5.2832 12.4661 4.99109 12.3525C4.68445 12.2372 4.40686 12.0564 4.17737 11.8226C3.94373 11.5933 3.76294 11.3156 3.64758 11.009C3.53406 10.7169 3.4563 10.3829 3.43408 9.89404C3.4115 9.40405 3.40625 9.24756 3.40625 8C3.40625 6.75244 3.4115 6.59595 3.43396 6.10608C3.45618 5.61707 3.53381 5.2832 3.64734 4.99097C3.7627 4.68445 3.9436 4.40674 4.17737 4.17737C4.40674 3.9436 4.68445 3.76282 4.99097 3.64746C5.2832 3.53394 5.61707 3.4563 6.10608 3.43396C6.59595 3.41162 6.75244 3.40625 8 3.40625C9.24756 3.40625 9.40405 3.41162 9.89392 3.43408C10.3829 3.4563 10.7168 3.53394 11.009 3.64734C11.3156 3.7627 11.5933 3.9436 11.8228 4.17737C12.0564 4.40686 12.2373 4.68445 12.3525 4.99097C12.4662 5.2832 12.5438 5.61707 12.5662 6.10608C12.5885 6.59595 12.5938 6.75244 12.5938 8C12.5938 9.24756 12.5885 9.40405 12.566 9.89392Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
