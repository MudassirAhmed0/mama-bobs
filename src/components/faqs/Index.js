"use client";
import React, { useEffect, useRef, useState } from "react";
import Faq from "./Faq";

const FaqsPage = () => {
  const faqs = [
    {
      question: "What is our return policy?",
      answer: "You can return any product within 30 days of purchase.",
    },
    {
      question: "Do we offer international shipping?",
      answer: "Yes, we ship to multiple countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking link once your order is shipped.",
    },
    {
      question: "What payment methods do we accept?",
      answer: "We accept credit/debit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email or our 24/7 chat support.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we provide special discounts for bulk purchases. Contact support for details.",
    },
    {
      question: "Are the products covered under warranty?",
      answer: "Yes, all our products come with a 1-year warranty.",
    },
    {
      question: "Can I change or cancel my order after placing it?",
      answer:
        "Orders can be modified or canceled within 24 hours of placement.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes, we offer reward points for every purchase, which can be redeemed for discounts.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState({});

  useEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((el, index) => {
      if (el) {
        newHeights[index] = el.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="lg:py1 pt-40 sm:pt-[240px] lg:pb-24 pb-24">
      <div className="myContainer lg:w-2/4">
        <h2 className="text60 text-foreground text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 flex flex-col gap-8 w-full">
          {faqs.map((faq, index) => (
            <Faq
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
              openIndex={openIndex}
              key={index}
              heights={heights}
              contentRefs={contentRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
