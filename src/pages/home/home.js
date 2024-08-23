import React from "react";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Works from "./components/Works";
import Features from "./components/Features";
import HotelSection from "./components/HotelSec";
import Testimonial from "./components/Testimonials";
import WhyChooseBocca from "./components/WhyChooseBocca";
import BoccaTokenSection from "./components/BoccaToken";
import Tokenomics from "./components/Tokenomics";
//
//
//
function HomePage() {
  return (
    <>
      <Header />
      <Partner />
      <Works />
      <Features />
      <HotelSection />
      <Testimonial />
      <WhyChooseBocca />
      <BoccaTokenSection />
      <Tokenomics />
    </>
  );
}

export default HomePage;
