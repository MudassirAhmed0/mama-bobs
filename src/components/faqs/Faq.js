import React from "react";

const Faq = ({ faq, index, toggleFAQ, openIndex, contentRefs, heights }) => {
  return (
    <div key={index} className="group border border-gray-400 p-4 rounded-2xl">
      <button
        className="lg:text-2xl text-lg w-full text-left font-semibold text-black focus:outline-none flex justify-between items-start gap-2"
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
        <span
          className={`transform transition-transform duration-300  ${
            openIndex === index ? "rotate-180 text-gray-400" : "rotate-0"
          } lg:group-hover:text-gray-400`}
        >
          ▼
        </span>
      </button>
      <div
        ref={(el) => (contentRefs.current[index] = el)}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: openIndex === index ? `${heights[index]}px` : "0px",
          opacity: openIndex === index ? `1` : "0",
        }}
      >
        <p className="text-gray-700 pt-2 lg:text-lg">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Faq;
