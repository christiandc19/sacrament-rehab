import React from "react";
import Fade from "react-reveal/Fade";
import "./TherapyMH.css";


import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Anxiety from "../../assets/anxiety.png";
import Depression from "../../assets/depression.png";
import Bipolar from "../../assets/bipolar.png";
import Stress from "../../assets/stress.png";


const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">
          <Fade left>
            <div className="TherapyMH-left">
              <div className="left-content container">
                <h1>MENTAL HEALTH TREATMENT</h1>
                <p>Recovery begins here.</p>
                <br />
              </div>
            </div>
          </Fade>

          <div className="TherapyMH-right">

            <div className="box1 box">
              <div className="box-content">
                <div className="box-icon">
                  <img src={Anxiety} alt="Anxiety" loading="lazy" />
                </div>
                    <h1>ANXIETY</h1>
                    <p>
                      Inability to manage one’s drinking habits. It is the most
                      acute form of alcohol abuse.
                    </p>
              </div>
            </div>


            <div className="box2 box">
              <div className="box-content">
              <div className="box-icon">
                  <img src={Depression} alt="Depression" loading="lazy" />
                </div>
                <h1>DEPRESSION</h1>
                <p>
                  Abuse of prescription medications can be recreational, due to
                  addiction, or both, and the consequences can be severe or
                  fatal.
                </p>
              </div>
            </div>


            <div className="box3 box">
              <div className="box-content">
              <div className="box-icon">
                  <img src={Bipolar} alt="Bipolar" loading="lazy" />
                </div>
                <h1>BIPOLAR</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>


            <div className="box4 box">
              <div className="box-content">
              <div className="box-icon">
                  <img src={Stress} alt="Stress" loading="lazy" />
                </div>
                <h1>STRESS DISORDER</h1>
                <p>
                  When taken in high doses, Xanax can lead to serious side
                  effects, ranging from coma, to respiratory arrest, and even
                  death.
                </p>
              </div>
            </div>
          </div>


            <div className="TherapyMH-btn">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health">
                  <button>VIEW ALL</button>
                </Link>
                </LinkRoll>
                </div>

          
        </div>
      </div>
    </>
  );
};

export default TherapyMH;
