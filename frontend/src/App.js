import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import BaseLayout from './pages/BaseLayout/BaseLayout';
import Error from './pages/Error/Error';
import EventsList from './pages/EventsList/EventsList';
import HomePage from './pages/HomePage/HomePage';
import EventDetails from './pages/EventDetails/EventDetails';
import NewEvent from './pages/NewEvent/NewEvent';
import EditEvent from './pages/EditEvent/EditEvent';
import EventsLayout from './pages/EventsLayout/EventsLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'events',
        element: <EventsLayout/>,
        children: [
          {
            index: true,
            element: <EventsList/>
          },
          {
            path: ':eventId',
            element: <EventDetails/>
          },
          {
            path: 'new',
            element: <NewEvent/>
          },
          {
            path: ':eventId/edit',
            element: <EditEvent/>
          },
        ]
      },
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
