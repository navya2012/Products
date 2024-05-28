import React from 'react'
import '../CSSModules/Navbar.css'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-md '>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler"><GiHamburgerMenu size={35} style={{color:'white', }} /></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className=' navbar-nav me-auto mb-2 mb-lg-0 ' >

                        <li className='nav-item' >
                            <Link className='active' to='/'>Home</Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='#'>Products</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav mb-2 mb-lg-0 d-flex gap-5 py-2'>
                        <li className='nav-item'>
                            <Link to='#'>
                                <BsCartPlus color='action' style={{ fontSize: '28px' }} />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#'>My Orders</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#'>My Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar