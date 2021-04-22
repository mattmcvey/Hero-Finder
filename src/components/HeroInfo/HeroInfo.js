import React from 'react'
import './HeroInfo.css'
import PropTypes from 'prop-types'

const HeroInfo = ({ heroes, id }) => {

  const currentHero = heroes.find(hero => hero.id === parseInt(id))

  if(heroes.length && currentHero.appearance.height[0] === '-'){
    currentHero.appearance.height[0] = 'unknown'
  }

  if(heroes.length && currentHero.appearance.weight[0] === '- lb'){
    currentHero.appearance.weight[0] = 'unknown'
  }

  const overallPower = () => {
    const powers = Object.keys(currentHero.powerstats)
    console.log(powers)
    let totalPower = 0
    powers.forEach(power => {
      totalPower += currentHero.powerstats[power]
    })
    return totalPower
  }

  return (
    <>
      {!heroes.length && <h2>Loading...</h2>}
      {heroes.length &&
        <div className='hero-info-container'>
          <h1>{currentHero.name}</h1>
            <img className='hero-image' src={currentHero.images.lg}></img>
            <div className='general-info'>
              <h3>General Info</h3>
              <ul className='hero-info'>
                <li><b>Full Name:</b> {currentHero.biography.fullName}</li>
                <li><b>Height:</b> {currentHero.appearance.height[0]}</li>
                <li><b>Weight:</b> {currentHero.appearance.weight[0]}</li>
                <li><b>Overall Power:</b> {overallPower()}</li>
              </ul>
            </div>
            <div className='power-stats-container'>
              <h3>Specific Power Set</h3>
              <ul className='power-stats'>
                <li><b>Intelligence:</b> {currentHero.powerstats.intelligence}</li>
                <li><b>Strength:</b> {currentHero.powerstats.strength}</li>
                <li><b>Speed:</b> {currentHero.powerstats.speed}</li>
                <li><b>Durability:</b> {currentHero.powerstats.durability}</li>
                <li><b>Power:</b> {currentHero.powerstats.power}</li>
                <li><b>Combat:</b> {currentHero.powerstats.combat}</li>
              </ul>
            </div>
        </div>
      }
    </>
  )
}

export default HeroInfo
