import React from 'react'
import './HeroCard.css'
import { Link } from 'react-router-dom'

const HeroCard = ({ name, images, id, favorited}) => {

  return (
    <Link to={`heroes/${id}`} key={id} className='hero-card'>
      <section>
        <img className='hero-image' src={images} alt='Hero Card'></img>
        <h4 className='hero-name'>{name}</h4>
      </section>
    </Link>
  )
}

export default HeroCard
