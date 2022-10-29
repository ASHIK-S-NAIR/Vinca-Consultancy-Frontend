import React from "react";
import facebookIcon from "assets/Images/facebook.svg";
import twitterIcon from "assets/Images/twitter.svg";
import instagramIcon from "assets/Images/instagram.svg";
import pinterestIcon from "assets/Images/pinterest.svg";
import "./style.css";

const Footer = () => {
  return (
    // Footer section starts
    <section className="footer-section section">
      <div className="container">
        <div className="row">
          <footer>
            <div className="footer-logo-section">
              <a href="/">
                <h1 className="footer-logo">Vinca Consultancy</h1>
              </a>
              <ul className="footer-social">
                <li className="footer-social-li">
                  <a href="/" className="footer-social-a">
                    <img
                      src={facebookIcon}
                      alt="facebook"
                      className="footer-social-icon"
                    />
                  </a>
                </li>
                <li className="footer-social-li">
                  <a href="/" className="footer-social-a">
                    <img
                      src={twitterIcon}
                      alt="twitter"
                      className="footer-social-icon"
                    />
                  </a>
                </li>
                <li className="footer-social-li">
                  <a href="/" className="footer-social-a">
                    <img
                      src={instagramIcon}
                      alt="instagram"
                      className="footer-social-icon"
                    />
                  </a>
                </li>
                <li className="footer-social-li">
                  <a href="/" className="footer-social-a">
                    <img
                      src={pinterestIcon}
                      alt="pinterest"
                      className="footer-social-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-info-section">
              <div className="footer-subscribe">
                <h2 className="footer-subscribe-title">
                  Subscribe to our newsletter
                </h2>
                <div className="footer-subscribe-form">
                  <input type="email" className="footer-subscribe-input" />
                  <button className="footer-subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
    // Footer section ends
  );
};

export default Footer;
