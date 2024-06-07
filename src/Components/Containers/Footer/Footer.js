import React from 'react'
import '../../CSSModules/Styles.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='top-footer'>
                    <div className='footer-links'>
                        <Link to='/footer/shipping'>Shipping & Returns</Link>
                        <Link to='footer/terms&conditions'>Terms & Conditions</Link>
                        <Link to='/footer/payment-methods'>Payment Methods</Link>
                    </div>

                    <h2>We accept the following payment methods</h2>

                    <div className='d-flex gap-3 flex-wrap'>
                        <img src={require('../../../Assets/footer-img1.png')} alt="" />
                        <img src={require('../../../Assets/footer-img2.png')} alt="" />
                        <img src={require('../../../Assets/footer-img3.png')} alt="" />
                        <img src={require('../../../Assets/footer-img4.png')} alt="" />
                        <img src={require('../../../Assets/footer-img5.png')} alt="" />
                    </div>
                </div>

                <div className='bottom-footer'>

                </div>
            </div>
        </>
    )
}

export default Footer