// src/components/FooterData.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../CSSModules/Styles.css';

const FooterData = () => {
    const { section } = useParams();

    return (
        <div className='footer-data'>
            {section === 'shipping' && (
                <>
                <h1 className='text-center pb-5 ' style={{color:'purple'}}>Shipping Returns</h1>
                <div className='footer-dataStyles'>
                <div>
                    <h2 className='pb-3'>Shipping Policy</h2>
                    <p>
                        I’m a Shipping Policy section. I’m a great place to update your customers about your shipping methods, packaging, and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                    </p>
                    <p>
                        I'm the second paragraph in your Shipping Policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>

                <div>
                    <h2 className='pb-3'>Return & Exchange Policy</h2>
                    <p>
                    I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence
                    </p>
                    <p>
                    I'm the second paragraph in your Return & Exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you
                    </p>
                </div>
                </div>
                </>
            )}
            {section === 'terms&conditions' && (
                <>
                <h1 className='text-center pb-5 ' style={{color:'purple'}}>Terms & Conditions</h1>
                <div className='footer-dataStyles'>
                <div>
                    <h2 className='pb-3'>Customer Care</h2>
                    <p>
                    I’m a Customer Care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.
                    </p>
                    <p>
                    I'm the second paragraph in your Customer Care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>

                <div>
                    <h2 className='pb-3'>Privacy & Safety</h2>
                    <p>
                    I’m a Privacy & Safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.
                    </p>
                    <p>
                    Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!
                    </p>
                </div>
                </div>
                </>
            )}
            {section === 'payment-methods' && (
                <>
                <h1 className='text-center pb-5 ' style={{color:'purple'}}>Payment Methods</h1>
                <div className='footer-dataStyles'>
                    <div className='w-50'>
                    <h2 className='pb-3'>Payment Methods</h2>
                    <ul className=' list-group list-group-numbered'>
                        <li className='list-style-dots'>Credit / Debit Cards</li>
                        <li>PAYPAL</li>
                        <li>Offline Payments</li>
                    </ul>
                    </div>

                    <div className='w-50'>
                        <h2 className='pb-3'>Wholesale Inquiries</h2>
                        <p>
                        I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!
                        </p>
                        <p>
                        I'm the second paragraph in your Wholesale Inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                </div>
                </>
            )}
            {!section && (
                <div>
                    <h3>Welcome to our website</h3>
                    <p>
                        Home page content...
                    </p>
                </div>
            )}
        </div>
    );
};

export default FooterData;
