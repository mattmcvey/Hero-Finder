import React, { Component } from 'react'
import './App.css';
import { cleanData } from './utilities'
import Nav from '../Nav/Nav'
import HeroCardContainer from '../HeroCardContainer/HeroCardContainer'
import RandomThree from '../RandomThree/RandomThree'
import HeroInfo from '../HeroInfo/HeroInfo'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => response.json())
    .then(data => this.setState({ heroes: cleanData(data) }))
  }

  render(){
    return (
      <div className="App">
        <Nav />
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
                <HeroInfo heroes={this.state.heroes} id={id}/>
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
