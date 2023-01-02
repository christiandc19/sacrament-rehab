import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import Service1 from '../../assets/treatment-image-1.jpg'
import Service2 from '../../assets/treatment-image-2.jpg'

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


const Treatment = () => {
    return (
        <>

{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment'>
            <div className="container">
                <div className="content">
                    <Fade right>
                    <h1>TREATMENT</h1>
                    </Fade>
                    <Fade left>
                    <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
                    </Fade>
                </div>
            </div>
        </div>

{/* KEY AREAS / FUNDAMENTALS / REVISIONS */}

            <div className='container keyAreas-header'>
                <h1>KEY AREAS / FUNDAMENTALS</h1>
                <p>
                The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed. 
                </p>
            </div>

<div className='keyAreas'>
    <div className='keyAreas-content'>
            <div className='keyAreas-description'>
                    <p>
                    Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                    </p><br />
                    <p>
                    Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc. 
                    </p><br />
                    <p>
                    Counselor and client will set clear and tangible goals regarding above mentioned obstacles
                    </p><br />
                    <p>
                    Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals. 
                    </p> <br />
                    <p>
                    Counselor and client discuss systems for working through hurdles. 
                    </p> <br />
                    <p>
                    Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.      
                    </p>
            </div>

            <div className='keyAreas-image'>
                    <img src={ Service1 } alt="" />
            </div>
    </div>    
</div>

            <div className='container revisions-header'>
                <Fade left>
                    <h1>REVISIONS</h1>
                    <p>
                    As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.
                    </p>
                </Fade>
            </div>


{/* RECREATIONS */}



<div className='reacreations'>
    <div className='reacreations-content'>

            <div className='reacreations-image'>
                    <img src={ Service2 } alt="" />
            </div>


            <div className='reacreations-description'>
                    <p>
                    During treatment we promote having fun in sobriety. Clients learn how to develop interests and hobbies that do not include drugs and alcohol. Clients must be cleared by the doctor to participate. Organized activities may include but are not limited to:                    
                    </p><br />
                    
                    <p><span><RiMovieFill /></span> Movies</p>
                    <p><span><GiBowlingStrike /></span> Bowling</p>
                    <p><span><FaUmbrellaBeach /></span> Beach/Lake Activities</p>
                    <p><span><FaGolfBall /></span> Minature Golf</p>
                    <p><span><IoIosBonfire /></span> Bonfires</p>
                    <p><span><GiSparkles /></span> Amusement Parks </p>
                    <p><span><MdSportsSoccer /></span> Sporting events</p>
                    <p><span><FaHiking /></span> Hiking/Nature walks</p>
                    <p><span><MdPool /></span> Community pool</p>
                    <p><span><MdVolunteerActivism /></span> Sober events/fundraisers </p>
                    </div>
    </div>    
</div>


            <div className='container revisions-header'>
                <Fade left>
                    <p>For more information about our addiction treatment programs, please contact Sacramento Rehab Center today at <b><span> 323 329-5006.</span></b></p>
                </Fade>
            </div>



        </>
    )
}

export default Treatment
