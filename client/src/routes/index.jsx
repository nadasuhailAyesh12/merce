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
import OrderSuccess from "../components/cart/orderSuccess";
import OrdersList from "../components/order/orderList";
import OrderDetails from "../components/order/orderDetails";
import ProductDetails from "../pages/productDetailsPage";

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
    path: "/authCheckout/shipping",
    element: (
      <ProtectedRoute>
        <Shipping />
      </ProtectedRoute>
    ),
  },
  {
    path: "/guestCheckout/shipping",
    element: <Shipping />,
  },

  {
    path: "/authCheckout/confirm",
    element: (
      <ProtectedRoute>
        <ConfirmOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/guestCheckout/confirm",
    element: <ConfirmOrder />,
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
    path: "/authCheckout/payment",
    element: (
      <ProtectedRoute>
        <StripeWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/guestCheckout/payment",
    element: <StripeWrapper />,
  },
  {
    path: "/success",
    element: <OrderSuccess />,
  },
  {
    path: "/orders/me",
    element: (
      <ProtectedRoute>
        <OrdersList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/order/:id",
    element: <OrderDetails />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
];

export default routes;
