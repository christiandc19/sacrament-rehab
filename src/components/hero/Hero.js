import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class="fullscreen">
        <div class="hero-content">
          <div className="caption">
            <Fade left>
              <h1>SACRAMENTO REHAB</h1>
            </Fade>
            <Fade right>
              <h2>
                Substance Abuse Addiction and Mental Health Treatment Facility
              </h2>
            </Fade>
            <div className="hero-btn">
              <button class="hero-cta">
                <span>CONTACT US</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero">
        <div className="hero-container">
          <div className="content">
            <Fade left>
              <h2 className="subtitle">WELCOME TO</h2>
            </Fade>
            <Fade right>
              <h1 className="animate-charcter">Sacramento REHAB</h1>
            </Fade>

            <Fade left>
              <h2 className="subtitle">
                MENTAL HEALTH AND SUBSTANCE ABUSE TREATMENT FACILITY
              </h2>
            </Fade>

            <Fade bottom>
              <p>"Start your treatment journey with us"</p>
            </Fade>
          </div>

          <div className="hero-btn">
            <button class="hero-cta">
              <span>CONTACT US</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
