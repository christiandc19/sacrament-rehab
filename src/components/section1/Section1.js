import React from "react";
import "./Section1.css";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Card1 from "../../assets/hero-slide-4-min.jpg";
import Card2 from "../../assets/hero-slide-5-min.jpg";
import Card3 from "../../assets/hero-slide-6-min.jpg";

const Section1 = () => {
  return (
    <>


<div className="section1-bg">

<div className="section1-header container">
      <h1>Sacramento Rehab Treatment Center <br /> offers various Mental Health and Substance Abuse Addiction programs</h1>
    </div>


  <div className="section1-content">

<div className="section1 container">

<Fade left>
<div className="card">
  <img class="card-img-top" src={Card1} alt="Mental Health" loading="lazy"/>
  <div class="card-body">
    <h5 class="card-title">SUBSTANCE ABUSE PROGRAMS</h5>
    <p class="card-text">Treatment options for a multitude of substance use disorders. Whether you suffer from alcohol, prescription drugs, or other substance abuse disorders, find better healing with us.</p>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
    <Link to="/substance-abuse">
      <div className="card-btn">
        <button>Learn More</button>
      </div>
    </Link>
    </LinkRoll>
  </div>
  </div>
  </Fade>


<Fade bottom>
<div className="card">
  <img class="card-img-top" src={Card2} alt="Mental Health" loading="lazy"/>
  <div class="card-body">
    <h5 class="card-title">MENTAL HEALTH PROGRAMS</h5>
    <p class="card-text">We provide access to specific mental health services offered by a multidisciplinary team. It is for adults, teenagers and children who present symptoms of the most common mental disorders, such as an anxiety disorder or depression.</p>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
    <Link to="/mental-health">
    <div className="card-btn">
        <button>Learn More</button>
      </div>
    </Link>
    </LinkRoll>
  </div>
</div>
</Fade>



<Fade right>
<div className="card">
  <img class="card-img-top" src={Card3} alt="Mental Health" loading="lazy"/>
  <div class="card-body">
    <h5 class="card-title">JOB ASSISTANCE PROGRAMS</h5>
    <p class="card-text">Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.</p>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
    <Link to="/jobs">
      <div className="card-btn">
        <button>Learn More</button>
      </div>
    </Link>
    </LinkRoll>
  </div>
</div>
</Fade>

</div>
</div>
</div>

    </>
  );
};

export default Section1;
