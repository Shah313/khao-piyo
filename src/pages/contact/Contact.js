import React from 'react'


import { Link } from 'react-router-dom'

import con1 from '../../assets/contact-img.svg'

import './Contact.css'

function Contact() {
  return (

    <>
    
    <div className="heading">
    <h3>Contact us</h3>
    <p><Link to="/" className='link'>home </Link> <span> / Contact </span></p>
 </div>

 
<section className="contact">

<div className="row">

   <div className="image">
      <img src={con1} alt=""/>
   </div>

   <form action="" method="post">
      <h3>tell us something!</h3>
      <input type="text" name="name" required placeholder="enter your name" maxLength="50" className="box"/>
      <input type="number" name="number" required placeholder="enter your number" maxLength="9999999999" min="0" className="box" />
      <input type="email" name="email" required placeholder="enter your email" maxLength="50" className="box"/>
      <textarea name="msg" placeholder="enter your message" required className="box" cols="30" rows="10" maxLength="500"></textarea>
      <input type="submit" value="send message" className="btn" name="send" />
   </form>

</div>

</section>

</>
    












  )
}

export default Contact