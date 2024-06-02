import React, { createContext, useContext, useEffect, useState, } from 'react'
import ProductsData from '../Data/ProductsData'

const ProductsContext = createContext();

export const useProductsData = () => useContext(ProductsContext);

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productReviews, setProductReviews] = useState([])



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productDataList = ProductsData.map((item) => item.productData);
                setProducts(productDataList[0]);
                const productReviewsList = ProductsData.map((item) => item.productReviews);
                setProductReviews(productReviewsList[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [])

    // console.log('products data', products,productReviews)
    return (
        <>
            <ProductsContext.Provider value={{ products, productReviews }}>
                {children}
            </ProductsContext.Provider>
        </>
    )
}

export default DataProvider