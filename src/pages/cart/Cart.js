import React from 'react'


import { Link } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

import { useState } from 'react'


import pro1 from '../../assets/pizza-1.png'

import pro2 from '../../assets/dish-1.png'

import pro3 from '../../assets/burger-1.png'


import pro5 from '../../assets/drink-5.png'

import './Cart.css'

function Cart() {

   const [goToCheckOutPage, setGoToCheckOutPage] = useState(false);

   if (goToCheckOutPage) {
     return <Navigate to="/checkout" />;
   }

   const defaultNumber = 1;
 


  return (

    <>


    <div className="heading">
   <h3>shopping cart</h3>
   <p><Link to="/" className='link'>home </Link> <span> / cart</span></p>
</div>


<section className="products">

<h1 className="title">your cart</h1>

<div className="cart-total">
   <p>grand total : <span>$23/-</span></p>
   <button
        onClick={() => {
          setGoToCheckOutPage(true);
        }} className='btn' >checkout orders</button>
   </div>

   <div className='box-container'>
        
        
        <div className="box">

        
        <Link className='fas fa-eye' to="/pizza">  </Link>

        

         <img src={pro1} alt="" />
         <div className="name">Chilli Pepper Sauce Pizza</div>
         <div className="flex">
            <div className="price"><span>$</span>5<span>/-</span></div>
            <input type="number" name="qty" className="qty" min="1" max="99" defaultValue={defaultNumber} />

         </div>
         <div className="sub-total">sub total : <span>$5</span></div>
      </div>

      <div className="box">


      
          <Link className='fas fa-eye' to="/juice5"></Link>
             <img src={pro5} alt="" />
             <div className="name">Strawberry Juice</div>
            
           
             <div className="flex">
                <div className="price"><span>$</span>9<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" defaultValue={defaultNumber} />
 </div>
 <div className="sub-total">sub total : <span>$9</span></div>
</div>
             
          
<div className="box">
        
<Link className='fas fa-eye' to="/pasta2">  </Link>



 <img src={pro2} alt="" />
 
 <div className="name">Pakistani Pasta</div>
 <div className="flex">
    <div className="price"><span>$</span>7<span>/-</span></div>
    <input type="number" name="qty" className="qty" min="1" max="99" defaultValue={defaultNumber} />

 </div>
 <div className="sub-total">sub total : <span>$7</span></div>
</div>



<div className="box">

        
<Link className='fas fa-eye' to="/beef-burger">  </Link>



 <img src={pro3} alt="" />

 <div className="name">Cheesy Hamburger</div>
 <div className="flex">
    <div className="price"><span>$</span>2<span>/-</span></div>
    <input type="number" name="qty" className="qty" min="1" max="99" defaultValue={defaultNumber} />

 </div>
 <div className="sub-total">sub total : <span>$2</span></div>
</div>





         </div>


         







</section>

   </>




  )
}

export default Cart