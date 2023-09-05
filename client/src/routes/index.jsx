import ProductPage from "../pages/ProductPage";
import React from "react";
import CartPage from "../pages/cartPage";
import Shipping from "../components/cart/shipping";
import ConfirmOrder from "../components/cart/confirmOrder";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import ResetPassword from "../components/auth/resetPassword";
import Profile from "../components/user/profile";
import ProtectedRoute from "./protectedRoute";
import StripeWrapper from "../components/cart/payment/stripeWrapper";

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
    element: (
      <ProtectedRoute>
        <Shipping />
      </ProtectedRoute>
    ),
  },
  {
    path: "/confirm",
    element: (
      <ProtectedRoute>
        <ConfirmOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password/reset/:token",
    element: <ResetPassword />,
  },
  {
    path: "/me",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute>
        <StripeWrapper />
      </ProtectedRoute>
    ),
  },
];

export default routes;
