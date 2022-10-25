import React, {useRef} from "react";
import Fade from 'react-reveal/Fade';
import VerificationForm from '../../assets/verificationForm.pdf'
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


import './ContactStyles.css';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

// Popup message after send button is clicked
  //   const feedbackEl = document.querySelector(".feedback");
  //   feedbackEl.setAttribute("class", "feedback");
  // setTimeout(function() {
  //   feedbackEl.setAttribute("class", "feedback hide");
  // }, 4000);


                  //    Service Id        Template Id                 Public Key (Account Tab) 
   emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

     e.target.reset()
 };

    return (
      <>

<div className='contact-hero'>
       <div className="container">
            <div className="content">
            <Fade top>
                    <h1><span>Have Some </span>Questions?</h1>
            </Fade>
            </div>
     </div>
</div>


<div className='contact'>
          <div className="map">

                <div className="location">
                  <h1 className="location-header">Get In Touch</h1><br/>
                  <p><AiOutlinePhone /> +1 (844) 311-1705  </p><br/>
                  <p><AiOutlineMail /> info@sacramentorehab.com  </p><br/>
                  <p><BsFillPinMapFill /> 30290 Rancho Viejo Rd, San Juan Capistrano California</p><br/>
                  <p className="admission"> Please call our admission department or fill out the form if you have any questions.</p>
                </div>

                <div>
                <iframe  title='map' width="750" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=30290%20Rancho%20Viejo%20Rd,%20San%20Juan%20Capistrano%20California+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe>
                </div>
          </div>

          <div className="container contact-container">
              <form ref={form} onSubmit={sendEmail}>
              <h1>SEND A MESSAGE</h1>
              <input className="user-input" type="text" name='name' placeholder='Name' required />
              <input className="user-input" type="text" name='email' placeholder='Email' required />
              <input className="user-input" type="text" name='email' placeholder='Subject' required />

              <textarea className="user-input email-input" name="message" rows="4" placeholder="How can we help?" required ></textarea>
              <div className="submit-btn">
              <button type='submit' className="btn-modal btn btn-primary">Send</button>
              </div>
              </form>
          </div>
</div>
      </>
    )
}



export default Contact