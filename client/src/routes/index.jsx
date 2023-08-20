import ProductPage from "../pages/ProductPage";
import React from "react";
import CartPage from "../pages/cartPage";
import Shipping from "../components/cart/shipping";
import ConfirmOrder from "../components/cart/confirmOrder";
import Login from "../components/auth/login";

const routes = [
  {
    path: "/",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
  {
    path: "/confirm",
    element: <ConfirmOrder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
