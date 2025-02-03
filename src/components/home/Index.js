import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import FeaturedProducts from "./featured-products/FeaturedProducts";
import Values from "./values/Values";
import Testimonials from "./testimonials/Testimonials";
import Cta from "./cta/Cta";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Values />
      <Testimonials />
      <Cta />
    </>
  );
};

export default HomePage;
