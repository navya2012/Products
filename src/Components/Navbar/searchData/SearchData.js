import React from 'react'
import { useSearchData } from './SearchProvider'
import { Link } from 'react-router-dom'
import '../../CSSModules/Products.css'
import Navbar from '../Navbar'

const SearchData = () => {
  const { searchResults } = useSearchData()
  // console.log('searchResults in search component', searchResults)
  return (
    <>
      <div>
        <Navbar />
        <div className='container' style={{ paddingTop: '100px' }}>
          <div className='row'>
            {
              searchResults.length > 0 ? (
                <>
                  {
                    searchResults.map((category, index) => (
                      <div key={index} className=''>
                        <div className='row'>
                          {
                            category.products && category.products.map((product, productIndex) => (
                              <div key={productIndex} className='col-lg-3 col-md-4 col-sm-6 category-card' >
                                <Link to={`/${category.main_cat_name}/${category.sub_cat_name}/${product.productName}/${product.id}`}>
                                  <h4 className='py-3'>{product.productName}</h4>
                                  <img src={product.catImg} alt='' width='200px' height='200px' />
                                  <h4 className='py-4'>Price: ₹ {product.price}</h4>
                                </Link>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))

                  }
                </>
              ) : (
                <h1 className='text-center pt-5'>No Products Found</h1>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchData;