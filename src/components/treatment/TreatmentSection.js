import React from 'react'
import Fade from 'react-reveal/Fade';

import TreatmentImage1 from '../../assets/treatment-1.jpg'
import TreatmentImage2 from '../../assets/treatment-2.jpg'

import { FaRegStar } from 'react-icons/fa';
import { RiMovieFill } from 'react-icons/ri';
import { GiBowlingStrike } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaGolfBall } from 'react-icons/fa';
import { IoIosBonfire } from 'react-icons/io';
import { GiSparkles } from 'react-icons/gi';
import { MdSportsSoccer } from 'react-icons/md';
import { FaHiking } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';
import { MdVolunteerActivism } from 'react-icons/md';


import './TreatmentSection.css'


const TreatmentSection = () => {
  return (
    <>
    <Fade bottom>
      <div className='container treatment-section-overview'>
      <h1>OVERVIEW</h1><br/>
      <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
      </div>
    </Fade>


    <div className='treatment-section-tile'>
    <Fade left>
        <div className='tile-description'>
            <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.
            <br/><br/>
            Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
            </p>
        </div>
    </Fade>

    <Fade right>
        <div className='tile-image'>
            <img src={TreatmentImage1} alt="Rehab Team" loading="lazy" />
        </div>
    </Fade>

    </div>




    <div className='treatment-section-tile'>
    <Fade right>
        <div className='tile-image'>
            <img src={TreatmentImage2} alt="Rehab Team" loading="lazy" />
        </div>
    </Fade>
        
    <Fade left>
        <div className='tile-description'>
            <p>
            Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc.
            <ul> <br/>
                <li>
                <FaRegStar className='star'/> Counselor and client will set clear and tangible goals regarding above mentioned obstacles.
                </li><br/>
                <li>
                <FaRegStar className='star'/> Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.
                </li><br/>
                <li>
                <FaRegStar className='star'/> Counselor and client discuss systems for working through hurdles. Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.
                </li>
            </ul>
            </p>
        </div>
    </Fade>
    </div>


    <div className='container treatment-section-activities'>
    <Fade left>
        <h1>RECREATIONS</h1>
    </Fade>

    <Fade right>
        <p>
        As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.
        </p>
    </Fade>
    </div>


    <div className='container activity-box-main'>

    <Fade bottom>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <RiMovieFill /></span></p>
                <p>MOVIES</p>
            </div>
        </div>
    </Fade>

    <Fade top>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <GiBowlingStrike /></span></p>
                <p>BOWLING</p>
            </div>
        </div>
    </Fade>

    <Fade bottom>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <FaUmbrellaBeach /></span></p>
                <p>BEACH LAKE</p>
            </div>
        </div>
    </Fade>

    <Fade top>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <FaGolfBall /></span></p>
                <p>MINIATURE GOLF</p>
            </div>
        </div>
    </Fade>

    <Fade bottom>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <IoIosBonfire /></span></p>
                <p>BONFIRE</p>
            </div>
        </div>
    </Fade>

    <Fade top>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <GiSparkles /></span></p>
                <p>THEME PARKS</p>
            </div>
        </div>
    </Fade>

    <Fade bottom>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <MdSportsSoccer /></span></p>
                <p>SPORTING EVENTS</p>
            </div>
        </div>
    </Fade>

    <Fade top>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <FaHiking /></span></p>
                <p>HIKING</p>
            </div>
        </div>
    </Fade>

    <Fade bottom>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <MdPool /></span></p>
                <p>POOL</p>
            </div>
        </div>
    </Fade>

    <Fade top>
        <div className='activity-box'>
            <div className='activity-icon'>
                <p><span> <MdVolunteerActivism /></span></p>
                <p>FUND RAISERS</p>
            </div>
        </div>
    </Fade>
    
    </div>


    </>
  )
}

export default TreatmentSection