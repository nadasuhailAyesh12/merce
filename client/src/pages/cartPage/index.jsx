import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

import Navbar from "../../components/Common/Navbar";
import CartList from "../../components/cart/cartList";

const CartPage = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      {/* ------------------------Header------------------------*/}
      <Navbar showSearch={false} />

      {/* ------------------------main  content------------------------*/}
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
          </div>
          <div className="content">
            <div className="row">
              {/* ------------------------cartList section------------------------*/}
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  <CartList />
                </div>
              </div>
              {/* ------------------------summary section------------------------*/}
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item">
                    <span className="detail">Subtotal</span>
                    <span className="price">{totalPrice}</span>
                  </div>
                  <div className="summary-item">
                    <span className="detail">Total</span>
                    <span className="price">{totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
