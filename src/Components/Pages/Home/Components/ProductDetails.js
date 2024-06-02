import React, { useState } from 'react'
import '../../../CSSModules/Products.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../Navbar/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IoStar } from "react-icons/io5";
import { useProductsData } from '../../../Data/DataProvider';
import { useDispatch } from 'react-redux';
import { cartList } from '../../../Redux/Slices/cartSlice';

const ProductDetails = () => {
  const [cartItems, setCartItems] = useState([]);

  const { categoryName, categoryProductName, productName, productId } = useParams()
  // console.log(categoryName, categoryProductName, productName, productDataList)

  const { products, productReviews } = useProductsData();
  //  console.log('category products details', products,productReviews)

  const dispatch = useDispatch()

  const categories = products.filter((item) => item.cat_name === categoryName)
  const categoryProducts = categories.flatMap((item) => item.items?.filter((data) => data.cat_name === categoryProductName))
  const productInformation = categoryProducts?.flatMap((list) => {
  return  list.products.filter(product => product.productName === productName)
      .map(product => ({
        ...product,
        quantity: 1
      }));
  }); 
    // console.log('productInformation ', productInformation)

  const productReviewData = productReviews.filter((item) => item.productId === productId)
  // console.log('review data', productId, productReviewData)


  const handleCart = (productId,productName,price,productImage) => {
      // console.log('cartProductId', productId,productName,price,productImage);

      const isProductInCart = cartItems.some(item => item.productId === productId);

      if (!isProductInCart) {
          const newCartProduct = {
              productId,
               productName,
              price,
              productImage,
              quantity: 1
          };
          setCartItems(prevCartItems => [...prevCartItems, newCartProduct]);
           dispatch(cartList(newCartProduct))
           console.log('Item added to cart:', newCartProduct);
          } else {
              console.log('Item is already in the cart:', productId);
          }
      }
  return (
    <>
      <div>
        <Navbar />

        <div style={{ paddingTop: '65px' }}>
          <div >
            <Breadcrumb className='breadcrumb'>
              <Breadcrumb.Item className='breadcrumb-item'><Link to="/">{categoryName}</Link></Breadcrumb.Item>
              <Breadcrumb.Item className='breadcrumb-item'><Link to={`/${categoryName}`}>{categoryProductName}</Link></Breadcrumb.Item>
              <Breadcrumb.Item active className='breadcrumb-item'>{productName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className='container'>
            {
              productInformation.length > 0 ? (
                productInformation.map((list, index) => {
                      return (
                        <>
                          <div className='product-cards' key={index}>
                            <div>
                              <img src={list.catImg} alt="" height='450px' />
                              <div className='cart-button-styles'>
                                <button className='cart-button' onClick={() => { handleCart(list.id,list.productName,list.price,list.catImg) }}>Add to Cart</button>
                                <Link to='/cart' className='pay-button'>Buy Now</Link>
                              </div>
                            </div>

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
                                    <span style={{ color: 'green', fontSize: '20px', fontWeight: '500' }}>Quantity: </span>
                                    {list.weight.length > 0 && list.weight.map((num, i) => <span key={i} className='item-weight'>{num}g</span>)}
                                  </p>
                                ) : (
                                  categoryName === 'Electronics' ? (
                                    <p className='py-2'>
                                      <span style={{ color: 'green', fontSize: '20px', fontWeight: '500' }}>RAM: </span>
                                      {list.RAM.length > 0 && list.RAM.map((num, i) => <span key={i} className='item-weight'>{num}GB</span>)}
                                    </p>
                                  ) : (
                                    categoryName === 'Fashion' ? (
                                      <p className='py-2'>
                                        <span style={{ color: 'green', fontSize: '20px', fontWeight: '500' }}>Size: </span>
                                        {list.SIZE.length > 0 && list.SIZE.map((num, i) => <span key={i} className='item-weight'>{num}</span>)}
                                      </p>
                                    ) : null
                                  )
                                )
                              }
                              <p>{list.description}</p>

                              {/* product reviews */}
                              <div className='pt-4'>
                                {
                                  productReviewData.length > 0 ? (
                                    <>
                                      <h3 className='pb-3'>Review</h3>
                                      {
                                        productReviewData.map((data) => {
                                          return (
                                            <>
                                              <div className='review'>
                                                <div className='review-names'>
                                                  <h5>{data.userName}</h5>
                                                  <h6 className='review-rating'>{data.rating}<IoStar /></h6>
                                                </div>
                                                <p>{data.review}</p>
                                              </div>
                                            </>
                                          )
                                        })
                                      }
                                    </>

                                  ) : (
                                    <h3>No Reviews</h3>
                                  )
                                }
                              </div>
                            </div>
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
      </div>
    </>
  )
}

export default ProductDetails