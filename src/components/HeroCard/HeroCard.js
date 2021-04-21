import React from 'react'
import './HeroCard.css'

const HeroCard = ({ name, images }) => {

  return (
    <section className='hero-card'>
      <img className='hero-image' src={images}></img>
      <h4 className='hero-name'>{name}</h4>
    </section>
  )
}

export default HeroCard
