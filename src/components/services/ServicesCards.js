import React from 'react'
import '../../components/services/ServicesCards.css'

function ServicesCards(props) {
  return (
        <div className="servicesCards">
            <div className='serviceCards-logo'>
            <img className='image' src= {props.Image} alt="logo" />
            </div>
            
            <div className='serviceCards-description'>
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
            </div>
            
        </div>
  )
}

export default ServicesCards;