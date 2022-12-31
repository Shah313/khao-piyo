import React from 'react'

import foo1 from '../../assets/email-icon.png'

import foo2 from '../../assets/clock-icon.png'

import foo3 from '../../assets/map-icon.png' 

import foo4 from '../../assets/phone-icon.png' 

import './Footer.css'


function Footer() {
  return (
    <footer className="footer">

   <section className="box-container">

      <div className="box">
         <img src={foo1} alt="" />
         <h3>our email</h3>
         <a href="mailto:shoaibshah1255@gmail.com">shoaibshah1255@gmail.com</a>
        
      </div>

      <div className="box">
         <img src={foo2} alt="" />
         <h3>opening hours</h3>
         <p>00:07am to 00:10pm </p>
      </div>

      <div className="box">
         <img src={foo3} alt="" />
         <h3>our address</h3>
         <a href="https://www.google.com/maps">Karachi, Pakistan - 75300</a>
      </div>

      <div className="box">
         <img src={foo4} alt="" />
         <h3>our number</h3>
         <a href="tel:03102527143">+92-310-2527143 </a>      
      </div>

   </section>

   <div className="credit">&copy; copyright @ 2022 by <span>S.M.S</span> | all rights reserved!</div>

</footer>

  )
}

export default Footer