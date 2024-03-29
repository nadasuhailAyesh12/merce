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
import Sidebar from "../components/admin/adminsideBar";
import AdminDashboard from "../components/admin/dashboard";
import ProductList from "../components/admin/productList";
import NewProduct from "../components/admin/newProduct";


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
  {

    path: "/dashboard",
    element:
           <ProtectedRoute  allowedRules={["Admin"]}>
        <AdminDashboard />
        </ProtectedRoute>
  },
  {

    path: "/admin/products",
    element:
           <ProtectedRoute  allowedRules={["Admin"]}>
        <ProductList />
        </ProtectedRoute>
  },
   {

    path: "/hazem",
    element:
           <ProtectedRoute  allowedRules={["Admin"]}>
        <NewProduct />
        </ProtectedRoute>
  },
 
];

export default routes;
