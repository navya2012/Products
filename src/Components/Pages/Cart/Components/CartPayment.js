import React, { useState } from 'react'
import '../../../CSSModules/Products.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, selectAddress } from '../../../Redux/Slices/paymentSlice';
import { RiCloseLargeFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartPayment = () => {
    const [showCardForm, setShowCardForm] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        area: '',
        city: '',
        state: '',
        zip: '',
    });

    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cartList.cartData)
    const addressData = useSelector((state) => state.paymentData.addresses);
    const selectedAddress = useSelector((state) => state.paymentData.selectedAddress);
    console.log(addressData, selectAddress)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddress(formData));
        setFormData({
            name: '',
            address: '',
            area: '',
            city: '',
            state: '',
            zip: '',
        });
        setShowForm(false);
    };

    const handleSelect = (address) => {
        dispatch(selectAddress(address))
    }

    const handleSelectedAddress = () => {
        if (selectedAddress) {
            setShowCardForm(true);
        } else {
            toast.error('Please select an address to proceed.',
                {
                    position: "bottom-center",
                    theme: "colored",
                    autoClose: 5000,
                }
            );
        }
    }

    const handleOrder = () => {
        if (selectedAddress) {
            toast.success('Payment Successfull !!!', {
                position: "bottom-center",
                theme: "colored",
                autoClose: 5000,
            })
        } else {
            toast.error('select an address', {
                position: "bottom-center",
                theme: "colored",
                autoClose: 5000,
            })
        }
    }
    return (
        <>
            <div>

                <div className=' payment-container'  >
                    <h2 style={{ color: 'Highlight', paddingBottom: '20px' }}>Shipping Address:</h2>

                    <div>
                        {
                            addressData.length === 0 && !showForm ? (
                                <>
                                    <button onClick={() => setShowForm(true)} className="btn btn-primary mt-4">Add New Address</button>

                                </>
                            ) : (
                                !showCardForm && (
                                    <div>
                                        <h4>Select an Address:</h4>
                                        <ul style={{ padding: '10px 0' }}>
                                            {addressData.map((address, index) => (
                                                <li key={index} style={{ padding: '10px 0' }}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="selectedAddress"
                                                            value={address}
                                                            checked={selectedAddress === address}
                                                            onChange={() => handleSelect(address)}
                                                        />
                                                        <span style={{ fontSize: '20px' }}>{address.name},  {address.address},    {address.city},  {address.state},  PINcode: {address.zip}</span>

                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='d-flex flex-column justify-content-start align-items-start'>
                                            <button onClick={() => setShowForm(true)} className="btn btn-success mt-4 px-3">Add New Address</button>
                                            <button className="btn btn-warning mt-4" onClick={handleSelectedAddress}>Use this Address</button>
                                        </div>
                                    </div>
                                )
                            )
                        }

                        {showForm && (
                            <div className='forms' style={{ display: 'block' }}>
                                <div className=" form-style">
                                    <div className='address-heading'>
                                        <h2>Enter a new address for delivery </h2>
                                        <RiCloseLargeFill onClick={() => setShowForm(!showForm)} className='close-icon' />
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label > Name:</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <div>
                                            <label >Address:</label>
                                            <input type="text" name="address" value={formData.address} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <div>
                                            <label >Area:</label>
                                            <input type="text" name="area" value={formData.area} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <div>
                                            <label >City:</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <div>
                                            <label >State:</label>
                                            <input type="text" name="state" value={formData.state} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <div>
                                            <label >PIN Code:</label>
                                            <input type="num" name="zip" value={formData.zip} onChange={handleChange} required autoComplete="off" />
                                        </div>
                                        <button type="submit" className="btn btn-success mt-4 px-3" >Add Address</button>
                                    </form>
                                </div>
                            </div>
                        )
                        }

                        {
                            showCardForm && selectedAddress && (
                                <>
                                    <div>
                                        <h4>{selectedAddress.name}</h4>
                                        <h4>{selectedAddress.address}</h4>
                                        <h4>{selectedAddress.area}</h4>
                                        <h4>{selectedAddress.city}, {selectedAddress.state} - {selectedAddress.zip}</h4>
                                    </div>

                                    <div>
                                        <h2 style={{ color: 'Highlight', padding: '20px 0' }}>Payment Order :</h2>

                                        {cartProducts?.length > 0 && (
                                            <h4>
                                                Total Price: ₹ {cartProducts.reduce((total, card) => {
                                                    return total + card.quantity * (card.price ? parseInt(card.price.replace(/,/g, '')) : 0)
                                                }, 0)}
                                            </h4>
                                        )}

                                        <button type="submit" className="btn btn-success mt-4 px-3" onClick={handleOrder} >Order Now</button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default CartPayment