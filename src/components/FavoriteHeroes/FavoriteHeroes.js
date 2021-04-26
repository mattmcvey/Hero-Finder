import React from 'react'
import './FavoriteHeroes.css'
import HeroCard from '../HeroCard/HeroCard'

const FavoriteHeroes = () => {
  let favoriteHeroes = localStorage.getItem('favoriteHeroes')
  let parsedHeroes = JSON.parse(favoriteHeroes)
  let favoriteHeroesToDisplay = []
  if(localStorage.getItem('favoriteHeroes')) {
    favoriteHeroesToDisplay = parsedHeroes.map(hero => {
      return (
        <HeroCard
        images={hero.images.md}
        name={hero.name}
        id={hero.id}
        key={hero.id}
        favorited={true}
        />
      )
    })
  }

  return (
    <section className='hero-card-container'>
      {!JSON.parse(localStorage.getItem('favoriteHeroes')) && <h2>No archenemies added yet. Click spidey's head to go back home to find some!</h2>}
      {favoriteHeroesToDisplay}
    </section>
  )
}

export default FavoriteHeroes
