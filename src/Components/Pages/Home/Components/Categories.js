import React from 'react'
import '../../../CSSModules/Products.css'
import { Link } from 'react-router-dom'

const Categories = ({productDataList}) => {
    console.log(productDataList)

    return (
        <>
            <div className='Categories-container'>
                <h1 style={{ color: 'green' }}>Categories</h1>

                <div className='row container py-5'>
                    {
                            productDataList.length > 0 && productDataList.map((item, index) => {
                                return (
                                    <>
                                        <div className='col-4 card-items ' key={index}>
                                            <Link to={`${item.cat_name}`}>
                                                <h3  style={{ color: 'purple' }} >{item.cat_name.toUpperCase()}</h3>
                                                <img src={item.image} alt="" width='200px' height='200px' />
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        
                    }
                </div>
            </div>
        </>
    )
}

export default Categories