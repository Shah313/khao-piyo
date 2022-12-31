import React from 'react'


import { Link } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

import {useState} from 'react';

import './Checkout.css'

 
function Checkout() {

   const [goToCartPage, setGoToCartPage] = useState(false);

   const [goToUpdateProfilePage, setGoToUpdateProfilePage] = useState(false);


   

  if (goToCartPage) {
    return <Navigate to="/cart" />;
  }

  
  

  if (goToUpdateProfilePage) {
    return <Navigate to="/update_profile" />;
  } 

  



  return (

    <>
   
<div className="heading">
   <h3>checkout</h3>
   <p><Link to="/cart" className='link'>Cart </Link> <span> /Checkout </span></p>
</div>

<section className="checkout">

   <h1 className="title">order summary</h1>

   <form action="" method="post">
      <div className="cart-items">
         <h3>cart items</h3>
         <p><span className="name">Chilli Pepper Sauce Pizza</span><span className="price">$5</span></p>
         <p><span className="name">Pakistani Pasta</span><span className="price">$7</span></p>
         <p><span className="name">Cheesy Hamburger</span><span className="price">$2</span></p>
         <p><span className="name">Strawberry Juice</span><span className="price">$9</span></p>
         <p className="grand-total"><span className="name">grand total :</span> <span className="price">$23</span></p>
         <button
        onClick={() => {
          setGoToCartPage(true);
        }} className='btn' >view cart</button>
      </div>
      <div className="user-info">
         <h3>your info</h3>
         <p><i className="fas fa-user"></i> <span>muhammad shoaib</span></p>
         <p><i className="fas fa-phone"></i> <span>0310-2527143</span></p>
         <p><i className="fas fa-envelope"></i> <span>shoaibshah1255@gmail.com</span></p>
          <button
        onClick={() => {
          setGoToUpdateProfilePage(true);
        }} className='btn' >update info</button> 
       
         <select name="method" className="box" required>
            <option value="" disabled selected>select payment method</option>
            <option value="cash on delivery">cash on delivery</option>
            <option value="credit card">credit card</option>
            <option value="paytm">easy paisa/jazz cash</option>
            <option value="paypal">paypal</option>
         </select>
      </div>
      <input type="submit" value="place order" name="order" className="btn order-btn" />
   </form>

</section>

</>



  )
}

export default Checkout