import { createContext, useContext, useState } from 'react'
import useLocalStorage from './../hooks/useLocalStorage.jsx'

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('utfeccomerce-shopping-cart', [])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {
    setCartItems((state) => {
      if (state.find((item) => item.id === id) == null) {
        return [...state, { id, quantity: 1 }]
      } else {
        return state.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 }
          else return item
        })
      }
    })
  }

  function decreaseCartQuantity(id) {
    setCartItems((state) => {
      if (state.find((item) => item.id === id)?.quantity === 1) {
        return state.filter((item) => item.id !== id)
      } else {
        return state.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 }
          else return item
        })
      }
    })
  }

  function removeFromCart(id) {
    setCartItems((state) => {
      return state.filter((item) => item.id !== id)
    })
  }

  function clearShoppingCart() {
    setCartItems([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        clearShoppingCart
      }}
    >
      {children}

    </ShoppingCartContext.Provider>
  )
}
