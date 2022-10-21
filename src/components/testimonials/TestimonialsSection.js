import React from 'react'
import './TestimonialsSectionStyles.css'
import Fade from 'react-reveal/Fade';

import Ross from '../../assets/ross.jpg'
import Rachel2 from '../../assets/rachel2.jpg'
import Joey from '../../assets/joey.jpg'
import Monica from '../../assets/monica.jpg'
import Chandler from '../../assets/chandler.jpg'


const TestimonialsSection = () => {
    return (
        <>
        <div className='testimonials-section'>
            <div className="container">
                <div className="content">
                    <h2><span>Hear</span> What Are Clients Say</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>


                            <div className='flex-right'>

                            <Fade top>
                                <div className='thumbnail-container'>
                                    <div>
                                        <img src={ Rachel2 } alt="Rachel" loading='lazy'/>
                                        {/* <img src= { Therapy } alt="Aetna Logo" loading="lazy" />                     */}
                                        <p>"Love this place. My counselors are the best! Great meetings, great help, great people! Helps you get to where you want to be in life"</p>
                                        <p>- Rachel</p>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='thumbnail-container'>
                                    <img src= { Ross } alt="Beacon Logo" loading="lazy" /> 
                                    <p>"I had been to outpatients in the past where there was little addiction expertise, but at Helping Hands, I found staff that were truly invested in helping me get sober and restore my mental health."</p>
                                    <p>- Ross</p>
                                </div>
                            </Fade>

                            <Fade top>
                                <div className='thumbnail-container'>
                                    <img src= { Joey } alt="Bluecross Logo" loading="lazy" />   
                                    <p>Help me sort out a lot of the chaos going on in my life and helped me lay a good foundation for what I want my life to look like.</p>
                                    <p>- Joey</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='thumbnail-container'>
                                    <img src= { Monica } alt="Cigna Logo" loading="lazy" /> 
                                    <p>There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services.</p>  
                                    <p>- Monica</p>
                                </div>
                            </Fade>                            
                    
                            <Fade top>
                                <div className='thumbnail-container'>
                                    <img src= { Chandler } alt="Bluecross Logo" loading="lazy" />   
                                    <p>The staff is great. They really want you to succeed and will go above and beyond for you. </p>
                                    <p>- Chandler</p>
                                </div>
                            </Fade>


                    </div>
                </div>
            </div>
        </div>



</>
    )
}

export default TestimonialsSection
