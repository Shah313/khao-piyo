import React from 'react'





import pro1 from '../../../src/assets/drink-1.png'

import pro2 from '../../../src/assets/drink-2.png'

import pro3 from '../../../src/assets/drink-3.png'

import pro4 from '../../../src/assets/drink-4.png'

import pro5 from '../../../src/assets/drink-5.png'

import { Link } from 'react-router-dom'



function Drinks() {
  return (

   <>

<div className="heading">
   <h3>Drink Items</h3>
   <p>
     <Link to="/" className="link">
       Home
     </Link>
     <span> / Drinks</span>
   </p>
 </div>




    <section className="products">

   
    
    
    
        <div className='box-container'>
            
            
            <form accept="" method="post" className="box">
    
            
            <Link className='fas fa-eye' to="/juice">  </Link>
    
            
    
             
             <img src={pro1} alt="" />
             <h3 className='cat' to="#">Orange Juice</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/juice2"></Link>
            
             <img src={pro2} alt="" />
             <h3 className='cat' to="#">Black Coffee</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>5<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/juice3"></Link>
            
             <img src={pro3} alt="" />
             <h3 className='cat' to="#">Lemon Soda</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>2<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/juice4"></Link>
            
             <img src={pro4} alt="" />
             <h3 className='cat' to="#">Pomegranate Juice</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>7<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>

          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/juice5"></Link>
            
             <img src={pro5} alt="" />
             <h3 className='cat' to="#">Strawberry Juice</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>9<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
    
    
       </div>
    
       </section>

       </>
            
  )
}

export default Drinks