import React, { useState } from "react";
import "./style.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // navigation section starts
    <section className="navigation-section">
      <div className="container">
        <nav>
          <a href="/">
            <h1 className="nav-logo">Vinca</h1>
          </a>
          <div className={`nav-section ${toggle === true ? "open" : ""}`}>
            <ul className="nav-ul">
              <li className="nav-li" onClick={() => setToggle(!toggle)}>
                <a href="#services-section" className="nav-a">
                  Services
                </a>
              </li>
              <li className="nav-li" onClick={() => setToggle(!toggle)}>
                <a href="#aboutUs-section" className="nav-a">
                  About us
                </a>
              </li>
              <li className="nav-li" onClick={() => setToggle(!toggle)}>
                <a href="#contactUs-section" className="nav-a">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`nav-toggler ${toggle === true ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </section>
    // navigation section ends
  );
};

export default Nav;
