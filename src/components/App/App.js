import React, { Component } from 'react'
import './App.css';
import { cleanData } from './utilities'
import Nav from '../Nav/Nav'
import HeroCardContainer from '../HeroCardContainer/HeroCardContainer'
import RandomThree from '../RandomThree/RandomThree'

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
        <RandomThree heroes={this.state.heroes} />
        <HeroCardContainer heroes={this.state.heroes} />
      </div>
    )
  };
}

export default App;
