import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <p>Reid's Favorite Bands</p>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beatles">The Beatles</Link>
        </li>
        <li>
          <Link to="/Coldplay">Coldplay</Link>
        </li>
        <li>
          <Link to="/greenday">Greenday</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
