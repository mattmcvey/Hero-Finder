import React from 'react'
import './RandomThree.css'
import HeroCard from '../HeroCard/HeroCard'

const RandomThree = ({ heroes }) => {
  const randomIndex = (heroes) => {
    return Math.floor(Math.random() * heroes.length)
  }
  const heroOne = heroes[randomIndex(heroes)]
  const heroTwo = heroes[randomIndex(heroes)]
  const heroThree = heroes[randomIndex(heroes)]
  
  return (
    <section>
      <h3 className='hero-header'>HEROES OF THE DAY</h3>
        <div className='top-three'>
          {heroes.length &&
          <HeroCard
            images={heroOne.images.md}
            name={heroOne.name}
            id={heroOne.id}
            key={heroOne.id}
          />}

          {heroes.length &&
          <HeroCard
            images={heroTwo.images.md}
            name={heroTwo.name}
            id={heroTwo.id}
            key={heroTwo.id}
          />}

          {heroes.length &&
          <HeroCard
            images={heroThree.images.md}
            name={heroThree.name}
            id={heroThree.id}
            key={heroThree.id}
          />}
        </div>
    </section>
  )
}

export default RandomThree
