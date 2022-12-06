import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


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
    <div className="container mainContainer-contactForm">
            <div className='contactForm'>
                <div className="map">
                    <div className="location">
                        <h1 className="location-header">Get In Touch</h1><br />
                        <p><AiOutlinePhone /><a href="tel:3233295006">+1 323 329-5006</a></p><br />
                        <p><AiOutlineMail /> info@sacramentorehab.biz  </p><br />
                        <p><BsFillPinMapFill /> 7248 S Land Park Dr, STE 100, Sacramento CA 95831 </p><br />
                        <p className="admission">Please call our admission department or fill out the form if you have any questions.</p>
                    </div>

                    {/* <div>
                        <iframe title="map" width="500" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=1800%20Vine%20Street%20Los%20Angle&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div> */}
                </div>

                <div className="contact-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>SEND A MESSAGE</h1>
                        <input className="user-input" type="text" name='name' placeholder='Name' required />
                        <input className="user-input" type="text" name='email' placeholder='Email' required />
                        <input className="user-input" type="text" name='email' placeholder='Subject' required />

                        <textarea className="user-input email-input" resize= "none" name="message" rows="4" placeholder="How can we help?" required ></textarea>
                        <div className="submit-btn">
                            <button type='submit' className="btn-modal btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
        </>
    )
}

export default ContactForm