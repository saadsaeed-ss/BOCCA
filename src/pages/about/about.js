import React from "react";
import Header from "./components/Header";
import GoalSec from "./components/GoalSec";
import StepSec from "./components/StepSec";
import Features from "./components/Features";
import VisionariesSection from "./components/Vision";
import CardGrid from "./components/Team";
import Contactinfo from "./components/Contact";
import FormSec from "./components/FormSec";
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
      <CardGrid />
      <FormSec />
      <Contactinfo />
      <Footer />
    </>
  );
}

export default AboutPage;
