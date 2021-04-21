import React from 'react'
import './HeroCard.css'

const HeroCard = ({ name, images }) => {
  
  return (
    <section className='hero-card'>
      <img className='hero-image' src={images}></img>
      <h2 className='hero-name'>{name}</h2>
    </section>
  )
}

export default HeroCard
