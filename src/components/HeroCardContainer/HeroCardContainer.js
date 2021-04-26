import React, { Component } from 'react'
import HeroCard from '../HeroCard/HeroCard'
import './HeroCardContainer.css'
import Search from '../Search/Search'
import PropTypes from 'prop-types'

class HeroCardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      filteredHeroes: [],
      heroSearched: false
    }
  }

  overallPower = (hero) => {
    const powers = Object.keys(hero.powerstats)
    let totalPower = 0
    powers.forEach(power => {
      totalPower += hero.powerstats[power]
    })
    return totalPower
  }

  filterHeroPowerLevel = event => {
    if(event.target.value === 'average') {
      this.setState({filteredHeroes: this.props.heroes.filter(hero => {
        let heroTotalPower = this.overallPower(hero)
        return heroTotalPower <= 200
        }), heroSearched: true
      })
    } else if (event.target.value === 'Powerful') {
      this.setState({filteredHeroes: this.props.heroes.filter(hero => {
        let heroTotalPower = this.overallPower(hero)
        return heroTotalPower >= 201 && heroTotalPower < 501
        }), heroSearched: true
      })
    } else if (event.target.value === 'god-like-power') {
      this.setState({filteredHeroes: this.props.heroes.filter(hero => {
        let heroTotalPower = this.overallPower(hero)
        return heroTotalPower >= 501
      }), heroSearched: true
      })
    } else {
      this.setState({filteredHeroes: []})
    }
  }

  searchHeroes = event => {
    const value = event.target.value
    const searchHeroes = this.props.heroes.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({ filteredHeroes: searchHeroes, heroSearched: true})
  }

  assignHeroContainer = () => {
    let heroesToDisplay = []
    if(this.state.filteredHeroes.length && this.state.heroSearched) {
      heroesToDisplay = this.state.filteredHeroes
    } else if(this.state.heroSearched && !this.state.filteredHeroes.length){
      return <h1 className='search-error'>No hero goes by that name, try again!</h1>
    } else {
      heroesToDisplay = this.props.heroes
    }
    return heroesToDisplay
  }

  builderHeroCards = () => {

    if(!this.assignHeroContainer().length && !this.state.heroSearched) {
      return (<h1>Loading...</h1>)
    } else if(!this.assignHeroContainer().length && this.state.heroSearched){
      return this.assignHeroContainer()
    } else {
      let heroCard = this.assignHeroContainer().map(hero => {
        return (
          <HeroCard
          images={hero.images.sm}
          name={hero.name}
          id={hero.id}
          key={hero.id}
          favorited={false}
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
        <Search assignHeroContainer={this.assignHeroContainer}
          searchHeroes={this.searchHeroes}
          filterHeroPowerLevel={this.filterHeroPowerLevel}/>
        <section className='hero-card-container'>
          {this.builderHeroCards()}
        </section>
      </>
    )
  }
}

export default HeroCardContainer

HeroCardContainer.propTypes = {
  heroes: PropTypes.array
}
