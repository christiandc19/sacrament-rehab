import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "./ContactForm";


import './Contact.css';



const Contact = () => {
    return (
      <>

<div className='contact-hero'>
       <div className="container">
            <div className="content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            </div>
     </div>
</div>

      <ContactForm />
      </>
    )
}



export default Contact