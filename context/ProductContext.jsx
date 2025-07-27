'use client'

import { useState, useContext, createContext } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props) {
    const {children} = props
    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id, num, data) {
        const newCart = {
            ...cart
        }
        if (price_id in cart) {
            // if the product is already in the cart, increment
            // newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: newCart[price_id]?.quantity + num
            }
        } else {
            // product not in cart add it
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }
        if(newCart[price_id].quantity === 0) {
            // user has set the number to 0, we need to remove product
            delete newCart[price_id]
        }
        // overwrite the cart state with the newCart object
        setCart(newCart)
    }
    const value = { 
        cart,
        handleIncrementProduct
    }


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)