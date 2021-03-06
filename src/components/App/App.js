import React, { Component } from 'react'
import './App.css';
import { cleanData } from '../../../src/utilities'
import { getHeroes } from '../../../src/apicall'
import Nav from '../Nav/Nav'
import HeroCardContainer from '../HeroCardContainer/HeroCardContainer'
import RandomThree from '../RandomThree/RandomThree'
import HeroInfo from '../HeroInfo/HeroInfo'
import Error from '../Error/Error'
import FavoriteHeroes from '../FavoriteHeroes/FavoriteHeroes'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      heroes: [],
      error: ''
    }
  }

  componentDidMount() {
    getHeroes()
    .then(data => this.setState({ heroes: cleanData(data) }))
    .catch(error => this.setState({ error: error.message }))
  }

  addFavorite = (id) => {
    let objectExists = false
    if(localStorage.getItem('favoriteHeroes')) {
      let storedHeroes = localStorage.getItem('favoriteHeroes')
      let parsedHeroes = JSON.parse(storedHeroes)
      const favoriteHero = this.state.heroes.find(hero => hero.id === id)
      parsedHeroes.forEach(hero => {
        if(favoriteHero.id === hero.id) {
          objectExists = true
        }
      })
      if(!objectExists){
        parsedHeroes.push(favoriteHero)
      }
      localStorage.setItem(`favoriteHeroes`, JSON.stringify(parsedHeroes))
    } else {
      const favoriteHero = this.state.heroes.find(hero => hero.id === id)
      localStorage.setItem('favoriteHeroes', JSON.stringify([favoriteHero]))
    }
  }

  removeFavorite = (id) => {
    const storedHeroes = JSON.parse(localStorage.getItem('favoriteHeroes'))
    storedHeroes.forEach((hero, i) => {
      if(hero.id === id) {
        storedHeroes.splice(i, 1)
      }
    })
    if(!storedHeroes.length) {
      localStorage.clear()
    } else {
      localStorage.setItem('favoriteHeroes', JSON.stringify(storedHeroes))
    }
  }

  render(){
    return (
      <div className="App">
        <Nav />
        {this.state.error && <Error error={this.state.error} />}
        <Switch>
          <Route exact path='/' render={() => {
            return(
              <>
                <RandomThree heroes={this.state.heroes} />
                <HeroCardContainer heroes={this.state.heroes}/>
              </>
            )
          }
          } />
          <Route exact path='/heroes/:id' render={({ match }) => {
            const { id } = match.params
            return(
              <>
                <HeroInfo heroes={this.state.heroes} id={parseInt(id)} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite}/>
              </>
            )
          }
          } />
          <Route exact path='/favorites' render={() => {
            return (
              <>
                <FavoriteHeroes />
              </>
            )
          }
          } />
          <Route path='*' render={() => <h2>Path does not exist. Please check the URL</h2>} />
        </Switch>
      </div>
    )
  };
}

export default App;
