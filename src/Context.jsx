import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState(null);
    const [ cart , setCart ] = useState(JSON.parse(localStorage.getItem('cart'))|| [])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    'https://api.themoviedb.org/3/movie/popular?api_key=f0a05a4590c87868cd3c77dbd27db8d8'
                );
                const data = await response.json();
                setProducts(data.results);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProduct();
    }, []);

    const AddtoCart = (selectProduct) => {
        setCart([...cart , selectProduct])
    }
    useEffect(() => {
        localStorage.setItem('cart' , JSON.stringify(cart))
    } , [AddtoCart])

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                selectProduct,
                setSelectProduct,
                cart,
                setCart,
                AddtoCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};