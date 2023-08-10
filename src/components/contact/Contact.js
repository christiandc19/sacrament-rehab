import React from "react";
import Fade from 'react-reveal/Fade';

import Contact2 from "./Contact2";
import './Contact.css'



const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>

            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is available to assist you. </p>
            </Fade>
            <Fade left>
                  <h1> +1 (323) 329-5006</h1>
            </Fade>
            </div>
     </div>

      <Contact2 />

      </>
    )
}

export default Contact