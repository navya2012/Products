import React from 'react'
import Navbar from '../../Navbar/Navbar'
import CartPage from './Components/CartPage'

const Cart = () => {
  return (
    <>
         <div className='cart-container'>
                <Navbar />
                <CartPage/>
        </div>
    </>
  )
}

export default Cart