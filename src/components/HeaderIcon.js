import React from 'react'


import { Link } from 'react-router-dom';


import { useState } from "react";

import Profile from './Profile';

function HeaderIcon() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {

    setIsShown((current) => !current);
  };


  return (

 

    <div className="icons">

<Link to="/search"><i className="fas fa-search"></i></Link>

<Link to="/cart"><i className="fas fa-shopping-cart"></i><span>(3)</span></Link>


<div className='fas fa-user'  onClick={handleClick} > 


{isShown && <Profile />}

</div>
    



<div id="menu-btn" className="fas fa-bars"></div>


        </div>

     
  )
}

export default HeaderIcon