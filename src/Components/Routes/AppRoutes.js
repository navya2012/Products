import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import CategoryProducts from '../Pages/Home/Components/CategoryProducts'
import ProductsData from '../Data/ProductsData'
import ProductDetails from '../Pages/Home/Components/ProductDetails'

const AppRoutes = () => {
  const productDataList = ProductsData[0].productData
  //  console.log('productData list', productDataList)

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home productDataList={productDataList} />} />
        <Route path='/:categoryName' exact element={<CategoryProducts productDataList={productDataList} />} />
        <Route path='/:categoryName/:categoryProductName/:productName' exact element={<ProductDetails productDataList={productDataList} />} />
      </Routes>
    </>
  )
}

export default AppRoutes