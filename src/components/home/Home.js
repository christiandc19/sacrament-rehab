import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'

import Services from '../services/Services';
import ContactForm from '../contact/ContactForm';


const Home = () => {
    return (
        <>
        <div className='hero'>
            <div className="home-container">
                <div className="content">
                    <Fade top>
                    <h1>SACRAMENTO REHAB</h1>
                    </Fade>
                        <Fade right>
                        <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY</h2>
                        </Fade>
                        <Fade left>
                        <p>Find your happiness and learn to put it first.</p>
                        </Fade>
                        <br />
                        <Fade bottom>
                        <Link to="/treatment">
                        <button>Learn More</button>
                        </Link>
                        </Fade>
                </div>
            </div>
        </div>

        <Services />
        <ContactForm />



        </>
    )
}

export default Home






























