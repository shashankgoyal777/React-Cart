import React, { useContext, useState } from 'react'
import { cartContext } from './Context';

function Header() {
    const{cartCount}=useContext(cartContext)
      return (
    <header>
        <h1>UseReducer</h1>
        <span>Cart({cartCount})</span>
      </header>
  )
}
export default Header;
