import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Categories from './Components/Categories'


const Home = ({productDataList}) => {
  return (
    <>
        <Navbar/>
        <Categories productDataList={productDataList}/>
    </>
  )
}

export default Home