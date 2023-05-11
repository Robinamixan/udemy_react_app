import React from 'react';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

function Error() {
  return (
      <>
        <MainNavigation/>
        <h2>Some Error occurred</h2>
        <p>Page not found error</p>
      </>
  );
}

export default Error;