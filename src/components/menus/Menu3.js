import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./Menu3.css";

import Contact2 from "../contact/Contact2";

const Menu3 = () => {
  return (
    <>
    <div className="menu3">
      <div className="menu3-header container">
        <h1>
          SACRAMENTO REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At Sacramento Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>


      <div class="menu3-wrap">

      <Fade top>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Depression</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/depression">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
       </Fade>


       <Fade bottom>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Anxiety</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/anxiety">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Panic Disorder​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/panic-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Stress Disorder​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/acute-stress-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/kratom-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>ADHD​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/adhd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu3-card">
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>PTSD​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/ptsd">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/mdma-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Bipolar Disorder​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/bipolar-disorder">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu3-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/meth-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Schizoaffective​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/schizoaffective">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu3-card">
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu3-card-caption">
            <h1>Schizophrenia​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/schizophrenia">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


      </div>
      </div>


      <Contact2 />
    </>
  );
};

export default Menu3;
