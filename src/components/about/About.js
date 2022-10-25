import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './AboutStyles.css'
import Team from './Team'

import Team1 from '../../assets/team-image-1.jpg'
import Team2 from '../../assets/team-image-2.jpg'
import Team3 from '../../assets/team-image-3.jpg'
import Team4 from '../../assets/team-image-4.jpg'
import Team5 from '../../assets/team-image-5.jpg'
import Team6 from '../../assets/team-image-6.jpg'


const About = () => {
    return (

        <>
        <div className='about'>
            <div className="container">
                <div className="content">
                    <Fade right>
                    <h1>About Us</h1>
                    </Fade>
                    <Fade left>
                    <p>
                    In many cases, medically supervised detox near Los Angeles is the right starting point for overcoming addiction to alcohol or dependence of prescription drugs or narcotics. Sunset Rehab strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery. Detoxing by yourself or going abruptly is often dangerous. Sunset Rehab lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders. 
                    </p>
                    </Fade>
                <div>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
                </div>
                </div>
            </div>
        </div>

        <div className='about-section1'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Meet Our Team</h1>
                    </Fade>

                    <Fade bottom>
                    <p>
                    <br />
                    Our multidisciplinary team consists of psychiatrists, therapists, social workers, and case managers. They work collaboratively and diligently with each teen to create a supportive environment for change and growth.
                    </p>
                    </Fade>
                </div>
            </div>
        </div>

        <div className='main'>
        <Team 
            Image = { Team1 }
            CardName="John Doe"
            Description="Clinical Manager"        
        />

        <Team 
            Image = { Team2 }
            CardName="Jane Doe"
            Description="Case Manager"        
        />
        
        <Team 
            Image = { Team3 }
            CardName="Joey Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team4 }
            CardName="Ross Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team5 }
            CardName="Rachel Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team6 }
            CardName="Monica Doe"
            Description="Behavioral Therapist"        
        />

    </div>

        </>
    )
}

export default About
