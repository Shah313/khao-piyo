import React from 'react'
import { Link } from 'react-router-dom'

import './Category.css'




import cat1 from '../../../src/assets/cat-1.png'

import cat2 from '../../../src/assets/cat-2.png'

import cat3 from '../../../src/assets/cat-3.png'

import cat4 from '../../../src/assets/cat-4.png'

function CategorySection() {
  return (

   <>


    
<section className="category">

<div className="box-container">

   <Link to='/fast' className="box">
      <img src={cat1} alt="" />
      <h3>fast food</h3>
   </Link>

   <Link to='/dishes' className="box">
      <img src={cat2} alt="" />
      <h3>main dishes</h3>
   </Link>

   <Link to='/drinks' className="box">
      <img src={cat3} alt="" />
      <h3>drinks</h3>
   </Link>

   <Link to='/desserts' className="box">
      <img src={cat4} alt="" />
      <h3>desserts</h3>
   </Link>

</div>

</section>

</>

  )
}

export default CategorySection