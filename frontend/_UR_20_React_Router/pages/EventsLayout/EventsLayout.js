import React from 'react';
import {Outlet} from 'react-router-dom';
import EventsNavigation from '../../components/Event/EventsNavigation/EventsNavigation';

function EventsLayout() {
  return (
      <>
        <EventsNavigation/>
        <Outlet/>
      </>
  );
}

export default EventsLayout;