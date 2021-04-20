import React from 'react'
import './Nav.css'
import spiderman from './spiderman.svg'

const Nav = () => {
  return (
    <header>
      <div className='title-container'>
        <h2>Hero Finder!</h2>
        <p>Where villains find their forenemy</p>
      </div>
      <div className='favorites-logo-container'>
        <button className='favorites'>Favorite Caped Crusader</button>
        <img className='logo' src={spiderman} alt='logo'></img>
      </div>
    </header>
  )
}

export default Nav
