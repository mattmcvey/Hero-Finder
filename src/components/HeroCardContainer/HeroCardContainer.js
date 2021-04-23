import React, { Component } from 'react'
import HeroCard from '../HeroCard/HeroCard'
import './HeroCardContainer.css'

class HeroCardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      filteredHeroes: [],
      heroSearched: false
    }
  }

  searchHeroes = event => {
    const value = event.target.value
    const searchHeroes = this.props.heroes.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({ filteredHeroes: searchHeroes, heroSearched: true})
  }

  handleSearch = event => {
    this.searchHeroes(event)
    this.assignHeroContainer()
    this.setState({ search: event.target.value })
  }

  assignHeroContainer = () => {
    let heroesToDisplay = []
    if(this.state.filteredHeroes.length && this.state.heroSearched) {
      console.log('here')
      heroesToDisplay = this.state.filteredHeroes
    } else {
      console.log('here')
      heroesToDisplay = this.props.heroes
    }
    return heroesToDisplay
  }

  builderHeroCards = () => {
    console.log(this.assignHeroContainer())
    let currentHero = this.assignHeroContainer()
    if(!currentHero.length) {
      return (<h1>Loading...</h1>)
    } else {
      let heroCard = currentHero.map(hero => {
        return (
          <HeroCard
          images={hero.images.sm}
          name={hero.name}
          id={hero.id}
          key={hero.id}
          />
        )
      })
      return heroCard
    }

  }

  render() {
    return (
      <>
        <h2 className='hero-header'>ALL HEREOS</h2>
        <form className='search-form'>
          <input className='search-input'
            name='search-bar'
            placeholder='Search Enemies Name'
            type='text'
            aria-label='Search Movies'
            value={this.state.search}
            onChange={event => this.handleSearch(event)}
          />
        </form>
        <section className='hero-card-container'>
          {this.builderHeroCards()}
        </section>
      </>
    )
  }
}

export default HeroCardContainer
