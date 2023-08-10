import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";

import "./TherapySA.css";
import { Link } from "react-router-dom";

const TherapySA = () => {
  return (
    <>
      <div className="TherapySA">

      <div className="sa-content container">
                <h1>Types of Substance Addiction Disorder We Treat</h1>
                <p>
                  Here at Sacramento Rehab, we offer a full array of affordable
                  drug rehab programs that can take addicts from detox to
                  inpatient or outpatient care and back home again.
                </p>
                <br />
    </div>


        <div className="sa-flex container">

        <Fade left>
        <div className="sa-card">
          <img class="card-img-top" src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="Mental Health" loading="lazy"/>
          <div class="card-body">
            <h5 class="card-title">ALCOHOL ADDICTION</h5>
            <p class="card-text">Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.</p>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/alcohol">
            <div className="card-btn">
              <button>Learn More</button>
            </div>
            </Link>
            </LinkRoll>
          </div>
          </div>
        </Fade>




        <Fade left>
        <div className="sa-card">
          <img class="card-img-top" src='https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg' alt="Mental Health" loading="lazy"/>
          <div class="card-body">
            <h5 class="card-title">COCAINE ADDICTION</h5>
            <p class="card-text">Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.</p>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/cocaine">
            <div className="card-btn">
              <button>Learn More</button>
            </div>
            </Link>
            </LinkRoll>
          </div>
          </div>
        </Fade>




        <Fade right>
        <div className="sa-card">
          <img class="card-img-top" src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="Mental Health" loading="lazy"/>
          <div class="card-body">
            <h5 class="card-title">FENTANYL ADDICTION</h5>
            <p class="card-text">Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.</p>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/fentanyl">
            <div className="card-btn">
              <button>Learn More</button>
            </div>
            </Link>
            </LinkRoll>
          </div>
          </div>
        </Fade>


        
        <Fade right>
        <div className="sa-card">
          <img class="card-img-top" src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="Mental Health" loading="lazy"/>
          <div class="card-body">
            <h5 class="card-title">HEROIN ADDICTION</h5>
            <p class="card-text">Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.</p>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/heroin">
            <div className="card-btn">
                <button>Learn More</button>
            </div>
            </Link>
            </LinkRoll>
          </div>
          </div>
        </Fade>

        </div>


        <div className="TherapySA-btn hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                <div className="card-btn">
                  <button>VIEW ALL</button>
                </div>
                </Link>
                </LinkRoll>
                </div>



      </div>
    </>
  );
};

export default TherapySA;
