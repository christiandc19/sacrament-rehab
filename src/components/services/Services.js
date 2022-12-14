import React from 'react'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import './Services.css'
import './ServicesCards.css'
import Fade from 'react-reveal/Fade';
import ServicesCards from './ServicesCards';
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services3 from '../../assets/addiction-treatment.png'
import Services4 from '../../assets/employment-assistance.png'

import Overlay from '../../assets/overlay.mp4'



const Services = () => {
  return (
    <>
    <div className='services'>

        <div className="container">
            <Fade top>
            <div className="content">
                <h1>OUR SERVICES</h1>
                <p>At Sacramento Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
            </Fade>
        </div>
    </div>

{/* ---------------------------------------------- START of CARDS -------------------------------------------------*/}

<div className='main'>
<Fade bottom>
    <ServicesCards
    Image = { Services1 }
    CardName="MENTAL HEALTH SERVICES​"
    Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
    />

<ServicesCards
    Image = { Services2 }
    CardName="SUBSTANCE USE"
    Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
    />
</Fade>

<Fade bottom>
<ServicesCards
    Image = { Services3 }
    CardName="ADDICTION TREATMENT"
    Description="We offer programs that's tailored to the needs of the client. With the help of our individualized treatment programs, clients can find the healing and support they need."
    />


<ServicesCards
    Image = { Services4 }
    CardName="EMPLOYMENT ASSISTANCE"
    Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
    />
</Fade>
    </div>

    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
    <Link to="/treatment">
    <div className='service-cards-btn'>
        <button>Learn More</button>
    </div>
    </Link>
    </LinkRoll>

{/* ---------------------------------------------- END of CARDS -------------------------------------------------*/}



{/* ---------------------------------------------- WHAT WE DO -------------------------------------------------*/}
            <div className='what-we-do'>
                         <video src={Overlay} autoPlay muted loop playsInline className='what-we-do-video-bg' />

                <div className="container">
                    <div className="content">
                        
                <h1>WHAT WE DO</h1>
                            <br /> <br />
                            <p>
                            At Get Real Recovery Treatment Center, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.
                        </p>
                </div>
            </div>
            </div>
{/* ---------------------------------------------- END of WHAT WE DO -------------------------------------------------*/}

  </>


  )
}

export default Services
