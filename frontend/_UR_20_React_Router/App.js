import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import BaseLayout from './pages/BaseLayout/BaseLayout';
import Error from './pages/Error/Error';
import EventsList, {fetchEventsLoader} from './pages/EventsList/EventsList';
import HomePage from './pages/HomePage/HomePage';
import EventDetails, {
  deleteEventAction,
  fetchEventLoader,
} from './pages/EventDetails/EventDetails';
import NewEvent from './pages/NewEvent/NewEvent';
import EditEvent from './pages/EditEvent/EditEvent';
import EventsLayout from './pages/EventsLayout/EventsLayout';
import {upsertEventAction} from './components/Event/EventForm/EventForm';
import Newsletter, {newsletterSignupAction} from './pages/Newsletter/Newsletter';

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
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEvent/>,
                action: upsertEventAction,
              },
            ]
          },
          {
            path: 'new',
            element: <NewEvent/>,
            action: upsertEventAction,
          },
        ]
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterSignupAction,
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
