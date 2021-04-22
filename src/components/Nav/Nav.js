import React from 'react'
import './Nav.css'
import spiderman from './spiderman.svg'

const Nav = () => {
  return (
    <header>
      <div className='title-container'>
        <h2>HERO FINDER</h2>
        <p>WHERE VILLAINS FIND THEIR FOREVER ENEMY</p>
      </div>
      <div className='favorites-logo-container'>
        <div className='button-container'>
          <button className='favorites'>Future Archenemies</button>
        </div>
        <img className='logo' src={spiderman} alt='logo'></img>
      </div>
    </header>
  )
}

export default Nav
