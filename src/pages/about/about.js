import React from "react";
import Header from "./components/Header";
import GoalSec from "./components/GoalSec";
import StepSec from "./components/StepSec";
import Features from "./components/Features";
import VisionariesSection from "./components/Vision";
import Contactinfo from "./components/Contact";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
//
//
//
function AboutPage() {
  return (
    <>
      <Navbar />
      <Header />
      <GoalSec />
      <StepSec />
      <Features />
      <VisionariesSection />
      <Contactinfo />
      <Footer />
    </>
  );
}

export default AboutPage;
