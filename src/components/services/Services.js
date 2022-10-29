import React from 'react'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import './ServicesStyles.css'
import './ServicesCardsStyles.css'
import Fade from 'react-reveal/Fade';
import ServicesCards from './ServicesCards';
import Services1 from '../../assets/mental-illness.jpg'
import Services2 from '../../assets/substance-use.jpg'
import Services3 from '../../assets/addiction-treatment.jpg'
import Services4 from '../../assets/employment-assistance.jpg'
import Service3 from '../../assets/home-image1.jpg'


const Services = () => {
  return (
    <>
    <div className='services'>
        <div className="container">
            <Fade top>
            <div className="content">
                <h1>OUR SERVICES</h1>
                <p>Treatment options for a multitude of substance use disorders. Whether you suffer from alcohol, drugs, prescriptions, or any other addiction disorders, our team is ready to help you. </p>
            </div>
            </Fade>
        </div>
    </div>

{/* ---------------------------------------------- START of CARDS -------------------------------------------------*/}

<div className='main'>
<Fade bottom>
    <ServicesCards
    Image = { Services1 }
    CardName="Mental Health Services​"
    Description="Mental and addiction disorders often go hand in hand, and so can treatment. In the event of co-occurring disorders, we address both conditions simultaneously, to make sure we treat the entire situation at once."
    />

{/* <ServicesCards
    Image = { Services2 }
    CardName="Substance Use"
    Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
    />
</Fade>

<Fade bottom>
<ServicesCards
    Image = { Services3 }
    CardName="Addiction Treatment"
    Description="We offer programs that's tailored to the needs of the client. With the help of our individualized treatment programs, clients can find the healing and support they need."
    /> */}


<ServicesCards
    Image = { Services4 }
    CardName="Employment Assistance"
    Description="Land a job that works for you. Our jobs program meets all your needs while you search for employment. Get resume help, resources for a new interview wardrobe, interview training, and transportation to and from the interview."
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



{/* ---------------------------------------------- THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='hr-container'/>

<div className='service-3'>
      <div className='service-3-description'>
        <Fade left>

                    <h2> What We Do </h2>
                    <br /> <br />
                    <p>
                    At Get Reak Treatment Center, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    </p><br />
                    <p>
                    Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                    </p><br />
        </Fade>


        </div>
                <div className='service-3-image'>
                    <img src={ Service3 } alt="" />
                </div>
        </div>

{/* ---------------------------------------------- END of THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='hr-container'/>


  </>


  )
}

export default Services
