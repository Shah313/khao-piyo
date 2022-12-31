import React from 'react'

import { Link } from 'react-router-dom'





function NavLink() {

  return (
    <nav className="navbar">
         <Link to="/" className='link'>home</Link>
         <Link to="/menu" className='link'>menu</Link>

         <Link to="/about" className='link'>about</Link>
         <Link to="/contact" className='link'>contact</Link>
      </nav>
  )
}

export default NavLink