import React from 'react'
import './HeroCard.css'
import { Link } from 'react-router-dom'

const HeroCard = ({ name, images, id }) => {

  return (
    <Link to={`heroes/${id}`} key={id} className='hero-card'>
      <section>
        <img className='hero-image' src={images}></img>
        <h4 className='hero-name'>{name}</h4>
      </section>
    </Link>
  )
}

export default HeroCard
