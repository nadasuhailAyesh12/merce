import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../cartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default CartList;
