import React from 'react';
import {useRouteError} from 'react-router-dom';

import MainNavigation from '../../components/MainNavigation/MainNavigation';
import PageContent from '../../components/PageContent/PageContent';

function Error() {
  const error = useRouteError();
  console.log(error);

  let title = 'Some Error occurred';
  let message = 'Something went wrong!';
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Page not found error';
  }

  return (
      <>
        <MainNavigation/>
        <PageContent title={title}>
          {message}
        </PageContent>
      </>
  );
}

export default Error;