import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BiCart, BiHome, BiShoppingBag, BiUser } from 'react-icons/bi'

function Header() {
  return (
    <header>
      <div className='header-top'>
        <h1>UTF Ecommerce ;)</h1>

        <nav>
          <Link to='/'>
            <BiHome className='nav-img' />
          </Link>
          <Link to='/products'>
            <BiShoppingBag className='nav-img' />
          </Link>
          <Link to='/shopping'>
            <BiCart className='nav-img' />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
