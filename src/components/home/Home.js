import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'

import BgVideo from '../../assets/hero-vbg.mp4'

// import HeroLogo from '../../assets/sacramento-logo.png'

import Services from '../services/Services';
import ContactForm from '../contact/ContactForm';


const Home = () => {
    return (
        <>
        <div className='hero'>
        <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />
            <div className="home-container">
                <div className="content">
                    <h1>SACRAMENTO REHAB</h1>
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






























