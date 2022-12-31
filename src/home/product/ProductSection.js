import React from 'react'





import pro1 from '../../../src/assets/pizza-1.png'

import pro2 from '../../../src/assets/dish-1.png'

import pro3 from '../../../src/assets/burger-1.png'

import pro4 from '../../../src/assets/dessert-1.png'

import pro5 from '../../../src/assets/drink-2.png'

import pro6 from '../../../src/assets/dish-4.png'

import pro7 from '../../../src/assets/dessert-2.png'


import pro8 from '../../../src/assets/burger-2.png'


import pro9 from '../../../src/assets/drink-4.png'

import { Link } from 'react-router-dom'



function ProductSection() {
  return (

   <>

<div className="product-heading">
        <h3>latest dishes</h3>
    
      </div>



    <section className="products"> 
    
        <div className='box-container'>
            
            
            <form accept="" method="post" className="box">
    
            
            <Link className='fas fa-eye' to="/pizza">  </Link>
    
            
    
             <img src={pro1} alt="" />
             <h3 className='cat'>Fast Food</h3>
             <div className="name">Chilli Pepper Pizza</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/pasta"></Link>
            
             <img src={pro2} alt="" />
             <h3 className='cat' >Main Dishes</h3>
             <div className="name">Chinese Pasta</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/beef-burger"></Link>
             
             <img src={pro3} alt="" />
             <h3 className='cat'>Fast Food</h3>
             <div className="name">chezzy hamburger</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/icecream"></Link>
            
             <img src={pro4} alt="" />
             <h3 className='cat' >Dessert</h3>
             <div className="name">Strawberry Icecream</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/juice2"></Link>
             
             <img src={pro5} alt="" />
             <h3 className='cat' >Drinks</h3>
             <div className="name">Black Coffee</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>
    
          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/grilled-steak"></Link>
            
             <img src={pro6} alt="" />
             <h3 className='cat' >Main Dishes</h3>
             <div className="name">Grilled Steak</div>
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>

          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="/cake"></Link>
            
             <img src={pro7} alt="" />
             <h3 className='cat' >Desserts</h3>
             <h3 className='cat' to="#">Blackout Cake</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>15<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>

          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="zinger-burger"></Link>
            
             <img src={pro8} alt="" />
             <h3 className='cat' >Fast Food</h3>
             <h3 className='cat' to="#">Zinger Burger</h3>
             
             <div className="flex">
                <div className="price"><span>$</span>3<span>/-</span></div>
                <input type="number" name="qty" className="qty" min="1" max="99" placeholder='0' />
             </div>
          </form>

          <form accept="" method="post" className="box">
          <Link className='fas fa-eye' to="juice4"></Link>
            
             <img src={pro9} alt="" />
             <h3 className='cat' >Drinks</h3>
             <h3 className='cat' to="#">Pomegranate Juice</h3>
             
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

export default ProductSection