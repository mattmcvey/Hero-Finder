import React, { Component } from 'react'
import HeroCard from '../HeroCard/HeroCard'
import './HeroCardContainer.css'

class HeroCardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  const heroCard = heroes.map(hero => {

    return (
      <HeroCard
        images={hero.images.sm}
        name={hero.name}
        id={hero.id}
        key={hero.id}
      />
    )
  })

  render() {
    return (
      <>
        <h2 className='hero-header'>ALL HEREOS</h2>
        <section className='hero-card-container'>
          {heroCard}
        </section>
      </>
    )
  }
}

export default HeroCardContainer
