import React from 'react'
/* 
import { Navigate } from "react-router-dom"; */



import { Link } from 'react-router-dom' 

function Login() {



  return (

    <>

    
<div className="heading">
   <h3>Login Account</h3>
   <p><Link to="/" className='link'>Home </Link> <span> /Login </span></p>
</div>
    
<section className="form-container">

<form action="" method="post">
   <h3>login now</h3>
   <input type="email" required maxLength="50" name="email" placeholder="enter your email" className="box" />
   <input type="password" required maxLength="20" name="pass" placeholder="enter your password" className="box" />
   <input type="submit" value="login now" className="btn" name="submit" />
   <Link to='/register' className='btn' > Don't have account (Register now) </Link>
</form>

</section>

</>
  )
}

export default Login