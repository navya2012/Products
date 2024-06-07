import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeProduct, totalQuantity } from '../../../Redux/Slices/cartSlice';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";




const CartPage = () => {
    const cartProducts = useSelector((state) => state.cartList.cartData)
    console.log('cart items in cart page', cartProducts)

    const dispatch = useDispatch()

    const tableHeaders = ['Image', 'product Name', 'quantity', 'Total Price']

    const handleIncrement = (productId) => {
        dispatch(incrementQuantity(productId))
        dispatch(totalQuantity())
    };

    const handleDecrement = (productId) => {
        dispatch(decrementQuantity(productId))
        dispatch(totalQuantity())
    };

    const handleDeleteCartItem = (productId) => {
        dispatch(removeProduct(productId))
        dispatch(totalQuantity())
    }
    return (
        <>
            <div className='cart-container'>
                <h1 style={{color:'purple'}}>CART ITEMS</h1>
                <div className='cart-card-container '>
                    <table className="table table-borderless table-responsive">
                        <thead >
                            <tr>
                                {tableHeaders?.length > 0 && tableHeaders.map((header) => (
                                    <th className='table-headers' key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody >
                            {cartProducts?.length > 0 ?
                                cartProducts.map((card, index) => (
                                    <tr key={index} style={{ paddingBottom: '40px' }}>
                                        <td style={{ maxWidth: '800px' }}  ><img src={card.productImage} alt="" width='150px' height='80px' /></td>

                                        <td style={{ fontSize: '20px', maxWidth: '300px' }} >{card.productName}</td>

                                        <td style={{ maxWidth: '2000px' }} >
                                            <button className='btn' onClick={() => { handleIncrement(card.productId) }}><FaPlus style={{ color: 'green' }} /></button>

                                            <input type="text" value={card.quantity} />

                                            {
                                                card.quantity > 1 ? (
                                                    <button className='btn' onClick={() => { handleDecrement(card.productId) }}><TiMinus style={{ color: 'green' }} /></button>
                                                ) : (
                                                    <button className='btn'><MdDeleteForever onClick={() => { handleDeleteCartItem(card.productId) }} style={{ color: 'red' }} /></button>
                                                )
                                            }
                                        </td>
                                        <td style={{ fontSize: '20px', maxWidth: '300px' }}>
                                            ₹ {card && card.quantity && card.price ? card.quantity * parseInt(card.price.replace(/,/g, '')) : 0}
                                        </td>


                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan={4} style={{ textAlign: 'center' }}>No items available in cart</td>

                                </tr>
                            }
                        </tbody>

                    </table>

                    <div className='cart-footer-row'>
                        {cartProducts?.length > 0 && (
                            <p style={{color:'green'}}>
                                Total Price: ₹ {cartProducts.reduce((total, card) => {
                                    return total + card.quantity * (card.price ? parseInt(card.price.replace(/,/g, '')) : 0)
                                }, 0)}
                            </p>
                        )}
                        <Link to='/checkout' className='checkout-button' >Proceed to Checkout</Link>
                        <Link to='/' style={{color:'grey', fontSize:'29px'}} ><span><FaArrowLeft /></span> Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage