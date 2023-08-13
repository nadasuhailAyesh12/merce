import ProductPage from '../pages/ProductPage'
import React from 'react'
import CartPage from '../pages/cartPage'

const routes = [
  {
    path: '/',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]

export default routes
