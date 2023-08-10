import React from "react";
// import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import "./Hero.css";

import DHCS from "../../assets/DHCS2.png";
// import Card2 from "../../assets/card2.jpg";
// import Card3 from "../../assets/card3.jpg";


const Hero = () => {
  return (
    <>
    
<div class="carousel fade-carousel slide" data-ride="carousel" data-interval="6000" id="bs-carousel">

{/* Overlay */}

{/* Indicators */}
  <ol class="carousel-indicators">
    <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#bs-carousel" data-slide-to="1"></li>
    <li data-target="#bs-carousel" data-slide-to="2"></li>
  </ol>
  

  {/* Wrapper for slides */}
  <div class="carousel-inner">
    <div class="carousel-item item slides active">
      <div class="slide-1"></div>
      <div class="hero">
        <hgroup className="slide-caption1">
            <h4>Welcome To</h4>
            <h2>SACRAMENTO REHAB</h2>
            <h3>Mental Health and Substance Abuse Treatment Facility</h3>
            <h1> " There's Always a Better Way "</h1>        
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/contact">
            <div className="hero-btn">
            <button>CONTACT US</button>
            </div>
            </Link>
          </LinkRoll>
        </hgroup>
      </div>
    </div>
    
    
    <div class="carousel-item item slides">
      <div class="slide-2"></div>
      <div class="hero">        
            <hgroup className="slide-caption2">
              <div className="slide2-img">
              <img src={DHCS} alt="DHCS Logo" loading="lazy" />
              </div>
            <h1> Licenced by the Department of
              <br />Health Care Services</h1>        
        </hgroup>       
        <button class="btn btn-hero btn-lg" >See all features</button>
      </div>
    </div>

    <div class="carousel-item item slides">
      <div class="slide-3"></div>
      <div class="hero">        
        <hgroup className="slide-caption3">
            <h1>THERAPY FOR <br/>INDIVIDUALS, <br/>COUPLES & FAMILIES</h1>  
            <h3>"Your journey begins here"</h3>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/treatment">
            <div className="card-btn">
            <button>Learn More</button>
            </div>
            </Link>
          </LinkRoll>
        </hgroup>
      </div>
    </div>
  </div> 
</div>

</>
  );
};

export default Hero;
