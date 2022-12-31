import React from "react";

import { Link } from "react-router-dom";


import './UpdateProfile.css'

function UpdateProfile() {

  const defaultName = 'muhammad shoaib';

  
  const defaultEmail = 'shoaibshah1255@gmail.com';

  const defaultNumber = '03102527143';




  return (
    <>
      <div className="heading">
        <h3>Update Profile</h3>
        <p>
          <Link to="/checkout" className="link">
            Checkout{" "}
          </Link>{" "}
          <span> /Update Profile </span>
        </p>
      </div>

      <section className="form-container">
        <form action="" method="POST">
        <h3>update profile</h3>
         
          <input
            type="text"
            required
            maxLength="20"
            name="name"
            placeholder="enter your name"
            className="box"
            value={defaultName} readOnly
          />
          <input
            type="email"
            required
            maxLength="50"
            name="email"
            placeholder="enter your email"
            className="box"
            value={defaultEmail} readOnly
          />
          <input
            type="number"
            min="0"
            max="9999999999"
            placeholder="enter your number"
            required
            className="box"
            name="number"
            value={defaultNumber} readOnly
          />
          <input
            type="text"
            maxLength="50"
            placeholder="flat no. and building name"
           
            required
            className="box"
            name="flat"
          />
          <input
            type="text"
            maxLength="50"
            placeholder="area name"
            required
            className="box"
            
            name="street"
          />
          <input
            type="text"
            maxLength="50"
            placeholder="city name"
            required
            className="box"
           
            name="city"
          />
   
          <input
            type="text"
            maxLength="50"
            placeholder="country name"
            required
            className="box"
         
            name="country"
          />
          <input
            type="password"
            maxLength="20"
            name="old_pass"
            placeholder="enter your old password"
            className="box"
          />
          <input
            type="password"
            maxLength="20"
            name="new_pass"
            placeholder="enter your new password"
            className="box"
          />
          <input
            type="password"
            maxLength="20"
            name="confirm_pass"
            placeholder="confirm your new password"
            className="box"
          />
          <input
            type="submit"
            value="update now"
            className="btn"
            name="submit"
          />
        </form>
      </section>
    </>
  );
}

export default UpdateProfile;
