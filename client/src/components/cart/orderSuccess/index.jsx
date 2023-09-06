import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderSuccess = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/assets/order_success.png"
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2>Your Order has been placed.</h2>
          {!isAuthenticated && (
            <h4> Create an account to track your orders and your profile</h4>
          )}

          <Link to={isAuthenticated ? "/orders/me" : "/register"}>
            <button className="btn w-100 rounded my-2 btn-success fs-4">
              {isAuthenticated
                ? "track your Orders"
                : "create an account to track your orders and profile"}
            </button>
          </Link>
          <hr />
          {!isAuthenticated && (
            <Link to="/">
              <button className="btn w-100 rounded my-2 btn-secondary fs-4">
                continue as aguest
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default OrderSuccess;
