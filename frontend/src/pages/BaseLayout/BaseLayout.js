import React from 'react';
import {Outlet} from 'react-router-dom';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

function BaseLayout() {
  return (
      <>
        <MainNavigation/>
        <Outlet/>
      </>
  );
}

export default BaseLayout;