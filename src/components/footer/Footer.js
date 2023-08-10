import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo-2.png";
// import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">

            <div className="logo-footer">
              <img src={logo} alt="Sacramento Rehab Logo" loading="lazy"/>
            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <BsFillArrowUpCircleFill className="icon" />
            </LinkRoll>
          </div>



          <div className="col-container">
            <div className="col">
              <h3>COMPANY</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mission">
                  <p>Our Mission</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/about-us">
                  <p>About Us</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/treatment">
                  <p>Treatment</p>
                </Link>
              </LinkRoll>
            </div>

            <div className="col">
              <h3>Navigation</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/">
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/treatment">
                  <p>Treatment</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/insurance">
                  <p>Insurance</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>

            <div className="col">
              <h3>programs</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health">
                  <p>Mental Health Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                  <p>Substance Abuse Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/jobs">
                  <p>Job Assistance Program</p>
                </Link>
              </LinkRoll>
            </div>

          </div>
          <p className="copyright">
            <p>
              &copy; 2023 Sacramento Rehab Treatment Center. All rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
