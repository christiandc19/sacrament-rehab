import React from 'react'
import Fade from 'react-reveal/Fade';

import Wave from '../../assets/waves.svg'

import './Php.css'

const PHP = () => {
    return (
        <>
        <div className='php submenu'>

            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x/>
            </div>

                <div className="php-content">
                    <Fade top>
                    <h2>- SUBSTANCE ABUSE</h2>
                    <h1>Partial Hospitalization Program</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default PHP


{/* <p>Addiction can take a heavy toll on your life. It can disrupt your eating and sleeping patterns, stealing your health from you. They can cause you to do things that you would never have expected, such as lying about your substance use or stealing to fund your dependence. As a result of these actions, you may fear that you have permanently damaged your relationships with your loved ones. In such cases, you may feel that you have gone so far, done so many things, that it is impossible to go back. */}

// Fortunately, our treatment programs give you the path to healing/recovery. Through our PHP program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
