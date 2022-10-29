import React from "react";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import "./style.css";

const Home = () => {
  return (
    <section className="home-section">
      {/* Hero section starts */}
      <Hero />
      {/* Hero section ends  */}

      {/* Services section starts */}
      <Services />
      {/* Services section ends */}

      {/* AboutUs section starts */}
      <AboutUs />
      {/* AboutUs section ends */}

      {/* ContactUs section starts */}
      <ContactUs />
      {/* ContactUs section ends */}
    </section>
  );
};

export default Home;
