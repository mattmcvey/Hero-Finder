import React, { Component } from 'react'
import './Search.css'


class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      dropDownSelection: ''
    }
  }

  handleSearch = event => {
    this.props.searchHeroes(event)
    this.props.assignHeroContainer()
    this.setState({ searchTerm: event.target.value })
  }

  handleChange = event => {
    this.props.filterHeroPowerLevel(event)
    this.props.assignHeroContainer()
    this.setState( { dropDownSelection: event.target.value })
  }

  render() {
    return(
      <form className='search-form'>
        <input className='search-input'
          name='search-bar'
          placeholder='Search Enemies Name'
          type='text'
          aria-label='Search Movies'
          value={this.state.search}
          onChange={event => this.handleSearch(event)}
        />

        <select value={this.state.dropDownSelection} onChange={event => this.handleChange(event)}>
          <option>Choose a power level</option>
          <option value='average'>Average</option>
          <option vallue='powerful'>Powerful</option>
          <option value='god-like-power'>God Like Power</option>
        </select>
      </form>
    )
  }
}

export default Search
