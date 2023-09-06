import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

import Navbar from "../../components/Common/Navbar";
import CartList from "../../components/cart/cartList";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { subTotal, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* ------------------------main  content------------------------*/}
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
          </div>
          {cartItems.length ? (
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
                      <span className="price">{subTotal}</span>
                      <hr />

                      <button
                        className="btn w-100 rounded my-2 btn-danger fs-5"
                        onClick={() => navigate("/authcheckout/shipping")}
                      >
                        {!user ? "login to checkout" : "checkout"}
                      </button>

                      {!user && (
                        <button
                          className="btn w-100 rounded my-2 btn-primary fs-5"
                          onClick={() => navigate("/guestcheckout/shipping")}
                        >
                          pay as aguest
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="noItems">No items at cart yet!</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
