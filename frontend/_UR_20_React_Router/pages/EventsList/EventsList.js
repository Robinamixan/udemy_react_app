import React from 'react';
import {useLoaderData, json, defer, Await} from 'react-router-dom';

import EventsListComponent from '../../components/Event/EventsList/EventsList';

function EventsList() {
  const data = useLoaderData();

  // const events = data.events || [];

  return (
      <React.Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
        <Await resolve={data.events}>
          {(loadedEvents) => (
              <EventsListComponent events={loadedEvents}/>
          )}
        </Await>
      </React.Suspense>
  );
}

export default EventsList;

async function fetchEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
    throw json({message: 'Could not fetch events'}, {status: 500});
  }

  const responseData = await response.json();

  return responseData.events;
}

export async function fetchEventsLoader() {
  return defer({
    events: fetchEvents(),
  });
}