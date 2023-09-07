import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../cartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.length ?
        
          cartItems.map((item) => (
            <CartItem item={item} key={item.product} />
          ))
        : <h1> No items at cart yet!</h1>}
    </>
  );
};

export default CartList;
