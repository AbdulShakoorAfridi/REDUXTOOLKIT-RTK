import React from 'react'
import Products from './components/Products'
import SinglePro from './components/SinglePro'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import AddProduct from './components/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/addproduct",
        element: <AddProduct />
      },
      {
        path: "/product/:id",
        element: <SinglePro />
      }
    ]
  },
]);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App