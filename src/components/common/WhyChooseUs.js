import React from "react";
const features = [
  {
    title: "Quality Assurance",
    description:
      "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
  },
  {
    title: "Convenience",
    description:
      "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
  },
  {
    title: "Exceptional Customer Service",
    description:
      "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.",
  },
];
const WhyChooseUs = () => {
  return (
    <div>
      <h2 className="text40 font-semibold mb-8">Why Choose Us</h2>
      <div className="flex flex-wrap flex-col md:flex-row text-sm mb-20 border border-gray-400">
        {features.map((feature, index) => (
          <div
            key={index}
            className="lg:p-8 sm:p-6 p-8 flex flex-col gap-2 sm:w-[33%] w-full grow-[1] last:border-0 border-b lg:border-b-0 lg:border-r border-gray-400"
          >
            <b className="text-lg">{feature.title}:</b>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
