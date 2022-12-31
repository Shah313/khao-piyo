import React from 'react'



 import step1 from '../../../assets/step-1.png'

import step2 from '../../../assets/step-2.png'

import step3 from '../../../assets/step-3.png' 

import './SimpleSteps.css'


function SimpleSteps() {
  return (
    
<section className="steps">

<h1 className="title">3 simple steps</h1>

<div className="box-container">

   <div className="box">
      <img src={step1} alt="" />
      <h3>select food</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
   </div>

   <div className="box">
      <img src={step2} alt="" />
      <h3>30 minutes delivery</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
   </div>

   <div className="box">
      <img src={step3} alt="" />
      <h3>enjoy food!</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
   </div>

</div>

</section>
  )
}

export default SimpleSteps