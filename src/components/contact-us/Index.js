import Link from "next/link";
import { NewsLetterBox } from "../common/NewsLetterBox";

const ContactUsPage = () => {
  return (
    <div className="py-20 my-20 border-b border-gray-400 myContainer">
      <div className="lg:my-10 my-10 sm:mt-32 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src="/images/contact-us/banner.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <Link href={"/"} target="_blank" className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Link>
          <div className="flex flex-col">
            <Link href={"tel:(415) 555-0132"} className=" text-gray-500">
              Tel: (415) 555-0132
            </Link>
            <Link href={"mailto:admin@mamabobs.com"} className=" text-gray-500">
              Email: admin@mamabobs.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-gray-600">
              Careers at Mama Bobs
            </p>
            <p className=" text-gray-500">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default ContactUsPage;
