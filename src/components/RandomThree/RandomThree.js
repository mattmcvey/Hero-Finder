import React from 'react'
import './RandomThree.css'
import HeroCard from '../HeroCard/HeroCard'
import PropTypes from 'prop-types'

const RandomThree = ({ heroes }) => {
  const randomIndex = (heroes) => {
    return Math.floor(Math.random() * heroes.length)
  }
  let heroLength = true
  if(!heroes.length) {
    heroLength = false
  }
  const heroOne = heroes[randomIndex(heroes)]
  const heroTwo = heroes[randomIndex(heroes)]
  const heroThree = heroes[randomIndex(heroes)]

  return (
    <section>
      <h2 className='hero-header'>FEATURED HEROES</h2>
        <div className='top-three'>
          {!heroLength && <h2>Loading...</h2>}
          {heroLength &&
          <HeroCard
            images={heroOne.images.md}
            name={heroOne.name}
            id={heroOne.id}
            key={heroOne.id}
            favorited={false}
          />}

          {heroLength &&
          <HeroCard
            images={heroTwo.images.md}
            name={heroTwo.name}
            id={heroTwo.id}
            key={heroTwo.id}
            favorited={false}
          />}

          {heroLength &&
          <HeroCard
            images={heroThree.images.md}
            name={heroThree.name}
            id={heroThree.id}
            key={heroThree.id}
            favorited={false}
          />}
        </div>
    </section>
  )
}

export default RandomThree

RandomThree.propTypes = {
  heroes: PropTypes.array
}
