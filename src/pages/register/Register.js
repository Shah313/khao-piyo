import React from 'react'

import { Link } from 'react-router-dom' 




function Register() {



  return (

    <>

<div className="heading">
    <h3>Register Here </h3>
    <p>
      <Link to="/" className="link">
      Home
      </Link>
      <span> / Register</span>
    </p>
  </div>
    
<section className="form-container">

<form action="" method="post">
   <h3>register now</h3>
   <input type="text" required maxLength="20" name="name" placeholder="enter your name" className="box" />
   <input type="email" required maxLength="50" name="email" placeholder="enter your email" className="box" />
   <input type="number" min="0" max="9999999999" placeholder="enter your number" required className="box" name="number" />
   <input type="password" required maxLength="20" name="pass" placeholder="enter your password" className="box" />
   <input type="password" required maxLength="20" name="cpass" placeholder="confirm your password" className="box" />
   <input type="submit" value="register now" className="btn" name="submit" />
   <Link to='/login' className='btn' > Already Registered (Login Now) </Link>
 
</form>

</section>
</>
  )
}

export default Register