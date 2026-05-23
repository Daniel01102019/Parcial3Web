import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  // AGREGAR PRODUCTO

  const addToCart = (item) => {

    setCartItems([...cartItems, item]);

  };

  // ELIMINAR PRODUCTO

  const removeFromCart = (index) => {

    const updatedCart = cartItems.filter(

      (_, i) => i !== index

    );

    setCartItems(updatedCart);

  };

 const increaseQuantity = (index) => {

  const updatedCart = [...cartItems];

  updatedCart[index].quantity += 1;

  setCartItems(updatedCart);

};

const decreaseQuantity = (index) => {

  const updatedCart = [...cartItems];

  if (updatedCart[index].quantity > 1) {

    updatedCart[index].quantity -= 1;

  }

  setCartItems(updatedCart);

};

  return (

    <CartContext.Provider
      value={{

        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity


      }}
    >

      {children}

    </CartContext.Provider>

  );
}