import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'

import Services from '../services/Services';
import ContactForm from '../contact/ContactForm';

import BgVideo from '../../assets/hero-vbg.mp4'
import InsuranceSection from '../insurance/InsuranceSection';


const Home = () => {
    return (
        <>
        <div className='hero'>
             <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />

            <div className="hero-container">
                <div className="content">
                    
                    <h1>SACRAMENTO REHAB</h1>
                
                    <Fade bottom>
                        <h2 className='subtitle'>Mental Health  Treatment Facility </h2>
                    </Fade>
                        <p>Find your happiness and learn to put it first.</p>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        <Services />
        <InsuranceSection />
        <ContactForm />



        </>
    )
}

export default Home






























