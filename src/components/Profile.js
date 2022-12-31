import React from 'react'

import {Link} from 'react-router-dom'



function Profile() {
  return (
    <>

    

<div className="profile">
         <p className="name">muhammad shoaib</p>
         <div className="flex">
         <Link to="/profile" className="btn">
              Profile
            </Link>
            <Link to="#" className="delete-btn">
              Logout
            </Link>
            
         </div>
         <p className="account"> <Link to="login" className='link'>login</Link> or <Link to="register" className='link'>register</Link></p>
      </div>

    


</>



  )
}

export default Profile