import React from 'react'

import { useState } from 'react'

import { Link } from 'react-router-dom';






import './Header.css'


function Header() {

   const [isNavExpanded, setIsNavExpanded] = useState(false);
   const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  return (
    
<header className='header'>

<section className='flex'>

   <Link to='/' className='logo'>Khao-Piyo 😋</Link>

   <nav className={  isNavExpanded ? "navbar expanded" : "navbar"}>
      <Link to="/" className='link'>home</Link>
      <Link to="/menu" className='link'>menu</Link>
      <Link to="/contact" className='link'>contact</Link>
      <Link to="/about" className='link'>about</Link>
    
   </nav>

   <div className='icons'>
      <Link to="/search"><i className="fas fa-search"></i></Link>
      <Link to="/cart"><i className="fas fa-shopping-cart"></i><span>(3)</span></Link>
      <div id="user-btn" className="fas fa-user"  onClick={() => {
          setIsProfileExpanded(!isProfileExpanded);}} ></div>
      <div id='menuBtn' className="fas fa-bars"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);}} ></div>
   </div>

   <div className= {isProfileExpanded ? "profile expanded" : "profile"}>
      <p className='name'>muhammad shoaib</p>
      <div className='flex'>
         <Link to="/profile" className='btn'>profile</Link>
         <Link to="#" className='deleteBtn'>logout</Link>
      </div>
      <p className='account'><Link to="/login" className='link'>login</Link> or <Link to="/register" className='link'>register</Link></p>
   </div>

</section>

</header>
  )
}

export default Header