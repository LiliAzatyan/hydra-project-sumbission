import IntroductionSection from "../../components/landingSections/introductionSection/IntroductionSection";
import ProcessSection from "../../components/landingSections/processSection/ProcessSection";
import ServicesSection from "../../components/landingSections/servicesSection/ServicesSection";
import OptinSection from "../../components/landingSections/optinSection/OptinSection";
import AboutSection from "../../components/landingSections/aboutSection/AboutSection";
// import Rectangle from "../../components/landingSections/rectangleSection/Rectangle";
import HeroSection from "../../components/landingSections/heroSection/HeroSection";
import TechSection from "../../components/landingSections/techSection/TechSection";
import Footer from "../../layout/footer/Footer";
import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      {/* <Rectangle/> */}
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      <ProcessSection />
      <OptinSection />
      <Footer/>
    </div>
  );
};

export default Landing;
