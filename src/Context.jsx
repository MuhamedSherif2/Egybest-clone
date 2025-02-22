import React, { useState, useEffect, createContext } from "react";
export const Context = createContext()



export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [selectProduct, setSelectProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [])

    return (
        <Context.Provider value={{
            products,
            setProducts,
            selectProduct,
            setSelectProduct
        }}>
            {children}
        </Context.Provider>
    )
}