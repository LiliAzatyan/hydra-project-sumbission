import IntroductionSection from "../../components/landingSections/introductionSection/IntroductionSection";
import ServicesSection from "../../components/landingSections/servicesSection/ServicesSection";
// import ProcessSection from "../../components/landingSections/processSection/ProcessSection";
import AboutSection from "../../components/landingSections/aboutSection/AboutSection";
import OptinSection from "../../components/landingSections/optinSection/OptinSection";
// import Rectangle from "../../components/landingSections/rectangleSection/Rectangle";
import HeroSection from "../../components/landingSections/heroSection/HeroSection";
import TechSection from "../../components/landingSections/techSection/TechSection";
import React from "react";

const Landing = () => {
  return (
    <div className="landing-container">
      <HeroSection />
      {/* <Rectangle /> */}
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      {/* <ProcessSection /> */}
      <OptinSection />
    </div>
  );
};

export default Landing;
