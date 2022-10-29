import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    // ContactUs section starts
    <section className="contactUs-section section" id="contactUs-section">
      <div className="container">
        <div className="row">
          <h1
            className="heading contactUs-heading"
            data-title="How can we talk"
          >
            Contact Us
          </h1>
        </div>
        <div className="row contactUs">
          <div className="contactUs-info">
            <h2 className="contactUs-title">Need any Consultancy Service</h2>
            <p className="contactUs-p">
              Feel free to talk to us, we are always ready to help clear your
              doubts
            </p>
            <button className="contactUs-btn">
              vincaconsultancy@vinca.com
            </button>
          </div>
          <div className="contactUs-form-section">
            <form action="" className="contactUs-form">
              <label htmlFor="email" className="contactUs-form-label">
                email
              </label>
              <input id="email" type="email" className="contactUs-form-input" />

              <label htmlFor="message" className="contactUs-form-label">
                message
              </label>
              <textarea
                name="message"
                id="message"
                className=" contactUs-form-input contactUs-form-input-message"
              ></textarea>

              <button className="contactUs-form-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    // ContactUs section ends
  );
};

export default ContactUs;
