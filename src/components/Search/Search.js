import React, { Component } from 'react'
import './Search.css'
import PropTypes from 'prop-types'


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

        <select className='power-dd' value={this.state.dropDownSelection} onChange={event => this.handleChange(event)}>
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

Search.propTypes = {
  searchHeroes: PropTypes.func,
  assignHeroContainer: PropTypes.func,
  filterHeroPowerLevel: PropTypes.func
}
