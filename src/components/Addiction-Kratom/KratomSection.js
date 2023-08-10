import React from 'react'
import Contact2 from '../contact/Contact2'
import { FaRegStar } from 'react-icons/fa';

import './KratomSection.css'

const KratomSection = () => {
  return (
<>
<div className="cocaine-section-header container">
                <h1>KRATOM</h1><br/>
                <p>Kratom (a.k.a. Ketum, kakuam, or biak) is an herbal substance derived from the leaf of a Southeast Asian tree. Although it is relatively new on the scene and estimated kratom usage in the United States is not clear, it has been used as a traditional remedy in Southeast Asia for centuries.<br/> <br/>
                Users of kratom feel a stimulating sensation similar to those associated with opioids (relaxation, euphoria, relief). Kratom is typically ingested by capsule or by mixing in a drink. It produces an opioid-like sensation that begins place quickly, almost immediately. <br/><br/>
                Those who use kratom cite both mental and physical health reasons for taking the drug, ranging from anxiety and depression to pain management for their decision to use kratom. Those seeking kratom typically take it as a method of self-medication to treat a variety of predicaments, including: <br/><br/>
                <ul>
                <li><FaRegStar className='star'/> Anxiety</li><br/>
                <li><FaRegStar className='star'/> Depression</li><br/>
                <li><FaRegStar className='star'/> Fatigue</li><br/>
                <li><FaRegStar className='star'/> Drug cravings</li><br/>
                <li><FaRegStar className='star'/> Opioid withdrawal</li><br/>
                </ul>
                </p>
</div>

<Contact2 />

    </>
  )
}

export default KratomSection
