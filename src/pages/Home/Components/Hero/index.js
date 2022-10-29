import React from "react";
import heroBgImg from "assets/Images/bg.svg";
import "./style.css";

const Hero = () => {
  return (
    // hero section starts
    <section className="hero-section">
      <div className="container">
        <div className="hero">
          <div className="hero-info">
            <h2 className="hero-subheading">Occupational safety consultant</h2>
            <h1 className="hero-heading">
              Work Risk <br /> <span>Free</span>
            </h1>
            <p className="hero-mainLine">
              We help companies and startups risk free and safe project
              management, We are a group of experienced{" "}
              <span>
                Entrepreneur, Economist, Human Resource Manager, Capital
                Investors
              </span>
              .
            </p>
            <button className="hero-cta">Projects</button>
          </div>
          <img
            src={heroBgImg}
            alt="Hero background Image"
            className="hero-bg"
          />
        </div>
      </div>
    </section>
    // hero section ends
  );
};

export default Hero;
