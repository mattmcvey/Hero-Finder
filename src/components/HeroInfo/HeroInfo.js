import React from 'react'
import './HeroInfo.css'
import PropTypes from 'prop-types'

const HeroInfo = ({ heroes, id, addFavorite, removeFavorite }) => {
  let currentHero = {}
  const favoriteHeroes = JSON.parse(localStorage.getItem('favoriteHeroes'))
  if(favoriteHeroes) {
    favoriteHeroes.forEach(favoriteHero => {
      if(favoriteHero.id === id) {
        currentHero = favoriteHeroes.find(hero => hero.id === id)
      } else {
        currentHero = heroes.find(hero => hero.id === parseInt(id))
      }
    })
  } else {
    currentHero = heroes.find(hero => hero.id === parseInt(id))
  }

  const overallPower = () => {
    const powers = Object.keys(currentHero.powerstats)
    let totalPower = 0
    powers.forEach(power => {
      totalPower += currentHero.powerstats[power]
    })
    return totalPower
  }

  const updateFavoriteHeroes = () => {
    currentHero.favorited = true
    addFavorite(id)
  }

  const removeFavoritedHero = () => {
    currentHero.favorited = false
    removeFavorite(id)
  }

  return (
    <>
      {!heroes.length && <h2>Loading...</h2>}
      {heroes.length &&
        <>
          <h1>{currentHero.name}</h1>
          <div className='hero-info-container'>
            <img className='hero-image-large' alt='Hero Large' src={currentHero.images.lg}></img>
            <section className='info'>
              <div className='general-info'>
                <h3>General Info</h3>
                <ul className='hero-info'>
                  <li><b>Full Name:</b> {currentHero.biography.fullName}</li>
                  <li><b>Height:</b> {currentHero.appearance.height[0]}</li>
                  <li><b>Weight:</b> {currentHero.appearance.weight[0]}</li>
                  <li><b>Super Teams:</b> {currentHero.connections.groupAffiliation}</li>
                  <li><b>Overall Power:</b> {overallPower()}</li>
                </ul>
              </div>
              <div className='specific-stats'>
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
              {!currentHero.favorited && <button className='button archenemy' onClick={() => updateFavoriteHeroes()}>Add Archenemy</button>}
              {currentHero.favorited && <button className='button archenemy' onClick={() => removeFavoritedHero()}>Remove Archenemy</button>}
            </section>
          </div>
        </>
      }
    </>
  )
}

export default HeroInfo

HeroInfo.propTypes = {
  heroes: PropTypes.array,
  id: PropTypes.number,
  addFavorite: PropTypes.func
}
