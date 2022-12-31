import React from 'react'





import pro1 from '../../../src/assets/pizza-1.png'

import pro2 from '../../../src/assets/burger-2.png'

import pro3 from '../../../src/assets/burger-1.png'

import pro4 from '../../../src/assets/pizza-2.png'

import pro5 from '../../../src/assets/pizza-3.png'

import pro6 from '../../../src/assets/pizza-4.png'

import { Link } from 'react-router-dom'

import './FastFood.css'



function FastFood() {
  return (

<>

   <div className="heading">
   <h3>Fast Food Items</h3>
   <p>
     <Link to="/" className="link">
       Home
     </Link>
     <span> / fast foods</span>
   </p>
 </div>

<section className='products'>
    
    
    
        <div className='box-container'>
            
            
            <form accept="" method="post" className="box">
    
            
            <Link to='/pizza' className='fas fa-eye' >  </Link>
    
            
    
             
             <img src={pro1} alt="" />
             <h3 className='cat' to="#">Chilli Pepper Pizza</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>5<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/zinger-burger"></Link>
            
             <img src={pro2} alt="" />
             <h3 className='cat' to="#">Zinger Burger</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99"placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/beef-burger"></Link>
            
             <img src={pro3} alt="" />
             <h3 className='cat' to="#">Cheesy Hamburger</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>2<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0'/>
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pizza2"></Link>
            
             <img src={pro4} alt="" />
             <h3 className='cat' to="#">Mushroom Pizza</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>7<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pizza3"></Link>
            
             <img src={pro5} alt="" />
             <h3 className='cat' to="#">Salami Pizza</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>10<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pizza4"></Link>
            
             <img src={pro6} alt="" />
             <h3 className='cat' to="#">Bacon Pizza</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
       </div>
    
       </section>

       </>
            
  )
}

export default FastFood