import React from 'react';
import {useRouteLoaderData} from 'react-router-dom';

import EventForm from '../../components/Event/EventForm/EventForm';

function EditEvent() {
  const data = useRouteLoaderData('event-details');

  return (
      <EventForm event={data.event} />
  );
}

export default EditEvent;