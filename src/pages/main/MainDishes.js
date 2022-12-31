import React from 'react'

import './MainDishes.css'





import pro1 from '../../../src/assets/dish-1.png'

import pro2 from '../../../src/assets/dish-2.png'

import pro3 from '../../../src/assets/dish-3.png'

import pro4 from '../../../src/assets/dish-4.png'

import { Link } from 'react-router-dom'



function MainDishes() {
  return (

<>
   
   <div className="heading">
   <h3>Main Dishes Items</h3>
   <p>
     <Link to="/" className="link">
       Home
     </Link>
     <span> / Main Dishes</span>
   </p>
 </div>






    <section className="products">

  
    
    
    
        <div className='box-container'>
            
            
            <form accept="" method="post" className="box">
    
            
            <Link className='fas fa-eye' to="/pasta">  </Link>
    
            
    
            
             <img src={pro1} alt="" />
             <h3 className='cat' to="#">Chinese Pasta</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>7<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pasta2"></Link>
            
             <img src={pro2} alt="" />
             <h3 className='cat' to="#">Pakistani Pasta</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>5<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pasta3"></Link>
            
             <img src={pro3} alt="" />
             <h3 className='cat' to="#">Italian Pasta</h3>
            
             <div className="flex">
                <div className="price"><span>$</span>12<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/grilled-steak"></Link>
            
             <img src={pro4} alt="" />
             <h3 className='cat' to="#">Grilled Steak</h3>
           
             <div className="flex">
                <div className="price"><span>$</span>20<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
    
    
       </div>
    
       </section>

       </>
            
  )
}

export default MainDishes