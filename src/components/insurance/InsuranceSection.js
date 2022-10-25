import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './InsuranceSectionStyles.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import MHN from '../../assets/mhn.png'
import Molina from '../../assets/molina-healthcare.png'
import United from '../../assets/united-healthcare.png'
import VerificationForm from '../../assets/verificationForm.pdf'


import { Link as LinkRoll } from 'react-scroll'



const InsuranceSection = () => {
    return (
        <div className='InsuranceSection'>
            <div className="container">
                <div className="content">

                    <Fade top>
                        <div className='flex-left'>
                            <h2><span>WE WORK WITH MAJOR INSURANCE</span></h2>
                            <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                        </div>
                    </Fade>

                    <div className='flex-right'>

                        <Fade top>
                            <div className='insurance-thumbnail'>
                                <img src={Aetna} alt="Aetna Logo" loading="lazy" />
                            </div>
                        </Fade>


                        <Fade bottom>
                            <div className='insurance-thumbnail'>
                                <img src={Beacon} alt="Beacon Logo" loading="lazy" />
                            </div>
                        </Fade>

                        <Fade top>
                            <div className='insurance-thumbnail'>
                                <img src={Bluecross} alt="Bluecross Logo" loading="lazy" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className='insurance-thumbnail'>
                                <img src={Cigna} alt="Cigna Logo" loading="lazy" />
                            </div>
                        </Fade>

                        <Fade top>
                            <div className='insurance-thumbnail'>
                                <img src={MHN} alt="Bluecross Logo" loading="lazy" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className='insurance-thumbnail'>
                                <img src={Molina} alt="Cigna Logo" loading="lazy" />
                            </div>
                        </Fade>

                        <Fade top>
                            <div className='insurance-thumbnail'>
                                <img src={United} alt="Cigna Logo" loading="lazy" />
                            </div>
                        </Fade>

                    </div>

                    <div className='home-insurance-cta'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                            <Link to='/insurance'>

                                <div><button>Learn More</button></div>

                            </Link>
                        </LinkRoll>
                        <div><button  className='download'><a href={VerificationForm} download className="btn btn-primary">Downnload Verification Form</a></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceSection
