import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import BaseLayout from './pages/BaseLayout/BaseLayout';
import Error from './pages/Error/Error';
import EventsList, {fetchEventsLoader} from './pages/EventsList/EventsList';
import HomePage from './pages/HomePage/HomePage';
import EventDetails, {fetchEventLoader} from './pages/EventDetails/EventDetails';
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
            element: <EventsList/>,
            loader: fetchEventsLoader
          },
          {
            path: ':eventId',
            id: 'event-details',
            loader: fetchEventLoader,
            children: [
              {
                index: true,
                element: <EventDetails/>,
              },
              {
                path: 'edit',
                element: <EditEvent/>,
              },
            ]
          },
          {
            path: 'new',
            element: <NewEvent/>
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
