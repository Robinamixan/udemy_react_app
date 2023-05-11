import React from 'react';
import {Outlet, useNavigation} from 'react-router-dom';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

function BaseLayout() {
  const navigation = useNavigation();

  return (
      <>
        <MainNavigation/>
        <main>
          {navigation.state === 'loading' && <p>Loading...</p>}
          <Outlet/>
        </main>
      </>
  );
}

export default BaseLayout;