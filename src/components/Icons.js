import React from 'react'

import SearchIcon from './SearchIcon'

import CartIcon from './CartIcon'

import ProfileIcon from './ProfileIcon';

import MenuIcon from './MenuIcon';

function Icons() {
  return (
    <div className='icons'>

      <SearchIcon />

      <CartIcon />

      <ProfileIcon />

      <MenuIcon />
      
      
      
      
      
      </div>
  )
}

export default Icons

















/* import React from "react";

import Profile from "./Profile";

import { useState } from "react";

function IconSection() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div id="user-btn" className="fas fa-user" onClick={handleClick}>
   

     
      {isShown && <Profile />}
    </div>
  );
}

export default IconSection;
 */