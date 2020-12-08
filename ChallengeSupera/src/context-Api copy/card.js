import React, {createContext, useState, useContext, useEffect} from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function add(item) {
    const newCart = cart;
    newCart.push(item);
    setCart([...newCart]);
  }

  const store = {
    add,
    cart,
    totalValue,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

const useCart = () => {
  const context = useContext(CartContext);

  const {add, cart, totalValue} = context;
  return {
    add,
    cart,
    totalValue,
  };
};

export {useCart};
