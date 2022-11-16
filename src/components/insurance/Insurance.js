import React from 'react'
import './Insurance.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'



const Insurance = () => {
    return (
        <>

        <div className='insurance'>
            <div className="container">
                <div className="content">
                    <Fade left>
                    <h1>ACCEPTED INSURANCE</h1>
                    </Fade>
                    <Fade right>
                    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                    </Fade>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                        <button>Call Us Now</button>
                        </Link>
                        </LinkRoll>

                </div>
            </div>
        </div>

            </>

    )
}

export default Insurance
