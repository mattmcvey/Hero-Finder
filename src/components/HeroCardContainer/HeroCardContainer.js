import React from 'react'
import HeroCard from '../HeroCard/HeroCard'
import './HeroCardContainer.css'

const HeroCardContainer = ({ heroes }) => {

  const heroCard = heroes.map(hero => {

    return (
      <HeroCard
        images={hero.images.md}
        name={hero.name}
        id={hero.id}
        key={hero.id}
      />
    )
  })

  return (
    <section className='hero-card-container'>
      {heroCard}
    </section>
  )
}

export default HeroCardContainer
