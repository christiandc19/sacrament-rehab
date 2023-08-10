import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./Menu2.css";

import Contact2 from "../contact/Contact2";

const Menu2 = () => {
  return (
    <>
    <div className="menu2">
      <div className="menu2-header container">
        <h1>
          SACRAMENTO REHAB TREATMENT CENTER OFFERS VARIOUS SUBSTANCE ABUSE ADDICTION
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


      <div class="menu2-wrap">

      <Fade top>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Alcohol Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
       </Fade>


       <Fade bottom>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Cocaine Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="Mental Health" loading="lazy" />
          
          <div className="menu2-card-caption">
            <h1>Heroin Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Fentanyl Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/fentanyl">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/kratom-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Kratom Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/kratom">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu2-card">
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Opiate Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/Opiate">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/mdma-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>MDMA Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mdma">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/meth-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Meth Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/meth">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu2-card">
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Opioid Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opioid">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/oxycodone-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Oxycodone Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/oxycodone">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade top>
        <div className="menu2-card">
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Prescriptions Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="menu2-card">
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/xanax-addiction.jpg' alt="Mental Health" loading="lazy" />
          <div className="menu2-card-caption">
            <h1>Xanax Addiction​</h1>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax">
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

export default Menu2;
