import { NewsLetterBox } from "../common/NewsLetterBox";
import WhyChooseUs from "../common/WhyChooseUs";

const AboutUsPage = () => {
  return (
    <div className="py-20 my-20 border-b border-gray-400 mx-auto lg:container myContainer">
      <div className="lg:mt-10 mt-10 sm:mt-32 mb-20 flex flex-wrap justify-center items-center gap-8 lg:gap-12 w-full">
        <img
          className="w-full lg:w-[450px] object-cover rounded-lg shadow-lg"
          src={"/images/about/banner.png"}
          alt=""
        />
        <div className="lg:w-2/4 w-full">
          <h2 className="text60 text-gray-800">about us</h2>
          <div className="flex flex-col justify-center gap-4 lg:gap-6 mt-4 lg:mt-6 text-gray-600">
            <p>
              Mama Bobs was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we&apos;ve worked tirelessly to curate a
              diverse selection of high-quality products that cater to every
              taste and preference. From fashion and beauty to electronics and
              home essentials, we offer an extensive collection sourced from
              trusted brands and suppliers.
            </p>
            <div className="flex flex-col gap-2">
              <b className="text-gray-800">Our Mission</b>
              <p>
                Our mission at Mama Bobs is to empower customers with choice,
                convenience, and confidence. We&apos;re dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <NewsLetterBox />
    </div>
  );
};

export default AboutUsPage;
