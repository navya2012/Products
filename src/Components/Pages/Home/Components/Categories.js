import React from 'react'
import '../../../CSSModules/Products.css'
import { Link } from 'react-router-dom'
import { useProductsData } from '../../../Data/DataProvider';


const Categories = () => {
    const { products } = useProductsData();
    // console.log(products)
    return (
        <>
            <div className='Categories-container'>
                <h1 style={{ color: 'green' }}>Categories</h1>

                <div className='row container py-5'>
                    {
                        products.length > 0 ? (
                            products.map((item, index) => {
                                return (
                                    <>
                                        <div className='col-4 card-items ' key={index}>
                                            <Link to={`${item.cat_name}`}>
                                                <h3 style={{ color: 'purple' }} >{item.cat_name.toUpperCase()}</h3>
                                                <img src={item.image} alt="" width='200px' height='200px' />
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        ) : (
                            <h1 className='text-center'>No Products Found </h1>
                        )

                    }
                </div>
            </div>
        </>
    )
}

export default Categories