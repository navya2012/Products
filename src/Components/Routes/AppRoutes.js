import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import CategoryProducts from '../Pages/Home/Components/CategoryProducts'
import ProductDetails from '../Pages/Home/Components/ProductDetails'
import PageNotFound from './PageNotFound'
import Cart from '../Pages/Cart/Cart'
import { useSearchData } from '../Navbar/searchData/SearchProvider'
import SearchData from '../Navbar/searchData/SearchData'
import CartPayment from '../Pages/Cart/Components/CartPayment'


const AppRoutes = () => {

  const { searchInput, searchResults } = useSearchData()

  return (
    <>
      {
        searchInput ? (
          <SearchData searchInput={searchInput} searchResults={searchResults} />
        ) : (
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/:categoryName' exact element={<CategoryProducts />} />
            <Route path='/:categoryName/:categoryProductName/:productName/:productId' exact element={<ProductDetails />} />
            <Route path='/cart' exact element={<Cart />} />
            <Route path='/checkout' exact element={<CartPayment />} />
            <Route path='*' exact element={<PageNotFound />} />
          </Routes>
        )
      }

    </>
  )
}

export default AppRoutes