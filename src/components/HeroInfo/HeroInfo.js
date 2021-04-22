import React from 'react'
import './HeroInfo.css'
import PropTypes from 'prop-types'

const HeroInfo = ({ heroes, id }) => {

  const currentHero = heroes.find(hero => hero.id === parseInt(id))
  console.log(currentHero)
  return (
    <>
      {heroes.length &&
        <div className='hero-info-container'>
          <h1>{currentHero.name}</h1>
            <img className='hero-image' src={currentHero.images.lg}></img>
            <ul className='hero-info'>
              <li><b>Full Name:</b> {currentHero.biography.fullName}</li>
              <li><b>Height:</b> {currentHero.appearance.height[0]}</li>
              <li><b>Weight:</b> {currentHero.appearance.weight[0]}</li>
              <li><b>Species:</b> {currentHero.appearance.race}</li>
              <li><b>Alter Ego:</b> {currentHero.biography.alterEgos}</li>
              <li><b>Universe:</b> {currentHero.biography.publisher}</li>
              // <li><b>Overall Power:</b> {currentHero.fullName}</li>
            </ul>
        </div>
      }
    </>
  )
}

export default HeroInfo
