
import React, { createContext, useContext, useState } from 'react'
import { useProductsData } from '../../Data/DataProvider';


const SearchContext = createContext()

export const useSearchData = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { products } = useProductsData()

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchString = e.target.value.toLowerCase();
        setSearchInput(searchString);

        const categoryWithProducts = products.flatMap((mainCategory) =>
            mainCategory.items.flatMap((subCategory) => ({
                main_cat_name: mainCategory.cat_name,
                sub_cat_name: subCategory.cat_name,
                products: subCategory.products.filter((product) =>
                    product.productName.toLowerCase().includes(searchString)
                ),
            }))
        );

        setSearchResults(
            categoryWithProducts.filter(
                (category) => category.products && category.products.length > 0
            )
        );

        console.log(searchResults, searchInput);
    };
    return (
        <>
            <SearchContext.Provider value={{ searchInput, setSearchInput, searchResults, handleSubmit }}>
                {children}
            </SearchContext.Provider>
        </>
    )
}

export default SearchProvider