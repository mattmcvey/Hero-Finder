import React from 'react'
import './Nav.css'
import spiderman from './spiderman.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to="/" className='title-container'>
        <h2>HERO FINDER</h2>
        <p>WHERE VILLAINS FIND THEIR FOREVER ENEMY</p>
      </Link>
      <div className='favorites-logo-container'>
        <div className='button-container'>
          <button className='favorites'>Future Archenemies</button>
        </div>
        <Link to="/">
          <img className='logo' src={spiderman} alt='logo'></img>
        </Link>
      </div>
    </header>
  )
}

export default Nav
