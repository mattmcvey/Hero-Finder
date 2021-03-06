import React from 'react'
import './Nav.css'
import spiderman from '../../../src/spiderman.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <div className='title-container hidden'>
        <h2>HERO FINDER</h2>
        <p>WHERE VILLAINS FIND THEIR FOREVER ENEMY</p>
      </div>
      <Link to='/' className='logo-link'>
        <img className='logo' src={spiderman} alt='logo'></img>
      </Link>
      <Link to='/favorites' className='button-container'>
        <button className='button'>Archenemies</button>
      </Link>
    </header>
  )
}

export default Nav
