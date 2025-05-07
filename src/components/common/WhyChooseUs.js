import React from "react";
const features = [
  {
 
    description:
      "we’re a little bit disgusting",
  },
  {
    title: "Convenience",
    description:
      "we’re all funny",
  },
  {
    title: "Exceptional Customer Service",
    description:
      "we’re very profound",
  },
];
const WhyChooseUs = () => {
  return (
    <div className="my-40">
      <h2 className="text40 font-semibold mb-8 text-center">Why Choose Us</h2>
      <div className="flex flex-wrap flex-col md:flex-row text-sm mb-20 border border-gray-400">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`"lg:p-8 sm:p-6 p-8 flex  text-[30px] lg:text-[2.5vw] leading-[1.2] items-center bubble-font gap-4 ${ index==0 ?"sm:w-[40%]": "sm:w-[30%]"} w-full grow-[1] last:border-0 border-b sm:border-b-0 sm:border-r border-gray-400"`}
          >
            <span> 0{index + 1}</span>
            <p className="text-gray-600 uppercase">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
