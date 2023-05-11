import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error/Error';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: 'products',
        element: <Products/>,
      },
      {
        path: 'products/:productId',
        element: <ProductDetails/>,
      },
    ],
  },
]);

function App() {
  return (
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
  );
}

export default App;