import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../../../CSSModules/Styles.css'

const ContactUs = () => {
    return (
        <>
            <section className='contact-container'>
                <div className='w- '>
                    <h1 className='text-success'>Get in touch</h1>
                    <p>Share some details here. This is Flexible section where <span className='d-block'>you can share anything you want. It could be details or some information.</span> </p>
                    <div>
                        <div className='contact-details'>
                        <FaPhoneAlt style={{color:'green '}}  size={20}/>
                        <div>
                            <p>PHONE</p>
                            <p>(+91) 987 654 321</p>
                        </div>
                        </div>

                        <div className='contact-details'>
                        <MdEmail style={{color:'green '}}  size={20}/>
                        <div>
                            <p>EMAIL</p>
                            <p>info@contact.com</p>
                        </div>
                        </div>
                    </div>
                </div>

                <form className='w-50'>
                    <div className="mb-4">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control bg-dark text-white  border-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4    ">
                        <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control bg-dark text-white" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-outline-dark text-dark btn-lg">Submit</button>
                </form>
            </section>
        </>
    )
}

export default ContactUs