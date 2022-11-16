import React from 'react'
import './MissionSection.css'
import Fade from 'react-reveal/Fade';


import Therapy from '../../assets/therapy2.jpg'
import Staff from '../../assets/staff.jpg'
import Clinic from '../../assets/clinic.jpg'
import Work from '../../assets/employment-assistance2.png'



const MissionSection = () => {
    return (
        <>
        <div className='mission-section'>
            <div className="container">
                <div className="content">
                    <h1>WHAT WE CAN PROVIDE</h1>


                            <div className='flex-right'>
                                <Fade top>
                                <div className='thumbnail'>
                                    <div><img src= { Therapy } alt="Aetna Logo" loading="lazy" />                    
                                        <p>Therapy and support groups for either addiction or mental health disorders</p>
                                </div>
                            </div>
                                </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Staff } alt="Beacon Logo" loading="lazy" /> 
                        <p>Compassionate staff that is dedicated to your success</p>
  
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                        <img src= { Clinic } alt="Bluecross Logo" loading="lazy" />   
                        <p>Evidence-based practices that give you the best chance of recovery</p>

                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Work } alt="Cigna Logo" loading="lazy" /> 
                        <p>There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services.</p>  
                    </div>
                    </Fade>                            
                    
                    </div>
                </div>
            </div>
        </div>



</>
    )
}

export default MissionSection
