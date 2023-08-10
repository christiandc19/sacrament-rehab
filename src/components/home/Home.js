import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../section2/Section2';
import Contact2 from '../contact/Contact2';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import TherapyMH from '../therapyMH/TherapyMH';
import Section1 from '../section1/Section1';
// import Section3 from '../section3/Section3';



const home = () => {
  return (
    <>
    <Section1 />
    {/* <Section3 /> */}
    <WhatWeDo />
    <TherapySA />
    <TherapyMH />
    <InsuranceSection />
    <MissionHome />
    <Contact2 />
    </>
  )
}

export default home
