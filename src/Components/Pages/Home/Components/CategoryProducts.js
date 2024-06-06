import React from 'react'
import '../../../CSSModules/Products.css'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useProductsData } from '../../../Data/DataProvider';

const CategoryProducts = () => {
    const { categoryName } = useParams()
    // console.log(categoryName,productDataList)

    const { products } = useProductsData();
    //console.log('category products', products)

    const category = products.filter((item) => item.cat_name === categoryName)
    console.log('category name', category)
    return (
        <>
                <div className='categories-products-container'>
                    <Breadcrumb className='breadcrumb'>
                        <Breadcrumb.Item className='breadcrumb-item'><Link to='/'>{categoryName}</Link></Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='categories-products-cards'>
                        <div className='row '>
                            {
                                category?.length > 0 ? (
                                    category?.map((data) =>
                                        data?.items?.length > 0 && data?.items?.map((data, index) => {
                                            return (
                                                <>
                                                    <div className='col-12' key={index}>
                                                        <h1 className='py-4' style={{ color: 'purple' }} >{data.cat_name?.toUpperCase()}</h1>
                                                        <div className='categories-products-styles' >
                                                            {
                                                                data?.products?.length > 0 && data?.products?.map((item, index) => {
                                                                    return (
                                                                        <>
                                                                            <div key={index} className=' category-card'>
                                                                                <Link to={`${data?.cat_name}/${item.productName}/${item.id}`} >
                                                                                    <h4 className='py-2'>{item?.productName}</h4>
                                                                                    <img src={item?.catImg} alt="" width='200px' height='200px' />
                                                                                    <h4 className='py-2'>Price: ₹  {item?.price}</h4>
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
                                ) : (
                                    <h1 className='text-center'>No Products Found </h1>
                                )
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CategoryProducts