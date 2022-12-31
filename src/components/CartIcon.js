import React from 'react'

import { Link } from 'react-router-dom'

function CartIcon() {
  return (
    <Link to="/cart"><i className="fas fa-shopping-cart"></i><span>(3)</span></Link>
  )
}

export default CartIcon