import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate('/products');
  };

  return (
      <React.Fragment>
        <h1>My homepage</h1>
        <p>Go to <Link to={'/products'}>the list of products</Link></p>
        <p>
          <button onClick={navigationHandler}>Navigate</button>
        </p>
      </React.Fragment>
  );
}

export default Homepage;