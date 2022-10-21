import React from 'react'
import './InsuranceStyles.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';



const Insurance = () => {
    return (
        <>

        <div className='insurance'>
            <div className="container">
                <div className="content">
                    <Fade left>
                    <h2><span>Accepted</span> Insurance</h2>
                    </Fade>
                    <Fade right>
                    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                    </Fade>

                    <Link to="/contact">
                    <div><button>Contact Us</button></div>
                    </Link>
                </div>
            </div>
        </div>

            </>

    )
}

export default Insurance
