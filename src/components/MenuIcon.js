import React from 'react'

import { useState } from 'react'

import  NavLink  from './NavLink'



function MenuIcon() {


  const [menuIsShown, setMenuIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setMenuIsShown((current) => !current);
  };

  return (

    



<div id="menu-btn" className="fas fa-bars" onClick={handleClick}>

{menuIsShown && <NavLink />}

</div>
  )
}

export default MenuIcon