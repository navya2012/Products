import React from 'react'
import '../../../CSSModules/Products.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const CategoryProducts = ({ productDataList }) => {
    const { categoryName } = useParams()
    // console.log(categoryName,productDataList)

    const category = productDataList.filter((item) => item.cat_name === categoryName)
    // console.log('category name', category)

    return (
        <>
            <div>
                <Navbar />

                <div>
                    <Breadcrumb className='breadcrumb'>
                        <Breadcrumb.Item className='breadcrumb-item'><Link to='/'>{categoryName}</Link></Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='container'>
                        <div className='row '>
                            {
                                category.length > 0 && category.map((data) =>
                                    data.items.length > 0 && data.items.map((data, index) => {
                                        return (
                                            <>
                                                <div className='col-12' key={index}>
                                                    <h2 className='py-4' style={{ color: 'purple' }} >{data.cat_name.toUpperCase()}</h2>
                                                    <div className='row'>
                                                        {
                                                            data.products.length > 0 && data.products.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <div key={index} className='col-lg-3 col-md-4 category-card'>
                                                                            <Link to={`${data.cat_name}/${item.productName}`} target='_blank'>
                                                                                <h4 className='py-3'>{item.productName}</h4>
                                                                                <img src={item.catImg} alt="" width='200px' height='200px' />
                                                                                <h4 className='py-4'>Price: ₹  {item.price}</h4>
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
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryProducts