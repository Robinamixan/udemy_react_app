import React from 'react';
import {Link} from 'react-router-dom';

function Products() {
  const products = [
    {id: '1', title: 'Product 1'},
    {id: '2', title: 'Product 2'},
    {id: '3', title: 'Product 3'},
  ];

  return (
      <>
        <h1>My products page</h1>
        <ul>
          {
            products.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    {product.title}
                  </Link>
                </li>
            ))
          }
        </ul>
      </>
  );
}

export default Products;