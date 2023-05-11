import React from 'react';
import {useLoaderData, json} from 'react-router-dom';

import EventsListComponent from '../../components/Event/EventsList/EventsList';

function EventsList() {
  const data = useLoaderData();

  const events = data.events || [];

  return (
      <>
        <EventsListComponent events={events} />
      </>
  );
}

export default EventsList;

export async function fetchEventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
    throw json({message: 'Could not fetch events'}, {status: 500});
  } else {
    return response;
  }
}