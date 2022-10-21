import React from 'react'
import './TeamStyles.css'

function Team (props) {
  return (

    <div className='team'>
        <div className='container'>
        <div className="content">
            <img className='image' src= {props.Image} alt="staff photo" />
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
         </div>
         </div>
    </div>
  )
}

export default Team;