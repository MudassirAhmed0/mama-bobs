import React from "react";
const features = [
  {
    description: "we’re a little bit disgusting",
  },
  {
    title: "Convenience",
    description: "we’re all funny",
  },
  {
    title: "Exceptional Customer Service",
    description: "we’re very profound",
  },
];
const WhyChooseUs = () => {
  return (
    <div className="mt-40">
      <h2 className="text60 pb-8 text-center bubble-font text-white">Why Choose Us</h2>
      <div className="flex flex-wrap flex-col text-sm mb-20 border border-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`lg:p-8 sm:p-6 p-8 flex  text-[30px] lg:text-[2.5vw] leading-[1.2] items-center bubble-font gap-4  w-full grow-[1] last:border-0 border-b border-white text-white`}
          >
            <span> 0{index + 1}</span>
            <p className="text-white uppercase">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
