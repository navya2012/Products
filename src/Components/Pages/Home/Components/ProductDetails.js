import React from 'react'
import '../../../CSSModules/Products.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IoStar } from "react-icons/io5";

const ProductDetails = ({ productDataList }) => {
  const { categoryName, categoryProductName, productName } = useParams()
  // console.log(categoryName, categoryProductName, productName, productDataList)

  const categories = productDataList.filter((item) => item.cat_name === categoryName)
  const categoryProducts = categories.map((item) => item.items?.filter((data) => data.cat_name === categoryProductName))

  const products = categoryProducts?.map((data) => data.map((list) => list.products?.filter((data) => data.productName === productName)))

  console.log('products ', products)

  return (
    <>
      <div>
        <Navbar />

        <div>
          <div >
            <Breadcrumb className='breadcrumb'>
              <Breadcrumb.Item className='breadcrumb-item'><Link to="/">{categoryName}</Link></Breadcrumb.Item>
              <Breadcrumb.Item className='breadcrumb-item'><Link to={`/${categoryName}`}>{categoryProductName}</Link></Breadcrumb.Item>
              <Breadcrumb.Item active className='breadcrumb-item'>{productName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className='container'>
            {
              products.length > 0 && products.map((item) =>
                item.map((data) =>
                  data.map((list, index) => {
                    return (
                      <>
                        <div className='product-cards' key={index}>
                          <img src={list.catImg} alt="" height='450px' className='w-25' />

                          <div className='w-50' >
                            <h2 style={{ color: 'purple' }}>{list.productName}</h2>
                            <div className='sub-headings'>
                              <h6 className='rating'>{list.rating}<IoStar /></h6>
                              <h5> <span style={{ color: 'green' }}>Brand :</span>  {list.brand}</h5>
                            </div>
                            <div className='sub-headings'>
                              <h5 className='fs-2'>₹ {list.price}</h5>
                              <small><del>₹ {list.oldPrice}</del></small>
                              <h6 style={{ color: 'green' }}>{list.discount}% off</h6>
                            </div>

                            {
                              categoryName === 'groceries' ? (
                                <p className='py-2'>
                                  <span style={{ color: 'green', fontSize: '20px', fontWeight: '400' }}>Quantity: </span>
                                  {list.weight.length > 0 && list.weight.map((num) => <h6 className='item-weight'>{num}g</h6>)}
                                </p>
                              ) : (
                                categoryName === 'Electronics' ? (
                                  <p className='py-2'>
                                    <span style={{ color: 'green', fontSize: '20px', fontWeight: '400' }}>RAM: </span>
                                    {list.RAM.length > 0 && list.RAM.map((num) => <h6 className='item-weight'>{num}GB</h6>)}
                                  </p>
                                ) : (
                                  categoryName === 'Fashion' ? (
                                    <p className='py-2'>
                                      <span style={{ color: 'green', fontSize: '20px', fontWeight: '400' }}>Size: </span>
                                      {list.SIZE.length > 0 && list.SIZE.map((num) => <h6 className='item-weight'>{num}</h6>)}
                                    </p>
                                  ) : null
                                )
                              )
                            }
                            <p>{list.description}</p>
                          </div>
                        </div>
                      </>
                    )
                  })
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails