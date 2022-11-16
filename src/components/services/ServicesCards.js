import React from 'react'
import '../../components/services/ServicesCards.css'

function ServicesCards(props) {
  return (
        <div className='card-container'>
            <p className="card-name">{props.CardName}</p>
            <div className="servicesCards">
            <img className='image' src= {props.Image} alt="logo" />
            </div>            
            <div>
            <p className='card-description'>{props.Description}</p>
            </div>
            
        </div>
  )
}

export default ServicesCards;