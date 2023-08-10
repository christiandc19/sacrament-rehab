import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';

import './ResidenceSection.css'


const ResidenceSection = () => {
  return (
<>
<div className="residence-section-header container">
                <h1>OUR HOMES</h1><br/>
                <p>Transitional sober housing focused on healing and long-term recovery
                </p>
</div>




<div className='flex-right container'>
                    <Fade left>
                    <div className='thumbnail'>
                        <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home1.png" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>


                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home2.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home3.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home4.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                 

                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home5.png"  alt="Home" loading="lazy"/>
                    </div>

                    </Fade>                          
                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home6.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                          

                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home7.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>   

                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home8.png"  alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    </div>


<ContactForm />

    </>
  )
}

export default ResidenceSection
