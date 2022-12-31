import React from 'react'

import { Link } from 'react-router-dom'


import about from '../../assets/about-img.svg'
import SimpleSteps from './simple-steps/SimpleSteps'

import Review from './review/Review'

import './About.css'




function About() {
  return (
      <>
<div className="heading">
   <h3>about us</h3>
   <p><Link to="/" className='link'>home </Link> <span> / about</span></p>
</div>

<section className="about">

   <div className="row">

      <div className="image">
         <img src={about} alt="" />
      </div>

      <div className="content">
         <h3>why choose us?</h3>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis non odit nihil, doloremque sunt aut placeat culpa. Adipisci minima, neque necessitatibus incidunt nemo eveniet mollitia quis facere vel consectetur culpa?</p>
         <Link to="/menu" className="btn">our menu</Link>
      </div>

   </div>




</section>

<SimpleSteps />

<Review />





</>

  )
}

export default About