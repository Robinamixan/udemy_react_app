import React from 'react';
import {useParams, Link} from 'react-router-dom';

function ProductDetails() {
  const params = useParams();
  const productId = params.productId;

  return (
      <>
        <h1>Product details</h1>
        <p>{productId}</p>
        <p><Link to={'..'} relative={'path'}>Back</Link></p>
      </>
  );
}

export default ProductDetails;