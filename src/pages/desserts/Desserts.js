import React from 'react'





import pro1 from '../../../src/assets/dessert-1.png'

import pro2 from '../../../src/assets/dessert-2.png'

import pro3 from '../../../src/assets/dessert-3.png'

import pro4 from '../../../src/assets/dessert-4.png'

import pro5 from '../../../src/assets/dessert-5.png'

import pro6 from '../../../src/assets/dessert-6.png'

import { Link } from 'react-router-dom'



function Desserts() {
  return (

   <>

<div className="heading">
   <h3>Main Dishes Items</h3>
   <p>
     <Link to="/" className="link">
       Home
     </Link>
     <span> / Desserts</span>
   </p>
 </div>




    <section className="products">

   
    
    
    
        <div className='box-container'>
            
            
            <form accept="" method="post" className="box">
    
            
            <Link className='fas fa-eye' to="/icecream">  </Link>
    
            
    

             <img src={pro1} alt="" />
             <h3 className='cat' to="#">Strawberry Icecream</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>10<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/cake"></Link>
            
             <img src={pro2} alt="" />
             <h3 className='cat' to="#">Blackout Cake</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>15<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/icecream2"></Link>
            
             <img src={pro3} alt="" />
             <h3 className='cat' to="#">Vanilla Icecream</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>13<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/cake2"></Link>
            
             <img src={pro4} alt="" />
             <h3 className='cat' to="#">Black Muffin Cake</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>5<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>

          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/icecream3"></Link>
            
             <img src={pro5} alt="" />
             <h3 className='cat' to="#">Qulfa Icecream</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>9<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99"placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/cake3"></Link>
            
             <img src={pro6} alt="" />
             <h3 className='cat' to="#">cheese Cake with Strawberry</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>7<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
    
       </div>
    
       </section>

       </>
            
  )
}

export default Desserts