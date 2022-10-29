import React from "react";
import teamImg from "assets/Images/team.svg";
import "./style.css";

const AboutUs = () => {
  return (
    // AboutUs section starts
    <section className="section aboutUs-section" id="aboutUs-section">
      <div className="container">
        <div className="row">
          <h1 className="heading aboutUs-heading" data-title="Who we are">
            About Us
          </h1>
        </div>
        <div className="row aboutUs">
          <img src= {teamImg} alt="" className="aboutUs-img" />
          <div className="aboutUs-container">
            <h1 className="aboutUs-title">
              We can guide to make great ideas come out as great and wonderful
              products
            </h1>
            <p className="aboutUs-p">
              Vinca is a group of experts having knowledege and experience in
              different domain including banks, insurance, management, safety,
              manufacturing, construction etc.
            </p>
          </div>
        </div>
        <div className="row aboutUs-timeline-container">
          <div className="aboutUs-timeline">
            <ul className="aboutUs-timeline-ul">
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">1990</h2>
                  <p className="aboutUs-timeline-p">
                    Vinca Consultancy Service was established with 8 employees.
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">1993</h2>
                  <p className="aboutUs-timeline-p">
                    First International project at germany.
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">1998</h2>
                  <p className="aboutUs-timeline-p">
                    10 branches across the globe with 200+ employees.
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">2000</h2>
                  <p className="aboutUs-timeline-p">
                    Entry into Information Technology field.
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">2002</h2>
                  <p className="aboutUs-timeline-p">
                    Affiliation by CPFG and Meroon Techo.{" "}
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">2008</h2>
                  <p className="aboutUs-timeline-p">
                    Awarded best consultancy service fot the year 2008 by
                    Borbes.
                  </p>
                </div>
              </li>
              <li className="aboutUs-timeline-li">
                <div className="aboutUs-timeline-content">
                  <h2 className="aboutUs-timeline-heading">2012</h2>
                  <p className="aboutUs-timeline-p">
                    Acquired Carley Perceen Tech and herbew Auto
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    // AboutUs section ends
  );
};

export default AboutUs;
