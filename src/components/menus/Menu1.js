import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./Menu1.css";

import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.webp";

const Menu1 = () => {
  return (
    <>
      <div className="mh-cards-header container">
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


      <div class="card-wrap">

        <Fade left>
        <div className="card">
            <img src={Card1} alt="Mental Health" loading="lazy" />
          <div className="card-caption">
            <h1>Partial Hospitalizaion Program​</h1>
            <p>
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </Fade>


      <Fade left>
        <div className="card">
            <img src={Card3} alt="Mental Health" loading="lazy" />
          <div className="card-caption">
            <h1>Outpatient Program​</h1>
            <p>
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
        </Fade>


        <Fade bottom>
        <div className="card">
            <img src={Card2} alt="Mental Health" loading="lazy" />
          <div className="card-caption">
            <h1>Intensive Outpatient Program</h1>
            <p>
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
    </Fade>


      </div>
    </>
  );
};

export default Menu1;
