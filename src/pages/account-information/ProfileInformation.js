import React from 'react'

import  {Link } from 'react-router-dom'

import './ProfileInformation.css'


function ProfileInformation() {
  return (

    <>

<div className="heading">
   <h3>Profile Information</h3>
   <p><Link to="/" className='link'>Home </Link> <span> /Profile Information </span></p>
</div>
 


<section className="user-details">

   <div className="user">
   
      <p><i className="fas fa-user"></i> <span>muhammad shoaib</span></p>
      <p><i className="fas fa-phone"></i> <span>0310-2527143</span></p>
      <p><i className="fas fa-envelope"></i> <span>shoaibshah1255@gmail.com</span></p>
      
      <p className="address"><i className="fas fa-map-marker-alt"></i> <span>Model Village Gulshan e Iqbal Block 11 KHI EAST</span></p>
       <Link to='/update_profile' className="btn">update profile</Link> 
   </div>

</section>

</>

  )
}

export default ProfileInformation